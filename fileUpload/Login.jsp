<%@ page contentType="text/html; charset=UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags"%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
<title>
<s:property value="%{getText('title.login')}"/>
</title>
</head>
<body>
<h2 align="center">
<s:property value="%{getText('title.login')}"/>
</h2>
<s:actionerror />
<s:form action="login.action" method="post">
<table align="center">
<s:textfield name="username" key="label.userid" size="20" />
<s:password name="password" key="label.password" size="20" />
<s:submit method="execute" key="button.login" align="center" />
</table>
</s:form>
</body>
</html>
