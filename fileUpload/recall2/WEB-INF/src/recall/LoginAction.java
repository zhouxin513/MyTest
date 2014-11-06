package recall;

import java.util.ArrayList;
import javax.servlet.http.HttpSession;
import org.apache.struts2.ServletActionContext;

@SuppressWarnings("serial")
public class LoginAction extends RecallSupport {

	private String username;
    private String password;

	/**
	 * アイテムを保持します。
	 */
	public ArrayList<ProductInfoBean> itemList = new ArrayList<ProductInfoBean>();

    public ArrayList<ProductInfoBean> getItemList() {
		return itemList;
	}

	public void setItemList(ArrayList<ProductInfoBean> itemList) {
		this.itemList = itemList;
	}

	public String execute() {

		String testString =ServletActionContext.getRequest().getHeader("User-Agent");;

		System.out.println(testString);

        if (this.username.equals(getText("login.userid"))
                && this.password.equals(getText("login.password"))) {

        	HttpSession httpSession = ServletActionContext.getRequest().getSession();
    		httpSession.setAttribute(CommonConst.LOGIN_FLAG,true);

            return "success";
        } else {
        	HttpSession httpSession = ServletActionContext.getRequest().getSession();
    		httpSession.setAttribute(CommonConst.LOGIN_FLAG,false);
            return "error";
        }
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public int getItemCount() {
    	// jspから<s:property value="itemCount" />で参照可能。
        return this.itemList.size();
    }
}
