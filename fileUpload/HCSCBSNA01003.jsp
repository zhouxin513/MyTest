<%@ page language="java" import="java.util.*" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
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
 <jsp:include page="comm/commonInclude.jsp" flush="true" />
<link type="text/css" rel="stylesheet" href="js/ztree/zTreeStyle/zTreeStyle.css">
<script type="text/javascript" src="js/ztree/jquery.ztree.core-3.5.js"></script>
<script type="text/javascript" src="js/ztree/jquery.ztree.excheck-3.5.js"></script>

<link rel="stylesheet" type="text/css" href="js/jquery.jqGrid-4.5.4/css/ui.jqgrid.css" />
<script type="text/javascript" src="js/jquery.jqGrid-4.5.4/js/jquery.jqGrid.src.js"></script>
<script type="text/javascript" src="js/jquery.jqGrid-4.5.4/js/i18n/grid.locale-<%=languageFlg%>.js"></script>
<jsp:include page="jqgrid/HCSCBSNA01003Grid.jsp"></jsp:include>
<script type="text/javascript">

</script>
<style>
	.grid_edit_main{

	}
	.grid_edit{
		margin-left:20px;
		float: left;
		margin-right: 10px;
		cursor: pointer;
		padding-right: 10px;
	}
	.grid_del{
		float: left;
		padding-left: 20px;
		border-left: 1px solid #D9D8D8;
		cursor: pointer;
	}
</style>
<title><s:text name="HCSCBSNA01003.title"/></title>
</head>
<body>
	<input type="hidden" id="styleFlag" value="1" />
    <form id="form1" method="post">
    	<s:hidden name="form.editFlag" />
    	<s:hidden name="form.contractStartDateBefore"/>
        <!-- ﾍｯﾀﾞ部 -->
        <jsp:include page="./comm/header.jsp" flush="true" />
        <div class="center">
        	<div style="margin-top: 10px;height: auto;">
        		<div  class="menuContent">
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
	                	<!-- 画面名 -->
		                <div>
		                    <s:text name="HCSCBSNA01003.pageName"/>
		                </div>
	                    <div style="height: auto;">
	                        <div style="height: auto;">
                                <div class="table_main" style="min-height: 380px;">
                                    <div class="table_tr">
                                        <!-- 契約ID -->
                                        <div class="table_leftTD">
                                           <s:text name="HCSCBSNA01003.contractIdLabel" />：
                                        </div>
                                        <div class="table_rightTD">
                                           <s:property value="form.contractId" />
                                        </div>
                                     </div>
                                     <div class="table_tr">
                                        <!-- 会社ID -->
                                        <div class="table_leftTD">
                                           <s:text name="HCSCBSNA01003.companyIdLabel" />：
                                        </div>
                                        <div class="table_rightTD">
                                           <s:property value="form.companyId" />
                                        </div>
                                    </div>
                                    <div class="table_tr">
                                        <!-- 会社名 -->
                                        <div class="table_leftTD">
                                          <s:text name="HCSCBSNA01003.companyNameLabel" />：
                                        </div>
                                        <div class="table_rightTD">
                                          <s:property value="form.companyName" />
                                        </div>
                                    </div>
                                    <div class="table_tr">
                                        <!-- 契約明細ID -->
                                        <div class="table_leftTD">
                                          <s:text name="HCSCBSNA01003.contractDetailIdLabel" />：
                                        </div>
                                        <div class="table_rightTD">
                                          <s:property value="form.contractDetailId" />
                                        </div>
                                    </div>
                                    <div class="table_tr">
                                        <!-- 契約明細開始年月日 -->
                                        <div class="table_leftTD">
                                        	<span class="importantFlag">*</span>
                                           <s:text name="HCSCBSNA01003.contractStartDateLabel" />：</div>
                                        <div class="table_rightTD" style="background-color: #FFFFFF">
                                           <s:textfield id="contractStartDate" name="form.contractStartDate" cssClass="table_input Wdate" onclick="showDate()" cssStyle="width:370px;"/>
                                        </div>
                                    </div>
                                    <div class="table_tr">
                                        <!-- 契約明細終了年月日 -->
                                        <div class="table_leftTD">
                                          <s:text name="HCSCBSNA01003.contractEndDateLabel" />：
                                        </div>
                                        <div class="table_rightTD" style="background-color: #FFFFFF">
                                          <s:textfield id="contractEndDate" name="form.contractEndDate" cssClass="table_input Wdate" onclick="showDate()" cssStyle="width:370px;"/>
                                        </div>
                                    </div>
                                    <div class="table_tr">
                                        <!-- 件数 -->
                                        <div class="table_leftTD">
                                        	<span class="importantFlag">*</span>
                                          <s:text name="HCSCBSNA01003.detailtotalNoLabel" />：
                                        </div>
                                        <div class="table_rightTD" style="background-color: #FFFFFF">
                                           <s:textfield name="form.detailtotalNo" cssClass="table_input" maxlength="10"/>
                                        </div>
                                    </div>
                                    <input type="hidden" id="itemNum" name="form.itemNum" />
                                    <div class="table_tr">
                                        <!-- 金額 -->
                                        <div class="table_leftTD">
                                        	<span class="importantFlag">*</span>
                                          <s:text name="HCSCBSNA01003.detailAmountLabel" />：
                                        </div>
                                        <div class="table_rightTD" style="background-color: #FFFFFF">
                                        	<s:textfield id="detailAmount" name="form.detailAmount" cssClass="table_input" onchange="this.value=formatMoney(this.value)" maxlength="12"/>
                                        </div>
                                    </div>
                                    <div class="table_tr">
                                        <!-- 通貨種類 -->
                                        <div class="table_leftTD">
                                          <s:text name="HCSCBSNA01003.currencyLabel" />：
                                        </div>
                                        <div class="table_rightTD">
                                          <s:property value="form.currency" />
                                        </div>
                                    </div>
                                </div>
                                <div class="button" onclick="openServiceDialog()" style="margin-left: 20px;">
                                  <s:text name="HCSCBSNA01003.add" />
                                </div>
	                            <!-- start -->
	                            <input type="hidden" id="userid" value="<s:property value="form.userId" />"/>
                             	<input type="hidden" id="contractDetailId" value="<s:property value="form.contractDetailId" />"/>
                                <div style="padding-right: 20px;margin-top: 10px;height: auto">
                                	<div class="clear"></div>
                                    <table id="gridPageInfoTable"></table>
                                </div>
								<div class="clear"></div>
	                            <!-- end -->
	                        </div>
	                    </div>
	                </div>
	                <div style="height:auto;margin-top: 20px;">
	                    <div class="button" onclick="submitform('HCSCBSNA0100307')" style="float: left;margin-left: 20px;">
	                       <s:text name="HCSCBSNA01003.backToList" />
	                    </div>
	                     <div class="button" onclick="submitform('HCSCBSNA010030104')"  style="float: right;margin-right: 20px;">
	                       <s:text name="HCSCBSNA01003.Regist" />
	                    </div>
                    </div>
	                <!-- 画面表示内容 End-->
	                <!-- dialog -->
	                <!-- add service dialog -->
	                <div id="dialog_service">
	                	<div class="dialog_service_main" style="padding: 10px;">
	                		<div>
	                			<div style="float: left;width: 130px;text-align: right;height: 25px;line-height: 25px;overflow: hidden;">
		                			<s:text name="HCSCBSNA01003.serviceNameLabel"/>:
		                		</div>
		                		<div style="height: 25px;line-height: 25px;">
		                			<input type="text" id="serviceName" style="width: 200px;height: 25px;line-height: 25px;" maxlength="30">
		                		</div>
	                		</div>
	                		<div class="clear"></div>
	                		<div style="padding: 10px;border: 1px solid #D9D8D8;min-height: 200px;margin-top: 10px;">
	                				<ul id="tree" class="ztree" style="width:300px; overflow:auto;"></ul>
	                		</div>
	                		<div class="clear"></div>
	                		<div style="margin-top: 10px;margin-left: 30px;">
		                		<div style="margin-left: 80px;">
		                			<div class="button" style="width: 150px;" onclick="addService()">
		                				<s:text name="HCSCBSNA01003.add" />
		                			</div>
		                		</div>
	                		</div>
	                	</div>
	                </div>
	                <!-- add service dialog -->

	                <!-- edit service dialog -->
	                <div id="dialog_serviceName">
	                	<div class="dialog_service_main" style="padding: 10px;">
	                		<div>
	                			<div style="float: left;width: 130px;text-align: right;height: 25px;line-height: 25px;overflow: hidden;">
		                			<s:text name="HCSCBSNA01003.serviceNameLabel"/>：
		                		</div>
		                		<div style="height: 25px;line-height: 25px;">
		                			<input type="hidden" id="dialog_serviceID" />
		                			<input type="text" id="dialog_serviceName_name" style="width: 200px;height: 25px;line-height: 25px;" maxlength="30">
		                		</div>
	                		</div>
	                		<div class="clear"></div>
	                		<div style="padding: 10px;border: 1px solid #D9D8D8;min-height: 200px;margin-top: 10px;">
	                				<ul id="dialog_serviceNameTree" class="ztree" style="width:300px; overflow:auto;"></ul>
	                		</div>
	                		<div class="clear"></div>
	                		<div style="margin-top: 10px;margin-left: 30px;">
		                		<div style="margin-left: 80px;">
		                			<div class="button" style="width: 150px;" onclick="editService()">
		                				<s:text name="HCSCBSNE01003.btnEdit" />
		                			</div>
		                		</div>
	                		</div>
	                	</div>
	                </div>
	                <!-- edit service dialog -->

	                <!-- edit precision dialog -->
	                <div id="dialog_precision">
	                	<div class="dialog_service_main" style="padding: 10px;">
	                		<div>
	                			<div style="float: left;width: 80px;text-align: right;height: 25px;line-height: 25px;overflow: hidden;">
		                			<s:text name="HCSCBSNA01003.precision"/>：
		                		</div>
		                		<div style="height: 25px;line-height: 25px;">
		                			<input type="hidden" id="dialog_serviceItemID" />
		                			<select id="dialog_precision_precisionlist" style="width:200px;height: 25px;line-height: 25px;padding: 2px 0px;">
		                			</select>
		                		</div>
	                		</div>
	                		<div class="clear"></div>
	                		<div style="margin-top: 30px;margin-left: 30px;">
		                		<div style="margin-left: 45px;">
		                			<div class="button" style="width: 150px;" onclick="editPrecision()">
		                				<s:text name="HCSCBSNE01003.btnEdit" />
		                			</div>
		                		</div>
	                		</div>
	                	</div>
	                </div>
	                <!-- edit precision dialog -->
	                <!-- dialog -->
	            </div>
        	</div>
        	<div class="clear"></div>
        </div>
        <!-- フッタ -->
        <jsp:include page="./comm/footer.jsp" flush="true" />
    </form>
</body>
</html>