package com.bestskip.tool.converter;

import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.FileWriter;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


/*import org.apache.commons.lang3.time.DateUtils;*/
/*import org.apache.commons.lang.time.DateUtils;*/
import org.apache.struts2.ServletActionContext;
import org.json.JSONException;
import org.json.JSONObject;

import com.bestskip.tool.converter.CassandraDAO;
import com.opensymphony.xwork2.ActionSupport;
import com.datastax.driver.core.BatchStatement;
import com.datastax.driver.core.ConsistencyLevel;
import com.datastax.driver.core.PreparedStatement;
import com.datastax.driver.core.RegularStatement;
import com.datastax.driver.core.SimpleStatement;

public class FileUploadToDbAction extends ActionSupport {

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
		
		System.out.println("File upload start --------------------------------------------------------------------");
		String filename = this.getName();
		//　保存ファイルフルパスを定義
		String dstDirectory = ServletActionContext.getServletContext().getRealPath(
				this.getSavePath());
		
		//　クライアントからのリクエストを定義（後でサーバーから返す情報を取得する）
		HttpServletRequest req = ServletActionContext.getRequest();
		System.out.println("req.filename = " + req.getParameter(filename));
		// 保存ファイルを定義
		File srcFile = new File(dstDirectory + "\\" + "original_" + filename);
		// 同じファイルが既に存在するかどうかをチェックし、存在すれば削除する
		//　クライアントからアップロードしてきたファイルが完全にアップロードされたかどうかの判断は「chunk == 0」で判断する。
		if (chunk == 0 && srcFile.exists()) {
			srcFile.delete();
			srcFile = new File(dstDirectory + "\\" + "original_" + filename);
			System.out.println("chunkの数" + chunk);
		}

		// 　ファイル書き込み（保存）メッソドを呼び出す（クライアントからストリームを受け取り、ファイルに書込）
		saveUploadFile(this.upload, srcFile);
		
		// 処理情報を確認するため
		System.out.println("アップロードファイル名:" + uploadFileName + "   ファイル・タイプ："
				+ uploadContentType + " " + chunk + " " + chunks);
	
		//　アップロードストリームが完全であるかどうかを判断する。アップロード及びファイル保存が完了した場合、次の操作を行う。
		if (chunk == chunks - 1 | chunks == 0 ) {	
			// 「chunk == chunks - 1」　はクライアント端末から分割されたファイル完全にアップロードされたかを判断
			//　「chunks == 0」　はクライアントからファイルが分割されたかを判断する（ファイルがchunkの最大サイズより大きい場合、分割される）「chunks == 0」の場合はクライアントからアップロード時、ファイルを分割しなかった
			System.out.println("File upload end ----------------------------------------------------------------------");
			// 保存されたファイルを確認する
			System.out.println("ファイル名: " + srcFile.getPath());
			// 保存したファイルをフォーマットする
			System.out.println("File formart start --------------------------------------------------------------------");
			// copy the original file
			String dstFilePath1 = dstDirectory + "\\" + filename + "_1";
			/*try {
			    FileUtils.copyFile(srcFile, dstFile);
			} catch (IOException e) {
			    e.printStackTrace();
			}*/
			File dstFile1 = new File(dstFilePath1);			
			// ファイル既に存在する場合、削除する 
			if (dstFile1.exists()) {
				dstFile1.delete();
			}
			
			// call fileFormart() method to formart file 
			//　元のjspファイルの改行コードなどを整形する。（<%　%>のようなjavaソースが加工できない？）
			fileFormart(srcFile,dstFilePath1);
			
			//　二次加工する。<body>内のjspライブラリの前後に<span></span>を追加する。			
			String dstFilePath2 = dstDirectory + "\\" + filename + "_2";
			File dstFile2 = new File(dstFilePath2);
			// ファイル既に存在する場合、削除する 
			if (dstFile2.exists()) {
				dstFile2.delete();
			}
			fileFormart2(dstFile1,dstFilePath2);
			
			//　三次加工する。改行コードなどを整形する。			
			String dstFilePath3 = dstDirectory + "\\" + filename + "_3";
			File dstFile3 = new File(dstFilePath3);
			// ファイル既に存在する場合、削除する 
			if (dstFile3.exists()) {
				dstFile3.delete();
			}
			fileFormart(dstFile2,dstFilePath3);
			
			
			/*　フォーマットしたファイルに対して、さらに加工する
			 * 行内容の分析、解析処理
			 * 処理項目　　　　　　　　処理詳細
			 * 1:htmlタグ　　　　　　　ｉｄを与える
			 * 2:javascript　　　　
			 * 3.java　　　　　　　　　
			 * 4:jspタグライブラリ　　　　
			 *　5:その他
			*/
			// fileFormart()
			 
			System.out.println("File formart end --------------------------------------------------------------------");
			// file formartting end
			 
			System.out.println("write into cassandra start --------------------------------------------------------------------");
			// DBに行毎をファイルを保存する
			//　read file to database start
			try {
							
				/*
				 * 普通のCassandraに接続方法（OK）
				  Cluster cqlcluster = Cluster.builder().addContactPoint("localhost")
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
				普通のCassandraに接続方法　*/

				//　CassandraDAOの方法で
				CassandraDAO cassandraDAO = new CassandraDAO();
				
				//　実行予定CQL文
				
				String cql_delete = new StringBuilder(   //　delete文同様ファイル名のデータを事前に削除する 
						"delete from jspconvertor.jsp_convert04 where jsp_name=")
						.append("'").append(filename).append("';").toString();
				//System.out.println("実行予定CQL文：　" + cql_delete);
				cassandraDAO.getSession().execute(cql_delete); //削除文を実行する
				
				String cql_insert = new StringBuilder()  // insert文
						.append(" INSERT INTO jspconvertor.jsp_convert04 (convert_id,jsp_name, line_no,")
						.append("  line_contents, event_time)")
						.append(" VALUES (uuid(), ?, ?, ?,dateof(now()))")
						.toString();

				//System.out.println("実行予定CQL文：　" + cql_insert);
				
				//　PreparedStatementを作成する
				RegularStatement toPrepare = (RegularStatement) new SimpleStatement(cql_insert)
				.setConsistencyLevel(ConsistencyLevel.QUORUM);
							
		        PreparedStatement prepared = cassandraDAO.getSession().prepare(toPrepare);
		        
		        //Date eventTime = null;
		        //eventTime = DateUtils.truncate(new Date(System.currentTimeMillis()), Calendar.HOUR_OF_DAY);

				//　アップロードした上記整形したファイルをBufferedReaderで読み取り
		        BufferedReader br = new BufferedReader(new InputStreamReader(
						new FileInputStream(dstFile3), "UTF-8"));
		        		        
		        
		        /*//行分析開始
		        
		        
		        　positon 
		         * ファイル全体における行の位置
　　　　　　　　　　　　　　*　初期ポジションは<head>部以上
				* 1:head以上部　　　code_over_html    
				* 2:head　　code_in_head　　　　　　
    　　　　　			* 3:headとbodyの間
				* 4:body　　code_in_body　
				* 5:bodyの下　code_under_body
				
		         
		        int positionNow = 1;
		       
		           code_type    コードのプログラム的なカテゴリ
　　　　　　		      　　 *　　1:htmlタグ
	　		   　　　 *      2:javascript
		　　		 *	 3.java
	　　			　*   　 4:jspタグライブラリ
	　　			 *	　5:その他　
		         
		        
		        int codeType ;
		        int codeTypeInit = 5; //初期コード・タイプ
		        
		        String tagName = "";
		        String nodeId = null;
		        String levelId = null;
		        
		        int fatherNodeLevel = 0;
		        
		        int nodeConditionNow = 1;
		        */
		      
				
				String line = "";
				int i = 0;
				// 最終行まで読み込む
				while ((line = br.readLine()) != null) {
					i = i + 1;
					System.out.println(i + "行目　　：　" + line.toString());
					
										
					/*//分類１判定  position
					int position = positionNow;
					if (line.matches("^<head.*")) {
						positionNow = 2; 
						position = 2;
					} else if (line.matches("^</head.*")) {
						positionNow = 3;
					} else if (line.matches("^<body.*")) {
						positionNow = 4;
						position = 4;
					}  else if (line.matches("^</body.*")){
						positionNow = 5;
					} 
					
					//body内のcodeタイプを分類する
					int nodeCondition;
					int nodeLevel;
					if(position == 4){
						int code_type = codeTypeInit;
						if (line.matches("<([a-zA-Z]+[^:>]+?)\\s*.*>") && !line.matches("^<body.*")) {//例：　<h2 align="center">
							code_type = 1 ;
							nodeId = "html_" + i ;
							
							//予定作業、tagにidを追加する
							line = line + nodeId;
							
							nodeLevel = fatherNodeLevel + 1;
							nodeCondition = 1 ;//tagがスタート状態を示す
							
							fatherNodeLevel = nodeLevel ;//親ノードレベルを変更する。
							levelId = nodeId;//開始と終了を識別するため。
						
						
							
							
							
							// tagName抽出
							Pattern pat = Pattern.compile("<([a-zA-Z]+[^:>]+?)\\s*.*>");
							Matcher m = pat.matcher(line);
							while(m.find()){
								tagName = m.group(1) ;
								System.out.println(tagName);
							}
						
						} else if (line.matches("^<script.*")) {
							code_type = 2;
						} else if (line.matches("^<%.*")) {
							code_type = 3;
						} else if (line.matches("<([a-zA-Z])+:([a-zA-Z]+)\\s*.*>")){
							code_type = 4;
						}
						
					}
					
					//行分析終了
					
					*/
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
					//　インサート文を実行する
					cassandraDAO.getSession().execute(batch);
					//　cqlsession.execute(boundStatement.bind(filename, i,	line.toString()));
					if (i == 1) {
						continue;
					}
					
					/*// tagNameを""に戻す
					if(!tagName.equals(""))tagName = "";*/
				}
				br.close();
				cassandraDAO.close();			
				/*cqlsession.close();
				cqlcluster.close();*/
			} catch (Exception e) {
				e.printStackTrace();
			}
		   // read file to database end
		   System.out.println("write into cassandra end --------------------------------------------------------------------");
			
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
	
	//クライアントからストリームを受け取り、ファイルに書込
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
		
	private void fileFormart(File before,String after) {
		try {
			//　アップロードしたファイルをBufferedReaderで読み取り
	        BufferedReader br = new BufferedReader(new InputStreamReader(
					new FileInputStream(before), "UTF-8"));
	        
	        PrintWriter fp = new PrintWriter(
					new BufferedWriter(new FileWriter(after)));
	        
			String line = "";
			String input = "";
			// 最終行まで読み込む
			while ((line = br.readLine()) != null) {

				if(line.matches("\\s*"))continue; // 空白の行を処理しない、全角文字を処理できない
				else if (!line.matches(".*<.*") && !line.matches(".*>.*") ){//ソース行に「<」,「>」がなければ処理せず、そのままソースファイルに書込
					fp.println(line);
				}
				else if (line.matches(".*'<.*>'.*")){//【jQuery($('<li data-t..........います</p></a></li>')).insertAfter($('#add li:first'));】のようなソース中の「>」、「<」に改行コードを追加せず、そのまま作成ソースに書込
					fp.println(line);
				}
				else{
				Pattern p1 = Pattern.compile(">"); 
				Matcher m1 = p1.matcher(line);
				String result1 = m1.replaceAll(">\n"); //　改行コードを追加
				
				Pattern p2 = Pattern.compile("<");
				Matcher m2 = p2.matcher(result1);
				String result2 = m2.replaceAll("\n<"); //　改行コードを追加
				
				// System.out.println("before : " + "\n" + line);
				// System.out.println("after  : " + "\n" +result2);
				// System.out.println("------------");
				 
				 String[] ll = result2.split("\\n"); //　空白行を取り出すため、空白コードで切り分
				 for(int i=0;i<ll.length;i++){
					 
					 if(ll[i].matches("\\s*"))continue; //空白行を処理しない
											
					 /* 下記のような二行に跨るソースコードを一行に結合する
					  * 
					  * line1    <div data-role="page" id="login-page" data-theme="c"
					  * line2    data-url="login-page">
					  * */
					 if(input.equals(""))input = ll[i];
					 else input = input + " " + ll[i];
					 if(input.matches("^<[^%].*[^>]$"))continue;//「<」で始まり（<%を取り除く）、「>」で終わらない場合、ループから抜ける
					 fp.println(input);
					 input = "";
				 };
			}
			}
			br.close();
			fp.close();
			} catch (Exception e) {
			e.printStackTrace();
			}
	}
	
	private void fileFormart2(File before,String after) {
		try {
			//　アップロードしたファイルをBufferedReaderで読み取り
	        BufferedReader br = new BufferedReader(new InputStreamReader(
					new FileInputStream(before), "UTF-8"));
	        
	        PrintWriter fp = new PrintWriter(
					new BufferedWriter(new FileWriter(after)));
	        
			String line = "";
			int position = 0; //ソース内容が<bodyタグの下にあるかどうかを判断する,
			
			while ((line = br.readLine()) != null) {
				
				if (line.matches("^<body.*"))position = 1 ;
				if (position == 1){
					if (line.matches("<([a-zA-Z])+:([a-zA-Z]+)\\s*.*/>")){
						line = "<span>" + line + "</span>";
					}else if (line.matches("<([a-zA-Z])+:([a-zA-Z]+)\\s*.*[^/]>")){
						line = "<span>" + line;
					}else if (line.matches("<(/[a-zA-Z])+:([a-zA-Z]+)*.*>")){
						line = line+ "</span>";
					}
					
				}
				
				
				if (line.matches("^</body.*"))position = 0;
				fp.println(line);
				 
			 };
		
		
		br.close();
		fp.close();
		} catch (Exception e) {
		e.printStackTrace();
		}
		}
	
	
	// 行所在場所判定
	/*private int positionCheck(String sourceCode,int positonnow){
		int pos = positionnow;
		if (sourceCode.matches("^<head.*")) {
			position_now = 2; 
			pos =2;
			return pos;
		} else if (sourceCode.matches("^<//head.*")) {
			position_now = 3;
			return pos;
		} else if (sourceCode.matches("^<body.*")) {
			position_now = 4;
			pos = 4;
			return pos;
		}  else if (sourceCode.matches("^</body.*")){
			posion_now = 5;
			return pos;
		} else {
			return pos;
		}
		
	}*/
	

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
