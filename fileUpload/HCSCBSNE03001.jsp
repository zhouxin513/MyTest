<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@taglib prefix="s" uri="/struts-tags"%>
<%
    String path = request.getContextPath();
            String basePath = request.getScheme() + "://"
                    + request.getServerName() + ":" + request.getServerPort()
                    + path + "/";
            String languageFlg = "cn";
%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html lang="ja">
<head>
    <meta http-equiv="X-UA-Compatible" content="IE=8" />
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta http-equiv="Pragma" content="no-cache">
    <meta http-equiv="Cache-Control" content="no-cache">
    <link href="css/hcsc.css" rel="stylesheet" type="text/css" />
    <title><s:text name="HCSCBSNE03001.title"/></title>
    <jsp:include page="./comm/commonInclude.jsp" flush="true" />
<script type="text/javascript">
   var QUESTIONE01 = "<s:text name='HCSCBSNE03001_Q001' ></s:text>";
   function withdraw() {
       var btnOk = window.confirm(QUESTIONE01);
       if (btnOk) {
    	   submitform('HCSCBSNE0300102');
       }
   }
</script>
</head>

<body>
	<input type="hidden" id="styleFlag" value="5" />
	<form method="post">
	 <!-- ﾍｯﾀﾞ部 -->
	    <jsp:include page="./comm/header.jsp" flush="true" />
	    <div class="center">
			<div style="margin-top: 10px;">
				<div class="menuContent">
					<jsp:include page="./HCSCCOMZ18001.jsp" flush="true" />
				</div>
				<!-- メイン画面表示部 -->
				<div class="mainContent">
					<!-- エラーメッセージエリア -->
					<div>
						<s:actionmessage cssClass="actionmessage" />
				        <s:actionerror cssClass="actionerror" />
				        <s:fielderror cssClass="fielderror" />
				        <s:property value="msg" />
					</div>
					<!-- 画面表示内容 -->
					<div class="container_password" style="min-height:100px">
						<div>
			             	<s:text name="HCSCBSNE03001.pageName" />
			            </div>
		                <div style="margin-top: 20px;">
		                    <div class="table_main" style="margin-top: 20px;min-height: 50px;">
		                        <div class="table_leftTD">
		                        	<span class="importantFlag">*</span>
		                        	<s:text name="HCSCBSNE03001.password" />：
		                        </div>
		                        <div class="table_rightTD" style="width: 200px;background-color: #FFFFFF">
		                        	<input name="form.password" type="password" class="table_input" style="width: 200px;"/>
		                        </div>
		                        <div class="clear"></div>
		                    </div>
		                </div>
		                <div style="margin-top: 0px;text-align: left;">
	                        <div class="button" onclick="withdraw();" style="margin-left: 310px;">
	                            <s:text name="HCSCBSNE03001.btnWithdraw" />
	                        </div>
	                    </div>
					</div>
					<!-- 文言ｴﾘｱ -->
		            <div style="padding-left:45px">
			            <div class="infoTextShow">
			                <s:text name="HCSCBSNE03001.textArea" />
			            </div>
		            </div>
				</div>
			</div>
	    </div>
	   <jsp:include page="./comm/footer.jsp" flush="true" />
	</form>
	</body>
</html>