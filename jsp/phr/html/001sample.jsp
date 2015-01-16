<%@ page contentType="text/html; charset=UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags"%>
<html>
<head>
<base href="http://localhost:8080/JspConvertor/jsp/phr/html/mobile-template001.html">
<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
<meta name="format-detection" content="telephone=no">
<meta http-equiv="description" content="this is my page">
<meta http-equiv="content-type" content="text/html; charset=UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1,maximum-scale=1, user-scalable=no">
<link rel="stylesheet" href="../jquery/css/jquery.mobile-theme.min.css">
<link rel="stylesheet" href="../css/common.css">
<link rel="stylesheet" href="../css/font-awesome.min.css">
<script src="../jquery/js/jquery.js">
</script>
<script src="../jquery/js/jquery.mobile-1.3.2.min.js">
</script>
<title>
</title>
</head>
<body class="ui-mobile-viewport ui-overlay-c">
// イベント処理用コンテキストメニューを導入
<script type="text/javascript" src="../../jquery/jquery.contextmenu.r2.js">
</script>
    // ドラグアンドドロップイベンドを処理する
<script src="../../js/dragNdrop_2.js">
</script>
<script type="text/javascript">
        var agent = navigator.userAgent.toLowerCase();
        if ((agent.indexOf("win") != -1)) {
            /*alert(agent);*/
        }
        $(document).on('blur', 'input, textarea', function () {
            setTimeout(function () {
                window.scrollTo(document.body.scrollLeft, document.body.scrollTop);
            }, 0);
        });
</script>
<script type="javascript">
        $.contextMenu.defaults({
            menuStyle: {
                border: "2px solid green"
            },
            shadow: false,
            onContextMenu: function (e) {
                alert('Did someone asked for a context menu?!');
            }
        });
        $(document).ready(function(){
                $("#item_1").click(function(){
                alert("22222");
               // $("p").css("background-color","yellow");
            });
           /* $("").mouseout(function(){
                $("p").css("background-color","lightgray");
            });*/
        });
</script>
<div style="padding-top: 90px; min-height: 397px;" class="ui-page ui-body-c ui-page-header-fixed ui-page-active" tabindex="0" data-role="page" id="login-page" data-theme="c" data-url="login-page">
<div ondrop="drop(event)" ondragover="allowDrop(event)" style="border: 1px dashed #ff0000">
<div role="banner" data-role="header" data-theme="g" data-tap-toggle="false" data-position="fixed" id="header" class="jqm-header ui-header ui-bar-g ui-header-fixed slidedown">
<h1 aria-level="1" role="heading" class="ui-title" style="margin-left:10px;">
テンプレート001
</h1>
<h1 aria-level="1" role="heading" class="ui-title" style="margin-left:10px;">
ヘッダー
</h1>
</div>
</div>
<div ondrop="drop(event)" ondragover="allowDrop(event)" style="border: 1px dashed #ff0000">
<div role="main" class="ui-content" data-role="content" id="contents">
<form>
<div id="inputarea" align="center">
<ul class="ui-listview ui-listview-inset ui-corner-all ui-shadow" data-role="listview" data-inset="true" data-theme="h">
<li class="ui-li ui-li-divider ui-bar-h ui-first-child" role="heading" data-role="list-divider" data-theme="h">
文字
</li>
<li class="ui-li ui-li-static ui-btn-up-h ui-last-child">
                            入力項目フォーム
</li>
</ul>
<div>
<div align="center">
                            ボタンフォーム
</div>
<div align="center">
                            ボタンフォーム
</div>
<div style="margin-top:25px; margin-bottom:30px;">
                            その他フォーム
</div>
</div>
</div>
</form>
</div>
</div>
<div ondrop="drop(event)" ondragover="allowDrop(event)" style="border: 1px dashed #ff0000">
<div role="contentinfo" data-role="footer" class="jqm-footer ui-footer ui-bar-a">
            フッター
</div>
</div>
</div>
// コンテキストメニューを定義する
<div style="display: none;" class="contextMenu" id="myMenu2">
<ul>
<li id="open">
スタイル変更
</li>
<li id="save">
属性一覧
</li>
<li id="delete">
削除
</li>
<li id="email">
email
</li>
<!-- etc... -->
</ul>
</div>
<div class="ui-loader ui-corner-all ui-body-a ui-loader-default">
<span class="ui-icon ui-icon-loading">
</span>
<h1>
loading
</h1>
</div>
</body>
</html>
