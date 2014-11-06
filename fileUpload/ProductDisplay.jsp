<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN">
<%@ page language="java" contentType="text/html; charset=UTF-8" %>
<%@ taglib prefix="s" uri="/struts-tags" %>
<%@ taglib prefix="sj" uri="/struts-jquery-tags"%>
<%@ taglib prefix="sjg" uri="/struts-jquery-grid-tags"%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
<title>
<s:property value="%{getText('title.product.display')}"/>
</title>
</head>
<link href="
<s:url value="/styles/flexible-grids.css" />
" rel="stylesheet" type="text/css" />
<!--[if lte IE 7]>
<link href="
<s:url value="/yaml/core/iehacks.min.css" />
" rel="stylesheet" type="text/css" />
<![endif]-->
<sj:head jqueryui="true" jquerytheme="redmond" />
<body>
<h2 align="center">
<s:property value="%{getText('title.product.display')}"/>
</h2>
<script type="text/javascript">
function rowdelete() {
	var s = $("#gridtable").jqGrid('getGridParam','selarrrow');
	document.getElementById("ids").value = s;
}
</script>
<div align="center">
<table>
<tr height="50">
</tr>
<tr>
<td>
<s:form action="add" method="post">
<sj:submit id="grid_addbutton" key="button.add" onClickTopics="rowAdd" button="true"/>
</s:form>
</td>
<td>
<s:form action="addAll" method="post">
<sj:submit id="grid_add_allbutton" key="button.upload" onClickTopics="rowAdd" button="true"/>
</s:form>
</td>
<td>
<s:form action="delete" method="post">
<s:hidden name="ids" id="ids" />
<sj:submit id="del_gridtable" key="button.delete" onclick="rowdelete()" button="true"/>
</s:form>
</td>
</tr>
<tr height="50">
</tr>
</table>
<div>
<s:url id="dataURL" action="getList.action"/>
<sjg:grid
        id="gridtable"
        caption="%{getText('title.product.display')}"
        dataType="json"
        href="%{dataURL}"
        pager="true"
        gridModel="itemList"
        rowList="10,15,20"
        rowNum="10"
        rownumbers="true"
        multiselect="true"
    >
<sjg:gridColumn name="id" index="janCode" title="ID" formatter="integer" sortable="false" key="true" search="false"  editable="false"  hidden="true" />
<sjg:gridColumn width="200" cssStyle="font-size:6px" name="janCode" index="janCode" title="%{getText('lable.product.jancode')}" sortable="true" editable="true" hidedlg="true"/>
<sjg:gridColumn width="300" name="productName" index="productName" title="%{getText('lable.product.name')}" sortable="true"/>
<sjg:gridColumn width="300" name="recallExtStart" index="recallExtStart" title="%{getText('lable.product.recall.time.start')}" sortable="true"/>
<sjg:gridColumn width="300" name="recallExtEnd" index="recallExtEnd" title="%{getText('lable.product.recall.time.end')}" sortable="true"/>
</sjg:grid>
</div>
</div>
</body>
</html>
