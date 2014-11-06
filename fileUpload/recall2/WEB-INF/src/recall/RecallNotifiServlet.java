package recall;

import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.HashMap;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.simple.JSONObject;

@SuppressWarnings("serial")
public class RecallNotifiServlet extends HttpServlet {

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		response.setContentType("application/json;charset=UTF-8");
		HashMap<String, ArrayList<HashMap<String, String>>> json = new HashMap<String, ArrayList<HashMap<String, String>>>();
        ArrayList<HashMap<String, String>> jsonList = new ArrayList<HashMap<String, String>>();
        
        String url = CommonConst.URL;
		String dbName = CommonConst.DB_NAME; 
		String driverName = CommonConst.DRIVER_NAME;
		String userName = CommonConst.USER_NAME;
		String password = CommonConst.PASSWORD;
		
		Connection con = null;
		Statement stmt = null;
		try{
			Class.forName(driverName).newInstance();
			con = DriverManager.getConnection(url+dbName, userName, 
			password);
			stmt = con.createStatement();
			
			StringBuffer sql = new StringBuffer("");
			sql.append("select * from tbl_recall; ");
			
			ResultSet val = stmt.executeQuery(sql.toString());
			
			while (val.next()) {
				HashMap<String, String> map1 = new HashMap<String, String>();
		        map1.put("name",val.getString("product_name"));
		        map1.put("code",val.getString("jan_code"));
		        map1.put("reason",val.getString("recall_comment"));
		        map1.put("recallBegin",String.valueOf(val.getDate("recall_ext_start")));
		        map1.put("recallEnd",String.valueOf(val.getDate("recall_ext_end")));
		        map1.put("companyInfo",val.getString("company_info"));
		        map1.put("image",val.getString("photo_path"));
		        
		        jsonList.add(map1);
			}
			
		} catch(Exception e){
			System.out.println(e.getMessage());
		} finally {
			if (stmt != null) {
				try {
					stmt.close();
				} catch (SQLException e) {
					e.printStackTrace();
				}
			}
			
			if (con != null) {
				try {
					con.close();
				} catch (SQLException e) {
					e.printStackTrace();
				}
			}
		}
        
        json.put("jsonList", jsonList);
        
        System.out.println(JSONObject.toJSONString(json).getBytes("UTF-8"));
        response.getOutputStream().write(JSONObject.toJSONString(json).getBytes("UTF-8"));
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
			
		response.setContentType("application/json;charset=UTF-8");
		HashMap<String, ArrayList<HashMap<String, String>>> json = new HashMap<String, ArrayList<HashMap<String, String>>>();
        ArrayList<HashMap<String, String>> jsonList = new ArrayList<HashMap<String, String>>();
        
        String url = CommonConst.URL;
		String dbName = CommonConst.DB_NAME; 
		String driverName = CommonConst.DRIVER_NAME;
		String userName = CommonConst.USER_NAME;
		String password = CommonConst.PASSWORD;
		
		Connection con = null;
		Statement stmt = null;
		try{
			Class.forName(driverName).newInstance();
			con = DriverManager.getConnection(url+dbName, userName, 
			password);
			stmt = con.createStatement();
			
			StringBuffer sql = new StringBuffer("");
			sql.append("select * from tbl_recall where ");
			sql.append(" recall_ext_start <= CURRENT_DATE() ");
			sql.append("and recall_ext_end >= CURRENT_DATE(); ");
			
			ResultSet val = stmt.executeQuery(sql.toString());
			
			while (val.next()) {
				HashMap<String, String> map1 = new HashMap<String, String>();
		        map1.put("name",val.getString("product_name"));
		        map1.put("code",val.getString("jan_code"));
		        map1.put("reason",val.getString("recall_comment"));
		        map1.put("recallBegin",String.valueOf(val.getDate("recall_ext_start")));
		        map1.put("recallEnd",String.valueOf(val.getDate("recall_ext_end")));
		        map1.put("companyInfo",val.getString("company_info"));
		        map1.put("image",val.getString("photo_path"));
		        
		        jsonList.add(map1);
			}
			
		} catch(Exception e){
			System.out.println(e.getMessage());
		} finally {
			if (stmt != null) {
				try {
					stmt.close();
				} catch (SQLException e) {
					e.printStackTrace();
				}
			}
			
			if (con != null) {
				try {
					con.close();
				} catch (SQLException e) {
					e.printStackTrace();
				}
			}
		}
        
        json.put("jsonList", jsonList);
        
        System.out.println(JSONObject.toJSONString(json).getBytes("UTF-8"));
        response.getOutputStream().write(JSONObject.toJSONString(json).getBytes("UTF-8"));

	}

}
