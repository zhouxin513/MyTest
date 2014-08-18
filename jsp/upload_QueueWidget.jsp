<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<html>
<head>
<title>JQuery Multiple FileUpload test by Plupload</title>
<link rel="stylesheet" type="text/css" href="../plupload/jquery.plupload.queue/css/jquery.plupload.queue.css" type="text/css" media="screen" />
<script type="text/javascript" src="../js/jquery-1.6.2.min.js" ></script>
<script type="text/javascript" src="../plupload/plupload.full.js"></script>
<script type="text/javascript" src="../plupload/jquery.plupload.queue/jquery.plupload.queue.js"></script>
<script type="text/javascript" src="../plupload/i18n/cn.js"></script>
<script type="text/javascript">

    //  Convert divs to queue widgets when the DOM is ready
	$(function() {
		function plupload() {
			$("#uploader").pluploadQueue({
				// General settings
				runtimes : 'html5,gears,browserplus,silverlight,flash,html4',
				// use FileUpload action as url to upload files setting in struts.xml
				// Fake server response here
				url : 'FileUpload.action',

				// rename : true,
				dragdrop : true,
				// unique_names : true,
				chunk_size : '2mb',

				filters : {
					// Maximum file size
					max_file_size : '10mb',
					// Specify what files to browse for
					mime_types : [ {
						title : "Image files",
						extensions : "jpg,gif,png"
					}, {
						title : "Jsp files",
						extensions : "jsp,txt"
					}, {
						title : "Zip files",
						extensions : "zip"
					} ]
				},

				// Resize images on clientside if we can
				resize : {
					width : 320,
					height : 240,
					quality : 90,
					crop : true    // crop to exact dimensions
				},

				// Flash settings
				flash_swf_url : '../plupload/plupload.flash.swf',
				// Silverlight settings
				silverlight_xap_url : '../plupload/plupload.silverlight.xap',
				multipart_params : {
					'user' : 'BestSkip.com',
					'time' : '2014-08-10'
				}
			});
		}
		plupload();
		$('#clear').click(function() {
			plupload();
		});
	});

</script>

</head>

<body>
	<div>
		<div style="width: 700px; margin: 0px auto">
			<form id="formId" action="Submit.action" method="post">

				<div id="uploader">
					<!-- This specific div will be replaced with the jQuery uploader queue widget.
					 It will automatically check for different runtimes in the configured order,
					 if it fails it will not convert the specified element. -->
					<p>Your browser doesn't have Flash, Silverlight or HTML5
						support.</p>
				</div>
				<input type="button" value="reset" id="clear" />
			</form>
		</div>
	</div>
</body>

</html>