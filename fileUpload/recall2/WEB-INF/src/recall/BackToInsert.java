package recall;

import com.opensymphony.xwork2.ActionSupport;

@SuppressWarnings("serial")
public class BackToInsert extends ActionSupport {
	
	public String execute() {
		return "backToInsert";
		
	}
	
	public String backToUpload() {
		return "backToUpload";
		
	}

	public String backToDisplay() {
		return "backToDisplay";
		
	}
}
