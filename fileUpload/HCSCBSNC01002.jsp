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

    <title><s:text name="HCSCBSNC01002.title"/></title>
<jsp:include page="./comm/commonInclude.jsp" flush="true" />
<script type="text/javascript">
$(function() {
	 $("#deleteFileCkb").click(function(){
		 deleteFlag();
	 });
});
function deleteFlag() {
	var check = $("#deleteFileCkb").attr("checked");
	if(check == "checked") {
		$("#deleteFlag").val($("#deleteFileCkb").val());
	} else {
		$("#deleteFlag").val(null);
	}
}

function change(action) {
	var CHANGE = "<s:text name='HCSCCOM_Q007' ><s:param><s:text name='HCSCBSNC01002.btnNext' /></s:param></s:text>";
	var deviceTypeId = $("#deviceTypeId").val();
	var company = $("#company").val();
	var deviceTypeName = $("#deviceTypeName").val();
	if(deviceTypeId != '' && company != '' && deviceTypeName != '') {
		var bln = window.confirm(CHANGE);
        if (bln) {
        	submitform(action);
        }
	} else {
		submitform(action);
	}
}
</script>
<link rel="stylesheet" type="text/css" href="js/jquery.jqGrid-4.5.4/css/ui.jqgrid.css" />
<script type="text/javascript" src="js/jquery.jqGrid-4.5.4/js/jquery.jqGrid.src.js"></script>
<script type="text/javascript" src="js/jquery.jqGrid-4.5.4/js/i18n/grid.locale-<%= languageFlg%>.js"></script>
</head>
<body>
<input type="hidden" id="styleFlag" value="1" />
<form id="form1" method="post" enctype="multipart/form-data">
<%-- <s:hidden name="form.deviceTypeIdInfo.companyIdHidden" value="%{form.deviceTypeIdInfo.companyId}"/> --%>
    <!-- ﾍｯﾀﾞ部 -->
    <jsp:include page="./comm/header.jsp" flush="true" />
	<div class="center">
	    <div style="margin-top: 10px;height: auto;">
            <div class="menuContent">
                <jsp:include page="./HCSCCOMZ18001.jsp" flush="true" />
            </div>
		    <!-- メイン画面表示部 -->
		    <div class="mainContent">
	            	<!-- 画面名 -->
	                <div>
	                    <s:actionmessage cssClass="actionmessage" />
	                    <s:actionerror cssClass="actionerror" />
	                    <s:fielderror cssClass="fielderror" />
	                </div>
	                <div class="container_password">
	                    <!-- 画面名 -->
	                    <div>
	                        <s:text name="HCSCBSNC01002.pageName" />
	                    </div>
	                   <div class="table_main" style="min-height: 400px;">
	                        <div class="table_tr" >
	                            <div class="table_leftTD" >
	                                <s:text name="HCSCBSNC01002.deviceTypeId" />:
	                            </div>
	                            <div class="table_rightTD">
	                                <!-- 新規 -->
			                        <s:if test="form.fromFlag=='01'">
			                            <font color="red">
			                                <s:text name="HCSCBSNC01002.new"></s:text>
			                            </font>
			                            (<s:property value="form.deviceTypeIdInfo.deviceTypeId"/><s:text name="HCSCBSNC01002.new2"></s:text>)
			                        </s:if>
			                        <!-- 更新 -->
			                        <s:else>
			                            <s:property value="form.deviceTypeIdInfo.deviceTypeId"/>
			                        </s:else>
	                            </div>
	                            <div class="clear"></div>
	                        </div>
	                        <!-- デバイス分類 -->

	                         <div class="table_tr">
	                            <div class="table_leftTD" >
	                                <span class="importantFlag">*</span>
	                                <s:text name="HCSCBSNC01002.value1" />:
	                            </div>
	                                <s:if test="form.fromFlag=='01'">
		                            	<div class="table_rightTD" style="background-color: #FFFFFF">
		                                	<s:select id="deviceTypeId" list="form.generalMasterDTIs" listKey="key" listValue="value" disabled="false"
		                                           name="form.deviceTypeIdInfo.deviceCategory" cssClass="table_select4" >
		                                 	</s:select>
		                            	</div>
	                            	</s:if>
	                            	<s:else>
		                            	<div class="table_rightTD" style="background-color: #F9F9F9">
		                                	<s:select id="deviceTypeId" list="form.generalMasterDTIs" listKey="key" listValue="value" disabled="true"
		                                           name="form.deviceTypeIdInfo.deviceCategory" cssClass="table_select4" >
		                                 	</s:select>
		                            	</div>
	                            	</s:else>
	                        	<div class="clear"></div>
	                        </div>
	                        <!-- （委託）生産会社  -->
	                        <div class="table_tr" >
	                            <div class="table_leftTD" >
	                                 <span class="importantFlag">*</span>
	                                <s:text name="HCSCBSNC01002.companyName" />:
	                            </div>
	                            <s:if test="form.fromFlag=='01'">
		                            <div class="table_rightTD" style="background-color: #FFFFFF">
			                                <s:select id="company" list="form.companies" listKey="companyId" listValue="companyName" disabled="false"
			                                          name="form.deviceTypeIdInfo.companyId" cssClass="table_select4" style="text-overflow:ellipsis; white-space:nowrap; overflow:hidden;">
			                                </s:select>
		                            </div>
	                            </s:if>
                            	<s:else>
		                            <div class="table_rightTD" style="background-color: #F9F9F9">
			                                <s:select id="company" list="form.companies" listKey="companyId" listValue="companyName" disabled="true"
			                                          name="form.deviceTypeIdInfo.companyId" cssClass="table_select4" style="text-overflow:ellipsis; white-space:nowrap; overflow:hidden;">
			                                </s:select>
		                            </div>
		                        </s:else>
	                            <div class="clear"></div>
	                        </div>
	                        <!-- デバイス名(型番) -->
	                        <div class="table_tr" >
	                            <div class="table_leftTD" >
	                                <span class="importantFlag">*</span>
	                                <s:text name="HCSCBSNC01002.deviceTypeName" />:
	                            </div>
	                            <s:if test="form.fromFlag=='01'">
		                            <div class="table_rightTD" style="background-color: #FFFFFF">
		                                <s:textfield id="deviceTypeName" name="form.deviceTypeIdInfo.deviceTypeName" maxlength="20" cssClass="table_input"/>
		                            </div>
	                            </s:if>
                            	<s:else>
                            		<div class="table_rightTD">
		                                <s:textfield id="deviceTypeName" name="form.deviceTypeIdInfo.deviceTypeName" maxlength="20" cssClass="table_input" disabled="true" style="background-color: #F9F9F9"/>
		                            </div>
                            	</s:else>
	                            <div class="clear"></div>
	                        </div>
	                        <!-- 備考情報（１） -->
	                        <div class="table_tr" >
	                            <div class="table_leftTD" >
	                                <s:text name="HCSCBSNC01002.remarks1" />:
	                            </div>
	                            <div class="table_rightTD" style="background-color: #FFFFFF">
	                                <s:textfield name="form.deviceTypeIdInfo.remarks1" maxlength="30" cssClass="table_input"/>
	                            </div>
	                            <div class="clear"></div>
	                        </div>
	                        <!-- 備考情報（２） -->
	                        <div class="table_tr" >
	                            <div class="table_leftTD" >
	                                <s:text name="HCSCBSNC01002.remarks2" />:
	                            </div>
	                            <div class="table_rightTD" style="background-color: #FFFFFF">
	                                <s:textfield name="form.deviceTypeIdInfo.remarks2" maxlength="30" cssClass="table_input"/>
	                            </div>
	                            <div class="clear"></div>
	                        </div>
	                        <!-- 備考情報（３） -->
	                        <div class="table_tr" >
	                            <div class="table_leftTD" >
	                                <s:text name="HCSCBSNC01002.remarks3" />:
	                            </div>
	                            <div class="table_rightTD" style="background-color: #FFFFFF">
	                                <s:textfield name="form.deviceTypeIdInfo.remarks3" maxlength="30" cssClass="table_input"/>
	                            </div>
	                            <div class="clear"></div>
	                        </div>
	                        <!-- driverName -->
                            <div class="table_tr" >
	                            <div class="table_leftTD" >
	                                <s:text name="HCSCBSNC01002.driverName" />:
	                                </div>
	                            <div class="table_rightTD" style="height: 90px;background-color: #FFFFFF">
	                                <input type="hidden" id="deleteFlag" name="form.deleteFileFlag">
	                            	<s:if test="form.deviceTypeIdInfo != null && form.deviceTypeIdInfo.driverName != null && form.deviceTypeIdInfo.driverName != ''">
		                                <div style="height:25px; text-overflow:ellipsis; white-space:nowrap; overflow:hidden;">
			                                <a href="javascript:void();" onclick="submitformNotRefresh('HCSCBSNC0100204');">
				                                <s:property value="form.deviceTypeIdInfo.driverName"/>
				                            </a>
				                        </div>
				                        <div>
				                            <input type="checkbox" id="deleteFileCkb" value="true" />
			                                <span><s:text name="HCSCBSNC01002.btnDelete" /></span>
		                                </div>
		                            </s:if>
		                            <s:else>
			                            <div style="height:30px;">
			                            </div>
		                            </s:else>
		                            <div style="height:25px; margin-top: 5px;">
		                            	<s:file name="form.upload" size="40" ></s:file>
		                            </div>
                                </div>
                            <div class="clear"></div>
                        </div>
	                    </div>
	                    <div style="margin-left: 180px;">
	                        <!-- 戻るﾎﾞﾀﾝ 一覧 -->
	                        <div class="button" onclick="submitform('HCSCCOMZ1700401');" style="float: left;">
	                            <s:text name="HCSCBSNC01002.btnBefore" />
	                        </div>
	                        <!-- 変更ﾎﾞﾀﾝ 変更 -->
	                        <div class="button" onclick="change('HCSCBSNC0100202');" style="float: left;margin-left: 100px;">
	                            <s:text name="HCSCBSNC01002.btnNext" />
	                        </div>
	                    </div>
	                </div>
		        </div>
		    </div>
		</div>
    <!-- フッタ -->
    <jsp:include page="./comm/footer.jsp" flush="true" />
</form>
</body>
</html>