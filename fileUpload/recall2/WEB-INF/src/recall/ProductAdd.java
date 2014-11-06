package recall;

@SuppressWarnings("serial")
public class ProductAdd extends RecallSupport {
	
	/**
	 * アイテムを保持します。
	 */
	private ProductInfoBean[] items;

	public ProductInfoBean[] getItems() {
		return items;
	}

	public void setItems(ProductInfoBean[] items) {
		this.items = items;
	}
	
	public String execute() {
		if (super.isLogin()) {
			return "success";
		} else {
			return "loginfail";
		}

	}

}
