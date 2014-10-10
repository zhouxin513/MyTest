package backup;

import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.catalina.connector.Request;
import org.apache.struts2.ServletActionContext;






import com.datastax.driver.core.BatchStatement;
import com.datastax.driver.core.ConsistencyLevel;
import com.datastax.driver.core.PreparedStatement;
import com.datastax.driver.core.RegularStatement;
import com.datastax.driver.core.SimpleStatement;
import com.opensymphony.xwork2.ActionSupport;




public class FileUploadAction_0901 extends ActionSupport {

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
		
		// test
	    System.out.println("upload test: ");
				
		String filename = this.getName();
		
	    String dstPath = ServletActionContext.getServletContext().getRealPath(
				this.getSavePath())
				+ "\\" + filename;
	    
	    //url test test  
 	    String fileUrl = ServletActionContext.getServletContext() +
				+ "\\" + filename;
	    String param1 = Servleta
	    
	    
		File dstFile = new File(dstPath);
		
		
		// test
		System.out.println("ファイル名: " + dstPath );
		
		
		// 同じファイル名が存在するかどうかをチェックする
		if (chunk == 0 && dstFile.exists()) {
			dstFile.delete();
			dstFile = new File(dstPath);
		}

		//　ファイル書き込み（保存）メッソドを呼び出し
		saveUploadFile(this.upload, dstFile);

		System.out.println("アップロードファイル名:" + uploadFileName + "   ファイル・タイプ：" + uploadContentType + " "
				+ chunk + " " + chunks);


		/*//　read file to database start
		try {
						
			
			 * 普通のCassandraに接続方法（OK）
			 * Cluster cqlcluster = Cluster.builder().addContactPoint("localhost")
					.withPort(9042).build();
			System.out.printf("Connected to cluster");
			com.datastax.driver.core.Metadata metadata = cqlcluster
					.getMetadata();
			System.out.printf("Connected to cluster: %s\n",
					metadata.getClusterName());

			// sessionを作成
			Session cqlsession = cqlcluster.connect("jspconvertor");
			
			StringBuilder cql_insert = new StringBuilder();
			cql_insert = cql_insert
					.append(" INSERT INTO jspconvertor.tm_jsp_convert_history (convert_id, jsp_name, line_no,")
					.append("  line_contents)")
					.append(" VALUES (uuid(), ?, ?, ?)");
			
			PreparedStatement statement = cqlsession.prepare(cql_insert.toString());			
			BoundStatement boundStatement = new BoundStatement(statement);	
			
			//　cqlコマンド実行する
			cqlsession.execute(boundStatement.bind(filename, i,	line.toString()));		
			普通のCassandraに接続方法　

			//　CassandraDAOの方法で
			CassandraDAO cassandraDAO = new CassandraDAO();
			
			//　実行予定CQL文
			StringBuilder cql_insert = new StringBuilder();
			cql_insert = cql_insert
					.append(" INSERT INTO jspconvertor.tm_jsp_convert_history (convert_id, jsp_name, line_no,")
					.append("  line_contents)")
					.append(" VALUES (uuid(), ?, ?, ?)");

			System.out.println("実行予定CQL文：　" + cql_insert.toString());
			
			//　PreparedStatementを作成する
			RegularStatement toPrepare = (RegularStatement) new SimpleStatement(cql_insert.toString())
			.setConsistencyLevel(ConsistencyLevel.QUORUM);
						
	        PreparedStatement prepared = cassandraDAO.getSession().prepare(toPrepare);

			//　アップロードしたファイルをBufferedReaderで読み取り
	        BufferedReader br = new BufferedReader(new InputStreamReader(
					new FileInputStream(this.upload), "UTF-8"));
			// 最終行まで読み込む
			String line = "";
			int i = 0;
			
			while ((line = br.readLine()) != null) {

				i = i + 1;
				System.out.println(line.toString());
				
				// CQL文のパラメータを作成
				ArrayList<Object> paramList = new ArrayList<Object>();
				
				paramList.add(filename);
				paramList.add(i);
				paramList.add(line.toString());
				
				BatchStatement batch = new BatchStatement();
				Object[] inputObj = new Object[paramList.size()];
				
				for (int j = 0; j < paramList.size(); j++) {
					inputObj[j] = paramList.get(j);
				}
				
				batch.add(prepared.bind(inputObj));
				
				//　CQL文を実行する
				cassandraDAO.getSession().execute(batch);

				//　cqlsession.execute(boundStatement.bind(filename, i,	line.toString()));

				if (i == 1) {
					continue;
				}
			}
			br.close();
			cassandraDAO.close();			
			cqlsession.close();
			cqlcluster.close();
		} catch (Exception e) {
			e.printStackTrace();
		}

		// read file to database end
		*/

		if (chunk == chunks - 1) {
			// 完成一整个文件;
			// test
			System.out.println("chunk test: ");

		}
		// test

		System.out.println("return success test: ");
		System.out.println("*************************** ");
		HttpServletResponse response = ServletActionContext.getResponse();
		response.setContentType("text/html");
	    PrintWriter out;
		try {
			out = response.getWriter();
			System.out.println(out.toString());
		} catch (IOException e) {
			// TODO 自動生成された catch ブロック
			e.printStackTrace();
		}
		System.out.println("response output complete *************************** ");
		
		return SUCCESS;
	}

	private void saveUploadFile(File src, File dst) {
		// test
		System.out.println("saveUploadFile test: ");
		InputStream in = null;
		OutputStream out = null;
		try {
			if (dst.exists()) {
				out = new BufferedOutputStream(new FileOutputStream(dst, true),//　書き出しバッファ、存在する場合、上書き
						BUFFER_SIZE);
			} else {
				out = new BufferedOutputStream(new FileOutputStream(dst),
						BUFFER_SIZE);
			}
			in = new BufferedInputStream(new FileInputStream(src), BUFFER_SIZE);//　読み取りバッファ

			byte[] buffer = new byte[BUFFER_SIZE]; //バイトバッファを作成
			int len = 0;
			while ((len = in.read(buffer)) > 0) { //inからbufferに読み取り
				out.write(buffer, 0, len); //bufferからoutに書き込み
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
