


<!DOCTYPE HTML>
<html lang="ja">

<head>
    <meta charset="utf-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=8" />
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta http-equiv="Pragma" content="no-cache">
    <meta http-equiv="Cache-Control" content="no-cache">

    <title>ログイン</title>


    <script type="text/javascript" src="js/jquery-1.7.2.min.js"></script>
    <link href="js/themes/custom-theme/jquery-ui-1.10.4.custom.css" rel="stylesheet" type="text/css" />
    <script type="text/javascript" src="js/ui/jquery-ui-1.10.4.custom.js"></script>
    <script type="text/javascript" src="js/ui/i18n/jquery-ui-i18n.js"></script>
    <!--
    <script type="text/javascript" src="js/ui/jquery.ui.datepicker.js"></script>
     -->
    <script type="text/javascript" src="js/My97DatePicker/WdatePicker.js"></script>
    <link href="js/jquery.jqGrid-4.5.4/css/ui.jqgrid.css" rel="stylesheet" type="text/css" />
    <link href="css/hcsc.css" rel="stylesheet" type="text/css" />
    <script type="text/javascript" src="js/hcsc.js"></script>
    <script type="text/javascript">
        function showDate(){
            var language = 'null';
            // datepicker 国際化
            if(language == null || language == "") {
                // default
                language = "ja";
            } else {
                var indexOf = language.indexOf("_");
                language = language.slice(0, indexOf);
            }
            WdatePicker({
                lang:language,
                skin:"default",
                dateFmt:"yyyy/MM/dd",
                realDateFmt:"yyyy/MM/dd",
                readOnly:false,
                qsEnabled:false,
                isShowOK:false
            });
        }
    </script>
    <link href="css/login.css" rel="stylesheet" type="text/css" />
    <style>
        .headerMain{
            height:60px;
            background-color: #FFFFFF;
            z-index: 999;
            position: inherit;
            width: auto;
        }
    </style>
    <script type="text/javascript">
        $(document).ready(function(){
            var name=$("#userid").val();
            var password=$("#idpassword").val();
            if(name==""){
                $("#user_name").css("display","block");
            }
            if(password==""){
                $("#password").css("display","block");
            }
        });

        document.onkeydown=keyDownSearch;

        function keyDownSearch(e) {
            var theEvent = e || window.event;
            var code = theEvent.keyCode || theEvent.which || theEvent.charCode;
            if (code == 13) {
                submitform("HCSCCOMZ1500102.action");
                return false;
            }
            return true;
        }

        function hideText(flag){
            if(flag=="1"){
                $("#user_name").css("display","none");
                $("#login_name").css("background","url(./img/nameON.png) no-repeat left top");
            }else{
                $("#password").css("display","none");
                $("#login_password").css("background","url(./img/passwordON.png) no-repeat left top");
            }
        }

        function hideTexton(flag){
            if(flag=="1"){
                document.getElementById("userid").focus();
            }else{
                document.getElementById("idpassword").focus();
            }
        }

        function showText(flag){
            if(flag=="1"){
                var name=$("#userid").val();
                if(name==""){
                    $("#user_name").css("display","block");
                }else{
                    $("#user_name").css("display","none");
                }
                $("#login_name").css("background","url(./img/name.png) no-repeat left top");
            }else{
                var password=$("#idpassword").val();
                if(password==""){
                    $("#password").css("display","block");
                }else{
                    $("#password").css("display","none");
                }
                $("#login_password").css("background","url(./img/password.png) no-repeat left top");
            }
        }
    </script>
</head>
<body>
<div class="main">
    <form id="form1"  method="post" autocomplete ="off">
        <!-- ﾍｯﾀﾞ部 -->





        <meta http-equiv="Pragma" content="no-cache">
        <meta http-equiv="Cache-Control" content="no-store">
        <meta http-equiv="Cache-Control" content="no-cache">
        <meta http-equiv="Expires" content="-1">

        <script  type="text/javascript">
            $(function(){
                var  method = $("#changeLanguageMethod").val();
                $('#changeLag').live("change",function() {

                    submitform(method);

                });

                $(window).scroll(function(){
                    var scrollt = document.documentElement.scrollTop + document.body.scrollTop;
                    if( scrollt > 200 ){
                        $("#toTop").fadeIn(400);
                    }else{
                        $("#toTop").stop().fadeOut(400);
                    }
                });

                $("#toTop").click(function(){
                    $("html,body").animate({scrollTop:"0px"},200);
                });
            });
        </script>
        <!-- ﾍｯﾀﾞ部 -->
        <div class="headerMain" >
            <div style="height: 10px;">
            </div>
            <div class="header">
                <span class="header_value">健康支援クラウド</span>
                <input id="changeLanguageMethod" type="hidden" value="HCSCCOMZ1500103" />
                <div style="float:right;width:auto;margin-right:10px;">

                    <div style="float:right;width:auto;padding-right: 10px;">
                    <span style="float:right; padding-top: 15px">
                        <select name="form.languageValue" id="changeLag">
                            <option value="ja_JP" selected="selected">日本語</option>
                            <option value="en_US">Engllish</option>
                            <option value="zh_CN">中文</option>


                        </select>


                    </span>
                    </div>
                </div>
            </div>
        </div>
        <div class="clear"></div>
        <div id="toTop" class="toTop"></div>
        <div class="clear"></div>
        <div class="center">
            <div class="container" style="margin-top: 50px;">
                <div>



                </div>
                <!-- 画面名 -->
                <div class="container_user">
                    <b>◆ユーザログイン</b>
                </div>
                <div class="container_password" style="min-height: 100px;height: auto;">
                    <div class="container_children">
                        <div style="margin-top: 30px;margin-left: 20px;">
                            <center>
                                <!-- ユーザID -->
                                <div class="layout_input" >
                                    <div id="user_name" class="hideText" onclick="hideTexton(1)">
                                        ユーザID
                                    </div>
                                    <div class="login_name" id="login_name">
                                        <input type="text" name="form.mailAddress" maxlength="55" value="" id="userid" class="showInput" onfocus="hideText(1)" onblur="showText(1)"/>
                                    </div>
                                </div>
                                <!-- パスワード -->
                                <div class="layout_input" >
                                    <div id="password" class="hideText" onclick="hideTexton(2)">
                                        パスワード
                                    </div>
                                    <div class="login_password" id="login_password">
                                        <input type="password" name="form.password" maxlength="16" id="idpassword" class="showInput" onfocus="hideText(2)" onblur="showText(2)"/>
                                    </div>
                                </div>
                            </center>
                        </div>
                        <div style="clear: both;"></div>
                        <!-- ユーザIDブラウザに記憶する -->
                        <div style="height: 20px;color: #797979;font-size: 14px;">
                            <input type="checkbox" name="form.loginRetainFlag" value="true" id="form_loginRetainFlag"/><input type="hidden" id="__checkbox_form_loginRetainFlag" name="__checkbox_form.loginRetainFlag" value="true" />

                            ユーザIDを記憶する
                        </div>
                        <!-- ﾛｸﾞｲﾝﾎﾞﾀﾝ -->
                        <div style="margin-top: 20px;">
                            <center>
                                <div class="button" style="width: 190px;height: 30px;line-height: 30px;" onclick="submitform('HCSCCOMZ1500102.action');" >
                                    ログイン
                                </div>
                            </center>
                        </div>
                        <div style="margin-top: 20px;height: 30px;font-size: 13px;">
                            <!-- 新規登録はこちら -->
                            <div style="width: 190px;height: 20px;float: left;margin-left: 120px;">
                                <!-- 			                    	<a href="HCSCCOMZ1500104">新規登録はこちら</a> -->
                                <a href="javascript:void(0);" onclick="submitform('HCSCCOMZ1500104')">
                                    新規登録はこちら
                                </a>
                            </div>
                            <!-- パスワードが忘れた場合 -->
                            <div style="width: 190px;height: 20px;float: left;">
                                <!-- 			                   		<a href="HCSCCOMZ1500105">パスワードを忘れた場合</a> -->
                                <a href="javascript:void(0);" onclick="submitform('HCSCCOMZ1500105')">
                                    パスワードを忘れた場合
                                </a>
                            </div>
                        </div>
                        <div style="clear: both;"></div>
                    </div>
                </div>
                <!-- 文言ｴﾘｱ -->
                <div class="infoText">

                </div>
            </div>
        </div>
    </form>
</div>
<!-- フッタ -->
<div class="clear"></div>
<div class="footer">
    (c) Hitachi Systems, Ltd. 2014. All rights reserved.
</div>

</body>
</html>