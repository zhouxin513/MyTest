<%@ page contentType="text/html; charset=UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags"%>
<html>
<head>
<title>Upload User Image</title>
</head>
 
<body>
<h2>Struts2 File Upload & Save Example</h2>
<s:actionerror />
<s:form action="fileupload" method="post" enctype="multipart/form-data">
    <s:file name="userImage" label="User Image" />
    <s:submit value="Upload" align="center" />
    test
    <input	type="file" name="files[]" multiple>
</s:form>
</body>
</html>