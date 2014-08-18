<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@taglib prefix="s" uri="/struts-tags"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
	 String obje =  (String)session.getAttribute("langugeValue");
	    String languageFlg = obje.substring(obje.indexOf("_")+1).toLowerCase();
%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html lang="ja">
<head>
<meta http-equiv="X-UA-Compatible" content="IE=8" />
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta http-equiv="Pragma" content="no-cache">
<meta http-equiv="Cache-Control" content="no-cache">

<title><s:text name="HCSCBSNA01006.title" /></title>
<jsp:include page="./comm/commonInclude.jsp" flush="true" />
<link rel="stylesheet" type="text/css" href="js/jquery.jqGrid-4.5.4/css/ui.jqgrid.css" />
<script type="text/javascript" src="js/jquery.jqGrid-4.5.4/js/jquery.jqGrid.src.js"></script>
<script type="text/javascript" src="js/jquery.jqGrid-4.5.4/js/i18n/grid.locale-<%=languageFlg%>.js"></script>
<jsp:include page="jqgrid/HCSCBSNA01006Grid.jsp"></jsp:include>
<script type="text/javascript">
function changeCompany(action) {
	var CHANGECOMPANY = "<s:text name='HCSCCOM_Q007' ><s:param><s:text name='HCSCBSNA01006.btnRegist' /></s:param></s:text>";
	var bln = window.confirm(CHANGECOMPANY);
       if (bln) {
       	submitform(action);
       }
}
</script>
</head>
<body>
	<input type="hidden" id="styleFlag" value="1" />
    <form id="form1" method="post">
        <!-- ﾍｯﾀﾞ部 -->
        <jsp:include page="./comm/header.jsp" flush="true" />

        <div class="center">
        	<div style="margin-top: 10px;height: auto">
        		<div class="menuContent">
					<jsp:include page="./HCSCCOMZ18001.jsp" flush="true" />
				</div>
	            <!-- メイン画面表示部 -->
	            <div class="mainContent">
	                <!-- ｴﾗｰﾒｯｾｰｼﾞｴﾘｱ -->
	                <div>
	                    <s:actionmessage cssClass="actionmessage" />
	                    <s:actionerror cssClass="actionerror" />
	                    <s:fielderror cssClass="fielderror" />
	                </div>
	                <!-- 画面表示内容 -->
	                <div class="container_password">
						<div>
							 <s:text name="HCSCBSNA01006.subTitle" />
						</div>
						<div class="table_main" style="min-height: 300px;">
							<div class="table_tr">
								<div class="table_leftTD">
									<s:text name="HCSCBSNA01006.cpyId" />：
								</div>
								<div class="table_rightTD">
									<s:property value="form.cpy.companyId"></s:property>
								</div>
							</div>
							<div class="table_tr">
								<div class="table_leftTD">
								    <span class="importantFlag">*</span>
									<s:text name="HCSCBSNA01006.cpyName" />：
								</div>
								<div class="table_rightTD" style="background-color: #FFFFFF">
									<s:textfield id="companyName" size="23" name="form.cpy.companyName"
										 maxlength="128" cssClass="table_input2"/>
								</div>
							</div>
							<div class="table_tr">
								<div class="table_leftTD">
								    <span class="importantFlag">*</span>
									<s:text name="HCSCBSNA01006.cpyType" />：
								</div>
								<div class="table_rightTD" style="background-color: #FFFFFF">
									<s:select  id="changeCompanyType" list="form.companyTypeBox"
											listKey="key" listValue="value" name="form.cpy.companyType"
											cssClass="table_select4">
									</s:select>
								</div>
							</div>
							<!-- 所在地 -->
							<div class="table_tr">
								<div class="table_leftTD">
									<s:text name="HCSCBSNA01006.cpyAddr" />：
								</div>
								<div class="table_rightTD" style="background-color: #FFFFFF">
									<s:textfield  id="companyAddress" name="form.cpy.companyAddress" size="23"
										 maxlength="2048" cssClass="table_input2"/>
								</div>
							</div>
							<div class="table_tr">
								<div class="table_leftTD">
								    <span class="importantFlag">*</span>
									<s:text name="HCSCBSNA01006.cpyTel" />：
								</div>
								<div class="table_rightTD" style="background-color: #FFFFFF">
									<s:textfield id="companyTel" name="form.cpy.companyTel" size="23"
										 maxlength="20" cssClass="table_input"/>
								</div>
							</div>
							<div class="table_tr">
								<div class="table_leftTD">
								    <span class="importantFlag">*</span>
									<s:text name="HCSCBSNA01006.cpyFax" />：
								</div>
								<div class="table_rightTD" style="background-color: #FFFFFF">
									<s:textfield id="companyFax" name="form.cpy.companyFax" size="23"
										 maxlength="20" cssClass="table_input"/>
								</div>
							</div>
							<div class="table_tr">
								<div class="table_leftTD">
								    <span class="importantFlag">*</span>
									<s:text name="HCSCBSNA01006.cpyExtablish" />：
								</div>
								<div class="table_rightTD" style="background-color: #FFFFFF">
									<s:textfield id="cpyEstablishDate" name="form.cpy.cpyEstablishDate" size="23"
										 maxlength="10" cssClass="table_input Wdate" onclick="showDate()" cssStyle="width:370px;"/>
								</div>
							</div>
							<!-- 代表者 -->
							<div class="table_tr">
								<div class="table_leftTD">
									<s:text name="HCSCBSNA01006.cpyCeo" />：
								</div>
								<div class="table_rightTD" style="background-color: #FFFFFF">
									<s:textfield id="companyCeo" name="form.cpy.companyCeo" size="23"
										 maxlength="128" cssClass="table_input2"/>
								</div>
							</div>
						</div>
						<div style="margin-top: 20px;" >
							<div style="height: auto;">
								<input type="hidden" id="pageSize1" value="${form.pageSize}" />
		                             	<input type="hidden" id="pageSizeList1" value="${form.pageSizeList}" />
								<s:hidden name="form.deleteUsers" id="deleteUsers"></s:hidden>
								<div>
							        <div class="button" id="btnAdd"  onclick="openDialog()" style="float: left;">
							        	<s:text name="HCSCBSNA01006.btnAdd" />
							        </div>
							        <div class="button" id="btnDelete" style="float: left;margin-left: 20px;" onclick="delBtn();">
							        	<s:text name="HCSCBSNA01006.btnDelete" />
							        </div>
								</div>
								<div class="clear"></div>
								<div style="margin-top: 5px;padding-right: 20px;">
									<table id="gridPageInfoTable1"></table>
									<!-- ページ　ツール -->
									<div id="gridPageInfoPage1"></div>
								</div>
								<div class="clear"></div>
							</div>
							<div style="margin-top: 20px;">
				                 <div class="button" onclick="submitform('HCSCBSNA0100605');" style="float: left;">
				                 	<s:text name="HCSCBSNA01006.btnBack" />
				                 </div>
				                 <div style="float: right;">
					                 <div class="button" onclick="changeCompany('HCSCBSNA0100604');" style="float: left;
					                 		margin-right: 20px;">
					                 	<s:text name="HCSCBSNA01006.btnRegist" />
					                 </div>
				                 </div>
							</div>
						</div>
	                </div>
	            </div>
	            <div class="clear"></div>
        	</div>
        </div>

        <!-- Dialog -->
        	<div id="subPage" style="display: none">
				<div class="table_main" style="margin-left: 0px;min-height: 100px;width: 480px;">
				    <div class="table_tr" style="width: 480px;">
						<div class="table_leftTD2">
							<s:text name="HCSCBSNA01S01.cpyName"/>：
						</div>
						<div class="table_rightTD" id="companyName_dialog" style="width: 250px;">
						</div>
					</div>
					<div class="table_tr" style="width: 480px;">
						<div class="table_leftTD2">
							<s:text name="HCSCBSNA01S01.userMail"/>：
						</div>
						<div class="table_rightTD" style="width: 250px;background-color: #FFFFFF">
							<s:textfield id="managerAddress" name="form.managerAddress" cssClass="table_input"></s:textfield>
						</div>
					</div>
				</div>
				<div style="">
					<div class="button" id="close" style="float: left;margin-left: 80px;" onclick="closebox();">
						<s:text name="HCSCBSNA01006.close" />
					</div>
					<div class="button" onclick="addUser()" style="float: left;margin-left: 120px;">
						<s:text name="HCSCBSNA01006.btnAdd" />
					</div>
				</div>
				<s:hidden name="form.userInfo" id="userInfo"></s:hidden>
			</div>
        <!-- Dialog -->
        <!-- フッタ -->
        <jsp:include page="./comm/footer.jsp" flush="true" />
    </form>
</body>
</html>