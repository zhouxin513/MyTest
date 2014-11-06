package recall;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;
import javax.servlet.http.HttpSession;
import org.apache.struts2.ServletActionContext;
import com.opensymphony.xwork2.ModelDriven;

@SuppressWarnings("serial")
public class ProductDelete extends RecallSupport implements ModelDriven<ProductInfoBean> {
	
	private String oper; 
	
	public String ids;
	public void setIds(String ids) {
		this.ids = ids;
	}

	public String getIds() {
		return ids;
	}

	ProductInfoBean infoBean = new ProductInfoBean();
	
	/**
	 * アイテムを保持します。
	 */
	private List<ProductInfoBean> items = new ArrayList<ProductInfoBean>();

	public List<ProductInfoBean> getItems() {
		return items;
	}

	public void setItems(List<ProductInfoBean> items) {
		this.items = items;
	}

	public String execute() {

		System.out.println(items.size());
		System.out.println(oper);
		System.out.println(ids);
		if (!super.isLogin()) {
			return "loginfail";
		}
		
		String[] idStrings = ids.split(",");
		
		if ((idStrings.length == 1 && "".equals(idStrings[0]))) {
			return "error";
		}

		HttpSession httpSession = ServletActionContext.getRequest()
				.getSession();

		ArrayList<ProductInfoBean> itemList = new ArrayList<ProductInfoBean>();
		itemList = (ArrayList<ProductInfoBean>) httpSession
				.getAttribute(CommonConst.SELECTED_DATA);

		String url = CommonConst.URL;
		String dbName = CommonConst.DB_NAME;
		String driverName = CommonConst.DRIVER_NAME;
		String userName = CommonConst.USER_NAME;
		String password = CommonConst.PASSWORD;

		Connection con = null;
		Statement stmt = null;
		try {
			
			Class.forName(driverName).newInstance();
			con = DriverManager.getConnection(url + dbName, userName, password);
			stmt = con.createStatement();
			
			for (int i = 0; i < idStrings.length; i ++) {
				ProductInfoBean bean = itemList.get(Integer.valueOf(idStrings[i]) - 1);
				
				StringBuffer sql = new StringBuffer("");
				sql.append("delete from tbl_recall ");
				sql.append("where jan_code = '" + bean.getJanCode() + "' ");
				sql.append("and date(recall_ext_start) = '" + bean.getRecallExtStart() + "' ");
				sql.append("and date(recall_ext_end) = '" + bean.getRecallExtEnd() + "' ");
				sql.append(";");
			
				System.out.println(sql.toString());
				stmt.execute(sql.toString());
				
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
		 
		 return "success";
	 }

	@Override
	public ProductInfoBean getModel() {
		return infoBean;
	}
	public String getOper() {
		return oper;
	}

	public void setOper(String oper) {
		this.oper = oper;
	}
	
	public ProductInfoBean getInfoBean() {
		return infoBean;
	}

	public void setInfoBean(ProductInfoBean infoBean) {
		this.infoBean = infoBean;
	}
}
