<%@ page language="java" contentType="text/html; charset=UTF-8"%>
<%@ page import="com.datastax.driver.core.*"%>
<%@ page import="java.io.*"%>
<%@ page import="java.util.ArrayList"%>
<%@ page import="java.util.*"%>
<%@ page import="java.math.BigDecimal"%>


<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>天気情報出力HighCharts</title>
<script type="text/javascript" src="./js/jquery.min.js"></script>
<LINK rel="stylesheet" type="text/css" href="./css/demo.css">

<%
	//　現在時刻
	out.println(new java.util.Date());

	// Cassandraに接続
	Cluster cqlcluster1 = Cluster.builder()
	.addContactPoint("153.121.64.141").withPort(9042).build();
	out.println("Connected to cluster");
	out.println("<br>");
	Metadata metadata = cqlcluster1.getMetadata();
	out.println("Connected to cluster: %s\n"
	+ metadata.getClusterName());
	out.println("<br>");

	//　クエリを実行する
	Session cqlsession1 = cqlcluster1.connect();

	//　特定場所の天気情報を取り出す
	StringBuilder cql_select_weatherinfo = new StringBuilder();
	cql_select_weatherinfo = cql_select_weatherinfo
	//.append(" select * from bestskip_keyspace.tt_weathinfo")
	.append("select temp,dt,create_date,event_time,windspeed,weatherinfo1,description1")
	//,cityname,cloudy,country,description1,humidity,latitude,longitude,pressure,rain1h,snow1h,temp,weatherinfo1,winddeg,windspeed")
	.append(" from bestskip_keyspace.tt_weathinfo")
	.append(" where locationid=1c4df1c1-a136-4dd1-90d1-9518489515ca")
	.append(" and event_time >= \'2014-07-17 12:00:00+0200\' AND  event_time <= \'2014-08-13 23:59:00+0200\'")
	.append(" order by event_time")
	//.append(" desc")
	.append(" limit 50")
	.append(" allow filtering")
	.append(";")
	;
	
    // String sql1 = "select temp,dt,create_date,event_time from bestskip_keyspace.tt_weathinfo where locationid=95ae2932-cee0-4921-b19c-47139e57f6a1 order by event_time desc limit 24;";
    
	//　ロケーションの地理情報を問い合わせ
	StringBuilder cql_select_geoinfo = new StringBuilder();
	cql_select_geoinfo = cql_select_geoinfo
	//.append(" select * from bestskip_keyspace.tt_weathinfo")
	.append(" select city_name,prefecture_name")
	.append(" from bestskip_keyspace.tm_geos")
	.append(" where location_id=1c4df1c1-a136-4dd1-90d1-9518489515ca");

	//　地理情報クエリを実行する、リザルトセットを取得する
	ResultSet rs_geo = (ResultSet) cqlsession1
	.execute(cql_select_geoinfo.toString());
	
	//　データが一行しかない。リザルトセットからカラムのバリューを取得し、地理名に格納する。
	Row r1 = rs_geo.all().get(0);
	out.print(r1.getString("prefecture_name"));
	out.print(r1.getString("city_name"));

	//　天気情報と時刻シリーズダータセットを作成
	ResultSet rs = (ResultSet) cqlsession1
	.execute(cql_select_weatherinfo.toString());
	// .execute(sql1);
			
	out.println("<table border=1 cellspacing=0 cellpadding=0>");
	out.println("<tr bgcolor=ABCDEFG>");
	out.println("<td>項目NO.</td>");
	out.println("<td>天気概要</td>");
	out.println("<td>補足情報</td>");
	out.println("<td>temp気温</td>");
	out.println("<td>windspeed風速</td>");	
	out.println("<td>dt気温時刻UNIX-GMT</td>");
	out.println("<td>event_timeプログラム設定時刻</td>");
	out.println("<td>create_dateデータセット取得時刻</td>");
	out.println("</tr>");	
    int i = 1 ;
    
    ArrayList<String> tempTimeArray = new ArrayList<String>();
    ArrayList<String> windspeedTimeArray = new ArrayList<String>();
    
	for (Row r : rs.all()) {

		StringBuilder tempdata_string = new StringBuilder();
		tempdata_string = tempdata_string
		//　dtがGMT、UnixTimeですから、日本時間JSTに変換＋9時間（9✖3600秒）、更にhighchartsに用いるUTC時間に変換（ミニ秒）
		.append(" [" + String.valueOf(new Long(r.getString("dt")) + 32400) + "000,")
		//　Kelvin単位の温度を摂氏温度に変換、小数点を切り捨てる
		.append(String.valueOf(new BigDecimal(r.getFloat("temp") - 273.15).setScale(1,BigDecimal.ROUND_HALF_UP)) + "]");
		
		StringBuilder windspeedData_string = new StringBuilder();
		windspeedData_string = windspeedData_string
		//　dtがGMT、UnixTimeですから、日本時間JSTに変換＋9時間（9✖3600秒）、更にhighchartsに用いるUTC時間に変換（ミニ秒）
		.append(" [" + String.valueOf(new Long(r.getString("dt")) + 32400) + "000,")
		//　風速データを取り出す
		.append(String.valueOf(r.getFloat("windspeed")) + "]");
		
		
		// アレイシストに追加する
		tempTimeArray.add(tempdata_string.toString());
		windspeedTimeArray.add(windspeedData_string.toString());
		
		out.println("<tr>");
		out.println("<td>" + i + "</td>");
		out.println("<td>" + r.getString("weatherinfo1") + "</td>");
		out.println("<td>" + r.getString("description1") + "</td>");
		out.println("<td>" + String.valueOf(new BigDecimal(r.getFloat("temp") - 273.15).setScale(1,BigDecimal.ROUND_HALF_UP) )+ "</td>");
		out.println("<td>" + String.valueOf(r.getFloat("windspeed"))+ "</td>");
		out.println("<td>" + r.getString("dt") + "</td>");
		out.println("<td>" + r.getDate("event_time") + "</td>");
		out.println("<td>" + r.getDate("create_date") + "</td>");
		out.println("</tr>");
		i++;
		
	}
	
	out.println("</table>");
	
	cqlcluster1.close();
%>

<script type="text/javascript">

$(function () {
    $('#container').highcharts({
        chart: {
            renderTo : "container",
            type: 'line',
	        zoomType: 'x',
            backgroundColor : "white"
        	//type: 'spline',
            //zoomType: 'x',
            //spacingRight: 20
        },
        
        title: {
            text: '<%out.print(r1.getString("prefecture_name"));out.print(r1.getString("city_name"));%>気象情報'
        },
	   
        subtitle: {	    
        	text: document.ontouchstart === undefined ?
        			'Click and drag in the plot area to zoom in' :
        				'Pinch the chart to zoom in'
        },
        
        xAxis : {			
        	type : 'datetime',
        	dateTimeLabelFormats : { //たぶんseriesで与える時間データで表示が決まる
        		second : '%H:%M:%S',
        		minute : '%H:%M',
        		hour : '%m/%e %H:%M',
        		day : '%y/%m/%e',
        		week : '%y/%m/%e',
        		month : '%Y/%m',
        		year : '(%Y)'
        		
        	},			
        	title : {	
        		text : '時間'
        	}// 横軸のタイトル。nullは表示しない
        },
							
        yAxis :[ { // Primary yAxisの定義	//	2. yAxisを定義
        	lineColor : 'green',
        	lineWidth : 3,
			offset : 5,	
        	title : {	
        		text : 'Temperature',
        		style : {
        			color : 'green'
        		}		
        	},				
        	//labels: {format: '{value}°C',style: {color: '#6D869F',fontWeight: 'bold'}},
        	labels : {		
        		format : '{value}°C',
        		style : {
        			color : 'green',
        			fontWeight : 'bold'
        			}
        		},
        		opposite : false, //右側の軸false
        		alternateGridColor : 'papayawhip',
        		plotBands : [ { // ゾーンを描画（例えば安全範囲のようなゾーンを描ける）
        			from : 18,
        			to : 24,
        			color : 'rgba(68, 170, 213, 0.2)',
        			label : {
        				text : '快適気温'
        				}//説明
        		} ],	
        		plotLines : [{ // 線の描画(上限のような線を描ける）
        				value : 30,
        				color : 'red',
        				dashStyle : 'shortdash',
        				width : 1,
        				label : {
        					text : '30°Cを超える'
        					}//説明
        		}],
        	//	max : 145, // y軸の最大値。これにならない場合があるので、書かない(自動になる)ほうが良いかも
        		min : 0  // y軸の最小値。但し２軸になると有効ではなくならう
        		
        },
        { // Secondary yAxisの定義	
        	lineColor : 'orange',
        	lineWidth : 3,
			offset : 5,	
        	title : {	
        		text : '風速',
        		style : {
        			color : 'orange'
        		}		
        	},				
        	//labels: {format: '{value}°C',style: {color: '#6D869F',fontWeight: 'bold'}},
        	labels : {		
        		format : '{value}mps',
        		style : {
        			color : 'orange',
        			fontWeight : 'bold'
        			}
        		},
        		opposite : true, //右側の軸false
        		//alternateGridColor : 'yellow',
        		alternateGridColor : 'pink',
        		plotBands : [ { // ゾーンを描画（例えば安全範囲のようなゾーンを描ける）
        			from : 5,
        			to : 10,
        			color : 'rgba(68, 170, 213, 0.2)',
        			label : {
        				text : '強風帯',
        				style : {
        					color : '#F5C329',
                			fontWeight : 'bold'
                		//	text-align : ''
        				}
        			}//説明
        		} ],	
        		plotLines : [{ // 線の描画(上限のような線を描ける）
        				value : 12,
        				color : '#3A5574',
        				dashStyle : 'shortdash',
        				width : 1,
        				label : {
        					text : '台風'
        					}//説明
        		}],
        	//	max : 145, // y軸の最大値。これにならない場合があるので、書かない(自動になる)ほうが良いかも
        		min : 0  // y軸の最小値。但し２軸になると有効ではなくならう
        		
        }]
        ,
        
        series :[ {
					
        	name : '気温', // Y軸のラベル名
        	color : 'green', // nameの色
        	type : 'spline', // column棒グラフ指定の場合。lineにすると折れ線グラフになる
        	//pointInterval : 48 * 3600 * 1000, // 1日単位（ 24 * 3600 * 1000）。これ必要なのかな
        	pointStart : Date.UTC(2014, 5, 15), //開始日
        	yAxis : 0, //1番目のyAxisのデータという意味。0もしくは記載しない場合は1番目
        	data : <%out.println(tempTimeArray.toString());%>,
        	tooltip : {		//ポップアップに表示される単位指定					
        		valueSuffix : ' °C'								
        	}		
        } ,
        {
        	name : '風速',
        	color : 'orange', // nameの色
        	type : 'column', // column棒グラフ指定の場合。lineにすると折れ線グラフになる
        	//pointInterval : 48 * 3600 * 1000, // 1日単位（ 24 * 3600 * 1000）。これ必要なのかな
        	pointStart : Date.UTC(2014, 5, 15), //開始日
        	yAxis : 1, //2番目のyAxisのデータという意味。0もしくは記載しない場合は1番目
        	
        	tooltip : {		//ポップアップに表示される単位指定					
        		valueSuffix : ' mps '								
        	}		,
        	
        	data : <%out.println(windspeedTimeArray.toString());%>
        	}]

        ,plotOptions : 
        {   
        	spline : {
        		pointWidth : 2 //棒グラフの棒の幅指定//棒グラフの棒の幅指定
        	},
        	column : {
    		pointWidth : 2 //棒グラフの棒の幅指定//棒グラフの棒の幅指定
    	}
        
        } 
    });
	
	});

	document.write(
	<%rs_geo.getColumnDefinitions().toString();%>
	
	
	);
	
</script>


</head>

<body>
	<script src="./js/highcharts/highcharts.js"></script>
	<script src="./js/highcharts/exporting.js"></script>


	<p>
		<%
			out.println(tempTimeArray.toString());
		%>
	</p>
	<br>
	<p>
		<%
			out.println(windspeedTimeArray.toString());
		%>
	</p>
	


	<div id="container"
		style="min-width: 310px; height: 400px; margin: 0 auto"></div>

</body>


</html>




