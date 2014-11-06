<%@ page contentType="text/html; charset=UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags"%>
<html>
<head>
<title><s:property value="%{getText('title.insert.complete')}"/></title>
</head>
 
<body>
<h2 align="center"><s:property value="%{getText('title.insert.complete')}"/></h2>
<s:form action="backToDisplay.action">
<table align="center">
<s:text name="%{getText('message.insert.complete')}"/>
<s:submit method="execute" key="button.back" align="center" />
</table>
</s:form>
</body>
</html>