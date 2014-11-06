package recall;

import com.opensymphony.xwork2.ActionSupport;

@SuppressWarnings("serial")
public class BackToUpload extends ActionSupport {
	
	public String backToInsert() {
		return "backToInsert";
		
	}
	
	public String execute() {
		return "backToUpload";
		
	}

	public String backToDisplay() {
		return "backToDisplay";
		
	}

}
