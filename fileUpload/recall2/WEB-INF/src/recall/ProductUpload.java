package recall;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStreamReader;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.StringTokenizer;
import javax.servlet.http.HttpServletRequest;
import org.apache.struts2.interceptor.ServletRequestAware;

@SuppressWarnings("serial")
public class ProductUpload extends RecallSupport implements ServletRequestAware {

	private File itemImg1;
	public File getItemImg1() {
		return itemImg1;
	}

	public void setItemImg1(File itemImg1) {
		this.itemImg1 = itemImg1;
	}

	private HttpServletRequest servletRequest;

	@Override
	public void setServletRequest(HttpServletRequest arg0) {
		this.servletRequest = arg0;
	}
	
	@SuppressWarnings("resource")
	public String execute() {
		
		if (!super.isLogin()) {
			return "loginfail";
		}
		
		String filePath = servletRequest.getSession().getServletContext().getRealPath("/");
		System.out.println("Server path:" + filePath);
		
		String url = CommonConst.URL;
		String dbName = CommonConst.DB_NAME; 
		String driverName = CommonConst.DRIVER_NAME;
		String userName = CommonConst.USER_NAME;
		String password = CommonConst.PASSWORD;
		
		Connection con = null;
		Statement stmt = null;
		
		if (getItemImg1() == null || getItemImg1().getName() == null || "".equals(getItemImg1().getName())) {
			return "error";
		}
		
		ArrayList<ProductInfoBean> infoBeans = new ArrayList<ProductInfoBean>();
		try {
			BufferedReader br = new BufferedReader(new InputStreamReader(new FileInputStream(getItemImg1()),"UTF-8"));
			// 最終行まで読み込む
			String line = "";
			int i = 0;
			while ((line = br.readLine()) != null) {

				i = i + 1;
				if (i == 1) {
					continue;
				}
		        // 1行をデータの要素に分割
				StringTokenizer st = new StringTokenizer(line, ",");

				ArrayList<String> tempData = new ArrayList<String>();
		        while (st.hasMoreTokens()) {
		          // 1行の各要素をタブ区切りで表示
		          tempData.add(st.nextToken());
		        }
		        ProductInfoBean infoBean = new ProductInfoBean();
		        infoBean.setProductName(tempData.get(0));
		        infoBean.setJanCode(tempData.get(1));
		        infoBean.setRecallComment(tempData.get(2));
		        infoBean.setRecallExtStart(tempData.get(3));
		        infoBean.setRecallExtEnd(tempData.get(4));
		        infoBean.setCompanyInfo(tempData.get(5));
		        
		        infoBeans.add(infoBean);
			}
			br.close();
		} catch (Exception e) {
			e.printStackTrace();
			return "error";
		}
		try{
			Class.forName(driverName).newInstance();
			con = DriverManager.getConnection(url+dbName + "?characterEncoding=UTF-8", userName, password);
			stmt = con.createStatement();
			
			for (int i = 0; i < infoBeans.size(); i ++ ) {
				
				ProductInfoBean infoBean = infoBeans.get(i);
				
				StringBuffer deleleSql = new StringBuffer("");
				deleleSql.append("delete from tbl_recall where jan_code = '" + infoBean.getJanCode() + "' ");
				deleleSql.append("and date(recall_ext_start) = '" + infoBean.getRecallExtStart() + "' ");
				deleleSql.append("and date(recall_ext_end) = '" + infoBean.getRecallExtEnd() + "' ");
				deleleSql.append(";");
				
				System.out.println(deleleSql.toString());
				stmt.execute(deleleSql.toString());
				
				StringBuffer sql = new StringBuffer("");
				sql.append("insert into tbl_recall ");
				sql.append("(product_name, jan_code, recall_comment, recall_ext_start, recall_ext_end, company_info) ");
				sql.append("values ( ");
				sql.append("'" + infoBean.getProductName() + "', ");
				sql.append("'" + infoBean.getJanCode() + "', ");
				sql.append("'" + infoBean.getRecallComment() + "', ");
				sql.append("'" + infoBean.getRecallExtStart() + "', ");
				sql.append("'" + infoBean.getRecallExtEnd() + "', ");
				sql.append("'" + infoBean.getCompanyInfo() + "' ");
				sql.append("); ");
				System.out.println(sql.toString());
				
				int val = stmt.executeUpdate(sql.toString());
				if (val == 0) {
					return "error";
				}
			}
			
		} catch(Exception e){
			System.out.println(e.getMessage());
			return "error";
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
		return "success";
	}
	
}
