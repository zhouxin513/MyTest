<%@ page contentType="text/html; charset=UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags"%>
<html>
<head>
<title>
<s:property value="%{getText('title.insert.fail')}"/>
</title>
</head>
<body>
<h2 align="center">
<s:property value="%{getText('title.insert.fail')}"/>
</h2>
<s:form action="backToDisplay.action">
<table align="center">
<s:text name="%{getText('message.insert.fail')}"/>
<s:submit method="backToDisplay" key="button.back" align="center" />
</table>
</s:form>
</body>
