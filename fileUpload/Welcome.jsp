<%@ page language="java" contentType="text/html; charset=UTF-8" %>
<%@ taglib prefix="s" uri="/struts-tags" %>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
<title>
<s:property value="%{getText('title.welcome')}"/>
</title>
</head>
<body>
<h2 align="center">
<s:property value="%{getText('title.welcome')}"/>
</h2>
<s:form action="Register" method="post" enctype="multipart/form-data">
<table align="center">
<s:textfield name="productName" label="%{getText('lable.product.name')}" align="right" cssStyle="width:360px"/>
<s:textfield name="janCode" label="%{getText('lable.product.jancode')}" align="right" cssStyle="width:360px" />
<s:textarea name="recallReason" label="%{getText('lable.product.recall.reason')}" align="right" rows="10" cssStyle="width:360px" />
<s:textfield name="recallDateStart" label="%{getText('lable.product.recall.time.start')}" align="right" cssStyle="width:360px" />
<s:textfield name="recallDateEnd" label="%{getText('lable.product.recall.time.end')}" align="right" cssStyle="width:360px" />
<s:textarea name="produsorInfo" label="%{getText('lable.product.recall.maker.info')}" align="right" cssStyle="width:360px" />
<s:file name="itemImg" id="button3" label="%{getText('lable.product.recall.image')}"  align="right" cssStyle="width:360px" />
<s:submit method="execute" key="button.insert" align="center" />
</table>
</s:form>
</body>
</html>
