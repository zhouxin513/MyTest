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
import java.util.LinkedList;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

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

	// 最初行の位置の初期値をheadの上にする
	private static int positionNow = 1;

	public String upload() {

		System.out
				.println("File upload start --------------------------------------------------------------------");
		String filename = this.getName();
		// 　保存ファイルフルパスを定義
		String dstDirectory = ServletActionContext.getServletContext()
				.getRealPath(this.getSavePath());

		// 　クライアントからのリクエストを定義（後でサーバーから返す情報を取得する）
		HttpServletRequest req = ServletActionContext.getRequest();
		System.out.println("req.filename = " + req.getParameter(filename));
		// 保存ファイルを定義
		File srcFile = new File(dstDirectory + "\\" + "original_" + filename);
		// 同じファイルが既に存在するかどうかをチェックし、存在すれば削除する
		// 　クライアントからアップロードしてきたファイルが完全にアップロードされたかどうかの判断は「chunk == 0」で判断する。
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

		// 　アップロードストリームが完全であるかどうかを判断する。アップロード及びファイル保存が完了した場合、次の操作を行う。
		if ((chunk == chunks - 1) || (chunks == 0)) {
			// 「chunk == chunks - 1」　はクライアント端末から分割されたファイル完全にアップロードされたかを判断
			// 　「chunks ==
			// 0」　はクライアントからファイルが分割されたかを判断する（ファイルがchunkの最大サイズより大きい場合、分割される）「chunks
			// == 0」の場合はクライアントからアップロード時、ファイルを分割しなかった
			System.out
					.println("File upload end ----------------------------------------------------------------------");
			// 保存されたファイルを確認する
			System.out.println("ファイル名: " + srcFile.getPath());
			// 保存したファイルをフォーマットする
			System.out
					.println("File formart start --------------------------------------------------------------------");
			// copy the original file
			String dstFilePath = dstDirectory + "\\" + filename;
			/*
			 * try { FileUtils.copyFile(srcFile, dstFile); } catch (IOException
			 * e) { e.printStackTrace(); }
			 */
			File dstFile1 = new File(dstFilePath);
			// ファイル既に存在する場合、削除する
			if (dstFile1.exists()) {
				dstFile1.delete();
			}

			// call fileFormart() method to formart file
			// 　元のjspファイルの改行コードなどを整形する。（<%　%>のようなjavaソースが加工できない？）
			fileFormart(srcFile, dstFilePath);

			/*
			 * //　二次加工する。<body>内のjspライブラリの前後に<span></span>を追加する。 String
			 * dstFilePath2 = dstDirectory + "\\" + filename + "_2"; File
			 * dstFile2 = new File(dstFilePath2); // ファイル既に存在する場合、削除する if
			 * (dstFile2.exists()) { dstFile2.delete(); }
			 * fileFormart2(dstFile1,dstFilePath2);
			 * 
			 * //　三次加工する。改行コードなどを整形する。 String dstFilePath3 = dstDirectory + "\\"
			 * + filename + "_3"; File dstFile3 = new File(dstFilePath3); //
			 * ファイル既に存在する場合、削除する if (dstFile3.exists()) { dstFile3.delete(); }
			 * fileFormart(dstFile2,dstFilePath3);
			 */

			/*
			 * 　フォーマットしたファイルに対して、さらに加工する 行内容の分析、解析処理 処理項目　　　　　　　　処理詳細
			 * 1:htmlタグ　　　　　　　ｉｄを与える 2:javascript　　　　 3.java　　　　　　　　　
			 * 4:jspタグライブラリ　　　　　5:その他
			 */
			// fileFormart()

			System.out
					.println("File formart end --------------------------------------------------------------------");
			// file formartting end

			System.out
					.println("write into cassandra start --------------------------------------------------------------------");
			// DBに行毎をファイルを保存する
			// 　read file to database start
			try {

				/*
				 * 普通のCassandraに接続方法（OK） Cluster cqlcluster =
				 * Cluster.builder().addContactPoint("localhost")
				 * .withPort(9042).build();
				 * System.out.printf("Connected to cluster");
				 * com.datastax.driver.core.Metadata metadata = cqlcluster
				 * .getMetadata();
				 * System.out.printf("Connected to cluster: %s\n",
				 * metadata.getClusterName());
				 * 
				 * // sessionを作成 Session cqlsession =
				 * cqlcluster.connect("jspconvertor");
				 * 
				 * StringBuilder cql_insert = new StringBuilder(); cql_insert =
				 * cql_insert .append(
				 * " INSERT INTO jspconvertor.tm_jsp_convert_history (convert_id, jsp_name, line_no,"
				 * ) .append("  line_contents)")
				 * .append(" VALUES (uuid(), ?, ?, ?)");
				 * 
				 * PreparedStatement statement =
				 * cqlsession.prepare(cql_insert.toString()); BoundStatement
				 * boundStatement = new BoundStatement(statement);
				 * 
				 * //　cqlコマンド実行する
				 * cqlsession.execute(boundStatement.bind(filename, i,
				 * line.toString())); 普通のCassandraに接続方法　
				 */

				// 　CassandraDAOの方法で
				CassandraDAO cassandraDAO = new CassandraDAO();

				// 　実行予定CQL文
				String cql_delete = new StringBuilder( // 　delete文同様ファイル名のデータを事前に削除する
						"delete from jspconvertor.tm_jsp_convert_history where jsp_name=")
						.append("'").append(filename).append("';").toString();
				String cql_select = new StringBuilder( // 　delete文同様ファイル名のデータを事前に削除する
						"select count(*) from jspconvertor.tm_jsp_convert_history where jsp_name=")
						.append("'").append(filename).append("';").toString();
				System.out.println("実行予定CQL文：　" + cql_delete);
				// DBに jsp_nameのデータがあるかどうをチェックする    resultset 
				//cassandraDAO.getSession().execute(cql_delete); //削除文を実行する

				String cql_insert = new StringBuilder()
						// insert文
						.append(" INSERT INTO jspconvertor.tm_jsp_convert_history (convert_id, jsp_name, line_no,")
						.append(" level, node_condition, father_node_id, node_id, position, code_type,")
						.append("  line_contents, create_time)")
						.append(" VALUES (uuid(), ?, ?, ?, ?, ?, ?, ?, ?, ?, dateof(now()))")
						.toString();

				// System.out.println("実行予定CQL文：　" + cql_insert);

				// 　PreparedStatementを作成する
				RegularStatement toPrepare = (RegularStatement) new SimpleStatement(
						cql_insert)
						.setConsistencyLevel(ConsistencyLevel.QUORUM);

				PreparedStatement prepared = cassandraDAO.getSession().prepare(
						toPrepare);

				// Date eventTime = null;
				// eventTime = DateUtils.truncate(new
				// Date(System.currentTimeMillis()), Calendar.HOUR_OF_DAY);

				// 　アップロードした上記整形したファイルをBufferedReaderで読み取り
				BufferedReader br = new BufferedReader(new InputStreamReader(
						new FileInputStream(dstFile1), "UTF-8"));

				// 行分析開始

				/*
				 * positon ファイル全体における行の位置 　　　　　　　　　　　　　　*　初期ポジションは<head>部以上
				 * 1:head以上部　　　code_over_html 2:head　　code_in_head　　　　　　 　　　　　 *
				 * 3:headとbodyの間 4:body　　code_in_body　 5:bodyの下　code_under_body
				 */

				/*
				 * code_type コードのプログラム的なカテゴリ 　　　　　　 　　 *　　1:htmlタグ 　 　　　 *
				 * 2:javascript 　　 * 3.java 　　 　* 　 4:jspタグライブラリ 　　 * 　5:その他　
				 */

				// ドキュメント最初のノードはbodyであり、階層は0
				int nodeLevelNow = 0;
				int nodeLevel = 0;
				// ノードの開閉状態の初期値「OFF」
				int nodeConditionNow = 0;
				int nodeCondition = 0;
				// 行のタイプ種類　1：html　2：javaScript　3：java　4：jspタグライブラリ 5：その他
				int codeTypeNow = 5;
				int codeType = 5;

				String nodeId;
				String fatherNodeId = null;
				String LevelIdInit = "jsp_body"; // 最初のノードIDはbodyのｉｄ
				// タグ開始と終了位置をマークする
				LinkedList<String> levelIdList = new LinkedList<String>();
				levelIdList.add(LevelIdInit);

				// <span のタグのIDを抽出用のパダンマーチ
				Pattern pat = Pattern.compile("<span id=\"(.*?)\".*>$");

				String line = "";
				
				
				int i = 0;
				// ArrayList<JspConvertHistoryBean> convertHistoryBeans = new
				// ArrayList<JspConvertHistoryBean>();
				// 最終行まで読み込む
				while ((line = br.readLine()) != null) {
					i = i + 1;
					// JspConvertHistoryBean lineBean = new
					// JspConvertHistoryBean();

					// 分類１判定 position
					int position = getPosition(line);
					System.out.println(i + "行目　　：　" + line.toString()
							+ "    position : " + position);
					nodeCondition = nodeConditionNow;
					codeType = codeTypeNow;
					nodeId = null;
					fatherNodeId = null;

					// body内のcodeタイプを分類する
					// String nodeId = null;
					if (position == 4) {
						if (line.matches("<span id.*>$")) {// 例：　<h2
															// align="center">
							// spanのIDを取り出し
							Matcher m = pat.matcher(line);
							while (m.find()) {
								nodeId = m.group(1);
								System.out.println(nodeId);
							}

							// 親ノードIDが上位階層のIDにする
							fatherNodeId = levelIdList.get(nodeLevelNow);

							// 階層1を増やす
							nodeLevelNow += 1;
							nodeLevel = nodeLevelNow;
							// tagの開始位置をノードIDでマークする。階層IDに格納する
							levelIdList.add(nodeId);

							// tagの開閉状態を「ON」にする
							nodeConditionNow = 1;
							nodeCondition = 1;

							// tagのタイプがHTMLにする
							codeType = 1;
							codeTypeNow = 1;

						} else if (line.matches("</span>")) {
							nodeLevel = nodeLevelNow;
							// 階層1を減らす
							nodeLevelNow -= 1;
							fatherNodeId = levelIdList.get(nodeLevelNow);

							// tagの開閉状態を「OFF」にする
							nodeConditionNow = 0;
							nodeCondition = 0;
							// tagが閉じる時にノードIDをマークする。
							nodeId = levelIdList.get(nodeLevel);
							// tagが閉じた後、階層Idをリストから削除
							levelIdList.remove(nodeLevel);

							// タグのタイプがHTML
							codeType = 1;
							// tagが閉じた後、codeType種類を変更する
							if (nodeLevelNow != 0) {
								codeTypeNow = 1;
							} else {
								codeTypeNow = 5;
							}

						} else if (line.matches("^<script.*>")) {
							codeType = 2;
							codeTypeNow = 2;
						} else if (line.matches("^</script.*>")) {
							codeType = 2;
							if (nodeLevelNow != 0) {
								codeTypeNow = 1;
							} else {
								codeTypeNow = 5;
							}
						}
						/*
						 * else if (line.matches("^<%.*")) { codeType = 3 ;
						 * codeTypeNow = 3; } else if(line.matches(".*%>$")) {
						 * codeType = 3 ; if (nodeLevelNow != 0){ codeTypeNow =
						 * 1 ; } else { codeTypeNow = 5 ; } }
						 */
						else {
							// ノードの開閉状態を記録
							nodeCondition = nodeConditionNow;
							// ノード所在階層レベルを記録
							codeType = codeTypeNow;
							fatherNodeId = levelIdList.get(nodeLevelNow);
						}
					}
					// 行分析終了

					// CQL文のパラメータを作成
					ArrayList<Object> paramList = new ArrayList<Object>();
					paramList.add(filename);
					paramList.add(i);
					paramList.add(nodeLevel);
					paramList.add(nodeCondition);
					paramList.add(fatherNodeId);
					paramList.add(nodeId);
					paramList.add(position);
					paramList.add(codeType);
					paramList.add(line.toString());

					BatchStatement batch = new BatchStatement();
					Object[] inputObj = new Object[paramList.size()];

					for (int j = 0; j < paramList.size(); j++) {
						inputObj[j] = paramList.get(j);
					}
					batch.add(prepared.bind(inputObj));
					// 　インサート文を実行する
					cassandraDAO.getSession().execute(batch);
					// 　cqlsession.execute(boundStatement.bind(filename, i,
					// line.toString()));
					if (i == 1) {
						continue;
					}

					/*
					 * // tagNameを""に戻す if(!tagName.equals(""))tagName = "";
					 */
				}

				br.close();
				cassandraDAO.close();
				/*
				 * cqlsession.close(); cqlcluster.close();
				 */
			} catch (Exception e) {
				e.printStackTrace();
			}
			// read file to database end
			System.out
					.println("write into cassandra end --------------------------------------------------------------------");

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

	// クライアントからストリームを受け取り、ファイルに書込
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

	private void fileFormart(File before, String after) {
		try {
			// 　アップロードしたファイルをBufferedReaderで読み取り
			BufferedReader br = new BufferedReader(new InputStreamReader(
					new FileInputStream(before), "UTF-8"));

			PrintWriter fp = new PrintWriter(new BufferedWriter(new FileWriter(
					after)));

			String line = "";
			String input = "";
			//<span>タグのidを追加するため
			int num;
			String id;
			int position = 0; // ソースコードがbodyの中にあるかどうかを判断する。初期値0--bodyの外にある
						
			// 最終行まで読み込む
			while ((line = br.readLine()) != null) {

				if (line.matches("\\s*"))
					continue; // 空白の行を処理しない、全角文字を処理できない
				else if (!line.matches(".*<.*") && !line.matches(".*>.*")) {// ソース行に「<」,「>」がなければ処理せず、そのままソースファイルに書込
					fp.println(line);
				} else if (line.matches(".*'<.*>'.*")) {// 【jQuery($('<li
														// data-t..........います</p></a></li>')).insertAfter($('#add
														// li:first'));】のようなソース中の「>」、「<」に改行コードを追加せず、そのまま作成ソースに書込
					fp.println(line);
				} else {
					Pattern p1 = Pattern.compile(">");
					Matcher m1 = p1.matcher(line);
					String result1 = m1.replaceAll(">\n"); // 　改行コードを追加

					Pattern p2 = Pattern.compile("<");
					Matcher m2 = p2.matcher(result1);
					String result2 = m2.replaceAll("\n<"); // 　改行コードを追加

					// System.out.println("before : " + "\n" + line);
					// System.out.println("after  : " + "\n" +result2);
					// System.out.println("------------");

					String[] ll = result2.split("\\n"); // 　空白行を取り出すため、空白コードで切り分
					for (int i = 0; i < ll.length; i++) {

						if (ll[i].matches("\\s*"))
							continue; // 空白行を処理しない

						/*
						 * 下記のような二行に跨るソースコードを一行に結合する
						 * 
						 * line1 <div data-role="page" id="login-page" data-theme="c" line2 data-url="login-page">
						 * data-theme="c" line2 data-url="login-page">
						 */
						if (input.equals("")) {
							input = ll[i];
						} else {
							input = input + " " + ll[i];
						}

						if (input.matches("^<[^%].*[^>]$")) {
							break;// 「<」で始まり（<%を取り除く）、「>」で終わらない場合、ループから抜ける
						}

						// body部分全てのタグを<span>タグで区きりする
						if (input.matches("^</body.*")) {
							position = 0;
						}
						if (position == 1) {
							if (input.matches("^<.*/>$")) { // <s:property value="%{getText('title.login')}"/>または<img />の場合
								num = (int) (Math.random() * 1000);
								id = "jsp_" + num;
								fp.println("<span id=\""
										+ id
										+ "\" style=\"border: 1px dashed #ff0000\">");
								fp.println(input);
								fp.println("</span>");
							} else if (input.matches("^<[^/].*[^/]>")
									|| input.matches("^<%.*")) { // <s:form
																	// action="login.action"
																	// method="post">　<h1>の場合
								num = (int) (Math.random() * 1000);
								id = "jsp_" + num;
								fp.println("<span id=\""
										+ id
										+ "\" style=\"border: 1px dashed #ff0000\">");
								fp.println(input);
							} else if (input.matches("^</.*>$")
									|| input.matches(".*%>$")) { // </s:form>　</div>の場合
								fp.println(input);
								fp.println("</span>");
							}
						} else {
							fp.println(input);
						}
						if (input.matches("^<body.*")) {
							position = 1;
						}
						input = "";
					}
				}
			}
			br.close();
			fp.close();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	private void fileFormart2(File before, String after) {
		try {
			// 　アップロードしたファイルをBufferedReaderで読み取り
			BufferedReader br = new BufferedReader(new InputStreamReader(
					new FileInputStream(before), "UTF-8"));

			PrintWriter fp = new PrintWriter(new BufferedWriter(new FileWriter(
					after)));

			String line = "";
			int position = 0; // ソース内容が<bodyタグの下にあるかどうかを判断する,

			while ((line = br.readLine()) != null) {
				// int id = (int)(Math.random()*1000);
				if (line.matches("^<body.*"))
					position = 1;
				if (position == 1) {
					if (line.matches("<([a-zA-Z])+:([a-zA-Z]+)\\s*.*/>")) { // <s:property
																			// value="%{getText('title.login')}"/>　の場合
						line = "<span>" + line + "</span>";
						// line = "<span id=\"" + id + "\">" + line + "</span>";
					} else if (line
							.matches("<([a-zA-Z])+:([a-zA-Z]+)\\s*.*[^/]>")) { // <s:form
																				// action="login.action"
																				// method="post">　の場合
						line = "<span>" + line;
					} else if (line.matches("<(/[a-zA-Z])+:([a-zA-Z]+)*.*>")) { // </s:form>　の場合
						line = line + "</span>";
					}

				}
				if (line.matches("^</body.*"))
					position = 0;
				fp.println(line);
			}
			;

			br.close();
			fp.close();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	// 行所在場所判定
	private int getPosition(String line) {
		int position = positionNow;
		if (line.matches("^<head.*")) {
			positionNow = 2;
			position = 2;
		} else if (line.matches("^</head.*")) {
			positionNow = 3;
		} else if (line.matches("^<body.*")) {
			positionNow = 4;
			position = 4;
		} else if (line.matches("^</body.*")) {
			positionNow = 5;
		}
		return position;

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
