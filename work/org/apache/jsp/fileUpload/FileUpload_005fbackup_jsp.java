/*
 * Generated by the Jasper component of Apache Tomcat
 * Version: Apache Tomcat/7.0.54
 * Generated at: 2014-10-06 04:37:25 UTC
 * Note: The last modified time of this file was set to
 *       the last modified time of the source file after
 *       generation to assist with modification tracking.
 */
package org.apache.jsp.fileUpload;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;

public final class FileUpload_005fbackup_jsp extends org.apache.jasper.runtime.HttpJspBase
    implements org.apache.jasper.runtime.JspSourceDependent {

  private static final javax.servlet.jsp.JspFactory _jspxFactory =
          javax.servlet.jsp.JspFactory.getDefaultFactory();

  private static java.util.Map<java.lang.String,java.lang.Long> _jspx_dependants;

  private org.apache.jasper.runtime.TagHandlerPool _005fjspx_005ftagPool_005fs_005fform_0026_005fmethod_005fid_005fenctype_005faction;

  private javax.el.ExpressionFactory _el_expressionfactory;
  private org.apache.tomcat.InstanceManager _jsp_instancemanager;

  public java.util.Map<java.lang.String,java.lang.Long> getDependants() {
    return _jspx_dependants;
  }

  public void _jspInit() {
    _005fjspx_005ftagPool_005fs_005fform_0026_005fmethod_005fid_005fenctype_005faction = org.apache.jasper.runtime.TagHandlerPool.getTagHandlerPool(getServletConfig());
    _el_expressionfactory = _jspxFactory.getJspApplicationContext(getServletConfig().getServletContext()).getExpressionFactory();
    _jsp_instancemanager = org.apache.jasper.runtime.InstanceManagerFactory.getInstanceManager(getServletConfig());
  }

  public void _jspDestroy() {
    _005fjspx_005ftagPool_005fs_005fform_0026_005fmethod_005fid_005fenctype_005faction.release();
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

      out.write("<!DOCTYPE HTML>\r\n");
      out.write("\r\n");
      out.write("\r\n");
      out.write("<!--\r\n");
      out.write("/*\r\n");
      out.write(" * jQuery File Upload Plugin Demo 6.9.1\r\n");
      out.write(" * https://github.com/blueimp/jQuery-File-Upload\r\n");
      out.write(" *\r\n");
      out.write(" * Copyright 2010, Sebastian Tschan\r\n");
      out.write(" * https://blueimp.net\r\n");
      out.write(" *\r\n");
      out.write(" * Licensed under the MIT license:\r\n");
      out.write(" * http://www.opensource.org/licenses/MIT\r\n");
      out.write(" */\r\n");
      out.write("-->\r\n");
      out.write("<html lang=\"ja\">\r\n");
      out.write("<head>\r\n");
      out.write("<!-- Force latest IE rendering engine or ChromeFrame if installed -->\r\n");
      out.write("<!--[if IE]><meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge,chrome=1\"><![endif]-->\r\n");
      out.write("<meta charset=\"utf-8\">\r\n");
      out.write("<title>jQuery File Upload Demo</title>\r\n");
      out.write("<meta name=\"description\"\r\n");
      out.write("\tcontent=\"File Upload widget with multiple file selection, drag&amp;drop support, progress bar and preview images for jQuery. Supports cross-domain, chunked and resumable file uploads. Works with any server-side platform (Google App Engine, PHP, Python, Ruby on Rails, Java, etc.) that supports standard HTML form file uploads.\">\r\n");
      out.write("<meta name=\"viewport\" content=\"width=device-width\">\r\n");
      out.write("<!-- Bootstrap CSS Toolkit styles -->\r\n");
      out.write("<link rel=\"stylesheet\" href=\"../css/bootstrap.min.css\">\r\n");
      out.write("<!-- Generic page styles -->\r\n");
      out.write("<link rel=\"stylesheet\" href=\"../css/style.css\">\r\n");
      out.write("<!-- Bootstrap styles for responsive website layout, supporting different screen sizes -->\r\n");
      out.write("<!--<link rel=\"stylesheet\" href=\"http://blueimp.github.com/cdn/css/bootstrap-responsive.min.css\">-->\r\n");
      out.write("<!-- Bootstrap CSS fixes for IE6 -->\r\n");
      out.write("<!--[if lt IE 7]><link rel=\"stylesheet\" href=\"http://blueimp.github.com/cdn/css/bootstrap-ie6.min.css\"><![endif]-->\r\n");
      out.write("<!-- Bootstrap Image Gallery styles -->\r\n");
      out.write("<link rel=\"stylesheet\" href=\"../css/blueimp-gallery.min.css\">\r\n");
      out.write("<!-- CSS to style the file input field as button and adjust the Bootstrap progress bars -->\r\n");
      out.write("<link rel=\"stylesheet\" href=\"../css/jquery.fileupload-ui.css\">\r\n");
      out.write("<!-- Shim to make HTML5 elements usable in older Internet Explorer versions -->\r\n");
      out.write("<!--[if lt IE 9]><script src=\"http://html5shim.googlecode.com/svn/trunk/html5.js\"></script><![endif]-->\r\n");
      out.write("</head>\r\n");
      out.write("<body>\r\n");
      out.write("\r\n");
      out.write("        <!-- \tTitle bar -->\r\n");
      out.write("\t    <div class=\"navbar navbar-inverse navbar-fixed-top\" role=\"navigation\">\r\n");
      out.write("            <div class=\"navbar-inner\">\r\n");
      out.write("                <div class=\"container\">\r\n");
      out.write("                    <a class=\"btn btn-navbar\" data-toggle=\"collapse\" data-target=\".nav-collapse\">\r\n");
      out.write("                        <span class=\"icon-bar\"></span>\r\n");
      out.write("                        <span class=\"icon-bar\"></span>\r\n");
      out.write("                        <span class=\"icon-bar\"></span>\r\n");
      out.write("                    </a>\r\n");
      out.write("                    <a class=\"navbar-brand\" href=\"https://github.com/blueimp/jQuery-File-Upload\">jQuery File Upload</a>\r\n");
      out.write("\r\n");
      out.write("                </div>\r\n");
      out.write("            </div>\r\n");
      out.write("        </div>\r\n");
      out.write("        \r\n");
      out.write("\r\n");
      out.write("\t<div class=\"container-fluid\">\r\n");
      out.write("\r\n");
      out.write("\t\t<div class=\"row\">\r\n");
      out.write("\t\t\t\r\n");
      out.write("               <div class=\"col-sm-3 col-md-2 sidebar\">\r\n");
      out.write("                    <div class=\"nav-collapse\">\t\t\t\t\t\r\n");
      out.write("                        <!--<ul class=\"nav nav-sidebar\">\r\n");
      out.write("                            <li class=\"active\"><a href=\"#\">Demo</a></li>\r\n");
      out.write("                            <li><a href=\"https://github.com/blueimp/jQuery-File-Upload/downloads\">Downloads</a></li>\r\n");
      out.write("                            <li><a href=\"https://github.com/blueimp/jQuery-File-Upload\">Source Code</a></li>\r\n");
      out.write("                            <li><a href=\"https://github.com/blueimp/jQuery-File-Upload/wiki\">Documentation</a></li>\r\n");
      out.write("                            <li><a href=\"https://github.com/blueimp/jQuery-File-Upload/issues\">Issues</a></li>\r\n");
      out.write("                            <li><a href=\"test/\">Test</a></li>\r\n");
      out.write("                            <li><a href=\"https://blueimp.net\">&copy; Sebastian Tschan</a></li>\r\n");
      out.write("                        </ul>-->\r\n");
      out.write("\t\t\t\t\t</div>\r\n");
      out.write("                </div>  \r\n");
      out.write("                \r\n");
      out.write("\t\t\r\n");
      out.write("\t\t<div class=\"col-sm-9 main\">\r\n");
      out.write("\t\t\r\n");
      out.write("\t\t\t<!--<div class=\"container\">-->\r\n");
      out.write("\t\t\t<div class=\"page-header\">\r\n");
      out.write("\t\t\t\t<h1>jQuery File Upload Demo</h1>\r\n");
      out.write("\t\t\t</div>\r\n");
      out.write("\t\t\t\r\n");
      out.write("\t\t\t<div class=\"row placeholders\">\r\n");
      out.write("\t\t\t\t<!--<blockquote>\r\n");
      out.write("\t\t\t\t\t<p>\r\n");
      out.write("\t\t\t\t\t\tFile Upload widget with multiple file selection, drag&amp;drop\r\n");
      out.write("\t\t\t\t\t\tsupport, progress bars and preview images for jQuery.<br>\r\n");
      out.write("\t\t\t\t\t\tSupports cross-domain, chunked and resumable file uploads and\r\n");
      out.write("\t\t\t\t\t\tclient-side image resizing.<br> Works with any server-side\r\n");
      out.write("\t\t\t\t\t\tplatform (PHP, Python, Ruby on Rails, Java, Node.js, Go etc.) that\r\n");
      out.write("\t\t\t\t\t\tsupports standard HTML form file uploads.\r\n");
      out.write("\t\t\t\t\t</p>\r\n");
      out.write("\t\t\t\t</blockquote>-->\r\n");
      out.write("\t\t\t\t<br>\r\n");
      out.write("\t\t\t\t\r\n");
      out.write("\t\t\t\t<!-- The file upload form used as target for the file upload widget -->\r\n");
      out.write("\t\t\t\t\r\n");
      out.write("\t\t\t\t");
      if (_jspx_meth_s_005fform_005f0(_jspx_page_context))
        return;
      out.write("\r\n");
      out.write("\t\t\t\t\r\n");
      out.write("\t\t\t\t<br>\r\n");
      out.write("\t\t\t\t<div class=\"well\">\r\n");
      out.write("\t\t\t\t\t<h3>Demo Notes</h3>\r\n");
      out.write("\t\t\t\t\t<ul>\r\n");
      out.write("\t\t\t\t\t\t<li>The maximum file size for uploads in this demo is <strong>5\r\n");
      out.write("\t\t\t\t\t\t\t\tMB</strong> (default file size is unlimited).\r\n");
      out.write("\t\t\t\t\t\t</li>\r\n");
      out.write("\t\t\t\t\t\t<li>Only image files (<strong>JPG, GIF, PNG</strong>) are\r\n");
      out.write("\t\t\t\t\t\t\tallowed in this demo (by default there is no file type\r\n");
      out.write("\t\t\t\t\t\t\trestriction).\r\n");
      out.write("\t\t\t\t\t\t</li>\r\n");
      out.write("\t\t\t\t\t\t<li>Uploaded files will be deleted automatically after <strong>5\r\n");
      out.write("\t\t\t\t\t\t\t\tminutes</strong> (demo setting).\r\n");
      out.write("\t\t\t\t\t\t</li>\r\n");
      out.write("\t\t\t\t\t\t<li>You can <strong>drag &amp; drop</strong> files from your\r\n");
      out.write("\t\t\t\t\t\t\tdesktop on this webpage with Google Chrome, Mozilla Firefox and\r\n");
      out.write("\t\t\t\t\t\t\tApple Safari.\r\n");
      out.write("\t\t\t\t\t\t</li>\r\n");
      out.write("\t\t\t\t\t\t\r\n");
      out.write("\t\t\t\t\t\t<!--<li>Please refer to the <a\r\n");
      out.write("\t\t\t\t\t\t\thref=\"https://github.com/blueimp/jQuery-File-Upload\">project\r\n");
      out.write("\t\t\t\t\t\t\t\twebsite</a> and <a\r\n");
      out.write("\t\t\t\t\t\t\thref=\"https://github.com/blueimp/jQuery-File-Upload/wiki\">documentation</a>\r\n");
      out.write("\t\t\t\t\t\t\tfor more information.\r\n");
      out.write("\t\t\t\t\t\t</li>\r\n");
      out.write("\t\t\t\t\t\t<li>Built with Twitter's <a\r\n");
      out.write("\t\t\t\t\t\t\thref=\"http://twitter.github.com/bootstrap/\">Bootstrap</a> toolkit\r\n");
      out.write("\t\t\t\t\t\t\tand Icons from <a href=\"http://glyphicons.com/\">Glyphicons</a>.\r\n");
      out.write("\t\t\t\t\t\t</li>-->\r\n");
      out.write("\t\t\t\t\t\t\r\n");
      out.write("\t\t\t\t\t</ul>\r\n");
      out.write("\t\t\t\t</div>\r\n");
      out.write("\t\t\t\t<!--</div>-->\r\n");
      out.write("\t\t\t\t\r\n");
      out.write("\t\t\t\t<!-- modal-gallery is the modal dialog used for the image gallery -->\r\n");
      out.write("\t\t\t\t\t<div id=\"modal-gallery\" class=\"modal modal-gallery hide fade\" data-filter=\":odd\">\r\n");
      out.write("\t\t\t\t\t\r\n");
      out.write("\t\t\t\t\t\t<div class=\"modal-header\">\r\n");
      out.write("\t\t\t\t\t\t\t<a class=\"close\" data-dismiss=\"modal\">&times;</a>\r\n");
      out.write("\t\t\t\t\t\t\t<h3 class=\"modal-title\"></h3>\r\n");
      out.write("\t\t\t\t\t\t</div>\r\n");
      out.write("\r\n");
      out.write("\t\t\t\t\t\t<div class=\"modal-body\">\r\n");
      out.write("\t\t\t\t\t\t\t<div class=\"modal-image\"></div>\r\n");
      out.write("\t\t\t\t\t\t</div>\r\n");
      out.write("\r\n");
      out.write("\t\t\t\t\t\t<div class=\"modal-footer\">\r\n");
      out.write("\t\t\t\t\t\t\r\n");
      out.write("\t\t\t\t\t\t\t<a class=\"btn modal-download\" target=\"_blank\">\r\n");
      out.write("\t\t\t\t\t\t\t <i\tclass=\"icon-download\"></i>\r\n");
      out.write("\t\t\t\t\t\t\t  <span>Download</span>\r\n");
      out.write("\t\t\t\t\t\t\t</a>\r\n");
      out.write("\t\t\t\t\t\t\t\r\n");
      out.write("\t\t\t\t\t\t\t<a class=\"btn btn-success modal-play modal-slideshow\" data-slideshow=\"5000\">\r\n");
      out.write("\t\t\t\t\t\t\t\t<i class=\"icon-play icon-white\"></i>\r\n");
      out.write("\t\t\t\t\t\t\t\t<span>Slideshow</span>\r\n");
      out.write("\t\t\t\t\t\t\t</a>\r\n");
      out.write("\t\t\t\t\t\t\t\r\n");
      out.write("\t\t\t\t\t\t\t<a class=\"btn btn-info modal-prev\">\r\n");
      out.write("\t\t\t\t\t\t\t  <i class=\"icon-arrow-left icon-white\"></i>\r\n");
      out.write("\t\t\t\t\t\t\t   <span>Previous</span>\r\n");
      out.write("\t\t\t\t\t\t\t</a>\r\n");
      out.write("\t\t\t\t\t\t\t\r\n");
      out.write("\t\t\t\t\t\t\t<a class=\"btn btn-primary modal-next\">\r\n");
      out.write("\t\t\t\t\t\t\t  <span>Next</span> \r\n");
      out.write("\t\t\t\t\t\t\t  <i class=\"icon-arrow-right icon-white\"></i>\r\n");
      out.write("\t\t\t\t\t\t\t</a>\r\n");
      out.write("\t\t\t\t\t\t\t\r\n");
      out.write("\t\t\t\t\t\t</div>\r\n");
      out.write("\t\t\t\t\t\t\r\n");
      out.write("\t\t\t\t\t</div>\r\n");
      out.write("\t\t\t\t\t\r\n");
      out.write("\t\t\t\t</div>\r\n");
      out.write("\t\t\t\t\r\n");
      out.write("\t\t</div>\r\n");
      out.write("\r\n");
      out.write("\t</div>\r\n");
      out.write("\r\n");
      out.write("</div>\r\n");
      out.write("\r\n");
      out.write("\t<!-- The template to display files available for upload -->\r\n");
      out.write("\t<script id=\"template-upload\" type=\"text/x-tmpl\">\r\n");
      out.write("            {% for (var i=0, file; file=o.files[i]; i++) { %}\r\n");
      out.write("            <tr class=\"template-upload fade\">\r\n");
      out.write("            <td class=\"preview\"><span class=\"fade\"></span></td>\r\n");
      out.write("            <td class=\"name\"><span>{%=file.name%}</span></td>\r\n");
      out.write("            <td class=\"size\"><span>{%=o.formatFileSize(file.size)%}</span></td>\r\n");
      out.write("            {% if (file.error) { %}\r\n");
      out.write("            <td class=\"error\" colspan=\"2\"><span class=\"label label-important\">{%=locale.fileupload.error%}</span> {%=locale.fileupload.errors[file.error] || file.error%}</td>\r\n");
      out.write("            {% } else if (o.files.valid && !i) { %}\r\n");
      out.write("            <td>\r\n");
      out.write("            <div class=\"progress progress-success progress-striped active\" role=\"progressbar\" aria-valuemin=\"0\" aria-valuemax=\"100\" aria-valuenow=\"0\"><div class=\"bar\" style=\"width:0%;\"></div></div>\r\n");
      out.write("            </td>\r\n");
      out.write("            <td class=\"start\">{% if (!o.options.autoUpload) { %}\r\n");
      out.write("            <button class=\"btn btn-primary\">\r\n");
      out.write("            <i class=\"icon-upload icon-white\"></i>\r\n");
      out.write("            <span>{%=locale.fileupload.start%}</span>\r\n");
      out.write("            </button>\r\n");
      out.write("            {% } %}</td>\r\n");
      out.write("            {% } else { %}\r\n");
      out.write("            <td colspan=\"2\"></td>\r\n");
      out.write("            {% } %}\r\n");
      out.write("            <td class=\"cancel\">{% if (!i) { %}\r\n");
      out.write("            <button class=\"btn btn-warning\">\r\n");
      out.write("            <i class=\"icon-ban-circle icon-white\"></i>\r\n");
      out.write("            <span>{%=locale.fileupload.cancel%}</span>\r\n");
      out.write("            </button>\r\n");
      out.write("            {% } %}</td>\r\n");
      out.write("            </tr>\r\n");
      out.write("            {% } %}\r\n");
      out.write("        </script>\r\n");
      out.write("\t<!-- The template to display files available for download -->\r\n");
      out.write("\t<script id=\"template-download\" type=\"text/x-tmpl\">\r\n");
      out.write("            {% for (var i=0, file; file=o.files[i]; i++) { %}\r\n");
      out.write("            <tr class=\"template-download fade\">\r\n");
      out.write("            {% if (file.error) { %}\r\n");
      out.write("            <td></td>\r\n");
      out.write("            <td class=\"name\"><span>{%=file.name%}</span></td>\r\n");
      out.write("            <td class=\"size\"><span>{%=o.formatFileSize(file.size)%}</span></td>\r\n");
      out.write("            <td class=\"error\" colspan=\"2\"><span class=\"label label-important\">{%=locale.fileupload.error%}</span> {%=locale.fileupload.errors[file.error] || file.error%}</td>\r\n");
      out.write("            {% } else { %}\r\n");
      out.write("            <td class=\"preview\">{% if (file.thumbnail_url) { %}\r\n");
      out.write("            <a href=\"{%=file.url%}\" title=\"{%=file.name%}\" rel=\"gallery\" download=\"{%=file.name%}\"><img src=\"{%=file.thumbnail_url%}\"></a>\r\n");
      out.write("            {% } %}</td>\r\n");
      out.write("            <td class=\"name\">\r\n");
      out.write("            <a href=\"{%=file.url%}\" title=\"{%=file.name%}\" rel=\"{%=file.thumbnail_url&&'gallery'%}\" download=\"{%=file.name%}\">{%=file.name%}</a>\r\n");
      out.write("            </td>\r\n");
      out.write("            <td class=\"size\"><span>{%=o.formatFileSize(file.size)%}</span></td>\r\n");
      out.write("            <td colspan=\"2\"></td>\r\n");
      out.write("            {% } %}\r\n");
      out.write("            <td class=\"delete\">\r\n");
      out.write("            <button class=\"btn btn-danger\" data-type=\"{%=file.delete_type%}\" data-url=\"{%=file.delete_url%}\">\r\n");
      out.write("            <i class=\"icon-trash icon-white\"></i>\r\n");
      out.write("            <span>{%=locale.fileupload.destroy%}</span>\r\n");
      out.write("            </button>\r\n");
      out.write("            <input type=\"checkbox\" name=\"delete\" value=\"1\">\r\n");
      out.write("            </td>\r\n");
      out.write("            </tr>\r\n");
      out.write("            {% } %}\r\n");
      out.write("        </script>\r\n");
      out.write("\t<script\r\n");
      out.write("\t\tsrc=\"//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js\"></script>\r\n");
      out.write("\t<!-- The jQuery UI widget factory, can be omitted if jQuery UI is already included -->\r\n");
      out.write("\t<script src=\"../js/vendor/jquery.ui.widget.js\"></script>\r\n");
      out.write("\t<!-- The Templates plugin is included to render the upload/download listings -->\r\n");
      out.write("\t<script\r\n");
      out.write("\t\tsrc=\"http://blueimp.github.io/JavaScript-Templates/js/tmpl.min.js\"></script>\r\n");
      out.write("\t<!-- The Load Image plugin is included for the preview images and image resizing functionality -->\r\n");
      out.write("\t<script\r\n");
      out.write("\t\tsrc=\"http://blueimp.github.io/JavaScript-Load-Image/js/load-image.min.js\"></script>\r\n");
      out.write("\t<!-- The Canvas to Blob plugin is included for image resizing functionality -->\r\n");
      out.write("\t<script\r\n");
      out.write("\t\tsrc=\"http://blueimp.github.io/JavaScript-Canvas-to-Blob/js/canvas-to-blob.min.js\"></script>\r\n");
      out.write("\t<!-- Bootstrap JS and Bootstrap Image Gallery are not required, but included for the demo -->\r\n");
      out.write("\t\r\n");
      out.write("\t<script\r\n");
      out.write("\t\tsrc=\"//netdna.bootstrapcdn.com/bootstrap/3.0.3/js/bootstrap.min.js\"></script>\r\n");
      out.write("\t<script\r\n");
      out.write("\t\tsrc=\"http://blueimp.github.io/Gallery/js/jquery.blueimp-gallery.min.js\"></script>\r\n");
      out.write("\t<!-- The Iframe Transport is required for browsers without support for XHR file uploads -->\r\n");
      out.write("\t<script src=\"../js/jquery.iframe-transport.js\"></script>\r\n");
      out.write("\t<!-- The basic File Upload plugin -->\r\n");
      out.write("\t<script src=\"../js/jquery.fileupload.js\"></script>\r\n");
      out.write("\t<!-- The File Upload file processing plugin -->\r\n");
      out.write("\t<script src=\"../js/jquery.fileupload-fp.js\"></script>\r\n");
      out.write("\t<!-- The File Upload user interface plugin -->\r\n");
      out.write("\t<script src=\"../js/jquery.fileupload-ui.js\"></script>\r\n");
      out.write("\t<!-- The localization script -->\r\n");
      out.write("\t<script src=\"../js/locale.js\"></script>\r\n");
      out.write("\t<!-- The main application script -->\r\n");
      out.write("\t<script src=\"../js/main.js\"></script>\r\n");
      out.write("\t<!-- The XDomainRequest Transport is included for cross-domain file deletion for IE8+ -->\r\n");
      out.write("\t<!--[if gte IE 8]><script src=\"js/cors/jquery.xdr-transport.js\"></script><![endif]-->\r\n");
      out.write("\t\r\n");
      out.write("\t\r\n");
      out.write("\t<input type=\"button\" value=\"閉じる\" onclick=\"javascript:window.close();\" >\r\n");
      out.write("</body>\r\n");
      out.write("</html>\r\n");
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

  private boolean _jspx_meth_s_005fform_005f0(javax.servlet.jsp.PageContext _jspx_page_context)
          throws java.lang.Throwable {
    javax.servlet.jsp.PageContext pageContext = _jspx_page_context;
    javax.servlet.jsp.JspWriter out = _jspx_page_context.getOut();
    //  s:form
    org.apache.struts2.views.jsp.ui.FormTag _jspx_th_s_005fform_005f0 = (org.apache.struts2.views.jsp.ui.FormTag) _005fjspx_005ftagPool_005fs_005fform_0026_005fmethod_005fid_005fenctype_005faction.get(org.apache.struts2.views.jsp.ui.FormTag.class);
    _jspx_th_s_005fform_005f0.setPageContext(_jspx_page_context);
    _jspx_th_s_005fform_005f0.setParent(null);
    // /fileUpload/FileUpload_backup.jsp(99,4) name = id type = java.lang.String reqTime = false required = false fragment = false deferredValue = false expectedTypeName = null deferredMethod = false methodSignature = null
    _jspx_th_s_005fform_005f0.setId("fileupload");
    // /fileUpload/FileUpload_backup.jsp(99,4) name = action type = java.lang.String reqTime = false required = false fragment = false deferredValue = false expectedTypeName = null deferredMethod = false methodSignature = null
    _jspx_th_s_005fform_005f0.setAction("fileupload");
    // /fileUpload/FileUpload_backup.jsp(99,4) name = method type = java.lang.String reqTime = false required = false fragment = false deferredValue = false expectedTypeName = null deferredMethod = false methodSignature = null
    _jspx_th_s_005fform_005f0.setMethod("executePost");
    // /fileUpload/FileUpload_backup.jsp(99,4) name = enctype type = java.lang.String reqTime = false required = false fragment = false deferredValue = false expectedTypeName = null deferredMethod = false methodSignature = null
    _jspx_th_s_005fform_005f0.setEnctype("multipart/form-data");
    int _jspx_eval_s_005fform_005f0 = _jspx_th_s_005fform_005f0.doStartTag();
    if (_jspx_eval_s_005fform_005f0 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
      if (_jspx_eval_s_005fform_005f0 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
        out = _jspx_page_context.pushBody();
        _jspx_th_s_005fform_005f0.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
        _jspx_th_s_005fform_005f0.doInitBody();
      }
      do {
        out.write("\r\n");
        out.write("\t\t\t\t\t\r\n");
        out.write("\t\t\t\t\t<!-- The fileupload-buttonbar contains buttons to add/delete files and start/cancel the upload -->\r\n");
        out.write("\r\n");
        out.write("\t\t\t\t\t\t<div class=\"row fileupload-buttonbar\">\r\n");
        out.write("\t\t\t\t\t\t\t<div class=\"span7\">\r\n");
        out.write("\t\t\t\t\t\t\t\t<!-- The fileinput-button span is used to style the file input field as button -->\r\n");
        out.write("\t\t\t\t\t\t\t\t<span class=\"btn btn-success fileinput-button\">\r\n");
        out.write("\t\t\t\t\t\t\t\t    <i class=\"icon-plus icon-white\"></i> <span>Add files...</span>\r\n");
        out.write("\t\t\t\t\t\t\t\t    <input\ttype=\"file\" name=\"uploadfile\" multiple>\r\n");
        out.write("\t\t\t\t\t\t\t\t</span>\r\n");
        out.write("\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-primary start\">\r\n");
        out.write("\t\t\t\t\t\t\t\t\t<i class=\"icon-upload icon-white\"></i> <span>Start upload</span>\r\n");
        out.write("\t\t\t\t\t\t\t\t</button>\r\n");
        out.write("\t\t\t\t\t\t\t\t<button type=\"reset\" class=\"btn btn-warning cancel\">\r\n");
        out.write("\t\t\t\t\t\t\t\t\t<i class=\"icon-ban-circle icon-white\"></i> <span>Cancel upload</span>\r\n");
        out.write("\t\t\t\t\t\t\t\t</button>\r\n");
        out.write("\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-danger delete\">\r\n");
        out.write("\t\t\t\t\t\t\t\t\t<i class=\"icon-trash icon-white\"></i> <span>Delete</span>\r\n");
        out.write("\t\t\t\t\t\t\t\t</button>\r\n");
        out.write("\t\t\t\t\t\t\t\t<input type=\"checkbox\" class=\"toggle\">\r\n");
        out.write("\t\t\t\t\t\t\t</div>\r\n");
        out.write("\t\t\t\t\t\t\t\r\n");
        out.write("\t\t\t\t\t\t\t<!-- The global progress information ãã¡ã¤ã«ã¢ããã­ã¼ããã­ã»ã¹ãã¼-->\r\n");
        out.write("\t\t\t\t\t\t\t<div class=\"span5 fileupload-progress fade\">\r\n");
        out.write("\t\t\t\t\t\t\t\t<!-- The global progress bar -->\r\n");
        out.write("\t\t\t\t\t\t\t\t<div class=\"progress progress-success progress-striped active\"\r\n");
        out.write("\t\t\t\t\t\t\t\t\trole=\"progressbar\" aria-valuemin=\"0\" aria-valuemax=\"100\">\r\n");
        out.write("\t\t\t\t\t\t\t\t\t<div class=\"bar\" style=\"width: 0%;\"></div>\r\n");
        out.write("\t\t\t\t\t\t\t\t</div>\r\n");
        out.write("\t\t\t\t\t\t\t\t<!-- The extended global progress information -->\r\n");
        out.write("\t\t\t\t\t\t\t\t<div class=\"progress-extended\">&nbsp;</div>\r\n");
        out.write("\t\t\t\t\t\t\t</div>\r\n");
        out.write("\t\t\t\t\t\t</div>\r\n");
        out.write("\r\n");
        out.write("\t\t\t\t\t\t<!-- The loading indicator is shown during file processing -->\r\n");
        out.write("\t\t\t\t\t<div class=\"fileupload-loading\"></div>\r\n");
        out.write("\t\t\t\t\t<br>\r\n");
        out.write("\t\t\t\t\t\r\n");
        out.write("\t\t\t\t\t<!-- The table listing the files available for upload/download -->\r\n");
        out.write("\t\t\t\t\t<table role=\"presentation\" class=\"table table-striped\">\r\n");
        out.write("\t\t\t\t\t\t<tbody class=\"files\" data-toggle=\"modal-gallery\"\r\n");
        out.write("\t\t\t\t\t\t\tdata-target=\"#modal-gallery\"></tbody>\r\n");
        out.write("\t\t\t\t\t</table>\r\n");
        out.write("\t\t\t\t\t\r\n");
        out.write("\t\t\t\t");
        int evalDoAfterBody = _jspx_th_s_005fform_005f0.doAfterBody();
        if (evalDoAfterBody != javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN)
          break;
      } while (true);
      if (_jspx_eval_s_005fform_005f0 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
        out = _jspx_page_context.popBody();
      }
    }
    if (_jspx_th_s_005fform_005f0.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fs_005fform_0026_005fmethod_005fid_005fenctype_005faction.reuse(_jspx_th_s_005fform_005f0);
      return true;
    }
    _005fjspx_005ftagPool_005fs_005fform_0026_005fmethod_005fid_005fenctype_005faction.reuse(_jspx_th_s_005fform_005f0);
    return false;
  }
}
