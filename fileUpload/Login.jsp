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
<span id="jsp_458" style="border: 1px dashed #ff0000">
<h2 align="center" >
 asdfasdfasdfasdfasdf
<span id="jsp_16" style="border: 1px dashed #ff0000">
<s:property value="%{getText('title.login')}"/>
</span>
</h2>
</span>
<span id="jsp_705" style="border: 1px dashed #ff0000">
<s:actionerror />
</span>
<span id="jsp_255" style="border: 1px dashed #ff0000">
<s:form action="login.action" method="post">
<span id="jsp_239" style="border: 1px dashed #ff0000">
<h2 id="1">
 111111111111
<span id="jsp_19" style="border: 1px dashed #ff0000">
<s:textfield name="username" key="label.userid" size="20" />
</span>
</h2>
</span>
<span id="jsp_603" style="border: 1px dashed #ff0000">
<h2 id="2">
<span id="jsp_809" style="border: 1px dashed #ff0000">
<s:password name="password" key="label.password" size="20" id="JSTL_id"/>
</span>
</h2>
</span>
<span id="jsp_484" style="border: 1px dashed #ff0000">
<h2 id="3">
333333333333
<span id="jsp_897" style="border: 1px dashed #ff0000">
<s:submit method="execute" key="button.login" align="center" />
</span>
</h2>
</span>
<span id="jsp_534" style="border: 1px dashed #ff0000">
<%
out.println("Hello World�I");
out.println("Hello World�I");
out.println("����ɂ���");
%>
</span>
�yjQuery($('<li data-t..........���܂�</p></a></li>')).insertAfter($('#add li:first'))
<span id="jsp_757" style="border: 1px dashed #ff0000">
<div     id="iterate"    >
<span id="jsp_867" style="border: 1px dashed #ff0000">
<s:iterator value='{"1","2","3","4","5"}' id="number1" status="st">
<span id="jsp_403" style="border: 1px dashed #ff0000">
<s:property value="number1"/>
</span>
        A
<span id="jsp_289" style="border: 1px dashed #ff0000">
<s:property value="number1"/>
</span>
<span id="jsp_809" style="border: 1px dashed #ff0000">
<s:property value="number1"/>
</span>
<span id="jsp_452" style="border: 1px dashed #ff0000">
<s:property value="number1"/>
</span>
</s:iterator>
</span>
</div>
</span>
<span id="jsp_353" style="border: 1px dashed #ff0000">
<div id="select">
<span id="jsp_987" style="border: 1px dashed #ff0000">
<s:select name="LIST" list='{"java","vb.net","php"}'  value="php"/>
</span>
</div>
</span>
<span id="jsp_56" style="border: 1px dashed #ff0000">
<div id="radio">
<span id="jsp_595" style="border: 1px dashed #ff0000">
<s:radio name="MAP" list='#{"��":"��","��":"��"}' value="��" />
</span>
</div>
</span>
<span id="jsp_46" style="border: 1px dashed #ff0000">
<div id="checkbox">
<span id="jsp_261" style="border: 1px dashed #ff0000">
<s:checkboxlist name="MAP" list='#{1:"java",2:"VB",3:"C"}' listKey="key" listValue="value" value="{1,2}"/>
</span>
</div>
</span>
<span id="jsp_23" style="border: 1px dashed #ff0000">
<h2 id="3">
<span id="jsp_36" style="border: 1px dashed #ff0000">
<s:submit method="execute" key="button.login" align="center" />
</span>
</h2>
</span>
</s:form>
</span>
</body>
</html>
