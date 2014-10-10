package backup;

import java.io.*;
import java.sql.Connection;
import java.sql.Statement;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.struts2.interceptor.ServletRequestAware;
import org.apache.struts2.interceptor.ServletResponseAware;



public class FileUploadAction_backu extends ExampleSupport implements ServletRequestAware , ServletResponseAware { 
	

	private File uploadFile;
	
	public File getUploadFile() {
		return uploadFile;
	}

	public void setUploadFile(File uploadFile) {
		this.uploadFile = uploadFile;
	}
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	private HttpServletRequest servletRequest;
	
	private HttpServletResponse response ;
	
    /**
     * @throws IOException 
     * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
     * 
     */
	public String executePost() {
		
		String filePath = servletRequest.getSession().getServletContext().getRealPath("/");
		System.out.println("Server path:" + filePath);
		
		Connection con = null;
		Statement stmt = null;
		
		if (getUploadFile() == null || getUploadFile().getName() == null || "".equals(getUploadFile().getName())) {
			return "error";
		}
		
		try {
			BufferedReader br = new BufferedReader(new InputStreamReader(new FileInputStream(getUploadFile()),"UTF-8"));
			// 最終行まで読み込む
			String line = "";
			int i = 0;
			while ((line = br.readLine()) != null) {

				i = i + 1;
				if (i == 1) {
					continue;
				}
			}
			br.close();
		} catch (Exception e) {
			e.printStackTrace();
			return "error";
		}
		
		return "success";

	}

	@Override
	public void setServletRequest(HttpServletRequest arg0) {
		this.servletRequest = arg0;
	}
	
	public void setServletResponse(HttpServletResponse response) {
		this.response = response;
	}
}