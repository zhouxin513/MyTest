<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <script type="text/javascript" src="jquery/js/jquery-1.11.0.min.js"></script>
    <script type="text/javascript" src="jquery/jquery.bpopup.min.js"></script>
    <script type="text/javascript" src="dragNdrop.js"></script>

    <link href="hover.css" rel="stylesheet" media="all">

    <!--style for popup -->
    <style type="text/css">
        .button {
            background-color: #2b91af;
            border-radius: 10px;
            box-shadow: 0 2px 3px rgba(0, 0, 0, 0.3);
            color: #fff;
            cursor: pointer;
            display: inline-block;
            padding: 10px 20px;
            text-align: center;
            text-decoration: none
        }

        .button.small {
            border-radius: 15px;
            float: right;
            margin: 22px 5px 0;
            padding: 6px 15px
        }

        .button:hover {
            background-color: #1e1e1e
        }

        .button > span {
            font-size: 84%
        }

        .button.b-close, .button.bClose {
            border-radius: 7px 7px 7px 7px;
            box-shadow: none;
            font: bold 131% sans-serif;
            padding: 0 6px 2px;
            position: absolute;
            right: -7px;
            top: -7px
        }

        #preview {
            background-color: #fff;
            border-radius: 10px 10px 10px 10px;
            box-shadow: 0 0 25px 5px #999;
            color: #111;
            display: none;
            min-width: 450px;
            min-height: 450px;
            padding: 25px
        }

        #preview iframe {
            background: url('loader.gif') center center no-repeat;
            /*min-height: 240px;
            min-width: 450px
            */
            min-height: 100%;
            min-width: 100%
        }

        #preview .content {
            position: absolute;
            bottom: 10px;
            top: 20px;
            min-height: 90%;
            min-width: 90%;
            border: 1px dashed #2fff70;
        }
    </style>
    <!-- popup用スクリプト　-->
    <script type="text/javascript">
        $(document).ready(function () {
            //alert("6132777861112");
            //alert($('html')[0].outerHTML);
            //alert($('#iframe1').contents().find('html').context.value);
            //alert($('#iframe1').contents.find('html').html());
            //alert($('#iframe1').contentWindow.document.body.outerHTML);

            $('#previewBtn').bind('click', function (e) {
                // Prevents the default action to be triggered.
                e.preventDefault();
                //$('#previewIfr').attr('src','jsp/phr/html/loginmain.html');
                // Triggering bPopup when click event is fired
                // popupで表示される対象

               //$('#previewIfr').contents().find('html').html(htmlString);

                $('#preview').bPopup({
                    modalClose: true
                    // #preview  #iframe2
                    // content:'iframe', //'ajax', 'iframe' or 'image'
                     //contentContainer:'.content'
                     //loadUrl:'http://dinbror.dk/blog'
                     // loadUrl:'jsp/phr/html/loginmain1-test.html' //Uses jQuery.load()*/
                },
                function(){
                     var htmlString = $('#iframe1').contents().find('html').html();
                     alert(htmlString);
                     // #previewIfr
                     var previewIfrHtmlElement =  $('#previewIfr').contents().find('html');
                     $(previewIfrHtmlElement).html(htmlString);
                }
                );

                $('#popuppreview').bind('click',function(e){
                    //e.preventDefault();
                    var htmlString = $('#iframe1').contents().find('html').html();
                    alert(htmlString);
                    // #previewIfr
                    var previewIfrHtmlElement =  $('#previewIfr').contents().find('html');
                    $(previewIfrHtmlElement).html(htmlString);
                });
            });
        });
        function srctest(){
            var htmlString = $('#iframe2').contents().find('html').html();
            $('html').html(htmlString);
            //var eleme = $('#iframe1').contents().find('html');
            //alert($('#iframe2').contents().find('html').html());
        }

    </script>
</head>
<body>
<h3>drag and drop elements between iframes</h3>
<table width="800px" height="400px" border="1" style="border-color:red" align="center">
    <tr>
        <td>
            <iframe src="a.html" id="iframe1" style="width:400px;height:400px;">iframe1</iframe>
        </td>
        <td>
            <iframe src="b.html" id="iframe2" style="width:400px;height:400px">iframe2</iframe>
        </td>

    </tr>
</table>

<button onclick="convertPage()">convert iframe#1 elements</button>
<button onclick="showIframe2source()">show iframe#2 source in time</button>
<button id="previewBtn">preview Iframe#2</button>
<button onclick="srctest()">srctest</button>

<!--<input type="button" onclick="showIframe1()" value="show iframe#2 source in time"/><br/>
<input type="button" onclick="previewIframe1()" value="preview Iframe#1"/>-->



<!-- popup　表示コンテンツ -->

<div id="preview" style="left: 600px; position: absolute; top: 2291px; z-index: 9999; opacity: 1; ">

    <span class="button b-close">
        <span>
            X
        </span>
    </span>

    <div class="content">
        <!--
        <iframe src="http://dinbror.dk/blog" class="b-iframe" frameborder="0" scrolling="no"></iframe>
        -->
        <iframe id="previewIfr" > <!--src="phr/html/mobile-template001.html"src="test01.html"-->

        </iframe>
    </div>
    <button style="position: absolute;top:0px;left: 0px" id="popuppreview">preview</button>
</div>


<%--JQuery Ajax test --%>
<div id="myDiv"></div>
<button id="b01" >AJAX TO POPUP Preview</button>
<h2>Let AJAX change this text</h2>
<h2 class="button hover-shadow">Shadow and Glow Transitions demo</h2>

<a href="#" class="button glow">Glow</a>
<a href="#" class="button box-shadow-outset">Box Shadow Outset</a>
<a href="#" class="button box-shadow-inset">Box Shadow Inset</a>
<a href="#" class="button float-shadow">Float Shadow</a>
<a href="#" class="button hover-shadow">Hover Shadow</a>
<a href="#" class="button shadow-radial">Shadow Radial</a>

<script>
    $(document).ready(function () {

        $("#b01").click(function () {
            var htmlString = $('#iframe2').contents().find('html').html();
            $.post("preview.action", //action name
                    { //　サブカテゴリー選択処理プログラムを呼び出し
                        htmlsource : htmlString //必要な引数を渡す
                    },
                    function(response) {
                        //e.preventDefault();
                        alert(response);
                        $('#previewIfr').attr('src',"sample.html");
                        $('#preview').bPopup({
                            modalClose: true
                        }
                        );
                        //alert(response);
                        //setTimeout("finishAjax('show_sub_categories', '"+ escape(response)+ "')", 400);
                    }
            );
/*
            htmlobj = $.ajax({
                url: "temp/test1.txt",
                async: false
            });
            $("#myDiv").html(htmlobj.responseText);
*/
        });
    });
</script>


<div style="width:250px;height:300px;background:rosybrown;position:relative" id="div2" ondrop="drop(event)"
     ondragover="allowDrop(event)">
</div>



<%-- ajax test field --%>
<div id="tab0">
    <s:form action="search" method="post">

        <table style="margin-left: auto; margin-right: auto">
            <tr>
                <td>Environment:</td>
                <td><select id="environmentSelect" name="environment">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select></td>
            </tr>
            <tr>
                <td>Search Value:</td>
                <td><input id="searchValue" name="searchText" type="text" /></td>
            </tr>
            <tr>
                <td></td>
                <td><button id="searchButton">Search</button></td>
            </tr>
        </table>
    </s:form>
</div>
<script>
    $("#searchButton").on("click",function(){
        var htmlString = $('#iframe2').contents().find('html').html();
        console.log("Inside Ajax call = "+  $('#tab0'));
        $.ajax({
            type: 'POST',
            url:'createTemplate.action?htmlsource='+ htmlString,
            dataType: 'json',
            success: function(data){
                console.log(stringify(data));
            }});
    })



</script>


</body>

</html>
