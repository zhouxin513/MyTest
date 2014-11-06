package recall;

import com.opensymphony.xwork2.ActionSupport;

@SuppressWarnings("serial")
public class BackToDisplay extends ActionSupport {
	
	public String backToInsert() {
		return "backToInsert";
		
	}
	
	public String backToUpload() {
		return "backToUpload";
		
	}

	public String execute() {
		return "backToDisplay";
		
	}
}
