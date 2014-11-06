package recall;

import java.io.File;
import java.io.Serializable;

public class ImageUploadModel implements Serializable {

	private static final long serialVersionUID = 1L;
	private File itemImg;
	private String itemImgContentType; //←使わなかったら無くてもOK
	private String itemImgFileName; //←使わなかったら無くてもOK
	private String fileCaption; //←使わなかったら無くてもOK
	public File getItemImg() {
		return itemImg;
	}
	public void setItemImg(File itemImg) {
		this.itemImg = itemImg;
	}
	public String getItemImgContentType() {
		return itemImgContentType;
	}
	public void setItemImgContentType(String itemImgContentType) {
		this.itemImgContentType = itemImgContentType;
	}
	public String getItemImgFileName() {
		return itemImgFileName;
	}
	public void setItemImgFileName(String itemImgFileName) {
		this.itemImgFileName = itemImgFileName;
	}
	public String getFileCaption() {
		return fileCaption;
	}
	public void setFileCaption(String fileCaption) {
		this.fileCaption = fileCaption;
	}
	  
}
