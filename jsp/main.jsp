<%@ page language="java" contentType="text/html; charset=UTF-8" %>
<%@ taglib prefix="s" uri="/struts-tags" %>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">

<title><s:text name="HelloWorld.message"/></title>

<%--   <script type="text/javascript">
       var agent = navigator.userAgent.toLowerCase() ;

       if ((agent.indexOf("win") != -1) ) {

           alert(agent);
       }
       $(document).on('blur', 'input, textarea', function() {
           setTimeout(function() {
               window.scrollTo(document.body.scrollLeft, document.body.scrollTop);
           }, 0);
       });
   </script>--%>

<%--jquery 導入 --%>
<script src="jsp/jquery/js/jquery-1.11.0.min.js"></script>

<script src="jsp/jquery/jquery.bpopup.min.js"></script>

<script src="jsp/jquery/contextmenu/jquery.contextMenu.js" type="text/javascript"></script>
<script src="jsp/jquery/contextmenu/jquery.ui.position.js" type="text/javascript"></script>
<link href="jsp/jquery/contextmenu/jquery.contextMenu.css" rel="stylesheet" type="text/css"/>


<%--main 領域用CSS--%>
<link rel="stylesheet" href="jsp/css/jspConvertor.css" media="screen" type="text/css">
<%--source領域用CSS--%>
<link rel="stylesheet" href="jsp/css/hover.css" media="screen" type="text/css">
<%--style for template-list-menu --%>
<style type="text/css">
    #shutto-preview-container > header > #bestskip-template-button-menu {
        position: absolute;
        top: 3px;
        right: 140px;
        height: 16px;
        font-size: 12px;
        line-height: 12px;
        color: #eee;
        font-weight: bold;
        font-family: Verdana, sans-serif;
        cursor: pointer;
        padding: 1px 8px 1px 24px;
        border-radius: 2px;
        background: url(../img/menu-button.png) 8px 3px no-repeat
    }

    #shutto-preview-container > header > #bestskip-template-button-menu:hover {
        background-color: #7689ff
        /*background-color: #333*/
    }

    #shutto-preview-container > header > #bestskip-template-button-menu.shutto-on {
        background-color: #ff0000
        /*background-color: #4f4f4f*/
    }

</style>

<%--style for popup--%>
<style type="text/css">
    #shutto-property:before, #shutto-property:after {
        top: 139.59999084472656px
    }

    .button {
        background-color: #2b91af;
        border-radius: 10px;
        box-shadow: 0 2px 3px rgba(0, 0, 0, 0.3);
        color: #fff;
        cursor: pointer;
        display: inline-block;
        padding: 10px 20px;
        text-align: center;
        text-decoration: none
    }

    .button.small {
        border-radius: 15px;
        float: right;
        margin: 22px 5px 0;
        padding: 6px 15px
    }

    .button:hover {
        background-color: #1e1e1e
    }

    .button > span {
        font-size: 84%
    }

    .button.b-close, .button.bClose {
        border-radius: 7px 7px 7px 7px;
        box-shadow: none;
        font: bold 131% sans-serif;
        padding: 0 6px 2px;
        position: absolute;
        right: -7px;
        top: -7px
    }

    #preview, .bMulti {
        background-color: #fff;
        border-radius: 10px 10px 10px 10px;
        box-shadow: 0 0 25px 5px #999;
        color: #111;
        display: none;
        min-width: 450px;
        min-height: 450px;
        padding: 25px
    }

    #preview iframe {
        background: url('jsp/img/popupLoader.gif') center center no-repeat;
        /*min-height: 240px;
        min-width: 450px
        */
        min-height: 100%;
        min-width: 100%
    }

    #preview .content {
        position: absolute;
        bottom: 10px;
        top: 20px;
        min-height: 90%;
        min-width: 90%;
        /*border: 1px dashed #2fff70;*/
    }
</style>
<%--popup用スクリプト　--%>
<script type="text/javascript">

    $(document).ready(function () {

        //alert("222"+$('#shutto-source')[0].src);

        $('#shutto-open-preview-guest').bind('click', function (e) {
            // Prevents the default action to be triggered.
            e.preventDefault();
            //ロードされたjspファイルのファイル名を取得
            var jspUrl = $('#shutto-source')[0].src;
            //編集中のテンプレートの現在のソースを取得
            var htmlString = $('#templateIframe').contents().find('html').html();
            //取得したソースをサーバ側のアクションにて処理し、一時ファイルを作成する（Jquery AJAX）
            $.post("preview.action", //action name
                    {
                        //必要な引数を渡す
                        htmlsource: htmlString, //テンプレートiframeのhtmlソースをサーバにアップロードする
                        jspUrl: jspUrl    //soure用iframeにロードしたファイル名をサーバに伝える
                    },
                    function (response) {
                        //e.preventDefault();
                        //alert(response);
                        //作成した一時テンプレートファイルをプレービュー用のiFrameのソースに指定する
                        $('#previewIfr').attr('src', "jsp/phr/html/001sample.jsp");
                        // bPopupのプラクインにていiFrameを表示する
                        $('#preview').bPopup({
                                    modalClose: true
                                }
                        );
                    }
            );
        });
    })
</script>

<%--main.jsp用スクリプト　--%>
<script type="text/javascript">
    function loadPage(src) {  //shutto-source iframeにソースファイルをロードする
        $("#shutto-source").attr("src", src);
    }
</script>

<%-- context menu style --%>
<style type="text/css">
    /* menu header */
    .css-title:before {
        content: "mobile template";
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        background: #DDD;
        padding: 2px;

        font-family: Verdana, Arial, Helvetica, sans-serif;
        font-size: 12px;
        font-weight: bold;
    }

    .css-title :first-child {
        margin-top: 20px;
    }

    /* menu header via data attribute */
    .data-title:before {
        content: attr(data-menutitle);
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        background: #DDD;
        padding: 2px;

        font-family: Verdana, Arial, Helvetica, sans-serif;
        font-size: 11px;
        font-weight: bold;
    }

    .data-title :first-child {
        margin-top: 20px;
    }
</style>

<%--script for contextMenu--%>
<script type="text/javascript">
    $(function () {
        // make button open the menu
        $('#bestskip-template-button-menu').bind('click', function (e) {
            e.preventDefault();
            $(this).contextMenu();
            // or $('.context-menu-one').trigger("contextmenu");
            // or $('.context-menu-one').contextMenu({x: 100, y: 100});
        });

        $.contextMenu({
            selector: '#bestskip-template-button-menu',
            className: 'css-title',
            trigger: 'none',
            callback: function (key, options) {
                var m = "clicked: " + key;
                window.console && console.log(m) || alert(m);
            },
            items: {
                "edit": {
                    name: "テンプレート001",
                    callback: function () {
                        $('#templateIframe').attr('src', 'jsp/phr/html/mobile-template001.html');
                    }
                },
                "cut": {
                    name: "テンプレート002",
                    callback: function () {
                        $('#templateIframe').attr('src', 'jsp/phr/html/mobile-template002.html');
                    }
                },
                "cut2": {
                    name: "テンプレート003",
                    callback: function () {
                        $('#templateIframe').attr('src', 'jsp/phr/html/002list_template.html');
                    }
                },
                "copy": {name: "Copy", icon: "copy"},
                "paste": {name: "Paste", icon: "paste"},
                "delete": {name: "削除", icon: "delete"},
                "sep1": "---------",
                "quit": {name: "Quit", icon: "quit"}
            }
        });

        $('#bestskip-template-button-menu').on('click', function (e) {
            console.log('clicked', this);
        })
    });
</script>

<script src="jsp/js/dragNdrop.js"></script>

<!--　　shutto社用スクリプト
　　　 <script src="jsp/sub/dc.js" async="" type="text/javascript"></script><script id="twitter-wjs" src="jsp/sub/widgets.js" type="text/javascript"></script>
<script id="facebook-jssdk" src="jsp/sub/all.js" type="text/javascript"></script>
<script src="jsp/sub/edit-b69fbc595d383022f556f39765b1c31b.js" type="text/javascript"></script>
-->

</head>
<!--data-preview-widthのサイズが　Preview-containerで選択される-->
<body data-guide="true" class="" data-preview-width="360"
      data-shutto-lang="ja" data-twttr-rendered="true" data-userrole="guest"
      data-sites-count="0">

<header>
    <h1>
        <a href="http://www.bestskip.com/jp/index.html"><img alt="shutto"
                                                             src="jsp/img/bestskip.png" height="17" width="70"></a>
    </h1>

    <h2>
        <a href="http://yahoo.co.jp/" class="shutto-url-link">対象サイトのアドレス/</a>
    </h2>

    <div style="visibility: visible;"
         class="shutto-actions shutto-after-load">
        <div id="shutto-save-container">
            <a class="shutto-submit-button" id="shutto-save">保存</a>

            <div id="shutto-save-notice">
                <div>
                    変換設定を保存して実際のサイトで利用するにはユーザ登録が必要です。<br> <a
                        href="http://shutto.com/register">ユーザ登録（無料）はこちらから »</a>
                </div>
            </div>
        </div>
        <a class="shutto-button" id="shutto-open-preview-guest">プレビュー</a>
    </div>

    <div class="shutto-guest-account">
        <a href="https://shutto.com/login">ログイン</a> <a
            href="https://shutto.com/register">ユーザ登録</a>
    </div>

</header>
<!--オリジナル　ソース-->
<div id="upload-convert">
    <form>
        <input class="shutto-submit-button" type="button"
               value="Upload　Files"
               <%--onclick="openUploader()">--%>
               onclick="openUploader2()">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input class="shutto-submit-button" type="button"
               value="Upload test project(zip)" onclick="loadProject()">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input class="shutto-submit-button" type="button"
               value="get page elements" onclick="convertPage()">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input class="shutto-submit-button" type="button"
               value="source frame source" onclick="srcTest()">
    </form>
</div>

<div id="shutto-contents">

<!--ガイドライン領域-->
<section id="shutto-start-guide" class="" data-page="4">
    <h1>
        <img alt="STARTガイド"
             src="jsp/img/start_guide_title.gif"
             height="24" width="131">
        <!-- <a href="#" target="_blank">詳しい編集ガイドを開く</a> -->
    </h1>
    <ol>
        <li data-target="1">1</li>
        <li data-target="2">2</li>
        <li data-target="3">3</li>
        <li data-target="4">4</li>
    </ol>
    <div class="shutto-close" title="STARTガイドを閉じる"></div>
    <div data-page="1">
        この画面がshutto編集画面になります。いちばん右のエリアにはPCページが表示されますので、表示されている<br>
        文字やテキストをマウス操作で真ん中のスマホレイアウト画面にドラッグ＆ドロップしていきます。 <span data-target="2">»
					次の説明へ</span>
    </div>
    <div data-page="2">
        ドロップされた要素はふきだしで表示される編集メニューで、デザインや大きさ、リンク等の設定が行えます。<br>
        表示される編集メニューは、要素によって異なります。 <span data-target="3">» 次の説明へ</span>
    </div>
    <div data-page="3">
        いちばん左に表示されている「テキスト」「タイトル」等は、挿入メニューになります。<br>
        PCページにない要素を追加するときに、ドラッグ＆ドロップして使います。 <span data-target="4">»
					次の説明へ</span>
    </div>
    <div data-page="4">
        スマホレイアウトが完成したら画面上部にある「保存」ボタンを押しましょう。「プレビュー」で公開前に見ためを確認できます。<br>
        PCサイトにshuttoタグを入れたら、本番サイトに反映されます。
    </div>

</section>

<!--　未設定
<section id="shutto-route-over-capacity"> … </section>
-->

<!--コンテンツ変換領域-->
<section id="shutto-body">

<!-- 取り出したコンテン編集用エディタ（未編集）
<section id="shutto-property" class="shutto-off" style="left: 488px;"></section>
-->

<!--　プレービジョン領域にコンテンツを追加する領域-->
<section style="visibility: visible;" id="shutto-components"
         class="shutto-after-load">
    <section class="shutto-closable shutto-close">
        <h1>テキスト・画像</h1>
        <ul>
            <li id="shutto-component_text">
                <div class="shutto-image">
                    <img alt="Parts_text_s"
                         src="jsp/img/parts_text_s.png">
                </div>
                テキスト
            </li>
            <li id="shutto-component_heading">
                <div class="shutto-image">
                    <img alt="Parts_header_s"
                         src="jsp/img/parts_header_s.png">
                </div>
                タイトル
            </li>
            <li id="shutto-component_image">
                <div class="shutto-image">
                    <img alt="Parts_image_s"
                         src="jsp/img/parts_image_s.png">
                </div>
                画像
            </li>
            <li id="shutto-component_map">
                <div class="shutto-image">
                    <img alt="Parts_map_s"
                         src="jsp/img/parts_map_s.png">
                </div>
                マップ
            </li>
            <li id="shutto-component_menu">
                <div class="shutto-image">
                    <img alt="Parts_menu_s"
                         src="jsp/img/parts_menu_s.png">
                </div>
                メニュー
            </li>
            <li id="shutto-component_pc">
                <div class="shutto-image">
                    <img alt="Parts_pc_s"
                         src="jsp/img/parts_pc_s.png">
                </div>
                PC表示
            </li>
            <!--
        <li id="shutto-component_affiliate">
          <div class="shutto-image">
            <img alt="Parts_affiliate_s" src="/assets/convert/parts_affiliate_s-2b32f46a68f329981aaceaeb63046a6f.png" />
          </div>
          アフィリエイト
        </li>
        -->
            <li id="shutto-component_recommend">
                <div class="shutto-image">
                    <img alt="Parts_recommend_s"
                         src="jsp/img/parts_recommend_s.png">
                </div>
                レコメンド
            </li>
        </ul>
    </section>
    <section class="shutto-closable shutto-close">
        <h1>コンテナ</h1>
        <ul>
            <li id="shutto-component_box"><img alt="Parts_box_s"
                                               src="jsp/img/parts_box_s.png"><br>
                ボックス
            </li>
            <li id="shutto-component_grid"><img alt="Parts_grid_s"
                                                src="jsp/img/parts_grid_s.png"><br>
                セル
            </li>
            <li id="shutto-component_tab"><img alt="Parts_tab_s"
                                               src="jsp/img/parts_tab_s.png"><br>
                タブ
            </li>
            <li id="shutto-component_accordion"><img
                    alt="Parts_accordion_s"
                    src="jsp/img/parts_accordion_s.png"><br>
                アコーディオン
            </li>
            <li id="shutto-component_slider"><img alt="Parts_slider_s"
                                                  src="jsp/img/parts_slider_s.png"><br>
                スライドショー
            </li>
        </ul>
    </section>
    <section id="shutto-components-forms"
             class="shutto-closable shutto-close">
        <h1>
            フォーム <span class="shutto-pro">Pro</span>
        </h1>
        <ul>
            <li id="shutto-component_form" class="shutto-disabled">
                <div class="shutto-image">
                    <img alt="Parts_form_s"
                         src="jsp/img/parts_form_s.png">
                </div>
                フォーム
            </li>
            <li id="shutto-component_button" class="shutto-disabled">
                <div class="shutto-image">
                    <img alt="Parts_button_s"
                         src="jsp/img/parts_button_s.png">
                </div>
                ボタン
            </li>
            <li id="shutto-component_textfield" class="shutto-disabled">
                <div class="shutto-image">
                    <img alt="Parts_textfield_s"
                         src="jsp/img/parts_textfield_s.png">
                </div>
                テキスト入力
            </li>
            <li id="shutto-component_checkbox" class="shutto-disabled">
                <div class="shutto-image">
                    <img alt="Parts_checkbox_s"
                         src="jsp/img/parts_checkbox_s.png">
                </div>
                チェックボックス
            </li>
            <li id="shutto-component_select" class="shutto-disabled">
                <div class="shutto-image">
                    <img alt="Parts_select_s"
                         src="jsp/img/parts_select_s.png">
                </div>
                セレクト
            </li>
        </ul>
    </section>
</section>

<!--各iPhone用サイズの表示領域-->
<section id="shutto-preview-container" class="shutto-after-load"
         style="visibility: visible;">
    <header>
        <div class="" id="shutto-preview-button-width">幅320px
            (iPhone)
        </div>
        <div id="shutto-preview-button-menu">メニュー</div>
        <%--original source by ka--%>
        <div id="bestskip-template-button-menu" style='display:inline'>template</div>


    </header>
    <div>
        <!--追加されるコンテンツ表示領域-->
        <div id="shutto-preview">
            <iframe id="templateIframe" src="jsp/phr/html/mobile-template001.html" style=
                    "position:absolute;top:0px;bottom:0px;width: 100%;height: 100%;border: none;border-radius: 3px 3px 0 0;overflow: auto;margin: 0;padding: 0;">
            </iframe>
            <%--jqury mobile 作成テスト　END--%>
        </div>
    </div>

    <footer>
        <div id="shutto-selection">
            <span class="shutto-selected">ページ</span>
        </div>
    </footer>

</section>


<!--読み込まれたページの表示領域-->
<section id="shutto-source-container" class="shutto-after-load"
         style="visibility: visible;">
    <div>
        <iframe src="jsp/phr/html/loginmain.html" id="shutto-source"></iframe>
    </div>

    <footer>
        <div id="shutto-source-reload">
            <span title="PCページを最新の状態に更新">更新</span>
        </div>
        <div id="shutto-source-zoom">
            <span title="ズーム">100%</span>
        </div>
        <div class="" id="shutto-source-zoom-panel">
            <input min="10" max="100" value="100" type="range">
        </div>
        <div id="shutto-source-cssswitch">
            <span class="" title="CSS有効化/無効化">CSS</span>
        </div>

        <div id="shutto-selectors">
            <span>input</span><span class="shutto-separator">&lt;</span><span>td</span><span
                class="shutto-separator">&lt;</span><span>tr</span><span
                class="shutto-separator">&lt;</span><span>tbody</span><span
                class="shutto-separator">&lt;</span><span>table</span><span
                class="shutto-separator">&lt;</span><span>form</span><span
                class="shutto-separator">&lt;</span><span>td</span><span
                class="shutto-separator">&lt;</span><span>tr</span><span
                class="shutto-separator">&lt;</span><span>tbody</span><span
                class="shutto-separator">&lt;</span><span>table</span><span
                class="shutto-separator">&lt;</span><span>td</span><span
                class="shutto-separator">&lt;</span><span>tr</span><span
                class="shutto-separator">&lt;</span><span>tbody</span><span
                class="shutto-separator">&lt;</span><span>table</span><span
                class="shutto-separator">&lt;</span><span>td</span><span
                class="shutto-separator">&lt;</span><span>tr</span><span
                class="shutto-separator">&lt;</span><span>tbody</span><span
                class="shutto-separator">&lt;</span><span>table</span><span
                class="shutto-separator">&lt;</span><span>td</span><span
                class="shutto-separator">&lt;</span><span>tr</span><span
                class="shutto-separator">&lt;</span><span>tbody</span><span
                class="shutto-separator">&lt;</span><span>table</span><span
                class="shutto-separator">&lt;</span><span class="shutto-selected">center</span><span
                class="shutto-separator">&lt;</span><span>body</span>
        </div>
    </footer>

</section>


</section>


</div>


<ul id="shutto-preview-context-menu" class="shutto-context-menu">
    <li data:action="copy">コピー (C)</li>
    <li data:action="paste">ペースト (V)</li>
    <li data:action="undo" class="shutto-separator">元に戻す (Z)</li>
    <li data:action="redo">やり直し (Y)</li>
    <li data:action="save" class="shutto-separator">保存 (S)</li>
    <li data:action="preview">プレビュー (P)</li>
    <li data:action="remove" class="shutto-separator">削除 (DEL)</li>
    <li class="shutto-separator shutto-disabled" title="シンボル機能は上位プランのみの提供となります。">
        シンボル化
        <span class="shutto-pro">Pro</span>
    </li>
    <li class="shutto-disabled" title="シンボル機能は上位プランのみの提供となります。">シンボル解除</li>
    <li class="shutto-disabled" title="シンボル機能は上位プランのみの提供となります。">シンボル挿入</li>
    <li class="shutto-repeat shutto-separator shutto-skip-hide-property-editor">
        繰り返し
        <ul>
        </ul>
    </li>
    <li data:action="repeatundo">繰り返しの取消</li>
    <li data:action="search" class="shutto-separator">検索</li>
</ul>


<ul id="shutto-width-context-menu" class="shutto-context-menu">
    <li data-width="1024" style="display:none" title="マスター版にアップグレードすると、タブレット端末向けにも変換できるようになります。">1024px (iPad 横)</li>
    <li data-width="768" style="display:none" title="マスター版にアップグレードすると、タブレット端末向けにも変換できるようになります。">768px (iPad)</li>
    <li data-width="640" style="display:none" title="マスター版にアップグレードすると、タブレット端末向けにも変換できるようになります。">640px</li>
    <li class="" data-checked="true" data-width="568">568px (iPhone5 横)</li>
    <li data-width="480">480px (iPhone4 横)</li>
    <li data-width="360">360px</li>
    <li data-width="320">320px (iPhone)</li>
</ul>


<ul id=bestskip-template-context-menu" class="shutto-context-menu">
    <li data-width="1024" style="display:none" title="マスター版にアップグレードすると、タブレット端末向けにも変換できるようになります。">一覧</li>
    <li data-width="768" style="display:none" title="マスター版にアップグレードすると、タブレット端末向けにも変換できるようになります。">入力</li>
    <li data-width="640" style="display:none" title="マスター版にアップグレードすると、タブレット端末向けにも変換できるようになります。">その他</li>
    <li class="" data-checked="true" data-width="568">568px (iPhone5 横)</li>
    <li data-width="480">480px (iPhone4 横)</li>
    <li data-width="360">360px</li>
    <li data-width="320">320px (iPhone)</li>
</ul>


<%-- 色編集用パネル　未開発　shutto-color-panel-template --%>
<%--  <div id="shutto-color-panel-template" class="shutto-color-panel" style="display: none" data-type="neutral">
<div class="shutto-color-tables">
<table data-type="dark">
    <tbody><tr>
        <td style="background-color:#e3e3e7;" data-color="e3e3e7"></td>
        <td style="background-color:#e5e5e6;" data-color="e5e5e6"></td>
        <td style="background-color:#ecdfec;" data-color="ecdfec"></td>
        <td style="background-color:#e6dfec;" data-color="e6dfec"></td>
        <td style="background-color:#dfdfe6;" data-color="dfdfe6"></td>
        <td style="background-color:#dfe6e6;" data-color="dfe6e6"></td>
        <td style="background-color:#dfe6df;" data-color="dfe6df"></td>
        <td style="background-color:#e8e8e0;" data-color="e8e8e0"></td>
        <td style="background-color:#f9f2df;" data-color="f9f2df"></td>
        <td style="background-color:#f4e9df;" data-color="f4e9df"></td>
        <td style="background-color:#ecdfdf;" data-color="ecdfdf"></td>
        <td style="background-color:#e5e4e2;" data-color="e5e4e2"></td>
    </tr>
    <tr>
        <td style="background-color:#c7c7cf;" data-color="c7c7cf"></td>
        <td style="background-color:#cacbcd;" data-color="cacbcd"></td>
        <td style="background-color:#d9bfd9;" data-color="d9bfd9"></td>
        <td style="background-color:#ccbfd9;" data-color="ccbfd9"></td>
        <td style="background-color:#bfbfcc;" data-color="bfbfcc"></td>
        <td style="background-color:#bfcccc;" data-color="bfcccc"></td>
        <td style="background-color:#bfccbf;" data-color="bfccbf"></td>
        <td style="background-color:#d1d1c0;" data-color="d1d1c0"></td>
        <td style="background-color:#f2e6bf;" data-color="f2e6bf"></td>
        <td style="background-color:#e9d4bf;" data-color="e9d4bf"></td>
        <td style="background-color:#d9bfbf;" data-color="d9bfbf"></td>
        <td style="background-color:#ccc8c5;" data-color="ccc8c5"></td>
    </tr>
    <tr>
        <td style="background-color:#ababb7;" data-color="ababb7"></td>
        <td style="background-color:#b0b1b4;" data-color="b0b1b4"></td>
        <td style="background-color:#c69fc6;" data-color="c69fc6"></td>
        <td style="background-color:#b39fc6;" data-color="b39fc6"></td>
        <td style="background-color:#9f9fb3;" data-color="9f9fb3"></td>
        <td style="background-color:#9fb3b3;" data-color="9fb3b3"></td>
        <td style="background-color:#9fb39f;" data-color="9fb39f"></td>
        <td style="background-color:#babaa1;" data-color="babaa1"></td>
        <td style="background-color:#ecd99f;" data-color="ecd99f"></td>
        <td style="background-color:#ddbe9f;" data-color="ddbe9f"></td>
        <td style="background-color:#c69f9f;" data-color="c69f9f"></td>
        <td style="background-color:#b2ada7;" data-color="b2ada7"></td>
    </tr>
    <tr>
        <td style="background-color:#8f8f9f;" data-color="8f8f9f"></td>
        <td style="background-color:#96979b;" data-color="96979b"></td>
        <td style="background-color:#b380b3;" data-color="b380b3"></td>
        <td style="background-color:#9980b3;" data-color="9980b3"></td>
        <td style="background-color:#808099;" data-color="808099"></td>
        <td style="background-color:#809999;" data-color="809999"></td>
        <td style="background-color:#809980;" data-color="809980"></td>
        <td style="background-color:#a4a481;" data-color="a4a481"></td>
        <td style="background-color:#e6cc80;" data-color="e6cc80"></td>
        <td style="background-color:#d2a980;" data-color="d2a980"></td>
        <td style="background-color:#b38080;" data-color="b38080"></td>
        <td style="background-color:#99928a;" data-color="99928a"></td>
    </tr>
    <tr>
        <td style="background-color:#727287;" data-color="727287"></td>
        <td style="background-color:#7b7d81;" data-color="7b7d81"></td>
        <td style="background-color:#9f609f;" data-color="9f609f"></td>
        <td style="background-color:#80609f;" data-color="80609f"></td>
        <td style="background-color:#606080;" data-color="606080"></td>
        <td style="background-color:#608080;" data-color="608080"></td>
        <td style="background-color:#608060;" data-color="608060"></td>
        <td style="background-color:#8d8d62;" data-color="8d8d62"></td>
        <td style="background-color:#dfbf60;" data-color="dfbf60"></td>
        <td style="background-color:#c79360;" data-color="c79360"></td>
        <td style="background-color:#9f6060;" data-color="9f6060"></td>
        <td style="background-color:#7f766d;" data-color="7f766d"></td>
    </tr>
    <tr>
        <td style="background-color:#56566f;" data-color="56566f"></td>
        <td style="background-color:#616368;" data-color="616368"></td>
        <td style="background-color:#8c408c;" data-color="8c408c"></td>
        <td style="background-color:#66408c;" data-color="66408c"></td>
        <td style="background-color:#404066;" data-color="404066"></td>
        <td style="background-color:#406666;" data-color="406666"></td>
        <td style="background-color:#406640;" data-color="406640"></td>
        <td style="background-color:#767642;" data-color="767642"></td>
        <td style="background-color:#d9b340;" data-color="d9b340"></td>
        <td style="background-color:#bc7d40;" data-color="bc7d40"></td>
        <td style="background-color:#8c4040;" data-color="8c4040"></td>
        <td style="background-color:#655b50;" data-color="655b50"></td>
    </tr>
    <tr>
        <td style="background-color:#3a3a57;" data-color="3a3a57"></td>
        <td style="background-color:#46494f;" data-color="46494f"></td>
        <td style="background-color:#792079;" data-color="792079"></td>
        <td style="background-color:#4d2079;" data-color="4d2079"></td>
        <td style="background-color:#20204d;" data-color="20204d"></td>
        <td style="background-color:#204d4d;" data-color="204d4d"></td>
        <td style="background-color:#204d20;" data-color="204d20"></td>
        <td style="background-color:#5f5f23;" data-color="5f5f23"></td>
        <td style="background-color:#d2a620;" data-color="d2a620"></td>
        <td style="background-color:#b06820;" data-color="b06820"></td>
        <td style="background-color:#792020;" data-color="792020"></td>
        <td style="background-color:#4c3f32;" data-color="4c3f32"></td>
    </tr>
    <tr>
        <td style="background-color:#1e1e3f;" data-color="1e1e3f"></td>
        <td style="background-color:#2c2f36;" data-color="2c2f36"></td>
        <td style="background-color:#660066;" data-color="660066"></td>
        <td style="background-color:#330066;" data-color="330066"></td>
        <td style="background-color:#000033;" data-color="000033"></td>
        <td style="background-color:#003333;" data-color="003333"></td>
        <td style="background-color:#003300;" data-color="003300"></td>
        <td style="background-color:#484803;" data-color="484803"></td>
        <td style="background-color:#cc9900;" data-color="cc9900"></td>
        <td style="background-color:#a55200;" data-color="a55200"></td>
        <td style="background-color:#660000;" data-color="660000"></td>
        <td style="background-color:#322415;" data-color="322415"></td>
    </tr>
    </tbody></table>
<table data-type="neutral">
    <tbody><tr>
        <td style="background-color:#f2dfec;" data-color="f2dfec"></td>
        <td style="background-color:#ece6f2;" data-color="ece6f2"></td>
        <td style="background-color:#dfdff2;" data-color="dfdff2"></td>
        <td style="background-color:#e6ecf9;" data-color="e6ecf9"></td>
        <td style="background-color:#dfecec;" data-color="dfecec"></td>
        <td style="background-color:#e6ece6;" data-color="e6ece6"></td>
        <td style="background-color:#f2f2df;" data-color="f2f2df"></td>
        <td style="background-color:#fff9df;" data-color="fff9df"></td>
        <td style="background-color:#fceddf;" data-color="fceddf"></td>
        <td style="background-color:#f2dfdf;" data-color="f2dfdf"></td>
        <td style="background-color:#ece6df;" data-color="ece6df"></td>
        <td style="background-color:#ffffff;" data-color="ffffff"></td>
    </tr>
    <tr>
        <td style="background-color:#e6bfd9;" data-color="e6bfd9"></td>
        <td style="background-color:#d9cce6;" data-color="d9cce6"></td>
        <td style="background-color:#bfbfe6;" data-color="bfbfe6"></td>
        <td style="background-color:#ccd9f2;" data-color="ccd9f2"></td>
        <td style="background-color:#bfd9d9;" data-color="bfd9d9"></td>
        <td style="background-color:#ccd9cc;" data-color="ccd9cc"></td>
        <td style="background-color:#e6e6bf;" data-color="e6e6bf"></td>
        <td style="background-color:#fff2bf;" data-color="fff2bf"></td>
        <td style="background-color:#f8dabf;" data-color="f8dabf"></td>
        <td style="background-color:#e6bfbf;" data-color="e6bfbf"></td>
        <td style="background-color:#d9ccbf;" data-color="d9ccbf"></td>
        <td style="background-color:#d8d8d8;" data-color="d8d8d8"></td>
    </tr>
    <tr>
        <td style="background-color:#d99fc6;" data-color="d99fc6"></td>
        <td style="background-color:#c6b3d9;" data-color="c6b3d9"></td>
        <td style="background-color:#9f9fd9;" data-color="9f9fd9"></td>
        <td style="background-color:#b3c6ec;" data-color="b3c6ec"></td>
        <td style="background-color:#9fc6c6;" data-color="9fc6c6"></td>
        <td style="background-color:#b3c6b3;" data-color="b3c6b3"></td>
        <td style="background-color:#d9d99f;" data-color="d9d99f"></td>
        <td style="background-color:#ffec9f;" data-color="ffec9f"></td>
        <td style="background-color:#f5c89f;" data-color="f5c89f"></td>
        <td style="background-color:#d99f9f;" data-color="d99f9f"></td>
        <td style="background-color:#c6b39f;" data-color="c6b39f"></td>
        <td style="background-color:#b6b6b6;" data-color="b6b6b6"></td>
    </tr>
    <tr>
        <td style="background-color:#cc80b3;" data-color="cc80b3"></td>
        <td style="background-color:#b399cc;" data-color="b399cc"></td>
        <td style="background-color:#8080cc;" data-color="8080cc"></td>
        <td style="background-color:#99b3e6;" data-color="99b3e6"></td>
        <td style="background-color:#80b3b3;" data-color="80b3b3"></td>
        <td style="background-color:#99b399;" data-color="99b399"></td>
        <td style="background-color:#cccc80;" data-color="cccc80"></td>
        <td style="background-color:#ffe680;" data-color="ffe680"></td>
        <td style="background-color:#f2b580;" data-color="f2b580"></td>
        <td style="background-color:#cc8080;" data-color="cc8080"></td>
        <td style="background-color:#b39980;" data-color="b39980"></td>
        <td style="background-color:#929292;" data-color="929292"></td>
    </tr>
    <tr>
        <td style="background-color:#bf609f;" data-color="bf609f"></td>
        <td style="background-color:#9f80bf;" data-color="9f80bf"></td>
        <td style="background-color:#6060bf;" data-color="6060bf"></td>
        <td style="background-color:#809fdf;" data-color="809fdf"></td>
        <td style="background-color:#609f9f;" data-color="609f9f"></td>
        <td style="background-color:#809f80;" data-color="809f80"></td>
        <td style="background-color:#bfbf60;" data-color="bfbf60"></td>
        <td style="background-color:#ffdf60;" data-color="ffdf60"></td>
        <td style="background-color:#eea360;" data-color="eea360"></td>
        <td style="background-color:#bf6060;" data-color="bf6060"></td>
        <td style="background-color:#9f8060;" data-color="9f8060"></td>
        <td style="background-color:#6d6d6d;" data-color="6d6d6d"></td>
    </tr>
    <tr>
        <td style="background-color:#b3408c;" data-color="b3408c"></td>
        <td style="background-color:#8c66b3;" data-color="8c66b3"></td>
        <td style="background-color:#4040b3;" data-color="4040b3"></td>
        <td style="background-color:#668cd9;" data-color="668cd9"></td>
        <td style="background-color:#408c8c;" data-color="408c8c"></td>
        <td style="background-color:#668c66;" data-color="668c66"></td>
        <td style="background-color:#b3b340;" data-color="b3b340"></td>
        <td style="background-color:#ffd940;" data-color="ffd940"></td>
        <td style="background-color:#eb9040;" data-color="eb9040"></td>
        <td style="background-color:#b34040;" data-color="b34040"></td>
        <td style="background-color:#8c6640;" data-color="8c6640"></td>
        <td style="background-color:#494949;" data-color="494949"></td>
    </tr>
    <tr>
        <td style="background-color:#a62079;" data-color="a62079"></td>
        <td style="background-color:#794da6;" data-color="794da6"></td>
        <td style="background-color:#2020a6;" data-color="2020a6"></td>
        <td style="background-color:#4d79d2;" data-color="4d79d2"></td>
        <td style="background-color:#207979;" data-color="207979"></td>
        <td style="background-color:#4d794d;" data-color="4d794d"></td>
        <td style="background-color:#a6a620;" data-color="a6a620"></td>
        <td style="background-color:#ffd220;" data-color="ffd220"></td>
        <td style="background-color:#e77e20;" data-color="e77e20"></td>
        <td style="background-color:#a62020;" data-color="a62020"></td>
        <td style="background-color:#794d20;" data-color="794d20"></td>
        <td style="background-color:#242424;" data-color="242424"></td>
    </tr>
    <tr>
        <td style="background-color:#990066;" data-color="990066"></td>
        <td style="background-color:#663399;" data-color="663399"></td>
        <td style="background-color:#000099;" data-color="000099"></td>
        <td style="background-color:#3366CC;" data-color="3366CC"></td>
        <td style="background-color:#006666;" data-color="006666"></td>
        <td style="background-color:#336633;" data-color="336633"></td>
        <td style="background-color:#999900;" data-color="999900"></td>
        <td style="background-color:#FFCC00;" data-color="FFCC00"></td>
        <td style="background-color:#E46B00;" data-color="E46B00"></td>
        <td style="background-color:#990000;" data-color="990000"></td>
        <td style="background-color:#663300;" data-color="663300"></td>
        <td style="background-color:#000000;" data-color="000000"></td>
    </tr>
    </tbody></table>
<table data-type="bright">
    <tbody><tr>
        <td style="background-color:#fbdbee;" data-color="fbdbee"></td>
        <td style="background-color:#ffdfff;" data-color="ffdfff"></td>
        <td style="background-color:#f2dfff;" data-color="f2dfff"></td>
        <td style="background-color:#ecdfff;" data-color="ecdfff"></td>
        <td style="background-color:#dfdff9;" data-color="dfdff9"></td>
        <td style="background-color:#e6ecff;" data-color="e6ecff"></td>
        <td style="background-color:#dff2f2;" data-color="dff2f2"></td>
        <td style="background-color:#dff2df;" data-color="dff2df"></td>
        <td style="background-color:#f2f9df;" data-color="f2f9df"></td>
        <td style="background-color:#ffffdf;" data-color="ffffdf"></td>
        <td style="background-color:#ffecdf;" data-color="ffecdf"></td>
        <td style="background-color:#ffdfdf;" data-color="ffdfdf"></td>
    </tr>
    <tr>
        <td style="background-color:#ffbfe6;" data-color="ffbfe6"></td>
        <td style="background-color:#ffbfff;" data-color="ffbfff"></td>
        <td style="background-color:#e6bfff;" data-color="e6bfff"></td>
        <td style="background-color:#d9bfff;" data-color="d9bfff"></td>
        <td style="background-color:#bfbff2;" data-color="bfbff2"></td>
        <td style="background-color:#ccd9ff;" data-color="ccd9ff"></td>
        <td style="background-color:#bfe6e6;" data-color="bfe6e6"></td>
        <td style="background-color:#bfe6bf;" data-color="bfe6bf"></td>
        <td style="background-color:#e6f2bf;" data-color="e6f2bf"></td>
        <td style="background-color:#ffffbf;" data-color="ffffbf"></td>
        <td style="background-color:#ffd9bf;" data-color="ffd9bf"></td>
        <td style="background-color:#ffbfbf;" data-color="ffbfbf"></td>
    </tr>
    <tr>
        <td style="background-color:#ff9fd9;" data-color="ff9fd9"></td>
        <td style="background-color:#ff9fff;" data-color="ff9fff"></td>
        <td style="background-color:#d99fff;" data-color="d99fff"></td>
        <td style="background-color:#c69fff;" data-color="c69fff"></td>
        <td style="background-color:#9f9fec;" data-color="9f9fec"></td>
        <td style="background-color:#b3c6ff;" data-color="b3c6ff"></td>
        <td style="background-color:#9fd9d9;" data-color="9fd9d9"></td>
        <td style="background-color:#9fd99f;" data-color="9fd99f"></td>
        <td style="background-color:#d9ec9f;" data-color="d9ec9f"></td>
        <td style="background-color:#ffff9f;" data-color="ffff9f"></td>
        <td style="background-color:#ffc69f;" data-color="ffc69f"></td>
        <td style="background-color:#ff9f9f;" data-color="ff9f9f"></td>
    </tr>
    <tr>
        <td style="background-color:#ff80cc;" data-color="ff80cc"></td>
        <td style="background-color:#ff80ff;" data-color="ff80ff"></td>
        <td style="background-color:#cc80ff;" data-color="cc80ff"></td>
        <td style="background-color:#b380ff;" data-color="b380ff"></td>
        <td style="background-color:#8080e6;" data-color="8080e6"></td>
        <td style="background-color:#99b3ff;" data-color="99b3ff"></td>
        <td style="background-color:#80cccc;" data-color="80cccc"></td>
        <td style="background-color:#80cc80;" data-color="80cc80"></td>
        <td style="background-color:#cce680;" data-color="cce680"></td>
        <td style="background-color:#ffff80;" data-color="ffff80"></td>
        <td style="background-color:#ffb380;" data-color="ffb380"></td>
        <td style="background-color:#ff8080;" data-color="ff8080"></td>
    </tr>
    <tr>
        <td style="background-color:#ff60bf;" data-color="ff60bf"></td>
        <td style="background-color:#ff60ff;" data-color="ff60ff"></td>
        <td style="background-color:#bf60ff;" data-color="bf60ff"></td>
        <td style="background-color:#9f60ff;" data-color="9f60ff"></td>
        <td style="background-color:#6060df;" data-color="6060df"></td>
        <td style="background-color:#809fff;" data-color="809fff"></td>
        <td style="background-color:#60bfbf;" data-color="60bfbf"></td>
        <td style="background-color:#60bf60;" data-color="60bf60"></td>
        <td style="background-color:#bfdf60;" data-color="bfdf60"></td>
        <td style="background-color:#ffff60;" data-color="ffff60"></td>
        <td style="background-color:#ff9f60;" data-color="ff9f60"></td>
        <td style="background-color:#ff6060;" data-color="ff6060"></td>
    </tr>
    <tr>
        <td style="background-color:#ff40b3;" data-color="ff40b3"></td>
        <td style="background-color:#ff40ff;" data-color="ff40ff"></td>
        <td style="background-color:#b340ff;" data-color="b340ff"></td>
        <td style="background-color:#8c40ff;" data-color="8c40ff"></td>
        <td style="background-color:#4040d9;" data-color="4040d9"></td>
        <td style="background-color:#668cff;" data-color="668cff"></td>
        <td style="background-color:#40b3b3;" data-color="40b3b3"></td>
        <td style="background-color:#40b340;" data-color="40b340"></td>
        <td style="background-color:#b3d940;" data-color="b3d940"></td>
        <td style="background-color:#ffff40;" data-color="ffff40"></td>
        <td style="background-color:#ff8c40;" data-color="ff8c40"></td>
        <td style="background-color:#ff4040;" data-color="ff4040"></td>
    </tr>
    <tr>
        <td style="background-color:#ff20a6;" data-color="ff20a6"></td>
        <td style="background-color:#ff20ff;" data-color="ff20ff"></td>
        <td style="background-color:#a620ff;" data-color="a620ff"></td>
        <td style="background-color:#7920ff;" data-color="7920ff"></td>
        <td style="background-color:#2020d2;" data-color="2020d2"></td>
        <td style="background-color:#4d79ff;" data-color="4d79ff"></td>
        <td style="background-color:#20a6a6;" data-color="20a6a6"></td>
        <td style="background-color:#20a620;" data-color="20a620"></td>
        <td style="background-color:#a6d220;" data-color="a6d220"></td>
        <td style="background-color:#ffff20;" data-color="ffff20"></td>
        <td style="background-color:#ff7920;" data-color="ff7920"></td>
        <td style="background-color:#ff2020;" data-color="ff2020"></td>
    </tr>
    <tr>
        <td style="background-color:#ff0099;" data-color="ff0099"></td>
        <td style="background-color:#ff00ff;" data-color="ff00ff"></td>
        <td style="background-color:#9900ff;" data-color="9900ff"></td>
        <td style="background-color:#6600ff;" data-color="6600ff"></td>
        <td style="background-color:#0000cc;" data-color="0000cc"></td>
        <td style="background-color:#3366ff;" data-color="3366ff"></td>
        <td style="background-color:#009999;" data-color="009999"></td>
        <td style="background-color:#009900;" data-color="009900"></td>
        <td style="background-color:#99cc00;" data-color="99cc00"></td>
        <td style="background-color:#ffff00;" data-color="ffff00"></td>
        <td style="background-color:#ff6600;" data-color="ff6600"></td>
        <td style="background-color:#ff0000;" data-color="ff0000"></td>
    </tr>
    </tbody></table>
</div>
<div class="shutto-color-transparent" data-color=""></div>
<ul class="shutto-color-tabs">
    <li data-type="dark">dark</li>
    <li data-type="neutral">neutral</li>
    <li data-type="bright">bright</li>
</ul>
</div>
--%>


<div id="shutto-image-library" class="shutto-dialog-container"></div>


<%--未使用--%>
<iframe id="shutto-proxy" src="jsp/sub/proxy.htm"></iframe>


<%--popup　表示コンテンツ--%>

<div style="left: 600px; position: absolute; top: 2291px; z-index: 9999; opacity: 1; "
     id="preview">
    <span class="button b-close"><span>X</span></span>

    <div class="content">
        <%--
        <iframe src="http://dinbror.dk/blog" class="b-iframe" frameborder="0" scrolling="no"></iframe>
        --%>
        <iframe id="previewIfr" src="http://dinbror.dk/blog"></iframe>
    </div>
</div>


</body>
</html>