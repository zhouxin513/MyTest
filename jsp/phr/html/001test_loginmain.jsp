<!DOCTYPE html>
<html>
  <head>
    <title>健康管理支援サービス</title>
    <meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta name="format-detection" content="telephone=no">
	<meta http-equiv="description" content="this is my page">
	<meta http-equiv="content-type" content="text/html; charset=UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<link rel="stylesheet" href="../jquery/css/jquery.mobile-theme.min.css">
	<link rel="stylesheet" href="../css/common.css">
	<link rel="stylesheet" href="../css/font-awesome.min.css">
	<script src="../jquery/js/jquery.js"></script>
	<script src="../jquery/js/jquery.mobile-1.3.2.min.js"></script>
	
	<script type="text/javascript">
		$(function() {
			$.mobile.buttonMarkup.hoverDelay = "false";
		});
		$(document).on('blur', 'input, textarea', function() {
		    setTimeout(function() {
		        window.scrollTo(document.body.scrollLeft, document.body.scrollTop);
		    }, 0);
		});
	</script>
  </head>
  
  <body>
  	<div data-role="page" id="login-page" data-theme="c"
		data-url="login-page">
		<div data-role="header" data-theme="g" data-tap-toggle="false" data-position="fixed"
			id="header" class="jqm-header">
			<h1 style="margin-left:10px;">健康管理支援サービス</h1>
		</div>
   		<div data-role='content'>
  			<form>
			    <ul data-role="listview" data-inset="true" data-theme="h">
			   		<li data-role="list-divider" data-theme="h">登録済みの方</li>	
			        <li>
			            <label for="name2">ログインＩＤ</label>
			            <input type="text" name="name1" id="name1" value="" data-clear-btn="true">
			        </li>
			       <li>
			            <label for="name2">パスワード</label>
			            <input type="password" name="name2" id="name2" value="" data-clear-btn="true">
			        </li>
			    </ul>
			    <div style="height:30px;margin: 0 auto; width:100px;">
			 		<a href="top.html" data-ajax="false" data-role="button" class=" jqm-center-btn ui-btn ui-shadow ui-btn-corner-all ui-btn-up-i" data-theme="i">ログイン</a>
			 	</div>
			 	<div style="margin-top:25px; margin-bottom:30px;">
				    <a href="#" data-ajax="false" style="text-decoration:underline;font-weight:normal;">ログインＩＤ、パスワードを忘れた场合</a>
			 	</div>
			</form>
	   		<form>
			    <ul data-role="listview" data-inset="true" data-theme="h">
			    	<li data-role="list-divider" data-theme="h">初めての方</li>	
			        <li>
			            <label for="name2">健診データＩＤ</label>
			            <table style="width:100%;">
			            	<tr>
			            		<td>
			            			<input type="text" name="name2" id="name1" value="" data-clear-btn="true">
			            		</td>
			            		<td>
			            			-
			            		</td>
			            		<td>
			            			 <input type="text" name="name2" id="name2" value="" data-clear-btn="true">
			            		</td>
			            	</tr>
			            	<tr>
			            		<td>
			            			<input type="text" name="name2" id="name3" value="" data-clear-btn="true">
			            		</td>
			            		<td>
			            			-
			            		</td>
			            		<td>
			            			<input type="text" name="name2" id="name4" value="" data-clear-btn="true">
			            		</td>
			            	</tr>
			            </table>
			        </li>
			       <li>
			            <label for="name2">健診データパスワード</label>
			            <input type="text" name="name2" id="name2" value="" data-clear-btn="true">
			        </li>
			    </ul>
			    <div style="height:30px;height:30px;margin: 0 auto; width:100px;">
			 		<a href="loginagreement.html" data-ajax="false" data-role="button" class=" jqm-center-btn ui-btn ui-shadow ui-btn-corner-all ui-btn-up-i" data-theme="i">次へ</a>
			 	</div>
			 	<div style="margin-top:25px; margin-bottom:30px;">
				    <a href="#" data-ajax="false" style="text-decoration:underline;font-weight:normal;">PCサイトへ</a>
			 	</div>
			</form>
   		</div>
   		<div data-role='footer' class="jqm-footer">
   			<p>© Copyright 2013</p>
   		</div> 	
   	</div>
  </body>
</html>
