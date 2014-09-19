package com.bestskip.tool.converter;

import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.struts2.ServletActionContext;
import org.json.JSONException;
import org.json.JSONObject;

import com.opensymphony.xwork2.ActionSupport;

public class FileUploadAction extends ActionSupport {

	/**
	 *
	 */
	private static final long serialVersionUID = 2L;
	private static final int BUFFER_SIZE = 2 * 1024;
	private int id = -1;
	private File upload;
	private String name;
	private List<String> names;
	private String uploadFileName;
	private String uploadContentType;
	private String savePath;
	private int chunk;
	private int chunks;
	private String result;

	public String upload() {
		// test
		System.out.println("upload test: ");

		String filename = this.getName();

		String dstPath = ServletActionContext.getServletContext().getRealPath(
				this.getSavePath())
				+ "\\" + filename;

		HttpServletRequest req = ServletActionContext.getRequest();
		System.out.println("req.filename = " + req.getParameter(filename));

		File dstFile = new File(dstPath);

		// test
		System.out.println("ファイル名: " + dstPath);

		// 同じファイル名が存在するかどうかをチェックする
		if (chunk == 0 && dstFile.exists()) {
			dstFile.delete();
			dstFile = new File(dstPath);
			System.out.println("chunkの数" + chunk);
		}

		// 　ファイル書き込み（保存）メッソドを呼び出し
		saveUploadFile(this.upload, dstFile);

		System.out.println("アップロードファイル名:" + uploadFileName + "   ファイル・タイプ："
				+ uploadContentType + " " + chunk + " " + chunks);

		if (chunk == chunks - 1 | chunks == 0 ) {
			// 「chunk == chunks - 1」　はクライアント端末から分割されたファイル完全にアップロードされたかを判断
			//　「chunks == 0」　はクライアントからファイルが分割されたかを判断する
			System.out.println("chunk test ファイルアップロード処理完了");

			// define fileUrl
			StringBuilder fileUrl = new StringBuilder().append("http://")
					.append(req.getServerName()).append(":")
					.append(req.getServerPort())
					.append(req.getServletContext().getContextPath())
					.append("/fileUpload/").append(filename);
			System.out.println("file url" + fileUrl.toString());

			// define response
			HttpServletResponse response = ServletActionContext.getResponse();

			// return json data to xmlHttpRequest
			response.setContentType("application/json");

			JSONObject obj = new JSONObject();

			try {
				obj.put("fileUrl", fileUrl.toString());
				obj.put("fileName", filename);
				// その他のデーター
				// obj.put("servercontext",
				// req.getServletContext().getContextPath());
			} catch (JSONException e) {
				// TODO 自動生成された catch ブロック
				e.printStackTrace();

			}
			try {
				// response.setContentType("application/json");
				response.setContentType("application/json; charset=UTF-8");
				PrintWriter out = response.getWriter();
				out.print(obj.toString());
				out.close();
			} catch (IOException e) {
				e.printStackTrace();
			}
			
		}

		return SUCCESS;
	}

	private void saveUploadFile(File src, File dst) {
		// test
		System.out.println("saveUploadFile test: ");
		InputStream in = null;
		OutputStream out = null;
		try {
			if (dst.exists()) {
				out = new BufferedOutputStream(new FileOutputStream(dst, true),// 　書き出しバッファ、存在する場合、上書き
						BUFFER_SIZE);
			} else {
				out = new BufferedOutputStream(new FileOutputStream(dst),
						BUFFER_SIZE);
			}
			in = new BufferedInputStream(new FileInputStream(src), BUFFER_SIZE);// 　読み取りバッファ

			byte[] buffer = new byte[BUFFER_SIZE]; // バイトバッファを作成
			int len = 0;
			while ((len = in.read(buffer)) > 0) { // inからbufferに読み取り
				out.write(buffer, 0, len); // bufferからoutに書き込み
			}
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			if (null != in) {
				try {
					in.close();
				} catch (IOException e) {
					e.printStackTrace();
				}
			}
			if (null != out) {
				try {
					out.close();
				} catch (IOException e) {
					e.printStackTrace();
				}
			}
		}
	}

	public String submit() {
		// test
		System.out.println("submit test: ");
		String filePath = ServletActionContext.getServletContext().getRealPath(
				this.getSavePath());
		System.out.println("ファイル保存パス： " + filePath);

		HttpServletRequest request = ServletActionContext.getRequest();

		result = "";
		int count = Integer.parseInt(request.getParameter("uploader_count"));
		for (int i = 0; i < count; i++) {
			uploadFileName = request.getParameter("uploader_" + i + "_name");
			name = request.getParameter("uploader_" + i + "_tmpname");
			System.out.println(uploadFileName + " " + name);
			try {
				// do something with file;
				result += uploadFileName + "導入完成. <br />";
			} catch (Exception e) {
				result += uploadFileName + "導入失敗:" + e.getMessage()
						+ ". <br />";
				e.printStackTrace();
			}
		}
		return SUCCESS;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getId() {
		return id;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getName() {
		return name;
	}

	public void setNames(List<String> names) {
		this.names = names;
	}

	public List<String> getNames() {
		return names;
	}

	public File getUpload() {
		return upload;
	}

	public void setUpload(File upload) {
		this.upload = upload;
	}

	public String getUploadFileName() {
		return uploadFileName;
	}

	public void setUploadFileName(String uploadFileName) {
		this.uploadFileName = uploadFileName;
	}

	public String getUploadContentType() {
		return uploadContentType;
	}

	public void setUploadContentType(String uploadContentType) {
		this.uploadContentType = uploadContentType;
	}

	public String getSavePath() {
		return savePath;
	}

	public void setSavePath(String savePath) {
		this.savePath = savePath;
	}

	public int getChunk() {
		return chunk;
	}

	public void setChunk(int chunk) {
		this.chunk = chunk;
	}

	public int getChunks() {
		return chunks;
	}

	public void setChunks(int chunks) {
		this.chunks = chunks;
	}

	public void setResult(String result) {
		this.result = result;
	}

	public String getResult() {
		return result;
	}

}
