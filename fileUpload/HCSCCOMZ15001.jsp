<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@taglib prefix="s" uri="/struts-tags"%>
<%
    String path = request.getContextPath();
    String basePath = request.getScheme() + "://"
            + request.getServerName() + ":" + request.getServerPort()
            + path + "/";
%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html lang="ja">
<head>
    <meta http-equiv="X-UA-Compatible" content="IE=8" />
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta http-equiv="Pragma" content="no-cache">
    <meta http-equiv="Cache-Control" content="no-cache">

    <title><s:text name="login.title"/></title>
    <jsp:include page="./comm/commonInclude.jsp" flush="true" />
    <link href="css/login.css" rel="stylesheet" type="text/css" />
<style>
.headerMain{
	height:60px;
	background-color: #FFFFFF;
	z-index: 999;
	position: inherit;
	width: auto;
}
</style>
<script type="text/javascript">
$(document).ready(function(){
	var name=$("#userid").val();
	var password=$("#idpassword").val();
	if(name==""){
		$("#user_name").css("display","block");
	}
	if(password==""){
		$("#password").css("display","block");
	}
});

document.onkeydown=keyDownSearch;

function keyDownSearch(e) {
    var theEvent = e || window.event;
    var code = theEvent.keyCode || theEvent.which || theEvent.charCode;
    if (code == 13) {
    	submitform("HCSCCOMZ1500102.action");
        return false;
    }
    return true;
}

function hideText(flag){
	if(flag=="1"){
		$("#user_name").css("display","none");
		$("#login_name").css("background","url(./img/nameON.png) no-repeat left top");
	}else{
		$("#password").css("display","none");
		$("#login_password").css("background","url(./img/passwordON.png) no-repeat left top");
	}
}

function hideTexton(flag){
	if(flag=="1"){
		document.getElementById("userid").focus();
	}else{
		document.getElementById("idpassword").focus();
	}
}

function showText(flag){
	if(flag=="1"){
		var name=$("#userid").val();
		if(name==""){
			$("#user_name").css("display","block");
		}else{
			$("#user_name").css("display","none");
		}
		$("#login_name").css("background","url(./img/name.png) no-repeat left top");
	}else{
		var password=$("#idpassword").val();
		if(password==""){
			$("#password").css("display","block");
		}else{
			$("#password").css("display","none");
		}
		$("#login_password").css("background","url(./img/password.png) no-repeat left top");
	}
}
</script>
</head>
<body>
	<div class="main">
		<form id="form1"  method="post" autocomplete ="off">
		    <!-- ﾍｯﾀﾞ部 -->
		    <jsp:include page="./comm/header.jsp" flush="true" />
		    <div class="center">
		        <div class="container" style="margin-top: 50px;">
		        	<div>
                        <s:actionmessage cssClass="actionmessage" />
                        <s:actionerror cssClass="actionerror" />
                        <s:fielderror cssClass="fielderror" />
                    </div>
		            <!-- 画面名 -->
		            <div class="container_user">
		               <b><s:text name="HCSCCOMZ15001.pageName" /></b>
		            </div>
		            <div class="container_password" style="min-height: 100px;height: auto;">
		                <div class="container_children">
		                    <div style="margin-top: 30px;margin-left: 20px;">
		                    	<center>
			                    	<!-- ユーザID -->
			                    	<div class="layout_input" >
				                        <div id="user_name" class="hideText" onclick="hideTexton(1)">
				                        	<s:text name="HCSCCOMZ15001.userId" />
				                        </div>
				                        <div class="login_name" id="login_name">
				                        	<s:textfield id="userid" name="form.mailAddress" maxlength="55" cssClass="showInput" onfocus="hideText(1)" onblur="showText(1)"></s:textfield>
				                        </div>
				                    </div>
			                   		<!-- パスワード -->
			                    	<div class="layout_input" >
			                        	<div id="password" class="hideText" onclick="hideTexton(2)">
			                        		<s:text name="HCSCCOMZ15001.password" />
			                        	</div>
			                        	<div class="login_password" id="login_password">
			                        		<s:password id="idpassword" name="form.password" maxlength="16" cssClass="showInput" onfocus="hideText(2)" onblur="showText(2)"></s:password>
			                        	</div>
				                    </div>
			                    </center>
		                    </div>
		                    <div style="clear: both;"></div>
		                    <!-- ユーザIDブラウザに記憶する -->
		                    <div style="height: 20px;color: #797979;font-size: 14px;">
	                        	<s:checkbox name="form.loginRetainFlag"></s:checkbox>
	                        	<s:text name="HCSCCOMZ15001.loginRetainFlag" />
	                        </div>
		                    <!-- ﾛｸﾞｲﾝﾎﾞﾀﾝ -->
		                    <div style="margin-top: 20px;">
		                    	<center>
			                    	<div class="button" style="width: 190px;height: 30px;line-height: 30px;" onclick="submitform('HCSCCOMZ1500102.action');" >
			                    		<s:text name="HCSCCOMZ15001.btnLogin" />
			                    	</div>
		                    	</center>
		                    </div>
		                    <div style="margin-top: 20px;height: 30px;font-size: 13px;">
			                    <!-- 新規登録はこちら -->
			                    <div style="width: 190px;height: 20px;float: left;margin-left: 120px;">
<!-- 			                    	<s:a href="HCSCCOMZ1500104"><s:text name="HCSCCOMZ15001.createUser" /></s:a> -->
			                    	<a href="javascript:void(0);" onclick="submitform('HCSCCOMZ1500104')">
											<s:text name="HCSCCOMZ15001.createUser" />
										</a>
			                    </div>
			                    <!-- パスワードが忘れた場合 -->
			                    <div style="width: 190px;height: 20px;float: left;">
<!-- 			                   		<s:a href="HCSCCOMZ1500105"><s:text name="HCSCCOMZ15001.passwordReset" /></s:a> -->
										<a href="javascript:void(0);" onclick="submitform('HCSCCOMZ1500105')">
											<s:text name="HCSCCOMZ15001.passwordReset" />
										</a>
			                    </div>
		                    </div>
		                    <div style="clear: both;"></div>
		                </div>
		            </div>
		            <!-- 文言ｴﾘｱ -->
		            <div class="infoText">
		                <s:text name="HCSCCOMZ15001.textArea" />
		            </div>
		    	</div>
		    </div>
		</form>
	</div>
	<!-- フッタ -->
	<jsp:include page="./comm/footer.jsp" flush="true" />
</body>
</html>