package com.bestskip.tool.converter;


import com.datastax.driver.core.Cluster;
import com.datastax.driver.core.Metadata;
import com.datastax.driver.core.ResultSet;
import com.datastax.driver.core.Session;
import com.datastax.driver.core.Row;
import com.sun.org.apache.xalan.internal.xsltc.compiler.Pattern;

public class CassandraConnectTest {
	
	   public static void main(String[] args) {
		   
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
							.append(" jspconvertor.jsp_convert03")
							.append(" where jsp_name='")
							.append(jsp_name)
							.append("';")
							.toString(); 
					System.out.println(selectSql);
					
					ResultSet rs = (ResultSet) cqlsession1
							.execute(selectSql);
							//.execute("select * from jspconvertor.tm_jsp_convert_history where jsp_name="" limit 10000000;");
					
					//System.out.println(rs.all().size());
					System.out.println("----------sdfa--------------");
					
					for (Row r : rs.all()){
						String text = String.valueOf(r.getString("line_contents"));
						
						String keyword = "username";
						
						//String escapedText = Pattern.quote( text ); 
						
						//System.out.println(text.replace("%", "\\%"));
						//String reqex = "\"(.*" + "\\Q" + text + "\\E" + ".*)\"";
						
						//System.out.println(reqex);	
						//id="([^"]*?)"
						
						if (text.matches(".*" + keyword + ".*" )) {
							System.out.println("-----------yes-----------");
							System.out.println(text);
						} 
						
					}
					
					cqlsession1.close();
					cqlcluster1.close();
						
				}
	}


