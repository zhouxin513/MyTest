package com.bestskip.tool.converter;

import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.FileWriter;
import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.Enumeration;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.zip.ZipEntry;
import java.util.zip.ZipException;
import java.util.zip.ZipFile;

import com.opensymphony.xwork2.ActionSupport;

import java.io.OutputStream;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.struts2.ServletActionContext;
import org.json.simple.JSONValue;

import com.bestskip.tool.converter.FileSearch;

public class ProjectUploadAction extends ActionSupport {

	/**
	 *
	 */
	private static final long serialVersionUID = 1L;
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
		/**
		 * アップロードしたファイル名と設定した保存場所のパスを取得 　　　　　　　　
		 */
		String filename = this.getName();
		String savePath = ServletActionContext.getServletContext().getRealPath(
				this.getSavePath());
		String dstPath = savePath + "\\" + filename;

		// 保存ファイルを定義
		File dstFile = new File(dstPath);
		// test
		System.out.println("予定保存ファイル名: " + dstPath);

		// 最初のCHUNKがアップロードされた時点で、既にディレクトリ同じファイルが存在する場合、削除して新規作成する
		if (chunk == 0 && dstFile.exists()) {
			delete(dstFile);
			dstFile = new File(dstPath);
		}
	
		// 　ファイル書き込み（保存）メッソドを呼び出し
		saveUploadFile(this.upload, dstFile);
		// 　テスト
		System.out.println("アップロードファイル名:" + uploadFileName
				+ "   ファイル・タイプ：" + uploadContentType + " " + chunk + " "
				+ chunks);

		if (chunk == chunks - 1 | chunks == 0 ) {
			// 「chunk == chunks - 1」　はクライアント端末から分割されたファイル完全にアップロードされたかを判断
			//　「chunks == 0」　はクライアントからファイルが分割されたかを判断する
			System.out.println("chunk test ファイルアップロード処理完了");

			// アップロードしたプロジェクトを解凍する
			// 　ファイル・タイプの判断が必要　
			
			int exindex = filename.lastIndexOf(".");
			String baseDirName = filename.substring(0, exindex);
			String decompressPath = savePath + "\\" + baseDirName;
			System.out.println("解凍フォルダディレクトリ　　：　" + decompressPath);
			
			try {
				unzip(dstFile,decompressPath);
			} catch (ZipException e) {
				e.printStackTrace();
			} catch (IOException e) {
				e.printStackTrace();
			}
			System.out.println("ファイル解凍終了！");

			// 　解凍したフォルダの一覧を表示する
			
			/*
			 * System.out.println(decompressPath +"  の \n●全てのファイルとディレクトリを取得");
			 * File[] decompressFiles = search.listFiles(decompressPath,
			 * null,search.TYPE_FILE_OR_DIR, true, 0); for (int i = 0; i <
			 * decompressFiles.length; i++) { File file = decompressFiles[i];
			 * System.out.println((i + 1) + ":    " + file); } search.clear();
			 */

			// サーバ情報を取得するため
			HttpServletRequest req = ServletActionContext.getRequest();
			// アップロードしたプロジェクトのURLを取得　
			String projectUrl = new StringBuilder().append("http://")
					.append(req.getServerName()).append(":")
					.append(req.getServerPort()).append("/")
					.append(baseDirName).append("/").toString();
			System.out.println("project url　　：　" + projectUrl.toString());

			// クライアントに返すリスポンスを定義
			HttpServletResponse response = ServletActionContext.getResponse();
			// クライアントに返すデータ・タイプをjsonにする。 xmlHttpRequest
			response.setContentType("application/json");
			//　Json文字列格納用Listを作成する
			HashMap<String, ArrayList<HashMap<String, String>>> json = new HashMap<String, ArrayList<HashMap<String, String>>>();
			ArrayList<HashMap<String, String>> jsonList = new ArrayList<HashMap<String, String>>();
			
			// 解凍したjspファイルのURLを取得する
			System.out.println(decompressPath + "  の拡張子jspのファイルを取得");
			// 　解凍したディレクトリにあるjspファイルを洗い出し
			FileSearch search = new FileSearch();
			// jspFiles = search.listFiles(decompressPath, null);
			File[] jspFiles = search.listFiles(decompressPath, "*.jsp");
			// ファイル一覧テスト
			printFileList(jspFiles);
			System.out.println("jspファイルの個数" + jspFiles.length);
			
			// 　ファイルのURLをjsonに書き込み
			for (int i = 0; i < jspFiles.length; i++) {

				File file = jspFiles[i];
				
				// 各jspファイル、Contextルートに対しての相対パスを取得

				String matchRexg = ".*" + baseDirName + "\\\\";
				Pattern p1 = Pattern.compile(matchRexg);
				Matcher m1 = p1.matcher(file.getAbsolutePath());
				String RelativePath = m1.replaceAll(""); // 　マッチした部分(親フォルダ)を削除

				// 　jspファイルのURLを相対パス+コンテストルートで取得する
				String jspFileUrl = projectUrl.toString()
						+ RelativePath.replace("\\", "/");
				System.out.println((i + 1) + "　番目jspファイルのURL:   " + jspFileUrl);

				/*String fileUrlParam = "fileUrl" + String.valueOf(i);
				String fileNameParam = "fileName" + String.valueOf(i);*/
		 
				// Json文字列を作成する  
				HashMap<String, String> m = new HashMap<String, String>();
				m.put("fileUrl",jspFileUrl);
				m.put("fileName",jspFileUrl);
				// add to jsonList
				jsonList.add(m);

			}
			// プロジェクトのURLをリスポンスに書き込み
			HashMap<String, String> m = new HashMap<String, String>();
			m.put("projectUrl",projectUrl);
			m.put("testUrl", projectUrl);
			jsonList.add(m);
			
			// change string to jsonstring.
			json.put("jsondata", jsonList);
			String jsonString = JSONValue.toJSONString(json);
			System.out.println("array data : " + jsonString);

			/** Tomcatの　$CATALINA_HOME\conf\Catalina\localhost　ディレクトリ配下にアップロードしたプロジェクトの　$decompressPath
			 *  .xmlファイルを作成する。
			 *  contextファイル内容を作成
			 */
			StringBuilder contextFileContent = new StringBuilder()
					.append("<Context path=\"/").append(baseDirName)
					.append("\" docBase=\"").append(decompressPath)
					.append("\" reloadable=\"false\"/>");
			// test
			System.out.println(contextFileContent.toString());

			// 　contextファイル名
			StringBuilder contextFile = new StringBuilder()
					.append(System.getProperty("catalina.home"))
					.append("\\conf\\Catalina\\localhost\\")
					.append(baseDirName).append(".xml");
			// test
			System.out.println("context path :  " + contextFile.toString());

			// 　contextファイルを作成
			try {
				// 　既にcontext fileが存在するかどうかをチェックし、存在する場合は削除してから再度作成
				File contextCheck = new File(contextFile.toString());
				if (contextCheck.exists()) {
					delete(contextCheck);
				}

				PrintWriter fp = new PrintWriter(new BufferedWriter(
						new FileWriter(contextFile.toString())));
				fp.print(contextFileContent.toString());
				fp.close();
			} catch (IOException e1) {
				// TODO 自動生成された catch ブロック
				e1.printStackTrace();
			}

			// 　jsonデータをクライアントに返す
			try {
				// response.setContentType("application/json");
				response.setContentType("application/json; charset=UTF-8");
				PrintWriter out = response.getWriter();
				out.print(jsonString);
				out.close();
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
		
		return SUCCESS;
	}

	
	
	private void saveUploadFile(File src, File dst) {
		// test
		System.out.println("");
		System.out.println("アップロードしたファイルを作成　saveUploadFile method実行する。 ");
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

	// upzip Project file (http://www.ra13.org/java/ZipDecompresser.html)
	private void unzip(File file,String path) throws ZipException, IOException {

		// 対象のZipファイルと同名のディレクトリを作成する。
		File decompressPath = new File(path);

		// 　既にディレクトリが存在する場合、削除してから再度作成
		if (decompressPath.exists()) {
			delete(decompressPath);
		    decompressPath = new File(path);
		}
		
		decompressPath.mkdir();
		
		/*if (!decompressPath.mkdir()) {
			throw new FileNotFoundException(decompressPath + "の生成に失敗しました。");
		}*/

		// Zip ファイルから ZipEntry を一つずつ取り出し、ファイルに保存していく。
		ZipFile zipFile = new ZipFile(file);
		Enumeration<? extends ZipEntry> entries = zipFile.entries();
		while (entries.hasMoreElements()) {
			ZipEntry ze = entries.nextElement();

			// 出力先ファイル
			File outFile = new File(decompressPath, ze.getName());
			if (ze.isDirectory()) {
				// ZipEntry がディレクトリの場合はディレクトリを作成。
				outFile.mkdirs();
			} else {

				BufferedInputStream bis = null;
				BufferedOutputStream bos = null;
				try {
					// ZipFile から 対象ZipEntry の InputStream を取り出す。
					InputStream is = zipFile.getInputStream(ze);
					// 効率よく読み込むため BufferedInputStream でラップする。
					bis = new BufferedInputStream(is);

					if (!outFile.getParentFile().exists()) {
						// 出力先ファイルの保存先ディレクトリが存在しない場合は、
						// ディレクトリを作成しておく。
						outFile.getParentFile().mkdirs();
					}

					// 出力先 OutputStream を作成。
					bos = new BufferedOutputStream(
							new FileOutputStream(outFile));

					// 入力ストリームから読み込み、出力ストリームへ書き込む。
					int ava;
					while ((ava = bis.available()) > 0) {
						byte[] bs = new byte[ava];
						// 入力
						bis.read(bs);

						// 出力
						bos.write(bs);
					}
				} catch (FileNotFoundException e) {
					throw e;
				} catch (IOException e) {
					throw e;
				} finally {
					try {
						if (bis != null)
							// ストリームは必ず close する。
							bis.close();
					} catch (IOException e) {
					}
					try {
						if (bos != null)
							// ストリームは必ず close する。
							bos.close();
					} catch (IOException e) {
					}
				}
			}
		}
	}

	// 再帰的にファイルやディレクトリを削除する
	private void delete(File f) {
		/*
		 * if( f.exists()==false ){ return ; }
		 */
		if (f.isFile()) {
			f.delete();
		}
		// ディレクトリを再帰的に削除する
		if (f.isDirectory()) {
			File[] files = f.listFiles();
			for (int i = 0; i < files.length; i++) {
				delete(files[i]);
			}
			f.delete();
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
	
	private static void printFileList(File[] files) {
	    for (int i = 0; i < files.length; i++) {
	        File file = files[i];
	        System.out.println((i + 1) + ":    " + file);
	    }
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
