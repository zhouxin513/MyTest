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
				,
				
				init : {


                    FileUploaded: function(up, file, info) {
		                // Called when file has finished uploading
		                alert(info.response);
		                // var filejson = eval("(" + info.response + ")");
		                var response = JSON.parse(info.response);


                        var txt ="";
                        txt = txt + response.filepath + response.context;
                        alert(txt);

                      /*  alert(filename.id) ;
		               var obj = eval("(" + info.response + ")");
		               alert(obj.length);
		                for (var i = 0; i < obj.length;i++){
		                	alert("fileurl : " + filejson[i].filepath);
		                }
		                 */
		                /* var myData = JSON.parse(info.response);
		                var txt = "";
		                for (var i=0; i<myData.item.length; i++){
		                txt = txt + myData[i].filepath + "　" + myData[i].itemPrice+"context";
		                } */
		                //document.getElementById("filelist").innerHTML = "txt";
		                
		            },
		            
		            UploadComplete: function(up, files) {
		                // Called when all files are either uploaded or failed
		                //log('[UploadComplete]');
		                alert("upload 完了");
                        //document.createElement()
		                document.getElementById("filelist").innerHTML = "test test test";
                        //txt ="";
		                
		            }
				
				}
				
			/* 	 // PreInit events, bound before any internal events
		        preinit : {
		            Init: function(up, info) {
		                log('[Init]', 'Info:', info, 'Features:', up.features);
		            },
		 
		            UploadFile: function(up, file) {
		                log('[UploadFile]', file);
		 
		                // You can override settings before the file is uploaded
		                // up.setOption('url', 'upload.php?id=' + file.id);
		                // up.setOption('multipart_params', {param1 : 'value1', param2 : 'value2'});
		            }
		        },
		         
		        
		       // Post init events, bound after the internal events
				 init : {
		            UploadComplete: function(up, files) {
		                // Called when all files are either uploaded or failed
		                log('[UploadComplete]');
		                alert("upload 完了");
		            }
	           
		        }//int over  */
					
			});
		}
		
				
		plupload();
		
		/* $("#uploader").bind("FileUploaded", function (up, file, response) {
            alert("FileUploaded 11111111");
            document.getElementById("fileList").innerHTML="<b>タグ</b>を含む書換え";
               alert(response.response); 
		};
		 */
		// ファイルがアップロードされた時
	 	/*$("#uploader").bind("FileUploaded", function (up, file, response) {
            alert("FileUploaded 11111111");
            document.getElementById("fileList").innerHTML="<b>タグ</b>を含む書換え";
               alert(response.response);
               
           });
		   */
		   /*
		 $("#uploader").bind("UploadComplete", function (up, file) {
            alert("UploadComplete");
            alert(response.response);
           });
		 */
		
		$('#clear').click(function() {
			plupload();
		});
		
		 
		/* function log() {
	        var str = "";
	 
	        plupload.each(arguments, function(arg) {
	            var row = "";
	 
	            if (typeof(arg) != "string") {
	                plupload.each(arg, function(value, key) {
	                    // Convert items in File objects to human readable form
	                    if (arg instanceof plupload.File) {
	                        // Convert status to human readable
	                        switch (value) {
	                            case plupload.QUEUED:
	                                value = 'QUEUED';
	                                break;
	 
	                            case plupload.UPLOADING:
	                                value = 'UPLOADING';
	                                break;
	 
	                            case plupload.FAILED:
	                                value = 'FAILED';
	                                break;
	 
	                            case plupload.DONE:
	                                value = 'DONE';
	                                break;
	                        }
	                    }
	 
	                    if (typeof(value) != "function") {
	                        row += (row ? ', ' : '') + key + '=' + value;
	                    }
	                });
	 
	                str += row + " ";
	            } else {
	                str += arg + " ";
	            }
	        });
	 
	        var log = $('#log');
	        log.append(str + "\n");
	        log.scrollTop(log[0].scrollHeight);
	    }  */
		
	});
	//});

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
	
	<!-- test source -->
	<div id="filelist" style="width: 700px; margin: 0px auto">
	<textarea rows="3" cols="">upload file lists</textarea>
	</div>
	<input type="button" value="use parants js" onclick=" window.opener.loadPage()"/>
</body>

</html>