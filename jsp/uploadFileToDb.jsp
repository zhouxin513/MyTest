<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<html>
<head>
<title>JQuery Multiple FileUpload test by Plupload</title>
<link rel="stylesheet" type="text/css" href="../plupload/jquery.plupload.queue/css/jquery.plupload.queue.css"
      type="text/css" media="screen"/>

<script type="text/javascript" src="jquery/js/jquery-1.11.0.min.js"></script>
<script type="text/javascript" src="../plupload/plupload.full.js"></script>
<script type="text/javascript" src="../plupload/jquery.plupload.queue/jquery.plupload.queue.js"></script>
<script type="text/javascript" src="../plupload/i18n/cn.js"></script>
<script src="js/dragNdrop.js" type="text/javascript"></script>
<style type="text/css">

    #itemDiv {
        /*position: relative;
        top: 20px;
        width: 690px;
        margin: 0px auto;
        border: solid 1px #4d90fe;
        color: #fff;
        */
        position: absolute;
        top: 370px;
        left: 8px;
        bottom: 0px;
        margin: 0px auto;
        width: 690px;
        border: solid 1px #4d90fe;
        border-radius: 6px;
        color: #fff;
    }

    #clear-btn {
        position: relative;
        left: 10px;
        top: 5px;
        height: 26px;
        width: 92px;
        font-size: 12px;
        cursor: pointer;
        background-color: #47a447;
        border-radius: 3px;
        border: 1px solid #398439;
    }

    #clear-btn:hover, #clear-btn:focus {
        color: #333;
        text-decoration: none;
    }

    h4 {
        position: relative;
        top: -2px;
        left: 10px;
        height: 20px;
        font: bold;
        color: #ffffff;
    }

    #select-btn {
        position: absolute;
        top: 50px;
        left: 10px;
        width: 77px;
        height: 26px;
        background-color: #4D90FE;
        border: 1px solid #3079ED;
        color: #fff;
        cursor: pointer;
        border-radius: 3px;
    }

    #radioDiv {
        position: absolute;
        top: 85px;
        left: 10px;
        bottom: 0px;
        right: 10px;
        margin: 0px auto;
        border: solid 1px #4d90fe;
        color: #fff;
        background: #000f05;
        min-height: 100px;
        height: auto !important;
    }

    label[for] {
        /*position: absolute;
        left: 0px;*/
        padding-bottom: 10px;
        clear: none;
        color: #ffffff;
    }


</style>
<script type="text/javascript">

    //  Convert divs to queue widgets when the DOM is ready
    $(function () {
        function plupload() {

            $("#uploader").pluploadQueue({
                // General settings
                runtimes: 'html5,gears,browserplus,silverlight,flash,html4',
                
                // Fake server response here
                // use FileUpload action as url to upload files setting in struts.xml
                url: 'saveFileToDb.action',

                // rename : true,
                dragdrop: true,
                // unique_names : true,
                chunk_size: '2mb',

                filters: {
                    // Maximum file size
                    max_file_size: '10mb',
                    // Specify what files to browse for
                    mime_types: [
                        /*  {
                         title: "Image files",
                         extensions: "jpg,gif,png"
                         }, */
                        {
                            title: "Jsp files",
                            extensions: "jsp,html,htm"
                        }
                        /* ,
                         {
                         title: "Zip files",
                         extensions: "zip"
                         } */
                    ]
                },

                // Resize images on clientside if we can
                resize: {
                    width: 320,
                    height: 240,
                    quality: 90,
                    crop: true    // crop to exact dimensions
                },

                // Flash settings
                flash_swf_url: '../plupload/plupload.flash.swf',
                // Silverlight settings
                silverlight_xap_url: '../plupload/plupload.silverlight.xap',

                multipart_params: {
                    'user': 'BestSkip.com',
                    'time': '2014-08-10'
                },

                /* // PreInit events, bound before any internal events
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
                 */

                // Post init events, bound after the internal events
                init: {

                    FileUploaded: function (up, file, info) {
                        // Called when file has finished uploading
                        //alert("fileUploaded");
                        // xmlhttprequest帰ってきたresponseTextを処理する
                        var result = JSON.parse(info.response);
                        //var txt = "";

                        var fileUrlTxt = result.fileUrl;
                        var fileNameTxt = result.fileName;

                        //　アップロードしたファイル一覧表示する、ラジオグループとして表示する
                        var radioItem = document.createElement("input");
                        radioItem.type = "radio";
                        radioItem.name = "radioGrp";
                        //radioItem.id = "rad1";
                        radioItem.value = fileUrlTxt;

                        // ラジオボタンにテキストラベルを作成
                        var lableElement = document.createElement("Label");
                        lableElement.setAttribute("for", radioItem);
                        // lableElement.color("#000f05");

                        var txtNode = document.createTextNode(fileNameTxt);
                        lableElement.appendChild(txtNode);
                        //lableElement.insertBefore(radioItem,textElement);

                        //　フォームのchildNodeの「select-btn」の前にラジオボタンを追加
                        var targetDiv = document.getElementById("radioDiv");
                        targetDiv.appendChild(lableElement);
                        //targetDiv.insertBefore(radioItem,brItem);
                        lableElement.insertBefore(radioItem, txtNode);

                        //　ラベルの前に改行を入れる
                        var brItem = document.createElement("br");
                        targetDiv.insertBefore(brItem, lableElement);
                    },

                    UploadComplete: function (up, files) {
                        // Called when all files are either uploaded or failed
                        //log('[UploadComplete]');
                        //alert("upload 完了22222");
                        // document.getElementById("filelist").innerHTML="test test";
                    }
                }//int over
            });
        }

        plupload();

        // pluploadのWidgetをリセットする、ラジオ内容を全部消します。
        $('#clear-btn').click(function () {
            plupload();
            $('#radioDiv').empty();
        });

        // radioボタンをクリックするときのファンクション、選択したファイルのURLを取得し、親Windowのiframeにてページを表示する。選択されてなければ警告が出る。
        $('#select-btn').click(function () {
            if (!$("input:radio[name='radioGrp']:checked").val()) {
                alert("Uploaded fileが未選択");
            } else {
                var src = $("input:radio[name='radioGrp']:checked").val();
                //alert(src);
                window.opener.loadPage(src);
            }
        });


    });



</script>

</head>

<body>
<div style=" position:absolute;bottom: 0px;top: 0px">
    <section style="width: 700px; position:relative; margin: 0px auto">
        <form id="formId" action="Submit.action" method="post">

            <div id="uploader">
                <!-- This specific div will be replaced with the jQuery uploader queue widget.
                 It will automatically check for different runtimes in the configured order,
                 if it fails it will not convert the specified element. -->
                <p>Your browser doesn't have Flash, Silverlight or HTML5
                    support.</p>
            </div>
            <input type="button" value="reset upload" id="clear-btn"/>
        </form>
    </section>


    <!-- test source -->

    <section id="itemDiv">
        <header>
            <div style="position:absolute;left:0px;top:0px;right:0px;height:40px;background-color: #808080">
                <h4>Uploaded File List</h4>
            </div>
        </header>
        <div>
            <form id="filelist">
                <div id="">
                    <input type="button" value="選択" id="select-btn"/>
                </div>
                <div id="radioDiv">
                </div>

            </form>
        </div>
    </section>

</div>

</body>

</html>