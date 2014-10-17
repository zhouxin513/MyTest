package com.bestskip.tool.converter;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import com.bestskip.tool.converter.CassandraDAO;
import com.datastax.driver.core.ResultSet;
import com.datastax.driver.core.Row;
import com.datastax.driver.core.Session;
import com.opensymphony.xwork2.ActionSupport;

public class CreateTemplateAction extends ActionSupport {

	/**
		   * 
		   */
	private static final long serialVersionUID = 1L;

	private String htmlsource;

	public String getHtmlsource() {
		return htmlsource;
	}

	public void setHtmlsource(String htmlsource) {
		this.htmlsource = htmlsource;
	}

	private String jspUrl;

	public String getJspUrl() {
		return jspUrl;
	}

	public void setJspUrl(String jspUrl) {
		this.jspUrl = jspUrl;
	}

	public String execute() {
		
		// htmlソースの一時の保存場所
		String filepath = "C:/Users/bestskip/git/MyTest/jsp/phr/html/001sample_temp.html";
		
		File sampleFile = new File(filepath);  //　既に存在する場合、削除
		if (sampleFile.exists()) {
			delete(sampleFile);
		}

		try {

			String jspName = null;
			Pattern urlPattern = Pattern.compile(".*/(.*)");
			Matcher urlMatch = urlPattern.matcher(jspUrl);
			if (urlMatch.find()) {
				jspName = urlMatch.group(1);
			}

			PrintWriter fp = new PrintWriter(new BufferedWriter(new FileWriter(
					filepath)));
			fp.print("<!--" + jspName + "-->" + "\n");
			fp.print("<%@ page contentType=\"text/html; charset=UTF-8\"%>"
					+ "\n");
			fp.print("<%@ taglib prefix=\"s\" uri=\"/struts-tags\"%>" + "\n");

			fp.print("<html>" + "\n");
			fp.print(htmlsource);
			fp.print("</html>" + "\n");
			fp.close();

			String dstFilePath = "C:/Users/bestskip/git/MyTest/jsp/phr/html/001sample.jsp";
			File dstFile = new File(dstFilePath); // define new jsp file to
													// create
			if (dstFile.exists()) {
				delete(dstFile);
			}

			// 新規jspファイルを作成し、フォーマットする
			fileConvert(sampleFile, dstFilePath, jspName);

			// System.out.println(jspName);
			// System.out.println("-END--END--------------------------------------------------------------------");
			// System.out.println(fp.toString());

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

	private void fileConvert(File before, String after, String jspName) {
		try {

			// DBに保存された元のjspソースを呼び出し
			CassandraDAO cassandraDAO = new CassandraDAO();
			String selectSql = new StringBuilder("select * from")
					.append(" jspconvertor.jsp_convert04")
					.append(" where jsp_name='").append(jspName).append("';")
					.toString();
			System.out.println(selectSql);

			ResultSet rs = (ResultSet) cassandraDAO.getSession().execute(
					selectSql);

			// resultsetを重複使うため、ArrayListに保管しておく
			ArrayList<HashMap<String, String>> list = new ArrayList<HashMap<String, String>>();

			for (Row r : rs.all()) {
				HashMap<String, String> map = new HashMap<String, String>();
				// map.clear();
				map.put("line_contents",
						String.valueOf(r.getString("line_contents")));
				map.put("line_no", String.valueOf(r.getInt("line_no")));
				list.add(map);
			}
			cassandraDAO.close();

			// 　アップロードしたファイルをBufferedReaderで読み取り
			BufferedReader br = new BufferedReader(new InputStreamReader(
					new FileInputStream(before), "UTF-8"));

			PrintWriter fp = new PrintWriter( // 新規ファイル作成用PrintWriterを用意する
					new BufferedWriter(new FileWriter(after)));

			String line = "";
			// フォーマット前のhtmlファイル最終行まで読み込む
			while ((line = br.readLine()) != null) {

				if (line.matches("\\s*"))
					continue; // 空白の行を処理しない、全角文字を処理できない
				else {
					Pattern p1 = Pattern.compile(">");
					Matcher m1 = p1.matcher(line);
					String result1 = m1.replaceAll(">\n"); // 　改行コードを追加

					Pattern p2 = Pattern.compile("<");
					Matcher m2 = p2.matcher(result1);
					String result2 = m2.replaceAll("\n<"); // 　改行コードを追加

					// System.out.println("before : " + "\n" + line);
					// System.out.println("after  : " + "\n" +result2);
					// System.out.println("------------");

					String[] ll = result2.split("\\n"); // 空白行を取り出すため
					for (int i = 0; i < ll.length; i++) {
						if (!ll[i].matches("\\s*")) { // 空白でない行を処理する
							String sourceLine = ll[i];

							// 　作成されたHtmlソースから元JSPファイルからソースコードを逆引き処理
							if (sourceLine.matches("^<.*")) { // タグで始まる行のみを処理する、その他そのままファイルに書き込み

								for (HashMap<String, String> obj : list) { // listから元jspファイル行毎のソースを比較する

									// 元jspファイルのソースをマップから取得する
									String jspSource = obj.get("line_contents");
									Pattern idPattern = Pattern
											.compile("id\\s*=\\s*\"(.*?)\""); // 　ソースコードにidがあるかチェックする正規表現=＞　「
																				// id
																				// =
																				// " ",id=""」　などのエクスプレッションにマッチする。「\s」は空白
									Pattern namePattern = Pattern
											.compile("name\\s*=\\s*\"(.*?)\""); // ソースコードにnameがあるかチェックする正規表現=＞　「name
																				// =
																				// " ",
																				// name=""」　などのエクスプレッションにマッチする　。「\s」は空白

									if (jspSource.matches("^<.*")) { // タグで始まるである行のみをチェックする

										// 　Htmlソースラインにidがあるかをチェックし、取得する
										Matcher idMatch = idPattern
												.matcher(sourceLine);
										String idKeyword = null; // 検索キーワードを定義する
										if (idMatch.find()) { // idがある場合
											idKeyword = idMatch.group(1);
											if (idKeyword.matches(".*_.*")) { // idが「　_　」の複合型作成されたかどうかを確認、「　_　」で分割された場合「　_　」最後の単語を「idkeyword」として使用する
												String[] a = idKeyword
														.split("_");
												idKeyword = a[a.length - 1];
											}
										}

										// 　Htmlソースラインにnameがあるかをチェックし、取得する
										Matcher nameMatch = namePattern
												.matcher(sourceLine);
										String nameKeyword = null;
										if (nameMatch.find()) {
											nameKeyword = nameMatch.group(1);
											if (nameKeyword.matches(".*:.*")) { // nameが「　:　」で複合型で作成されたかどうかを確認、「　:　」で分割された場合アンダーバー最後の単語を「namekeyword」して使用する
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
						} // 空白でない行を処理する
					}
				}
			}
			br.close();
			fp.close();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
}
