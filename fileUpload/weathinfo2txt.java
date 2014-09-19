package selectFromCassandra2;

import java.io.*;
import java.net.*;
import java.text.SimpleDateFormat;
import java.util.Date;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import com.datastax.driver.core.BoundStatement;
import com.datastax.driver.core.Cluster;
import com.datastax.driver.core.Metadata;
import com.datastax.driver.core.ResultSet;
import com.datastax.driver.core.Row;
import com.datastax.driver.core.Session;

public class weathinfo2txt {

	public static void main(String[] args) {
		
		try {

			// Cassandraに接続する。
			Cluster cqlcluster1 = Cluster.builder()
					.addContactPoint("153.121.64.141").withPort(9042).build();
			System.out.printf("Connected to cluster");
			Metadata metadata = cqlcluster1.getMetadata();
			System.out.printf("Connected to cluster: %s\n",
					metadata.getClusterName());

			// sessionを作成
			Session cqlsession1 = cqlcluster1.connect();
			
			StringBuilder cql_select_weatherinfo = new StringBuilder();
			cql_select_weatherinfo = cql_select_weatherinfo
					//.append(" select * from bestskip_keyspace.tt_weathinfo")
					.append(" select cloudy,cityname,description1,humidity,latitude,longitude,pressure,rain1h,snow1h,temp,weatherinfo1,winddeg,windspeed")
					.append(" from bestskip_keyspace.tt_weathinfo")
				//	.append(" where locationid=382fd5e8-b0b4-4eeb-a907-8f088f4a3035")
				//	.append(" order by event_time desc")
					.append(" limit 20")
					;

			ResultSet rs = (ResultSet) cqlsession1
					.execute(cql_select_weatherinfo.toString());
			
			String ofile = "./webContent/sample/weathinfo1h.txt";
			
			PrintWriter fp = new PrintWriter(new BufferedWriter(new FileWriter(
					ofile)));
						
			//fp.print("lat"+"\t"+"lon"+"\t"+"title"+"\t"+"description"+"\t"+"icon"+"\t"+"iconSize"+"\t"+"iconOffset"+"\n");
			fp.print("lat"+"\t"+"lon"+"\t"+"title"+"\t"+"description"+"\t"+"icon"+"\t"+"iconSize"+"\t"+"iconOffset"+"\n");
			
			for (Row r : rs.all()) {

				StringBuilder str = new StringBuilder();
				str = str.append(r.getFloat("latitude"))
						.append("\t")
						.append(r.getFloat("longitude"))
						.append("\t")						
						.append("最近1時間天気情報")
						.append("\t")
						.append("概要　：　" + r.getString("weatherinfo1"))
						.append(".<br>")
						.append("詳細　：" + r.getString("description1"))
						.append(".<br>")
						.append("気温　：" + r.getFloat("temp"))
						.append(".<br>")
						.append("気圧　：" + r.getFloat("pressure"))
						.append(".<br>")
						.append("湿度　：" + r.getFloat("humidity"))
						.append(".<br>")
						.append("曇り　：" + r.getFloat("cloudy"))
						.append(".<br>")
						.append("風速　：" + r.getFloat("windspeed"))
						.append(".<br>")
						.append("風向　：" + r.getFloat("winddeg"))
						.append(".<br>")
						.append("雨情報　：" + r.getFloat("rain1h"))
						.append(".<br>")
						.append("雪情報　：" + r.getFloat("snow1h"))
						.append(".<br>")
						.append("都市　：" + r.getString("cityname"))
						.append("\t")
						.append("icon_black_mobile.png")
						.append("\t")
						.append("16,26")
						.append("\t")
						.append("-10,-25")
						.append("\n")
						;
					//	.append(r.getDate("create_date"))
					//	.append(r.getDate("last_update_time"));
			//	48.9459301	9.6075669	属性値Title One	Description one.<br>Second line.<br><br>(click again to close)	Ol_icon_blue_example.png	24,24	0,-24
				fp.print(str);

			}
			fp.close();

			cqlsession1.close();
			cqlcluster1.close();

		} catch (Exception e) {
			e.printStackTrace();

		}
	}
}
