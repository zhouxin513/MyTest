package recall;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;

import javax.servlet.http.HttpSession;

import org.apache.struts2.ServletActionContext;

//import org.apache.struts2.convention.annotation.Actions;
//import org.apache.struts2.convention.annotation.ParentPackage;
//import org.apache.struts2.convention.annotation.Result;

import com.opensymphony.xwork2.ActionSupport;

@SuppressWarnings("serial")
//@ParentPackage(value = "recall")
//@Result(type = "json")
public class ProductListGet extends RecallSupport {

	/**
	 * アイテムを保持します。
	 */
	public ArrayList<ProductInfoBean> itemList = new ArrayList<ProductInfoBean>();
	
	//get how many rows we want to have into the grid - rowNum attribute in the grid
	private Integer rows = 0;

	//Get the requested page. By default grid sets this to 1.
	private Integer page = 0;
	
	// sorting order - asc or desc
	private String sord;
	
	// get index row - i.e. user click to sort.
	private String sidx;
	
	// Search Field
	private String searchField;
	
	// The Search String
	private String searchString;
	
	// he Search Operation ['eq','ne','lt','le','gt','ge','bw','bn','in','ni','ew','en','cn','nc']
	private String  searchOper;
	
	// Your Total Pages
	private Integer total = 0;
	
	// All Record
	private Integer records = 0;
	
   public ArrayList<ProductInfoBean> getItemList() {
		return itemList;
	}

	public void setItemList(ArrayList<ProductInfoBean> itemList) {
		this.itemList = itemList;
	}
	
	public String execute() {
		
		if (!super.isLogin()) {
			return "loginfail";
		}
		
		int to = (rows * page);
	    int from = to - rows;
		
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
 			
 			String orderName = "jan_code";
 			
 			if ("janCode".equals(sidx)) {
 				orderName = "jan_code";
 			} else if ("productName".equals(sidx)) {
 				orderName = "product_name";
 			} else if ("recallExtStart".equals(sidx)) {
 				orderName = "recall_ext_start";
 			} else if ("recallExtEnd".equals(sidx)) {
 				orderName = "recall_ext_end";
 			}
 			
 			StringBuffer sql = new StringBuffer("");
 			sql.append("select * from tbl_recall ");
 			sql.append("order by " + orderName + " " + sord + " ");
 			sql.append("LIMIT " + from + ", " + to + " ");
 			
 			sql.append(";");
 			
 			System.out.println(sql.toString());
 			ResultSet val = stmt.executeQuery(sql.toString());
 			
 			while (val.next()) {
 				ProductInfoBean infoBean = new ProductInfoBean();
 				infoBean.setCompanyInfo(val.getString("company_info"));
 				infoBean.setJanCode(val.getString("jan_code"));
 				infoBean.setPhotoPath(val.getString("photo_path"));
 				infoBean.setProductName(val.getString("product_name"));
 				infoBean.setRecallComment(val.getString("recall_comment"));
 				infoBean.setRecallExtStart(String.valueOf(val.getDate("recall_ext_start")));
 				infoBean.setRecallExtEnd(String.valueOf(val.getDate("recall_ext_end")));
 				itemList.add(infoBean);
 			}
 			
 			HttpSession httpSession = ServletActionContext.getRequest().getSession();
 			httpSession.setAttribute(CommonConst.SELECTED_DATA, itemList);
    	
 			sql = new StringBuffer("");
 			sql.append("select count(*) from tbl_recall ");
 			sql.append(";");
 			System.out.println(sql.toString());
 			val = stmt.executeQuery(sql.toString());
 			
 			while (val.next()) {
 				records = val.getInt(1);
 			}
 			
 			total =(int) Math.ceil((double)records / (double)rows);
 			
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
        return SUCCESS;
    }
	
	public String getJSON() {
	    return SUCCESS;
	}
	

	public Integer getRows() {
		return rows;
	}

	public void setRows(Integer rows) {
		this.rows = rows;
	}

	public Integer getPage() {
		return page;
	}

	public void setPage(Integer page) {
		this.page = page;
	}

	public String getSord() {
		return sord;
	}

	public void setSord(String sord) {
		this.sord = sord;
	}

	public String getSidx() {
		return sidx;
	}

	public void setSidx(String sidx) {
		this.sidx = sidx;
	}

	public String getSearchField() {
		return searchField;
	}

	public void setSearchField(String searchField) {
		this.searchField = searchField;
	}

	public String getSearchString() {
		return searchString;
	}

	public void setSearchString(String searchString) {
		this.searchString = searchString;
	}

	public String getSearchOper() {
		return searchOper;
	}

	public void setSearchOper(String searchOper) {
		this.searchOper = searchOper;
	}

	public Integer getTotal() {
		return total;
	}

	public void setTotal(Integer total) {
		this.total = total;
	}

	public Integer getRecords() {
		return records;
	}

	public void setRecords(Integer records) {
		this.records = records;
	}
}
