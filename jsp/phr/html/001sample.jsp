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
<div style="padding-top: 216px; min-height: 194px;" class="ui-page ui-body-c ui-page-header-fixed ui-page-active" tabindex="0" data-role="page" id="login-page" data-theme="c" data-url="login-page">
<div ondrop="drop(event)" ondragover="allowDrop(event)" style="border: 1px dashed #ff0000">
<div role="banner" data-role="header" data-theme="g" data-tap-toggle="false" data-position="fixed" id="header" class="jqm-header ui-header ui-bar-g ui-header-fixed slidedown">
<h1 aria-level="1" role="heading" class="ui-title" style="margin-left:10px;">
テンプレート001
<h1 style="outline: 1px solid blue; box-shadow: 0px 0px 5px blue; color: red; border: 1px solid rgb(166, 210, 32); width: 100%;" id="id-12584" ondragstart="drag(event)" draggable="true" aria-level="1" role="heading" class="node-component">
健診データマッピング
</h1>
<span style="outline: 1px solid blue; box-shadow: 0px 0px 5px blue; color: red; border: 1px solid rgb(166, 210, 32); width: 100%;" id="id-88681" ondragstart="drag(event)" draggable="true" class="node-component">
 同意します
</span>
</h1>
<h1 aria-level="1" role="heading" class="ui-title" style="margin-left:10px;">
ヘッダー
<h1 style="outline: 1px solid blue; box-shadow: 0px 0px 5px blue; background: none repeat scroll 0% 0% rgb(217, 236, 255);" id="id-12584" ondragstart="window.parent.drag(event)" draggable="true" aria-level="1" role="heading" class="ui-title">
健診データマッピング
</h1>
<span style="outline: 1px solid blue; box-shadow: 0px 0px 5px blue; color: red; border: 1px solid rgb(166, 210, 32); width: 100%;" id="id-67610" ondragstart="drag(event)" draggable="true" class="node-component">
<span style="outline: medium none; box-shadow: none;" id="id-88681" ondragstart="window.parent.drag(event)" draggable="true" class="ui-btn-text">
 同意します
</span>
<span style="outline: medium none; box-shadow: none;" id="id-63621" ondragstart="window.parent.drag(event)" draggable="true" class="ui-icon ui-icon-checkbox-on ui-icon-shadow">
&nbsp;
</span>
</span>
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
<textarea ondragstart="drag(event)" draggable="true" style="height: 196px; outline: 1px solid blue; box-shadow: 0px 0px 5px blue; color: red; border: 1px solid rgb(166, 210, 32); width: 100%;" class="node-component" name="textarea" id="id-71653" readonly="readonly">
					        利用規約利用規約利用規約利用規約利用規約利用規約利用規約利用規約利
					用規約利用規約利用規約利用規約利用規約利用規約利用規約利用規約利用
					規約利用規約利用規約利用規約利用規約利用規約利用規約利用規約利用規
					約利用規約利用規約利用規約利用規約利用規約利用規
					        約利用規約利用規約利用規約利用規約利用規約利用規約利用規約利用規約
				         利用規約利用規約利用規約利用規約利用規約利用規約
</textarea>
</li>
<li class="ui-li ui-li-static ui-btn-up-h ui-last-child">
                            入力項目フォーム
</li>
</ul>
<div>
<div align="center">
                            ボタンフォーム
<span style="outline: 1px solid blue; box-shadow: 0px 0px 5px blue; color: yellow; border: 1px solid red; width: 100%;" id="id-67610" ondragstart="drag(event)" draggable="true" class="node-component">
<span id="id-88681" ondragstart="window.parent.drag(event)" draggable="true" class="ui-btn-text">
 同意します
</span>
<span id="id-63621" ondragstart="window.parent.drag(event)" draggable="true" class="ui-icon ui-icon-checkbox-on ui-icon-shadow">
&nbsp;
</span>
</span>
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
<div style="position: absolute; z-index: 500; left: 224px; top: 215px; display: none;" id="jqContextMenu">
<ul style="list-style: none outside none; padding: 1px; margin: 0px; background-color: rgb(255, 255, 255); border: 2px solid rgb(0, 0, 0); width: 100px;">
<li style="margin: 0px; color: white; display: block; cursor: default; padding: 1px; border: medium none; background-color: rgb(102, 102, 102); font-family: verdana;" id="open">
スタイル変更
</li>
<li style="margin: 0px; color: white; display: block; cursor: default; padding: 1px; border: medium none; background-color: rgb(102, 102, 102); font-family: verdana;" id="save">
属性一覧
</li>
<li style="margin: 0px; color: white; display: block; cursor: default; padding: 1px; border: medium none; background-color: rgb(102, 102, 102); font-family: verdana;" id="delete">
削除
</li>
<li style="margin: 0px; color: white; display: block; cursor: default; padding: 1px; border: medium none; background-color: rgb(102, 102, 102); font-family: verdana;" id="email">
email
</li>
<!-- etc... -->
</ul>
</div>
<div style="background-color: rgb(0, 0, 0); position: absolute; opacity: 0.2; z-index: 499; display: none; width: 106px; height: 86px; left: 226px; top: 217px;">
</div>
</body>
</html>
