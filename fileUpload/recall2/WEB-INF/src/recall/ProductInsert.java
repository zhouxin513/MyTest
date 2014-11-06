package recall;

import java.io.File;
import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;
import javax.servlet.http.HttpServletRequest;
import org.apache.commons.io.FileUtils;
import org.apache.struts2.interceptor.ServletRequestAware;
import com.opensymphony.xwork2.ModelDriven;

public class ProductInsert extends RecallSupport implements ModelDriven<ImageUploadModel>, ServletRequestAware {
	
	private static final long serialVersionUID = 1L;

	private ImageUploadModel model = new ImageUploadModel();
	 
	private String productName;
	
	private String janCode;
	
	private String recallReason;
	
	private String recallDateStart;
	
	private String recallDateEnd;
	
	private String produsorInfo;
	
	private HttpServletRequest servletRequest;
	
	public String getProductName() {
		return productName;
	}

	public void setProductName(String productName) {
		this.productName = productName;
	}

	public String getJanCode() {
		return janCode;
	}

	public void setJanCode(String janCode) {
		this.janCode = janCode;
	}

	public String getRecallReason() {
		return recallReason;
	}

	public void setRecallReason(String recallReason) {
		this.recallReason = recallReason;
	}

	public String getRecallDateStart() {
		return recallDateStart;
	}

	public void setRecallDateStart(String recallDateStart) {
		this.recallDateStart = recallDateStart;
	}

	public String getRecallDateEnd() {
		return recallDateEnd;
	}

	public void setRecallDateEnd(String recallDateEnd) {
		this.recallDateEnd = recallDateEnd;
	}

	public String getProdusorInfo() {
		return produsorInfo;
	}

	public void setProdusorInfo(String produsorInfo) {
		this.produsorInfo = produsorInfo;
	}

	public String execute() {
		
		if (!super.isLogin()) {
			return "loginfail";
		}
		
		//file save
		String filePath = servletRequest.getSession().getServletContext().getRealPath("/");
		System.out.println("Server path:" + filePath);
		
		if (this.model.getItemImgFileName() != null && !"".equals(this.model.getItemImgFileName())) {
			File fileToCreate = new File(filePath, this.model.getItemImgFileName());
			try {
				FileUtils.copyFile(this.model.getItemImg(), fileToCreate);
			} catch (IOException e1) {
				e1.printStackTrace();
			}
		}
		
		String url = CommonConst.URL;
		String dbName = CommonConst.DB_NAME; 
		String driverName = CommonConst.DRIVER_NAME;
		String userName = CommonConst.USER_NAME;
		String password = CommonConst.PASSWORD;
		
		Connection con = null;
		Statement stmt = null;
		try{
			Class.forName(driverName).newInstance();
			con = DriverManager.getConnection(url+dbName + "?characterEncoding=UTF-8", userName, password);
			con = DriverManager.getConnection(url+dbName + "?characterEncoding=UTF-8", userName, password);
			stmt = con.createStatement();
			
//			StringBuffer sql = new StringBuffer("");
//			sql.append("insert into tbl_recall ");
//			sql.append("(product_name, jan_code, recall_comment, recall_ext_start, recall_ext_end, company_info, photo_path) ");
////			sql.append("(product_name, jan_code, recall_comment, recall_ext_start, recall_ext_end, company_info) ");
//			sql.append("values ( ");
//			sql.append("'" + this.productName + "', ");
//			sql.append("'" + this.janCode + "', ");
//			sql.append("'" + this.recallReason + "', ");
//			sql.append("'" + this.recallDateStart + "', ");
//			sql.append("'" + this.recallDateEnd + "', ");
//			sql.append("'" + this.produsorInfo + "', ");
//			sql.append("'http://192.168.1.8:8080/struts2test2/" + this.model.getItemImgFileName() + "' ");
//			sql.append("); ");
			
			String sql = "";
			sql = sql + "insert into tbl_recall ";
			sql = sql + "(product_name, jan_code, recall_comment, recall_ext_start, recall_ext_end, company_info, photo_path) ";
			sql = sql + "values ( ";
			sql = sql + "'" + this.productName + "', ";
			sql = sql + "'" + this.janCode + "', ";
			sql = sql + "'" + this.recallReason + "', ";
			sql = sql + "'" + this.recallDateStart + "', ";
			sql = sql + "'" + this.recallDateEnd + "', ";
			sql = sql + "'" + this.produsorInfo + "', ";
			sql = sql + "'http://"+ CommonConst.IMG_SERVER_IP +":8080/recall/" + this.model.getItemImgFileName() + "' ";
			sql = sql + "); ";
			System.out.println(sql.toCharArray());
			
			int val = stmt.executeUpdate(sql);
			if (val == 0) {
				return "error";
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

	@Override
	public ImageUploadModel getModel() {
		return this.model;
	}

	@Override
	public void setServletRequest(HttpServletRequest arg0) {
		this.servletRequest = arg0;
	}

}
