/*
 * Generated by the Jasper component of Apache Tomcat
 * Version: Apache Tomcat/7.0.54
 * Generated at: 2014-09-19 09:46:50 UTC
 * Note: The last modified time of this file was set to
 *       the last modified time of the source file after
 *       generation to assist with modification tracking.
 */
package org.apache.jsp.jsp;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;

public final class upload_005fQueueWidget_005fzip_jsp extends org.apache.jasper.runtime.HttpJspBase
    implements org.apache.jasper.runtime.JspSourceDependent {

  private static final javax.servlet.jsp.JspFactory _jspxFactory =
          javax.servlet.jsp.JspFactory.getDefaultFactory();

  private static java.util.Map<java.lang.String,java.lang.Long> _jspx_dependants;

  private javax.el.ExpressionFactory _el_expressionfactory;
  private org.apache.tomcat.InstanceManager _jsp_instancemanager;

  public java.util.Map<java.lang.String,java.lang.Long> getDependants() {
    return _jspx_dependants;
  }

  public void _jspInit() {
    _el_expressionfactory = _jspxFactory.getJspApplicationContext(getServletConfig().getServletContext()).getExpressionFactory();
    _jsp_instancemanager = org.apache.jasper.runtime.InstanceManagerFactory.getInstanceManager(getServletConfig());
  }

  public void _jspDestroy() {
  }

  public void _jspService(final javax.servlet.http.HttpServletRequest request, final javax.servlet.http.HttpServletResponse response)
        throws java.io.IOException, javax.servlet.ServletException {

    final javax.servlet.jsp.PageContext pageContext;
    javax.servlet.http.HttpSession session = null;
    final javax.servlet.ServletContext application;
    final javax.servlet.ServletConfig config;
    javax.servlet.jsp.JspWriter out = null;
    final java.lang.Object page = this;
    javax.servlet.jsp.JspWriter _jspx_out = null;
    javax.servlet.jsp.PageContext _jspx_page_context = null;


    try {
      response.setContentType("text/html; charset=UTF-8");
      pageContext = _jspxFactory.getPageContext(this, request, response,
      			null, true, 8192, true);
      _jspx_page_context = pageContext;
      application = pageContext.getServletContext();
      config = pageContext.getServletConfig();
      session = pageContext.getSession();
      out = pageContext.getOut();
      _jspx_out = out;

      out.write("\n");
      out.write("<html>\n");
      out.write("<head>\n");
      out.write("<title>JQuery Multiple FileUpload test by Plupload</title>\n");
      out.write("<link rel=\"stylesheet\" type=\"text/css\" href=\"../plupload/jquery.plupload.queue/css/jquery.plupload.queue.css\"\n");
      out.write("      type=\"text/css\" media=\"screen\"/>\n");
      out.write("\n");
      out.write("<script type=\"text/javascript\" src=\"jquery/js/jquery-1.11.0.min.js\"></script>\n");
      out.write("<script type=\"text/javascript\" src=\"../plupload/plupload.full.js\"></script>\n");
      out.write("<script type=\"text/javascript\" src=\"../plupload/jquery.plupload.queue/jquery.plupload.queue.js\"></script>\n");
      out.write("<script type=\"text/javascript\" src=\"../plupload/i18n/cn.js\"></script>\n");
      out.write("<script src=\"js/dragNdrop.js\" type=\"text/javascript\"></script>\n");
      out.write("<style type=\"text/css\">\n");
      out.write("\n");
      out.write("\n");
      out.write("    #itemDiv {\n");
      out.write("        /*position: relative;\n");
      out.write("        top: 20px;\n");
      out.write("        width: 690px;\n");
      out.write("        margin: 0px auto;\n");
      out.write("        border: solid 1px #4d90fe;\n");
      out.write("        color: #fff;\n");
      out.write("        */\n");
      out.write("\n");
      out.write("        position: absolute;\n");
      out.write("        top: 370px;\n");
      out.write("        left: 8px;\n");
      out.write("        bottom: 0px;\n");
      out.write("        margin: 0px auto;\n");
      out.write("        width: 690px;\n");
      out.write("        border: solid 1px #4d90fe;\n");
      out.write("        border-radius: 6px;\n");
      out.write("        color: #fff;\n");
      out.write("\n");
      out.write("    }\n");
      out.write("\n");
      out.write("    #clear-btn {\n");
      out.write("        position: relative;\n");
      out.write("        left: 10px;\n");
      out.write("        top: 5px;\n");
      out.write("        height: 26px;\n");
      out.write("        width: 92px;\n");
      out.write("        font-size: 12px;\n");
      out.write("        cursor: pointer;\n");
      out.write("        background-color: #47a447;\n");
      out.write("        border-radius: 3px;\n");
      out.write("        border: 1px solid #398439;\n");
      out.write("    }\n");
      out.write("\n");
      out.write("    #clear-btn:hover, #clear-btn:focus {\n");
      out.write("        color: #333;\n");
      out.write("        text-decoration: none;\n");
      out.write("    }\n");
      out.write("\n");
      out.write("    h4 {\n");
      out.write("        position: relative;\n");
      out.write("        top: -2px;\n");
      out.write("        left: 10px;\n");
      out.write("        height: 20px;\n");
      out.write("        font: bold;\n");
      out.write("        color: #ffffff;\n");
      out.write("\n");
      out.write("    }\n");
      out.write("\n");
      out.write("    #select-btn {\n");
      out.write("        position: absolute;\n");
      out.write("        top: 50px;\n");
      out.write("        left: 10px;\n");
      out.write("        width: 77px;\n");
      out.write("        height: 26px;\n");
      out.write("        background-color: #4D90FE;\n");
      out.write("        border: 1px solid #3079ED;\n");
      out.write("        color: #fff;\n");
      out.write("        cursor: pointer;\n");
      out.write("        border-radius: 3px;\n");
      out.write("    }\n");
      out.write("\n");
      out.write("    #radioDiv {\n");
      out.write("        position: absolute;\n");
      out.write("        top: 85px;\n");
      out.write("        left: 10px;\n");
      out.write("        bottom: 0px;\n");
      out.write("        right: 10px;\n");
      out.write("        margin: 0px auto;\n");
      out.write("        border: solid 1px #4d90fe;\n");
      out.write("        color: #fff;\n");
      out.write("        background: #000f05;\n");
      out.write("        min-height: 100px;\n");
      out.write("        height: auto !important;\n");
      out.write("    }\n");
      out.write("\n");
      out.write("    label[for] {\n");
      out.write("        /*position: absolute;\n");
      out.write("        left: 0px;*/\n");
      out.write("        padding-bottom: 10px;\n");
      out.write("        clear: none;\n");
      out.write("        color: #ffffff;\n");
      out.write("    }\n");
      out.write("\n");
      out.write("\n");
      out.write("</style>\n");
      out.write("<script type=\"text/javascript\">\n");
      out.write("\n");
      out.write("    //  Convert divs to queue widgets when the DOM is ready\n");
      out.write("    $(function () {\n");
      out.write("        function plupload() {\n");
      out.write("\n");
      out.write("            $(\"#uploader\").pluploadQueue({\n");
      out.write("                // General settings\n");
      out.write("                runtimes: 'html5,gears,browserplus,silverlight,flash,html4',\n");
      out.write("                // use FileUpload action as url to upload files setting in struts.xml\n");
      out.write("                // Fake server response here\n");
      out.write("                url: 'ProjectUpload.action',\n");
      out.write("\n");
      out.write("                // rename : true,\n");
      out.write("                dragdrop: true,\n");
      out.write("                // unique_names : true,\n");
      out.write("                chunk_size: '2mb',\n");
      out.write("\n");
      out.write("                filters: {\n");
      out.write("                    // Maximum file size\n");
      out.write("                    max_file_size: '10mb',\n");
      out.write("                    // Specify what files to browse for\n");
      out.write("                    mime_types: [\n");
      out.write("                        /*  {\n");
      out.write("                         title: \"Image files\",\n");
      out.write("                         extensions: \"jpg,gif,png\"\n");
      out.write("                         }, \n");
      out.write("                        {\n");
      out.write("                            title: \"Jsp files\",\n");
      out.write("                            extensions: \"jsp,html,htm\"\n");
      out.write("                        }\n");
      out.write("                        ,    */\n");
      out.write("                         {\n");
      out.write("                         title: \"Zip files\",\n");
      out.write("                         extensions: \"zip\"\n");
      out.write("                         } \n");
      out.write("                    ]\n");
      out.write("                },\n");
      out.write("\n");
      out.write("                // Resize images on clientside if we can\n");
      out.write("                resize: {\n");
      out.write("                    width: 320,\n");
      out.write("                    height: 240,\n");
      out.write("                    quality: 90,\n");
      out.write("                    crop: true    // crop to exact dimensions\n");
      out.write("                },\n");
      out.write("\n");
      out.write("                // Flash settings\n");
      out.write("                flash_swf_url: '../plupload/plupload.flash.swf',\n");
      out.write("                // Silverlight settings\n");
      out.write("                silverlight_xap_url: '../plupload/plupload.silverlight.xap',\n");
      out.write("\n");
      out.write("                multipart_params: {\n");
      out.write("                    'user': 'BestSkip.com',\n");
      out.write("                    'time': '2014-08-10'\n");
      out.write("                },\n");
      out.write("\n");
      out.write("                /* // PreInit events, bound before any internal events\n");
      out.write("                 preinit : {\n");
      out.write("                 Init: function(up, info) {\n");
      out.write("                 log('[Init]', 'Info:', info, 'Features:', up.features);\n");
      out.write("                 },\n");
      out.write("\n");
      out.write("                 UploadFile: function(up, file) {\n");
      out.write("                 log('[UploadFile]', file);\n");
      out.write("\n");
      out.write("                 // You can override settings before the file is uploaded\n");
      out.write("                 // up.setOption('url', 'upload.php?id=' + file.id);\n");
      out.write("                 // up.setOption('multipart_params', {param1 : 'value1', param2 : 'value2'});\n");
      out.write("                 }\n");
      out.write("                 },\n");
      out.write("                 */\n");
      out.write("\n");
      out.write("                // Post init events, bound after the internal events\n");
      out.write("                init: {\n");
      out.write("\n");
      out.write("                    FileUploaded: function (up, file, info) {\n");
      out.write("                        // Called when file has finished uploading\n");
      out.write("                        //alert(\"fileUploaded\");\n");
      out.write("                        // xmlhttprequest帰ってきたresponseTextを処理する\n");
      out.write("                        \n");
      out.write("                        //alert(info.response);\n");
      out.write("                        var result = info.response;\n");
      out.write("                        //alert(\"FileUploaded 完了 11111111\");\n");
      out.write("                        \n");
      out.write("                        var obj = jQuery.parseJSON(result);\n");
      out.write("                        //alert(obj.jsondata[0].fileUrl);\n");
      out.write("                       \n");
      out.write("                        //var txt = \"\";\n");
      out.write("                        for(var i = 0 ; i < obj.jsondata.length ; i++) {\n");
      out.write("\n");
      out.write("                            var fileUrlTxt = obj.jsondata[i].fileUrl;\n");
      out.write("                            var fileNameTxt = obj.jsondata[i].fileName;\n");
      out.write("                           // alert(fileUrlTxt);\n");
      out.write("\n");
      out.write("\n");
      out.write("                            //　アップロードしたファイル一覧表示する、ラジオグループとして表示する\n");
      out.write("                            var radioItem = document.createElement(\"input\");\n");
      out.write("                            radioItem.type = \"radio\";\n");
      out.write("                            radioItem.name = \"radioGrp\";\n");
      out.write("                            //radioItem.id = \"rad1\";\n");
      out.write("                            radioItem.value = fileUrlTxt;\n");
      out.write("\n");
      out.write("\n");
      out.write("                            // ラジオボタンにテキストラベルを作成\n");
      out.write("                            var lableElement = document.createElement(\"Label\");\n");
      out.write("                            lableElement.setAttribute(\"for\", radioItem);\n");
      out.write("                            // lableElement.color(\"#000f05\");\n");
      out.write("\n");
      out.write("                            var txtNode = document.createTextNode(fileNameTxt);\n");
      out.write("                            lableElement.appendChild(txtNode);\n");
      out.write("                            //lableElement.insertBefore(radioItem,textElement);\n");
      out.write("\n");
      out.write("                            //　フォームのchildNodeの「select-btn」の前にラジオボタンを追加\n");
      out.write("                            var targetDiv = document.getElementById(\"radioDiv\");\n");
      out.write("                            targetDiv.appendChild(lableElement);\n");
      out.write("                            //targetDiv.insertBefore(radioItem,brItem);\n");
      out.write("                            lableElement.insertBefore(radioItem, txtNode);\n");
      out.write("\n");
      out.write("                            //　ラベルの前に改行を入れる\n");
      out.write("                            var brItem = document.createElement(\"br\");\n");
      out.write("                            targetDiv.insertBefore(brItem, lableElement);\n");
      out.write("                        }\n");
      out.write("                    },\n");
      out.write("\n");
      out.write("                    UploadComplete: function (up, files) {\n");
      out.write("                        // Called when all files are either uploaded or failed\n");
      out.write("                        //log('[UploadComplete]');\n");
      out.write("                        //alert(\"upload 完了22222\");\n");
      out.write("                        // document.getElementById(\"filelist\").innerHTML=\"test test\";\n");
      out.write("                    }\n");
      out.write("                }//int over\n");
      out.write("            });\n");
      out.write("        }\n");
      out.write("\n");
      out.write("        plupload();\n");
      out.write("\n");
      out.write("        // pluploadのWidgetをリセットする、ラジオ内容を全部消します。\n");
      out.write("        $('#clear-btn').click(function () {\n");
      out.write("            plupload();\n");
      out.write("            $('#radioDiv').empty();\n");
      out.write("        });\n");
      out.write("\n");
      out.write("        // radioボタンをクリックするときのファンクション、選択したファイルのURLを取得し、親Windowのiframeにてページを表示する。選択されてなければ警告が出る。\n");
      out.write("        $('#select-btn').click(function () {\n");
      out.write("            if (!$(\"input:radio[name='radioGrp']:checked\").val()) {\n");
      out.write("                alert(\"Uploaded fileが未選択\");\n");
      out.write("            } else {\n");
      out.write("                var src = $(\"input:radio[name='radioGrp']:checked\").val();\n");
      out.write("                //alert(src);\n");
      out.write("                window.opener.loadPage(src);\n");
      out.write("            }\n");
      out.write("        });\n");
      out.write("\n");
      out.write("\n");
      out.write("    });\n");
      out.write("\n");
      out.write("\n");
      out.write("\n");
      out.write("</script>\n");
      out.write("\n");
      out.write("</head>\n");
      out.write("\n");
      out.write("<body>\n");
      out.write("<div style=\" position:absolute;bottom: 0px;top: 0px\">\n");
      out.write("    <section style=\"width: 700px; position:relative; margin: 0px auto\">\n");
      out.write("        <form id=\"formId\" action=\"Submit.action\" method=\"post\">\n");
      out.write("\n");
      out.write("            <div id=\"uploader\">\n");
      out.write("                <!-- This specific div will be replaced with the jQuery uploader queue widget.\n");
      out.write("                 It will automatically check for different runtimes in the configured order,\n");
      out.write("                 if it fails it will not convert the specified element. -->\n");
      out.write("                <p>Your browser doesn't have Flash, Silverlight or HTML5\n");
      out.write("                    support.</p>\n");
      out.write("            </div>\n");
      out.write("            <input type=\"button\" value=\"reset upload\" id=\"clear-btn\"/>\n");
      out.write("        </form>\n");
      out.write("    </section>\n");
      out.write("\n");
      out.write("\n");
      out.write("    <!-- test source -->\n");
      out.write("\n");
      out.write("    <section id=\"itemDiv\">\n");
      out.write("        <header>\n");
      out.write("            <div style=\"position:absolute;left:0px;top:0px;right:0px;height:40px;background-color: #808080\">\n");
      out.write("                <h4>Uploaded File List</h4>\n");
      out.write("            </div>\n");
      out.write("        </header>\n");
      out.write("        <div>\n");
      out.write("            <form id=\"filelist\">\n");
      out.write("                <div id=\"\">\n");
      out.write("                    <input type=\"button\" value=\"選択\" id=\"select-btn\"/>\n");
      out.write("                </div>\n");
      out.write("                <div id=\"radioDiv\">\n");
      out.write("                </div>\n");
      out.write("\n");
      out.write("            </form>\n");
      out.write("        </div>\n");
      out.write("    </section>\n");
      out.write("\n");
      out.write("</div>\n");
      out.write("\n");
      out.write("</body>\n");
      out.write("\n");
      out.write("</html>");
    } catch (java.lang.Throwable t) {
      if (!(t instanceof javax.servlet.jsp.SkipPageException)){
        out = _jspx_out;
        if (out != null && out.getBufferSize() != 0)
          try { out.clearBuffer(); } catch (java.io.IOException e) {}
        if (_jspx_page_context != null) _jspx_page_context.handlePageException(t);
        else throw new ServletException(t);
      }
    } finally {
      _jspxFactory.releasePageContext(_jspx_page_context);
    }
  }
}
