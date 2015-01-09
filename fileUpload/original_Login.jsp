<%@ page contentType="text/html; charset=UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags"%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
<title><s:property value="%{getText('title.login')}"/></title>
</head>
<body>
<h2
 align="center">
 
 asdfasdfasdfasdfasdf
<s:property value="%{getText('title.login')}"/>
</h2>
<s:actionerror />
<s:form action="login.action" method="post">

<h2 id="1">111111111111
<s:textfield name="username" key="label.userid" size="20" />
</h2>
<h2 id="2">222222222222
<s:password name="password" key="label.password" size="20" id="JSTL_id"/>
</h2>
<h2 id="3">333333333333
<s:submit method="execute" key="button.login" align="center" />
</h2>


<%

out.println("Hello WorldI");
out.println("Hello WorldI");
out.println("‚±‚ñ‚É‚¿‚Í");

%>



<div id="iterate" >
<s:iterator value='{"1","2","3","4","5"}'
 id="number1" status="st">
        <span><s:property value="number1"/></span>A
        <s:property value="number1"/>B
        <s:property value="number1"/>C
        <s:property value="number1"/>D
        
    </s:iterator>
    
    
    
    </div>
    
    <div id="select">
    <s:select name="LIST" list='{"java","vb.net","php"}'  value="php"/>
    </div>
    
    <div id="radio">
    <s:radio name="MAP" list='#{"İ":"İ","‰ä":"‰ä"}' value="‰ä" /> 
    </div>
    <div id="checkbox">
    <s:checkboxlist name="MAP" list='#{1:"java",2:"VB",3:"C"}' listKey="key" listValue="value" value="{1,2}"/>
    </div>
    <h2 id="3">333333333333
<s:submit method="execute" key="button.login" align="center" />
</h2>
    
    
    
    
    
</s:form>
</body>
</html>