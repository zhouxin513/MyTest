package com.bestskip.tool.converter;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;

import com.opensymphony.xwork2.ActionSupport;

public class CreateTemplateAction extends ActionSupport {

	/**
		   * 
		   */
	private static final long serialVersionUID = 1L;

	private String htmlsource;
	public String getHtmlsource() {
		return htmlsource;
	}
	public void setHtmlsource(String htmlsource) {
		this.htmlsource = htmlsource;
	}

	public String execute() {
		System.out.println("-originla----------------------------------------------------------------------");
		System.out.println(htmlsource);
		String filepath = "C:/Users/bestskip/git/MyTest/DragTest/test01/sample.html";
		
		File sampleFile = new File(filepath);
		if(sampleFile.exists()){
			delete(sampleFile);
			
		}
				
		try {
		    PrintWriter fp = new PrintWriter(new BufferedWriter(new FileWriter(
					filepath)));
			fp.print("<html>"+"\n");
			fp.print(htmlsource);
			fp.print("</html>"+"\n");
			fp.close();
			System.out.println("-END--END--------------------------------------------------------------------");
			System.out.println(fp.toString());
			
		} catch (IOException e) {
			// TODO 自動生成された catch ブロック
			e.printStackTrace();
		}
			
		return SUCCESS;
		
	}
    
 // 再帰的にファイルやディレクトリを削除する
 	private void delete(File f) {
 		/*
 		 * if( f.exists()==false ){ return ; }
 		 */
 		if (f.isFile()) {
 			f.delete();
 		}
 		// ディレクトリを再帰的に削除する
 		if (f.isDirectory()) {
 			File[] files = f.listFiles();
 			for (int i = 0; i < files.length; i++) {
 				delete(files[i]);
 			}
 			f.delete();
 		}
 	}
    
    

}
