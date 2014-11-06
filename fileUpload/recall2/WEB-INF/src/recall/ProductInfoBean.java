package recall;

import java.io.Serializable;

@SuppressWarnings("serial")
public class ProductInfoBean implements Serializable {
	
	private String productName;
	private String janCode;
	private String recallComment;
	private String recallExtStart;
	private String recallExtEnd;
	private String companyInfo;
	private String photoPath;
	
	public String getProductName() {
		return productName;
	}
	public void setProductName(String productName) {
		this.productName = productName;
	}
	public String getJanCode() {
		return janCode;
	}
	public void setJanCode(String janCode) {
		this.janCode = janCode;
	}
	public String getRecallComment() {
		return recallComment;
	}
	public void setRecallComment(String recallComment) {
		this.recallComment = recallComment;
	}
	public String getRecallExtStart() {
		return recallExtStart;
	}
	public void setRecallExtStart(String recallExtStart) {
		this.recallExtStart = recallExtStart;
	}
	public String getRecallExtEnd() {
		return recallExtEnd;
	}
	public void setRecallExtEnd(String recallExtEnd) {
		this.recallExtEnd = recallExtEnd;
	}
	public String getCompanyInfo() {
		return companyInfo;
	}
	public void setCompanyInfo(String companyInfo) {
		this.companyInfo = companyInfo;
	}
	public String getPhotoPath() {
		return photoPath;
	}
	public void setPhotoPath(String photoPath) {
		this.photoPath = photoPath;
	}

}
