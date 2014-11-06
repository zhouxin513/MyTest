package recall;

@SuppressWarnings("serial")
public class ProductAddAll extends RecallSupport {

	public String execute() {
		if (super.isLogin()) {
			return "success";
		} else {
			return "loginfail";
		}

	}
}
