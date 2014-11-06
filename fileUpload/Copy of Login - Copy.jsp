<%@ page contentType="text/html; charset=UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags"%>
<html>
<head>
<title>
DCライトサービス
</title>
<meta http-equiv="content-type" content="text/html; charset=UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1" />
<link rel="stylesheet" href="${pageContext.request.contextPath}/styles/jquery/css/jquery.mobile-theme.min.css">
<link rel="stylesheet" href="${pageContext.request.contextPath}/styles/css/common.css">
<link rel="stylesheet" href="${pageContext.request.contextPath}/styles/css/font-awesome.min.css">
<script src="${pageContext.request.contextPath}/styles/jquery/js/jquery.js">
</script>
<script src="${pageContext.request.contextPath}/styles/jquery/js/jquery.mobile-1.3.2.min.js">
</script>
<script type="text/javascript">
		$(function() {
			$.mobile.buttonMarkup.hoverDelay = "false";
		});
		$(document).on('blur', 'input, textarea', function() {
		    setTimeout(function() {
		        window.scrollTo(document.body.scrollLeft, document.body.scrollTop);
		    }, 0);
		});
		function submitform() {
		}
</script>
</head>
<body>
<div data-role="page" id="login-page" data-theme="c"
		data-url="login-page">
<div data-role="header" data-theme="g" data-tap-toggle="false" data-position="fixed"
			id="header" class="jqm-header">
<h1 style="margin-left:10px;">
DCライトサービス
</h1>
</div>
<div data-role='content'>
<s:form action="login.action" method="post">
<table align="center">
<s:textfield name="username" key="label.userid" size="20" />
<s:password name="password" key="label.password" size="20" />
<s:submit method="execute" key="button.login" align="center" />
</table>
</s:form>
<s:form action="login.action" method="post">
<ul data-role="listview" data-inset="true" data-theme="h">
<li data-role="list-divider" data-theme="h">
ログイン
</li>
<li>
<label for="name2">
契約番号
</label>
<input type="text" name="name1" id="name1" value="" data-clear-btn="true" placeholder="契約番号を入力してください。">
</li>
<li>
<label for="name2">
ログインＩＤ
</label>
<input type="text" name="name1" id="name1" value="" data-clear-btn="true" placeholder="ログインIDを入力してください。">
</li>
<li>
<label for="name2">
パスワード
</label>
<input type="password" name="name2" id="name2" value="" data-clear-btn="true" placeholder="パスワードを入力してください。">
</li>
</ul>
<div style="height:30px;margin: 0 auto; width:100px;">
<input type="submit" id="login_action_button_login" data-theme="i" class=" jqm-center-btn ui-btn" name="method:execute" value="ログイン" onclick="submitform();">
</div>
<div style="margin-top:25px; margin-bottom:30px;">
<a href="#" data-ajax="false" style="text-decoration:underline;font-weight:normal;">
ログインＩＤ、パスワードを忘れた场合
</a>
</div>
</s:form>
</div>
<div data-role='footer' class="jqm-footer">
<p>
© Copyright 2013
</p>
</div>
</div>
</body>
</html>
</html>
