package com.bestskip.tool.converter;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.regex.*;
import com.datastax.driver.core.Cluster;
import com.datastax.driver.core.Metadata;
import com.datastax.driver.core.ResultSet;
import com.datastax.driver.core.Session;
import com.datastax.driver.core.Row;

public class KeywordTest {

	public static void main(String[] args) {

		try {
		   
			//cassandra resultset 結果テスト
			// Cassandraに接続する
			Cluster cqlcluster1 = Cluster.builder()
					//.addContactPoint("153.121.64.142").withPort(9042).build();
					.addContactPoint("127.0.0.1").withPort(9042).build();
			System.out.printf("Connected to cluster");
			Metadata metadata = cqlcluster1.getMetadata();
			System.out.printf("Connected to cluster: %s\n",
					metadata.getClusterName());

			// sessionを作成
			Session cqlsession1 = cqlcluster1.connect();
			String jsp_name = "Login.jsp";
			
			String selectSql = new StringBuilder("select * from")
					.append(" jspconvertor.jsp_convert04")
					.append(" where jsp_name='")
					.append(jsp_name)
					.append("';")
					.toString(); 
			System.out.println(selectSql);
			
			ResultSet rs = (ResultSet) cqlsession1
					.execute(selectSql);
					//.execute("select * from jspconvertor.tm_jsp_convert_history where jsp_name="" limit 10000000;");
			
			
	        ArrayList<HashMap<String, String>> list = new ArrayList<HashMap<String, String>>();
	        
			for (Row r : rs.all()) {
				HashMap<String, String> map = new HashMap<String, String>();
				// map.clear();
				map.put("line_contents",
						String.valueOf(r.getString("line_contents")));
				map.put("line_no", String.valueOf(r.getInt("line_no")));
				System.out.println("----------分割線------------------------");
				System.out.println(String.valueOf(r.getInt("line_no")));
				System.out
						.println(String.valueOf(r.getString("line_contents")));
				System.out.println("行番号確認　:　" + map.get("line_no"));
				System.out.println("行内容確認　:　" + map.get("line_contents"));
				list.add(map);

			}
	       
	       cqlsession1.close();
	       cqlcluster1.close();
	       
	       System.out.println(list.size() + "------------------------- List contents -------------------------------" );
	    
	       for ( HashMap<String,String> obj : list ){
	    	   /*for (Entry<String, String> entry : obj.entrySet()){
	    		   System.out.println(entry.getKey() + " => " + entry.getValue());
	    	   }*/
	    	   System.out.println(obj.get("line_contents"));
	    	   
	       };
			
	        
			
			
			System.out.println("=========================================================================" );
			/*String line = "<input type=\"text\" name=\"username\" size=\"20\" value=\"\" id=\"login_username\"/>";
			String line2 = "<s:textfield name=\"username\" key=\"label.userid\" size=\"20\" />";*/
			
			
			/*String line = "<input type=\"password\" name=\"password\" size=\"20\" id=\"login_password\"/>";
			String line2 = "<s:password name=\"password\" key=\"label.password\" size=\"20\" />";*/

			String line = "<input type=\"submit\" id=\"login_button_login\" name=\"method:execute\" value=\"\"/>";
			String line2 = "<s:submit method=\"execute\" key=\"button.login\" align=\"center\" />";

			
			
			System.out.println("Line　：　　" + line);
			System.out.println("Line2　：　　" + line2);
			
			
			Pattern idPattern = Pattern.compile("id\\s*=\\s*\"(.*?)\"");  // id = " " id=""　などのエクスプレッションにマッチする。 「\s」空白
			Matcher idMatch = idPattern.matcher(line);
			String idKeyword = null;

			if (idMatch.find()) { // idがある場合
				for (int i = 0; i < 2; i++) {
					System.out.println("idMatch.group(" + i + ")  : "
							+ idMatch.group(i));
				}
				idKeyword = idMatch.group(1);
				System.out.println("idkeyword = " + idKeyword);
				if (idKeyword.matches(".*_.*")) { // idが「　_　」の複合型作成されたかどうかを確認、「　_　」で分割された場合「　_　」最後の単語を「idkeyword」として使用する
					String[] a = idKeyword.split("_");
					idKeyword = a[a.length - 1];
					System.out.println("idkeywordが変換となる　= " + idKeyword);
					/*
					 * for(String key : a){ System.out.println(key); }
					 */
				}

			}
			// nameがあるかをチェックする
			Pattern namePattern = Pattern.compile("name\\s*=\\s*\"(.*?)\""); // name = " " name=""　などのエクスプレッションにマッチする　。 「\s」空白
			Matcher nameMatch = namePattern.matcher(line);
			String nameKeyword = null;
			if (nameMatch.find()) {
				for (int j = 0; j < 2; j++) {
					System.out.println("nameMatch.group(" + j + ")  : "
							+ nameMatch.group(j));
				}
				nameKeyword = nameMatch.group(1);
				System.out.println("nameKeyword = " + nameKeyword);
				if (nameKeyword.matches(".*:.*")) { // nameが「　:　」で複合型で作成されたかどうかを確認、「　:　」で分割された場合アンダーバー最後の単語を「namekeyword」して使用する
					String[] a = nameKeyword.split(":");
					nameKeyword = a[a.length - 1];
					System.out.println("namekeywordが変換となる　= " + nameKeyword);
					/*
					 * for(String key : a){ System.out.println(key); }
					 */
				}
			}
			

			if (idKeyword != null && line2.matches(".*id\\s*=.*" + idKeyword + ".*")) {  //line2にidがあるかを確認したうえ、idの文字列中に「idKeyword」があるかをチェックする
				line = line2;
				System.out.println("idがマッチしました。コードを「　"+ line + "　」に交換。");	
			}else if(nameKeyword != null && line2.matches(".*name\\s*=.*" + nameKeyword + ".*")){  //line2にnameがあるかを確認したうえ、nameの文字列の中に「nameKeyword」があるかをチェックする
				line = line2;
				System.out.println("nameがマッチしました。コードを「　"+ line + "　」に交換。");	
			}else if(nameKeyword != null && line2.matches(".*" + nameKeyword + ".*")) {
				line = line2;
				System.out.println("jspコードにnameなし、nameがマッチしました。コードを「　"+ line + "　」に交換。");
			}
			
			
			System.out.println("チェック後、Line　　：　　" + line);
			
			String urlTest = "http://localhost:8080/JspConvertor/fileUpload/Welcome.jsp";
			Pattern urlPattern = Pattern.compile(".*/(.*)"); // name = " " name=""　などのエクスプレッションにマッチする　。 「\s」空白
			Matcher urlMatch = urlPattern.matcher(urlTest);
			if (urlMatch.find())
			System.out.println("jsp_name :  " + urlMatch.group(1));
			

		} catch (Exception e) {
			e.printStackTrace();

		}
	}
}
