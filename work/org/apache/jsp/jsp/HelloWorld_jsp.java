/*
 * Generated by the Jasper component of Apache Tomcat
 * Version: Apache Tomcat/7.0.54
 * Generated at: 2014-09-02 09:53:46 UTC
 * Note: The last modified time of this file was set to
 *       the last modified time of the source file after
 *       generation to assist with modification tracking.
 */
package org.apache.jsp.jsp;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;

public final class HelloWorld_jsp extends org.apache.jasper.runtime.HttpJspBase
    implements org.apache.jasper.runtime.JspSourceDependent {

  private static final javax.servlet.jsp.JspFactory _jspxFactory =
          javax.servlet.jsp.JspFactory.getDefaultFactory();

  private static java.util.Map<java.lang.String,java.lang.Long> _jspx_dependants;

  private org.apache.jasper.runtime.TagHandlerPool _005fjspx_005ftagPool_005fs_005ftext_0026_005fname_005fnobody;

  private javax.el.ExpressionFactory _el_expressionfactory;
  private org.apache.tomcat.InstanceManager _jsp_instancemanager;

  public java.util.Map<java.lang.String,java.lang.Long> getDependants() {
    return _jspx_dependants;
  }

  public void _jspInit() {
    _005fjspx_005ftagPool_005fs_005ftext_0026_005fname_005fnobody = org.apache.jasper.runtime.TagHandlerPool.getTagHandlerPool(getServletConfig());
    _el_expressionfactory = _jspxFactory.getJspApplicationContext(getServletConfig().getServletContext()).getExpressionFactory();
    _jsp_instancemanager = org.apache.jasper.runtime.InstanceManagerFactory.getInstanceManager(getServletConfig());
  }

  public void _jspDestroy() {
    _005fjspx_005ftagPool_005fs_005ftext_0026_005fname_005fnobody.release();
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

      out.write("\r\n");
      out.write("\r\n");
      out.write("<!DOCTYPE html>\r\n");
      out.write("<html>\r\n");
      out.write("<head>\r\n");
      out.write("    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\">\r\n");
      out.write("\r\n");
      out.write("    <title>");
      if (_jspx_meth_s_005ftext_005f0(_jspx_page_context))
        return;
      out.write("</title>\r\n");
      out.write("\r\n");
      out.write("    <link href=\"jsp/css/jspConvertor.css\" media=\"screen\" rel=\"stylesheet\" type=\"text/css\">\r\n");
      out.write("\r\n");
      out.write("    <style type=\"text/css\" id=\"shutto-property-baloon\">\r\n");
      out.write("        #shutto-property:before, #shutto-property:after {\r\n");
      out.write("            top: 139.59999084472656px\r\n");
      out.write("        }\r\n");
      out.write("    </style>\r\n");
      out.write("\r\n");
      out.write("    ");
      out.write("\r\n");
      out.write("\r\n");
      out.write("    <script src=\"js/jquery-1.8.2.min.js\" type=\"text/javascript\"></script>\r\n");
      out.write("    <script src=\"jsp/js/dragNdrop.js\" type=\"text/javascript\"></script>\r\n");
      out.write("    <script type=\"text/javascript\">\r\n");
      out.write("    function loadPage(src) {\r\n");
      out.write("        $(\"#shutto-source\").attr(\"src\", src);\r\n");
      out.write("       \r\n");
      out.write("    }\r\n");
      out.write("    \r\n");
      out.write("    </script>\r\n");
      out.write("\r\n");
      out.write("    <!--\r\n");
      out.write("　　　 <script src=\"jsp/sub/dc.js\" async=\"\" type=\"text/javascript\"></script><script id=\"twitter-wjs\" src=\"jsp/sub/widgets.js\" type=\"text/javascript\"></script>\r\n");
      out.write("    <script id=\"facebook-jssdk\" src=\"jsp/sub/all.js\" type=\"text/javascript\"></script>\r\n");
      out.write("    <script src=\"jsp/sub/edit-b69fbc595d383022f556f39765b1c31b.js\" type=\"text/javascript\"></script>\r\n");
      out.write("    -->\r\n");
      out.write("\r\n");
      out.write("\r\n");
      out.write("</head>\r\n");
      out.write("<!--data-preview-widthのサイズが　Preview-containerで選択される-->\r\n");
      out.write("<body data-guide=\"true\" class=\"\" data-preview-width=\"360\"\r\n");
      out.write("      data-shutto-lang=\"ja\" data-twttr-rendered=\"true\" data-userrole=\"guest\"\r\n");
      out.write("      data-sites-count=\"0\">\r\n");
      out.write("\r\n");
      out.write("\r\n");
      out.write("<header>\r\n");
      out.write("    <h1>\r\n");
      out.write("        <a href=\"http://www.bestskip.com/jp/index.html\"><img alt=\"shutto\"\r\n");
      out.write("                                                             src=\"jsp/img/bestskip.png\" height=\"17\" width=\"70\"></a>\r\n");
      out.write("    </h1>\r\n");
      out.write("\r\n");
      out.write("    <h2>\r\n");
      out.write("        <a href=\"http://yahoo.co.jp/\" class=\"shutto-url-link\">対象サイトのアドレス/</a>\r\n");
      out.write("    </h2>\r\n");
      out.write("\r\n");
      out.write("    <div style=\"visibility: visible;\"\r\n");
      out.write("         class=\"shutto-actions shutto-after-load\">\r\n");
      out.write("        <div id=\"shutto-save-container\">\r\n");
      out.write("            <a class=\"shutto-submit-button\" id=\"shutto-save\">保存</a>\r\n");
      out.write("\r\n");
      out.write("            <div id=\"shutto-save-notice\">\r\n");
      out.write("                <div>\r\n");
      out.write("                    変換設定を保存して実際のサイトで利用するにはユーザ登録が必要です。<br> <a\r\n");
      out.write("                        href=\"http://shutto.com/register\">ユーザ登録（無料）はこちらから »</a>\r\n");
      out.write("                </div>\r\n");
      out.write("            </div>\r\n");
      out.write("        </div>\r\n");
      out.write("        <a class=\"shutto-button\" id=\"shutto-open-preview-guest\">プレビュー</a>\r\n");
      out.write("    </div>\r\n");
      out.write("\r\n");
      out.write("    <div class=\"shutto-guest-account\">\r\n");
      out.write("        <a href=\"https://shutto.com/login\">ログイン</a> <a\r\n");
      out.write("            href=\"https://shutto.com/register\">ユーザ登録</a>\r\n");
      out.write("    </div>\r\n");
      out.write("\r\n");
      out.write("</header>\r\n");
      out.write("<!--オリジナル　ソース-->\r\n");
      out.write("<div id=\"upload-convert\">\r\n");
      out.write("    <form>\r\n");
      out.write("        <input class=\"shutto-submit-button\" type=\"button\"\r\n");
      out.write("               value=\"Upload　Files\"\r\n");
      out.write("               onclick=\"openUploader()\">\r\n");
      out.write("        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n");
      out.write("        <input class=\"shutto-submit-button\" type=\"button\"\r\n");
      out.write("               value=\"load uploaded page\" onclick=\"loadPage()\">\r\n");
      out.write("        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n");
      out.write("        <input class=\"shutto-submit-button\" type=\"button\"\r\n");
      out.write("               value=\"get page elements\" onclick=\"convertPage()\">\r\n");
      out.write("    </form>\r\n");
      out.write("</div>\r\n");
      out.write("\r\n");
      out.write("<div id=\"shutto-contents\">\r\n");
      out.write("\r\n");
      out.write("<!--ガイドライン領域-->\r\n");
      out.write("<section id=\"shutto-start-guide\" class=\"\" data-page=\"4\">\r\n");
      out.write("    <h1>\r\n");
      out.write("        <img alt=\"STARTガイド\"\r\n");
      out.write("             src=\"jsp/sub/start_guide_title-4a9922f59788ef4a6ae88cd05199313a.gif\"\r\n");
      out.write("             height=\"24\" width=\"131\">\r\n");
      out.write("        <!-- <a href=\"#\" target=\"_blank\">詳しい編集ガイドを開く</a> -->\r\n");
      out.write("    </h1>\r\n");
      out.write("    <ol>\r\n");
      out.write("        <li data-target=\"1\">1</li>\r\n");
      out.write("        <li data-target=\"2\">2</li>\r\n");
      out.write("        <li data-target=\"3\">3</li>\r\n");
      out.write("        <li data-target=\"4\">4</li>\r\n");
      out.write("    </ol>\r\n");
      out.write("    <div class=\"shutto-close\" title=\"STARTガイドを閉じる\"></div>\r\n");
      out.write("    <div data-page=\"1\">\r\n");
      out.write("        この画面がshutto編集画面になります。いちばん右のエリアにはPCページが表示されますので、表示されている<br>\r\n");
      out.write("        文字やテキストをマウス操作で真ん中のスマホレイアウト画面にドラッグ＆ドロップしていきます。 <span data-target=\"2\">»\r\n");
      out.write("\t\t\t\t\t次の説明へ</span>\r\n");
      out.write("    </div>\r\n");
      out.write("    <div data-page=\"2\">\r\n");
      out.write("        ドロップされた要素はふきだしで表示される編集メニューで、デザインや大きさ、リンク等の設定が行えます。<br>\r\n");
      out.write("        表示される編集メニューは、要素によって異なります。 <span data-target=\"3\">» 次の説明へ</span>\r\n");
      out.write("    </div>\r\n");
      out.write("    <div data-page=\"3\">\r\n");
      out.write("        いちばん左に表示されている「テキスト」「タイトル」等は、挿入メニューになります。<br>\r\n");
      out.write("        PCページにない要素を追加するときに、ドラッグ＆ドロップして使います。 <span data-target=\"4\">»\r\n");
      out.write("\t\t\t\t\t次の説明へ</span>\r\n");
      out.write("    </div>\r\n");
      out.write("    <div data-page=\"4\">\r\n");
      out.write("        スマホレイアウトが完成したら画面上部にある「保存」ボタンを押しましょう。「プレビュー」で公開前に見ためを確認できます。<br>\r\n");
      out.write("        PCサイトにshuttoタグを入れたら、本番サイトに反映されます。\r\n");
      out.write("    </div>\r\n");
      out.write("\r\n");
      out.write("</section>\r\n");
      out.write("\r\n");
      out.write("<!--　未設定\r\n");
      out.write("<section id=\"shutto-route-over-capacity\"> … </section>\r\n");
      out.write("-->\r\n");
      out.write("\r\n");
      out.write("<!--コンテンツ変換領域-->\r\n");
      out.write("<section id=\"shutto-body\">\r\n");
      out.write("\r\n");
      out.write("<!-- 取り出したコンテン編集用エディタ（未編集）\r\n");
      out.write("<section id=\"shutto-property\" class=\"shutto-off\" style=\"left: 488px;\"></section>\r\n");
      out.write("-->\r\n");
      out.write("\r\n");
      out.write("<!--　プレービジョン領域にコンテンツを追加する領域-->\r\n");
      out.write("<section style=\"visibility: visible;\" id=\"shutto-components\"\r\n");
      out.write("         class=\"shutto-after-load\">\r\n");
      out.write("    <section class=\"shutto-closable shutto-close\">\r\n");
      out.write("        <h1>テキスト・画像</h1>\r\n");
      out.write("        <ul>\r\n");
      out.write("            <li id=\"shutto-component_text\">\r\n");
      out.write("                <div class=\"shutto-image\">\r\n");
      out.write("                    <img alt=\"Parts_text_s\"\r\n");
      out.write("                         src=\"jsp/sub/parts_text_s-358905fea6f399ba020339785a3bdab1.png\">\r\n");
      out.write("                </div>\r\n");
      out.write("                テキスト\r\n");
      out.write("            </li>\r\n");
      out.write("            <li id=\"shutto-component_heading\">\r\n");
      out.write("                <div class=\"shutto-image\">\r\n");
      out.write("                    <img alt=\"Parts_header_s\"\r\n");
      out.write("                         src=\"jsp/sub/parts_header_s-fed14c33060321f1f5c0b2fa52ee185f.png\">\r\n");
      out.write("                </div>\r\n");
      out.write("                タイトル\r\n");
      out.write("            </li>\r\n");
      out.write("            <li id=\"shutto-component_image\">\r\n");
      out.write("                <div class=\"shutto-image\">\r\n");
      out.write("                    <img alt=\"Parts_image_s\"\r\n");
      out.write("                         src=\"jsp/sub/parts_image_s-1d8146289b57336ec15f105bea0a3e76.png\">\r\n");
      out.write("                </div>\r\n");
      out.write("                画像\r\n");
      out.write("            </li>\r\n");
      out.write("            <li id=\"shutto-component_map\">\r\n");
      out.write("                <div class=\"shutto-image\">\r\n");
      out.write("                    <img alt=\"Parts_map_s\"\r\n");
      out.write("                         src=\"jsp/sub/parts_map_s-ca3c60029a16de645b635bbcfec53c01.png\">\r\n");
      out.write("                </div>\r\n");
      out.write("                マップ\r\n");
      out.write("            </li>\r\n");
      out.write("            <li id=\"shutto-component_menu\">\r\n");
      out.write("                <div class=\"shutto-image\">\r\n");
      out.write("                    <img alt=\"Parts_menu_s\"\r\n");
      out.write("                         src=\"jsp/sub/parts_menu_s-e2c8c89a17b8510c760476efe23865c3.png\">\r\n");
      out.write("                </div>\r\n");
      out.write("                メニュー\r\n");
      out.write("            </li>\r\n");
      out.write("            <li id=\"shutto-component_pc\">\r\n");
      out.write("                <div class=\"shutto-image\">\r\n");
      out.write("                    <img alt=\"Parts_pc_s\"\r\n");
      out.write("                         src=\"jsp/sub/parts_pc_s-e50b14781ca70b14ce0ed32e18a3185a.png\">\r\n");
      out.write("                </div>\r\n");
      out.write("                PC表示\r\n");
      out.write("            </li>\r\n");
      out.write("            <!--\r\n");
      out.write("        <li id=\"shutto-component_affiliate\">\r\n");
      out.write("          <div class=\"shutto-image\">\r\n");
      out.write("            <img alt=\"Parts_affiliate_s\" src=\"/assets/convert/parts_affiliate_s-2b32f46a68f329981aaceaeb63046a6f.png\" />\r\n");
      out.write("          </div>\r\n");
      out.write("          アフィリエイト\r\n");
      out.write("        </li>\r\n");
      out.write("        -->\r\n");
      out.write("            <li id=\"shutto-component_recommend\">\r\n");
      out.write("                <div class=\"shutto-image\">\r\n");
      out.write("                    <img alt=\"Parts_recommend_s\"\r\n");
      out.write("                         src=\"jsp/sub/parts_recommend_s-0471a669e6d5f5f7bcca693a40d1d264.png\">\r\n");
      out.write("                </div>\r\n");
      out.write("                レコメンド\r\n");
      out.write("            </li>\r\n");
      out.write("        </ul>\r\n");
      out.write("    </section>\r\n");
      out.write("    <section class=\"shutto-closable shutto-close\">\r\n");
      out.write("        <h1>コンテナ</h1>\r\n");
      out.write("        <ul>\r\n");
      out.write("            <li id=\"shutto-component_box\"><img alt=\"Parts_box_s\"\r\n");
      out.write("                                               src=\"jsp/sub/parts_box_s-955565c26d2470e79d87b1e9e45ad658.png\"><br>\r\n");
      out.write("                ボックス\r\n");
      out.write("            </li>\r\n");
      out.write("            <li id=\"shutto-component_grid\"><img alt=\"Parts_grid_s\"\r\n");
      out.write("                                                src=\"jsp/sub/parts_grid_s-d3d624c24afe26f9363ec5622bfeed95.png\"><br>\r\n");
      out.write("                セル\r\n");
      out.write("            </li>\r\n");
      out.write("            <li id=\"shutto-component_tab\"><img alt=\"Parts_tab_s\"\r\n");
      out.write("                                               src=\"jsp/sub/parts_tab_s-f1de02dfff41a4825a6a27855b2d1ad6.png\"><br>\r\n");
      out.write("                タブ\r\n");
      out.write("            </li>\r\n");
      out.write("            <li id=\"shutto-component_accordion\"><img\r\n");
      out.write("                    alt=\"Parts_accordion_s\"\r\n");
      out.write("                    src=\"jsp/sub/parts_accordion_s-d13b52153d4f4a7769737bd73c422a8b.png\"><br>\r\n");
      out.write("                アコーディオン\r\n");
      out.write("            </li>\r\n");
      out.write("            <li id=\"shutto-component_slider\"><img alt=\"Parts_slider_s\"\r\n");
      out.write("                                                  src=\"jsp/sub/parts_slider_s-cda788900751155d9cb84f8f9f6a3adb.png\"><br>\r\n");
      out.write("                スライドショー\r\n");
      out.write("            </li>\r\n");
      out.write("        </ul>\r\n");
      out.write("    </section>\r\n");
      out.write("    <section id=\"shutto-components-forms\"\r\n");
      out.write("             class=\"shutto-closable shutto-close\">\r\n");
      out.write("        <h1>\r\n");
      out.write("            フォーム <span class=\"shutto-pro\">Pro</span>\r\n");
      out.write("        </h1>\r\n");
      out.write("        <ul>\r\n");
      out.write("            <li id=\"shutto-component_form\" class=\"shutto-disabled\">\r\n");
      out.write("                <div class=\"shutto-image\">\r\n");
      out.write("                    <img alt=\"Parts_form_s\"\r\n");
      out.write("                         src=\"jsp/sub/parts_form_s-fdb1b0728b11b4d379d4db95b8a10906.png\">\r\n");
      out.write("                </div>\r\n");
      out.write("                フォーム\r\n");
      out.write("            </li>\r\n");
      out.write("            <li id=\"shutto-component_button\" class=\"shutto-disabled\">\r\n");
      out.write("                <div class=\"shutto-image\">\r\n");
      out.write("                    <img alt=\"Parts_button_s\"\r\n");
      out.write("                         src=\"jsp/sub/parts_button_s-81ff65644cf7865dbd547ae1b066f5d2.png\">\r\n");
      out.write("                </div>\r\n");
      out.write("                ボタン\r\n");
      out.write("            </li>\r\n");
      out.write("            <li id=\"shutto-component_textfield\" class=\"shutto-disabled\">\r\n");
      out.write("                <div class=\"shutto-image\">\r\n");
      out.write("                    <img alt=\"Parts_textfield_s\"\r\n");
      out.write("                         src=\"jsp/sub/parts_textfield_s-e54435e8e5de6c373e0d23b54a5f03a1.png\">\r\n");
      out.write("                </div>\r\n");
      out.write("                テキスト入力\r\n");
      out.write("            </li>\r\n");
      out.write("            <li id=\"shutto-component_checkbox\" class=\"shutto-disabled\">\r\n");
      out.write("                <div class=\"shutto-image\">\r\n");
      out.write("                    <img alt=\"Parts_checkbox_s\"\r\n");
      out.write("                         src=\"jsp/sub/parts_checkbox_s-64ff82c29d2775546f2091cb63144678.png\">\r\n");
      out.write("                </div>\r\n");
      out.write("                チェックボックス\r\n");
      out.write("            </li>\r\n");
      out.write("            <li id=\"shutto-component_select\" class=\"shutto-disabled\">\r\n");
      out.write("                <div class=\"shutto-image\">\r\n");
      out.write("                    <img alt=\"Parts_select_s\"\r\n");
      out.write("                         src=\"jsp/sub/parts_select_s-be20211c1198ba18957bca80ffcf2f94.png\">\r\n");
      out.write("                </div>\r\n");
      out.write("                セレクト\r\n");
      out.write("            </li>\r\n");
      out.write("        </ul>\r\n");
      out.write("    </section>\r\n");
      out.write("</section>\r\n");
      out.write("\r\n");
      out.write("<!--各iPhone用サイズの表示領域-->\r\n");
      out.write("<section id=\"shutto-preview-container\" class=\"shutto-after-load\"\r\n");
      out.write("         style=\"visibility: visible;\">\r\n");
      out.write("    <header>\r\n");
      out.write("        <div class=\"\" id=\"shutto-preview-button-width\">幅320px\r\n");
      out.write("            (iPhone)\r\n");
      out.write("        </div>\r\n");
      out.write("        <div id=\"shutto-preview-button-menu\">メニュー</div>\r\n");
      out.write("    </header>\r\n");
      out.write("    <div>\r\n");
      out.write("\r\n");
      out.write("        <!--追加されるコンテンツ表示領域-->\r\n");
      out.write("        <div id=\"shutto-preview\" class=\"shutto-selected shutto\"\r\n");
      out.write("             ondrop=\"drop(event)\" ondragover=\"allowDrop(event)\">\r\n");
      out.write("            <!--\r\n");
      out.write("    <div class=\"shutto-editor-ui shutto-focus-frame\" style=\"left: 1px; width: 316px; top: 0px; height: 21.4px; display: none;\"></div>\r\n");
      out.write("    <div class=\"shutto-editor-ui shutto-select-frame\" style=\"left: 0px; width: 320px; top: 0px; height: 23.4px; display: none;\"></div>\r\n");
      out.write("    <div class=\"shutto-editor-ui shutto-insertion-frame shutto-replace\" style=\"height: 96px; left: 15px; top: 169.8px; width: 290px; display: none;\"></div>\r\n");
      out.write("    -->\r\n");
      out.write("            <!--ここにコンテンツが追加される-->\r\n");
      out.write("\r\n");
      out.write("            <!--<div class=\"shutto-page-padding\"></div>-->\r\n");
      out.write("        </div>\r\n");
      out.write("\r\n");
      out.write("    </div>\r\n");
      out.write("\r\n");
      out.write("\r\n");
      out.write("    <footer>\r\n");
      out.write("        <div id=\"shutto-selection\">\r\n");
      out.write("            <span class=\"shutto-selected\">ページ</span>\r\n");
      out.write("        </div>\r\n");
      out.write("    </footer>\r\n");
      out.write("</section>\r\n");
      out.write("\r\n");
      out.write("\r\n");
      out.write("<!--読み込まれたページの表示領域-->\r\n");
      out.write("<section id=\"shutto-source-container\" class=\"shutto-after-load\"\r\n");
      out.write("         style=\"visibility: visible;\">\r\n");
      out.write("    <div>\r\n");
      out.write("        <iframe src=\"\" id=\"shutto-source\"></iframe>\r\n");
      out.write("    </div>\r\n");
      out.write("\r\n");
      out.write("    <footer>\r\n");
      out.write("        <div id=\"shutto-source-reload\">\r\n");
      out.write("            <span title=\"PCページを最新の状態に更新\">更新</span>\r\n");
      out.write("        </div>\r\n");
      out.write("        <div id=\"shutto-source-zoom\">\r\n");
      out.write("            <span title=\"ズーム\">100%</span>\r\n");
      out.write("        </div>\r\n");
      out.write("        <div class=\"\" id=\"shutto-source-zoom-panel\">\r\n");
      out.write("            <input min=\"10\" max=\"100\" value=\"100\" type=\"range\">\r\n");
      out.write("        </div>\r\n");
      out.write("        <div id=\"shutto-source-cssswitch\">\r\n");
      out.write("            <span class=\"\" title=\"CSS有効化/無効化\">CSS</span>\r\n");
      out.write("        </div>\r\n");
      out.write("\r\n");
      out.write("        <div id=\"shutto-selectors\">\r\n");
      out.write("            <span>input</span><span class=\"shutto-separator\">&lt;</span><span>td</span><span\r\n");
      out.write("                class=\"shutto-separator\">&lt;</span><span>tr</span><span\r\n");
      out.write("                class=\"shutto-separator\">&lt;</span><span>tbody</span><span\r\n");
      out.write("                class=\"shutto-separator\">&lt;</span><span>table</span><span\r\n");
      out.write("                class=\"shutto-separator\">&lt;</span><span>form</span><span\r\n");
      out.write("                class=\"shutto-separator\">&lt;</span><span>td</span><span\r\n");
      out.write("                class=\"shutto-separator\">&lt;</span><span>tr</span><span\r\n");
      out.write("                class=\"shutto-separator\">&lt;</span><span>tbody</span><span\r\n");
      out.write("                class=\"shutto-separator\">&lt;</span><span>table</span><span\r\n");
      out.write("                class=\"shutto-separator\">&lt;</span><span>td</span><span\r\n");
      out.write("                class=\"shutto-separator\">&lt;</span><span>tr</span><span\r\n");
      out.write("                class=\"shutto-separator\">&lt;</span><span>tbody</span><span\r\n");
      out.write("                class=\"shutto-separator\">&lt;</span><span>table</span><span\r\n");
      out.write("                class=\"shutto-separator\">&lt;</span><span>td</span><span\r\n");
      out.write("                class=\"shutto-separator\">&lt;</span><span>tr</span><span\r\n");
      out.write("                class=\"shutto-separator\">&lt;</span><span>tbody</span><span\r\n");
      out.write("                class=\"shutto-separator\">&lt;</span><span>table</span><span\r\n");
      out.write("                class=\"shutto-separator\">&lt;</span><span>td</span><span\r\n");
      out.write("                class=\"shutto-separator\">&lt;</span><span>tr</span><span\r\n");
      out.write("                class=\"shutto-separator\">&lt;</span><span>tbody</span><span\r\n");
      out.write("                class=\"shutto-separator\">&lt;</span><span>table</span><span\r\n");
      out.write("                class=\"shutto-separator\">&lt;</span><span class=\"shutto-selected\">center</span><span\r\n");
      out.write("                class=\"shutto-separator\">&lt;</span><span>body</span>\r\n");
      out.write("        </div>\r\n");
      out.write("    </footer>\r\n");
      out.write("\r\n");
      out.write("</section>\r\n");
      out.write("\r\n");
      out.write("</section>\r\n");
      out.write("\r\n");
      out.write("\r\n");
      out.write("</div>\r\n");
      out.write("\r\n");
      out.write("<div id=\"shutto-image-library\" class=\"shutto-dialog-container\"></div>\r\n");
      out.write("\r\n");
      out.write("\r\n");
      out.write("<iframe id=\"shutto-proxy\" src=\"jsp/sub/proxy.htm\"></iframe>\r\n");
      out.write("\r\n");
      out.write("\r\n");
      out.write("</body>\r\n");
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

  private boolean _jspx_meth_s_005ftext_005f0(javax.servlet.jsp.PageContext _jspx_page_context)
          throws java.lang.Throwable {
    javax.servlet.jsp.PageContext pageContext = _jspx_page_context;
    javax.servlet.jsp.JspWriter out = _jspx_page_context.getOut();
    //  s:text
    org.apache.struts2.views.jsp.TextTag _jspx_th_s_005ftext_005f0 = (org.apache.struts2.views.jsp.TextTag) _005fjspx_005ftagPool_005fs_005ftext_0026_005fname_005fnobody.get(org.apache.struts2.views.jsp.TextTag.class);
    _jspx_th_s_005ftext_005f0.setPageContext(_jspx_page_context);
    _jspx_th_s_005ftext_005f0.setParent(null);
    // /jsp/HelloWorld.jsp(8,11) name = name type = java.lang.String reqTime = false required = true fragment = false deferredValue = false expectedTypeName = null deferredMethod = false methodSignature = null
    _jspx_th_s_005ftext_005f0.setName("HelloWorld.message");
    int _jspx_eval_s_005ftext_005f0 = _jspx_th_s_005ftext_005f0.doStartTag();
    if (_jspx_th_s_005ftext_005f0.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fs_005ftext_0026_005fname_005fnobody.reuse(_jspx_th_s_005ftext_005f0);
      return true;
    }
    _005fjspx_005ftagPool_005fs_005ftext_0026_005fname_005fnobody.reuse(_jspx_th_s_005ftext_005f0);
    return false;
  }
}
