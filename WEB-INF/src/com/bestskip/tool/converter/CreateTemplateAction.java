package com.bestskip.tool.converter;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import com.bestskip.tool.converter.CassandraDAO;
import com.datastax.driver.core.ResultSet;
import com.datastax.driver.core.Row;
import com.opensymphony.xwork2.ActionSupport;

public class CreateTemplateAction extends ActionSupport {

	/**
		   * 
		   */
	private static final long serialVersionUID = 1L;

	//　Browserからテンプレートiframeで作成したhtmlソースを格納する
	private String htmlsource;
	public String getHtmlsource() {
		return htmlsource;
	}
	public void setHtmlsource(String htmlsource) {
		this.htmlsource = htmlsource;
	}

	// Browserからソースiframeにロードされたjspファイルを格納する
	private String jspUrl;
	public String getJspUrl() {
		return jspUrl;
	}
	public void setJspUrl(String jspUrl) {
		this.jspUrl = jspUrl;
	}

	public String execute() {
		
		// プレービュー用htmlソースの一時の保存場所を定義
		//　★今後予定：　テンプレートのファイルパスを変数で獲得し、動的に指定する
		String SampleFilepath = "C:/Users/bestskip/git/MyTest/jsp/phr/html/001sample_temp.html";
		
		//　プレービュー用の一時ファイルと同じファイル名のファイルが存在したかをチェックする
		//　★今後予定：　一時ファイルがプレービュー完成後、削除となる。
		File sampleFile = new File(SampleFilepath);  //　既に存在する場合、削除
		if (sampleFile.exists()) {
			delete(sampleFile);
		}

		try {

			//　jspファイルのurlからファイル名を取得する
			String jspName = null;
			Pattern urlPattern = Pattern.compile(".*/(.*)");
			Matcher urlMatch = urlPattern.matcher(jspUrl);
			if (urlMatch.find()) {
				jspName = urlMatch.group(1);
			}
			
			//　Writerを用意する
			PrintWriter fp = new PrintWriter(new BufferedWriter(new FileWriter(SampleFilepath)));
			
			//　事前に追加で書き込みたいソースを書き込む
			//　★今後予定：　Browserから書き込みたいソースを用意できるようにする
			fp.print("<%@ page contentType=\"text/html; charset=UTF-8\"%>" + "\n"); //文字化けを防ぐ
			fp.print("<%@ taglib prefix=\"s\" uri=\"/struts-tags\"%>" + "\n"); // Struts2のラベルライブラリを導入する
			fp.print("<html>" + "\n");
			//　Browserから受信した動的なテンプレートソースを書き込み
			fp.print(htmlsource);
			fp.print("</html>" + "\n");
			fp.close(); //　一時のhtmlソースファイルを作成完了

			// プレービュー用のjspファイルを作成
			String dstFilePath = "C:/Users/bestskip/git/MyTest/jsp/phr/html/001sample.jsp";
			File dstFile = new File(dstFilePath); 
			//　過去に作成した同名の旧ファイルを削除
			if (dstFile.exists()) {
				delete(dstFile);
			}

			// 新規jspファイルを作成し、フォーマットする
			fileConvert(sampleFile, dstFilePath, jspName);
			
		} catch (IOException e) {
			// TODO 自動生成された catch ブロック
			e.printStackTrace();
		}
		return SUCCESS;
	}

	// 再帰的にファイルやディレクトリを削除する
	private void delete(File f) {
		/*
		 * if( f.exists()==false ){ return ; }
		 */
		//　ファイルである場合、削除する
		if (f.isFile()) {
			f.delete();
		}
		// ディレクトリである場合、ディレクトリとサブディレクトリ、及び全てのファイルを再帰的に削除する
		if (f.isDirectory()) {
			File[] files = f.listFiles();
			for (int i = 0; i < files.length; i++) {
				delete(files[i]);
			}
			f.delete();
		}
	}

	//　ファイルConvert処理
	//　★今後予定：機能モジュール毎をjavaクラスを分割する
	private void fileConvert(File before, String after, String jspName) {
		try {

			// DBに保存された元のjspソースを呼び出し（アップロードされた時点でファイルが行毎にDBに保存する）
			CassandraDAO cassandraDAO = new CassandraDAO();
			String selectSql = new StringBuilder("select * from")
					.append(" jspconvertor.jsp_convert04")
					.append(" where jsp_name='")
					.append(jspName)
					.append("';")
					.toString();
			//　System.out.println(selectSql);

			//　クエリを実行
			ResultSet rs = (ResultSet) cassandraDAO.getSession().execute(
					selectSql);

			// クエリ実行結果を重複使うため、ArrayListに保管しておく
			ArrayList<HashMap<String, String>> list = new ArrayList<HashMap<String, String>>();

			for (Row r : rs.all()) {
				HashMap<String, String> map = new HashMap<String, String>();
				// map.clear();
				//　クエリ結果から必要な項目を取り出し、格納しておく
				map.put("line_contents",
						String.valueOf(r.getString("line_contents")));  //行の内容
				map.put("line_no", String.valueOf(r.getInt("line_no")));	//行の番号
				list.add(map);
			}
			cassandraDAO.close();

			// 作成したソース格納htmlファイルをBufferedReaderに読み込み
			BufferedReader br = new BufferedReader(new InputStreamReader(
					new FileInputStream(before), "UTF-8"));

			// プレービューjsp作成用PrintWriterを用意する
			PrintWriter fp = new PrintWriter( 
					new BufferedWriter(new FileWriter(after)));

			String line = "";
			String sourceLine ="";
			// 一時htmlソースファイルを行毎に最終行まで処理する
			while ((line = br.readLine()) != null) {

				if (line.matches("\\s*")){
					continue; // 空白の行を処理しない（Writerに書き込まない）
				}
				else if (!line.matches(".*<.*") && !line.matches(".*>.*") ){//ソース行に「<」,「>」がなければ処理せず、そのままソースファイルに書込
					fp.println(line);
				}
				else if (line.matches(".*'<.*>'.*")){//【jQuery($('<li data-t..........います</p></a></li>')).insertAfter($('#add li:first'));】のようなソース中の「>」、「<」に改行コードを追加せず、そのまま作成ソースに書込
					fp.println(line);
				}
				else {
					//「　<　>　」　単位でソースファイルを整形する
					Pattern p1 = Pattern.compile(">");
					Matcher m1 = p1.matcher(line);
					String result1 = m1.replaceAll(">\n"); // 　改行コードを追加
					
					Pattern p2 = Pattern.compile("<");
					Matcher m2 = p2.matcher(result1);
					String result2 = m2.replaceAll("\n<"); // 　改行コードを追加
					
					String[] ll = result2.split("\\n"); //　処理した文字列を空白コードで分割する
					for (int i = 0; i < ll.length; i++) {
						if (!ll[i].matches("\\s*")) { // 空白文字列を処理しない
							sourceLine = ll[i];

							// htmlソースからJSPファイルにからソースコードを逆引き処理
							if (sourceLine.matches("^<.*")) { // タグで始まる行のみを処理する、その他の行をそのままWriterに書き込み

								for (HashMap<String, String> obj : list) { // listから元jspファイル行毎のソースを比較する

									// 元jspファイルのソースをマップから取得
									String jspSource = obj.get("line_contents");
									
									// 　ソースコードにidがあるかチェックする正規表現=＞　「 id = " ",id=""」　などのエクスプレッションにマッチする。「\s」は空白
									Pattern idPattern = Pattern
											.compile("id\\s*=\\s*\"(.*?)\""); 
									
									// ソースコードにnameがあるかチェックする正規表現=＞　「name =" ", name=""」　などのエクスプレッションにマッチする　。「\s」は空白
									Pattern namePattern = Pattern
											.compile("name\\s*=\\s*\"(.*?)\""); 
									
									// タグで始まる行のみを比較する、その他処理しない　
									if (jspSource.matches("^<.*")) { 
										// 　Htmlソースラインにidがあるかをチェック
										Matcher idMatch = idPattern
												.matcher(sourceLine);
										String idKeyword = null; // 検索キーワードを定義する
										if (idMatch.find()) { // idがある場合、取得しておく
											idKeyword = idMatch.group(1);	//正規表現で「　()　」括った部分の文字列を取得
											if (idKeyword.matches(".*_.*")) { // idが「　_　」の複合型作成されたか（jspラベルライブラリの行為）を確認、「　_　」で分割された場合「　_　」最後の単語を「idkeyword」として使用する
												String[] a = idKeyword
														.split("_");
												idKeyword = a[a.length - 1];
											}
										}

										// 　Htmlソースラインにnameがあるかをチェック
										Matcher nameMatch = namePattern
												.matcher(sourceLine);
										String nameKeyword = null;
										if (nameMatch.find()) { // nameがある場合、取得しておく
											nameKeyword = nameMatch.group(1);	//正規表現で「　()　」括った部分の文字列を取得
											if (nameKeyword.matches(".*:.*")) { // nameが「　:　」で複合型で作成されたか（jspラベルライブラリの行為）を確認、「　:　」で分割された場合アンダーバー最後の単語を「namekeyword」して使用する
												String[] a = nameKeyword
														.split(":");
												nameKeyword = a[a.length - 1];
											}
										}

										// keywordとnameで元jspソースの行をチェックする
										if (idKeyword != null
												&& jspSource
														.matches(".*id\\s*=.*"
																+ idKeyword
																+ ".*")) { // 逆引きを行う。元jspソースラインがにidがあるかを確認したうえ、idの文字列中に「idKeyword」があるかをチェックする
											sourceLine = jspSource; // マッチする場ソースラインを元jspソースと入れ替え

										} else if (nameKeyword != null
												&& jspSource
														.matches(".*name\\s*=.*"
																+ nameKeyword
																+ ".*")) { // 逆引きを行う。元jspソースラインがにnameがあるかを確認したうえ、nameの文字列の中に「nameKeyword」があるかをチェックする
											sourceLine = jspSource;
										} else if (nameKeyword != null
												&& jspSource.matches(".*"
														+ nameKeyword + ".*")) { // idとnameが両方ともマッチできない場合の暫定的な処理、nameで行をチェックする
											sourceLine = jspSource; // マッチする場ソースラインを元jspソースと入れ替え
										}

									} // タグである行の処理完了

								} // 元jsp一行処理終了

							} // 　Htmlタグで始まる行の処理完了
							
							fp.println(sourceLine); // ソースをファイルに書き込む
							
						}	// String[] llの空白でない文字列処理完了
					}	//　String[] ll　処理完了
				}
			}	// 一時htmlソースファイル読み込み作業完了
			
			br.close();
			fp.close();
			
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
}
