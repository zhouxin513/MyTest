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

<title><s:text name="HCSCBSNA01002.title" /></title>
<jsp:include page="./comm/commonInclude.jsp" flush="true" />
<link rel="stylesheet" type="text/css" href="js/jquery.jqGrid-4.5.4/css/ui.jqgrid.css" />
<script type="text/javascript" src="js/jquery.jqGrid-4.5.4/js/jquery.jqGrid.src.js"></script>
<script type="text/javascript" src="js/jquery.jqGrid-4.5.4/js/i18n/grid.locale-<%=languageFlg%>.js"></script>

<jsp:include page="jqgrid/HCSCBSNA01002Grid.jsp"></jsp:include>
<script type="text/javascript">
	$(function() {
		var cpyName = '<s:property value="form.cpyName" />';
		showCpyName(cpyName);

		 $("#deleteFileCkb").click(function(){
			 deleteFlag();
		 });
	});

	function changeCpyId() {
		var cpyName = $("#changeCompany").val();
		$("#cpyId").val(cpyName);
		showCpyName(cpyName);
	}

	function showCpyName(cpyName) {
		$("#cpyNameDiv").empty();
		if (cpyName != '') {
			var names = cpyName.split("$", 2);
			$("#cpyNameDiv").append(names[1]);
			$("#cpyId").val(names[0]);
			$("#cpyName").val(names[1]);
		}
	}

	function deleteFlag() {
		var check = $("#deleteFileCkb").attr("checked");
		if(check == "checked") {
			$("#deleteFlag").val($("#deleteFileCkb").val());
		} else {
			$("#deleteFlag").val(null);
		}
	}
	function contract(action) {
		var CONTRACT = "<s:text name='HCSCCOM_Q007' ><s:param><s:text name='HCSCBSNA01002.btnLogin' /></s:param></s:text>";
		var changeCompany = $("#changeCompany").val();
		var contractStartDate = $("#contractStartDate").val();
		var contractEndDate = $("#contractEndDate").val();
		var changePayType = $("#changePayType").val();
		var changeCurrency = $("#changeCurrency").val();
		var changeRenew = $("#changeRenew").val();
		if(changeCompany != '' &&
		   contractStartDate != '' &&
		   contractEndDate != '' &&
		   changePayType != '' &&
		   changeCurrency != '' &&
		   changeRenew != '' ) {
			var bln = window.confirm(CONTRACT);
	        if (bln) {
	        	submitform(action);
	        }
		} else {
			submitform(action);
		}
	}
</script>
</head>
<body>
	<input type="hidden" id="styleFlag" value="1" />
	<form id="form1" method="post"  enctype="multipart/form-data">
		<!-- ﾍｯﾀﾞ部 -->
		<jsp:include page="./comm/header.jsp" flush="true" />
		<div class="center">
        	<div style="margin-top: 10px;height: auto">
        		<div class="menuContent">
					<jsp:include page="./HCSCCOMZ18001.jsp" flush="true" />
				</div>
				<div class="mainContent">
					<!-- エラーメッセージエリア -->
					<div>
						<s:actionmessage cssClass="actionmessage" />
						<s:actionerror cssClass="actionerror" />
						<s:fielderror cssClass="fielderror" />
					</div>
					<!-- 画面表示内容 -->
					<div class="container_password">
						<div>
							<s:text name="HCSCBSNA01002.subTitle" />
						</div>
						<div>
							<div class="table_main">
								<div class="table_tr">
									<div class="table_leftTD">
										<s:text name="HCSCBSNA01004.lblCttId" />：
									</div>
									<div class="table_rightTD">
										<s:property value="form.contract.contractId" />
									</div>
								</div>
								<div class="table_tr">
									<div class="table_leftTD">
										<s:text name="HCSCBSNA01004.lblCttStatus" />：
									</div>
									<div class="table_rightTD">
										<s:if test="form.contract.cttStatusName != null">
											<s:text name="%{form.contract.cttStatusName}" />
										</s:if>
									</div>
								</div>
								<div class="table_tr" style="height: 50px;">
									<div class="table_leftTD" style="height: 50px;line-height: 50px;">
										<span class="importantFlag">*</span>
										<s:text name="HCSCBSNA01004.lblCttCpyId" />：
									</div>
									<div class="table_rightTD" style="height: 50px;background-color: #FFFFFF">
										<input type="hidden" id="cpyId" name="form.contract.companyId" />
										<div style="float: left;padding-top: 9px;">
											<s:select id="changeCompany" list="form.companyBox" listKey="key" listValue="value" name="form.cpyName" onchange="changeCpyId();" cssClass="table_select">
											</s:select>
										</div>
										<div style="float: right;padding-top: 9px;">
											<div class="button" id="addBtn" onclick="submitform('HCSCBSNA0100212');">
												<s:text name="HCSCBSNA01002.btnRegistCpy" />
											</div>
										</div>
									</div>
								</div>
								<div class="table_tr">
									<div class="table_leftTD">
										<s:text name="HCSCBSNA01004.lblCttCpyName" />：
									</div>
									<input type="hidden" id="cpyName" name="form.contract.companyName" />
									<div class="table_rightTD" id="cpyNameDiv">
										<s:property value="form.contract.companyName" />
									</div>
								</div>
								<div class="table_tr">
									<div class="table_leftTD">
										<span class="importantFlag">*</span>
										<s:text name="HCSCBSNA01004.lblCttStartDate" />：
									</div>
									<div class="table_rightTD" style="background-color: #FFFFFF">
										<s:textfield id="contractStartDate" size="23" name="form.contract.cttStartDate" maxlength="10" cssClass="table_input Wdate" onclick="showDate()" cssStyle="width:370px;"/>
									</div>
								</div>
								<div class="table_tr">
									<div class="table_leftTD">
										<span class="importantFlag">*</span>
										<s:text name="HCSCBSNA01004.lblCttEndDate" />：
									</div>
									<div class="table_rightTD" style="background-color: #FFFFFF">
										<s:textfield id="contractEndDate" size="23" name="form.contract.cttEndDate" maxlength="10" cssClass="table_input Wdate" onclick="showDate()" cssStyle="width:370px;"/>
									</div>
								</div>
								<div class="table_tr">
									<div class="table_leftTD">
										<span class="importantFlag">*</span>
										<s:text name="HCSCBSNA01004.lblCttPayType" />：
									</div>
									<div class="table_rightTD" style="background-color: #FFFFFF">
										<s:select id="changePayType" list="form.payTypeBox" listKey="key" listValue="value" name="form.contract.payType" cssClass="table_select">
										</s:select>
									</div>
								</div>
								<div class="table_tr">
									<div class="table_leftTD">
										<span class="importantFlag">*</span>
										<s:text name="HCSCBSNA01004.lblCttCurrency" />：
									</div>
									<div class="table_rightTD" style="background-color: #FFFFFF">
										<s:select id="changeCurrency" list="form.currencyBox" listKey="key" listValue="value" name="form.contract.currency"  cssClass="table_select">
										</s:select>
									</div>
								</div>
								<div class="table_tr">
									<div class="table_leftTD">
										<s:text name="HCSCBSNA01004.lblCttTotalAmount" />：
									</div>
									<div class="table_rightTD">
										<s:property value="form.contract.contractTotalAmount" />
									</div>
								</div>
								<div class="table_tr">
									<div class="table_leftTD">
										<span class="importantFlag">*</span>
										<s:text name="HCSCBSNA01004.lblCttAutoUpdate" />：
									</div>
									<div class="table_rightTD" style="background-color: #FFFFFF">
										<s:select id="changeRenew" list="form.autoUpdateBox" listKey="key" listValue="value" name="form.contract.contractAutoRenewFlag"  cssClass="table_select">
										</s:select>
									</div>
								</div>
								<div class="table_tr" style="height: 90px;">
									<div class="table_leftTD" >
										<s:text name="HCSCBSNA01004.lblCttFile" />：
									</div>
									<div class="table_rightTD" style="height: 90px;background-color: #FFFFFF">
										<input type="hidden" id="deleteFlag" name="form.deleteFileFlag">
										<s:if test="form.contract != null && form.contract.contractPdfName != null && form.contract.contractPdfName != ''">
											<div style="width:350px; text-overflow:ellipsis; white-space:nowrap; overflow:hidden;">
												<a href="javascript:void();" onclick="submitformNotRefresh('HCSCBSNA0100206')">
													<s:property value="form.contract.contractPdfName" />
												</a>
										    </div>
										    <div>
												<input type="checkbox" id="deleteFileCkb" value="true" />
												<span><s:text name="HCSCBSNA01004.btnDelete" /></span>
											</div>
										</s:if>
										<s:else>
											<div style="width:200px;">
												<input type="checkbox"  id="deleteFileCkb"  disabled="disabled" />
												<span><s:text name="HCSCBSNA01004.btnDelete" /></span>
											</div>
										</s:else>
										<br>
										<s:file name="form.upload" size="23" ></s:file>
									</div>
								</div>
							</div>
							<div class="clear"></div>
							<div style="margin-top: 20px;">
								<div style="height: auto;">
									<input type="hidden" id="pageSize1" value="${form.pageSize}" />
									<input type="hidden" id="pageSizeList1" value="${form.pageSizeList}" />
									<s:hidden name="contractDetailId" id="contractDetailId"></s:hidden>
									<div>
								        <div class="button" id="btnAdd"  onclick="submitform('HCSCBSNA0100205');" style="float: left;">
								        	<s:text name="HCSCBSNA01002.btnAdd" />
								        </div>
								        <div class="button" id="btnDelete" style="float: left;margin-left: 20px;">
								        	<s:text name="HCSCBSNA01002.btnDelete" />
								        </div>
								        <div class="clear"></div>
									</div>
									<div style="margin-top: 5px;padding-right: 20px;">
										<table id="gridPageInfoTable1"></table>
										<!-- ページ　ツール -->
										<div id="gridPageInfoPage1"></div>
									</div>
									<div class="clear"></div>
								</div>
								<div style="margin-top: 20px;">
					                 <div class="button" onclick="submitform('HCSCBSNA0100208');" style="float: left;">
					                 	<s:text name="HCSCBSNA01002.btnBack" />
					                 </div>
					                 <div style="float: right;">
						                 <div class="button" onclick="contract('HCSCBSNA0100210');" style="float: left;
						                 		margin-right: 20px;">
						                 	<s:text name="HCSCBSNA01002.btnLogin" />
						                 </div>
					                 </div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="clear"></div>
        	</div>
        </div>
		<!-- フッタ -->
		<jsp:include page="./comm/footer.jsp" flush="true" />
	</form>
</body>
</html>