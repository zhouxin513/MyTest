package recall;

import com.opensymphony.xwork2.ActionSupport;

@SuppressWarnings("serial")
public class CommonConst extends ActionSupport {
	
	public static String SERVER_IP = "";
	public static String IMG_SERVER_IP = "";
	public static String SERVER_PORT = "";
	public static String URL = "";
	public static String DB_NAME = "";
	public static String DRIVER_NAME = "";
	public static String USER_NAME = "";
	public static String PASSWORD = "";
	public static String LOGIN_FLAG = "login_flag";
	public static String SELECTED_DATA = "select_data";
	private static CommonConst const1 = new CommonConst();
	
	public CommonConst() {
		IMG_SERVER_IP = getText("image.server.ip");
		SERVER_IP = getText("mysql.server.ip");
		SERVER_PORT = getText("mysql.server.port");
		URL = "jdbc:mysql://" + SERVER_IP + ":" + SERVER_PORT + "/";
		DB_NAME = getText("mysql.db.dbname");
		DRIVER_NAME = "org.gjt.mm.mysql.Driver";
		USER_NAME = getText("mysql.db.username");
		PASSWORD = getText("mysql.db.password");
	}
	
}
