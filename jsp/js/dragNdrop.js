/*dragされる対象　drag eventが発生する時のファンクション*/

function drag(ev) {
    ev.dataTransfer.setData("Text", ev.target.id);
    //alert(ev.dataTransfer.setData("Text",ev.target.id));
}

/*drag対象の置く場所にOndragとOndrop Eventが発生する時のファンクション*/
function allowDrop(ev) {
    ev.preventDefault();
}

function drop(ev) {
    ev.preventDefault();
    //dataTransfer対象からセットされたデーターを取得する
    var data = ev.dataTransfer.getData("Text");

    /*本体のエレメントIDを取得し、コピーする　方法
     　ev.target.appendChild(document.getElementById(data).cloneNode(true));
     */

    /*iframeのエレメントIDを取得し、コピーする 方法
     ev.target.appendChild(document.getElementById("shutto-source").contentWindow.document.getElementById(data).cloneNode(true));
     */

    /*iframeのエレメントIDを取得し、別のiframeにコピーする 方法*/
    ev.target.appendChild(window.parent.document.getElementById("shutto-source").contentWindow.document.getElementById(data).cloneNode(true));
    var node = document.getElementById(data);

    // エレメントのIDがdrop&dragのイベントに必要
    var uniqueID2 = "mobile-" + data;

    // 新規追加ロードに属性やスタイル、アクションなどを定義する
    $(node).css({
        "color": "red",
        "border": "3px solid #a6d220",
        "width": "100%"
    });
    $(node).attr({
        "draggable": "true",
        "ondragstart": "drag(event)",
        /*"id": uniqueID2,*/
        "class": "node-component"
    });
    // コンテキストメニューをバインドする
    $(node).bind('click', function (e) {
        e.preventDefault();
        $(this).contextMenu();
        // or $('.context-menu-one').trigger("contextmenu");
        // or $('.context-menu-one').contextMenu({x: 100, y: 100});
    });


    /*//クリックのメニューの定義(jquery.contextmenu.r2.js)
    $(node).contextMenu(
        'myMenu2', {
        menuStyle: {
            border: '2px solid #000'
        },
        itemStyle: {
            fontFamily: 'verdana',
            backgroundColor: '#666',
            color: 'white',
            border: 'none',
            padding: '1px'
        },
        itemHoverStyle: {
            color: '#fff',
            backgroundColor: '#0f0',
            border: 'none'
        },
            bindings: {
                'open': function (t) {
                    //自身スタイルを変更する
                    $(t).css(
                        {
                            "color": "yellow",
                            "border": "1px solid red",
                            "width": "100%"
                        })
                },
                'email': function (t) {
                    alert('idは' + t.id + 'です。\nEmailを起動。');
                },
                'save': function (t) {
                    alert('idは' + t.id + 'です。\nSave（保存）。');
                },
                'delete': function (t) {
                    //自身を削除する
                    $(t).remove();
                    //alert('idは' + t.id + 'です。\n（閉じる）。');
                }
            }
    }
    );//contextMenu end.*/

}//fution drop end


/*Convert対象ページのエレメントに対する処理*/
function convertPage() {
    // ifameのBody対象のエレメントを洗い出し
    var ifrbody = $("#shutto-source").contents().find('body');

    //　Bodyの全てのnodeを取得
    var ifrItems = ifrbody.find("*");

    for (var j = 0; j < ifrItems.length; j++) {

        var node =$(ifrItems[j])[0];
        // 特定属性に対してチェックする
        var idAttr = $(node).attr("id");
        // if continue 文を追加すれば、処理したくないノードを洗い出し可能
        // typeof idAttr === 'undefined' は　IDが持たないエレメントに対して処理しない
        if(node.tagName === 'div' || node.tagName === 'DIV' || typeof idAttr === 'undefined' || idAttr === null )
        {
          //  alert("this is " + node.tagName);
            continue;
        }
        //alert(node.tagName);
        // ランダムIDを作成する
        var uniqueNum = Math.floor(Math.random() * 99999);
        var uniqueID = 'id-' + String(uniqueNum);
        //elementsに「id」があるかどうかを判断する必要がある
        // alert(j + ' :' + uniqueID);
        /*
        //　スタイルを変更する
        $(ifrItems[j]).css({
            "display": "block",
        "width": "50%",
        "font-weight": "400",
        "margin-bottom": "1em",
        "overflow": "hidden",
        "padding-top": "1.4em",
        "padding-right": "2em",
        "box-sizing": "border-box",
        "-moz-box-sizing": "border-box",
        "float": "left"
        });*/

        //　属性を変更する
        $(node).attr({
            "draggable": "true",    /*dragできるようにする*/
            "ondragstart": "window.parent.drag(event)"  /*dragする時のFunctionを与える*/
            /*"id": uniqueID*/
            /*"class":"box-shadow-outset"*/
        });
        // CSSを追加する
        $(node).css({
           /* "display": "inline-block",
            "-webkit-transition-duration": "0.3s",
            "transition-duration": "0.3s",
            "-webkit-transition-property": "box-shadow",
            "transition-property": "box-shadow",
            "-webkit-transform": "translateZ(0)",
            "transform": "translateZ(0)",
            "box-shadow": "inset 0 0 0 4px #e1e1e1, 0 0 1px rgba(0, 0, 0, 0)",
            "color": "green",
            "border": "1px solid red"　*/
        });
        //　mouse hoverのファンクション
        /*$(node).hover(
            function () {
                $(this).css({
                    "box-shadow": "inset 0 0 0 2px #666666, 0 0 1px rgba(0, 0, 0, 0)"

                });
            },
            function () {
                $(this).css({
                    "box-shadow": "inset 0 0 0 2px #e1e1e1, 0 0 1px rgba(0, 0, 0, 0)"
                });
            }
        );*/

        //　エレメントがmouse hover時にoutlineスタイルを追加する
        //$(node).mouseover(function(){
        $(node).mouseenter(function(){
            //this.style.backgroundColor = "#fcffb3";
            /*this.style.backgroundColor = "yellow";
             this.style.border = "0px solid red"*/
            this.style.outline = "1px solid blue";
            //this.parentNode.style.outline = "none";
            this.style.boxShadow = "0px 0px 5px blue";
            //this.style.outline = "1px solid #c00";
            //this.style.border = "3px solid #a6d220 !important";
            //this.style.color = "#a6d220";
            //this.style.cursor = "pointer";

        });
        $(node).mouseleave(function(){
            //this.style.backgroundColor = "lightgray";
            /*this.style.backgroundColor = "yellow";
             this.style.border = "0px solid red"*/
            this.style.outline = "none";
            this.style.boxShadow = "none";
            //this.style.border = "0px solid lightgray";
        });
        $(node).click(function(e){
            //this.style.backgroundColor = "lightgray";
            /*this.style.backgroundColor = "yellow";
             this.style.border = "0px solid red"*/
            //$('*').style.outline = "none";
            e.target.style.outline = "1px solid #0c0";
            //alert(idAttr);
            //alert(e.target.tagName);
            //e.target.style.border = "1px solid #0c0";
        });

    }

}

function openUploader() {

    var childWin = window.open('jsp/upload_QueueWidget.jsp', 'FileUploadWindow', 'width=850, height=600,scrollbars=yes');
    //var childWin = window.open("childWin.html", "_blank", "height=400, width=550, status=yes, toolbar=no, menubar=no, location=no,addressbar=no);
}

function openUploader2() {

    var childWin = window.open('jsp/uploadFileToDb.jsp', 'FileUploadWindow', 'width=850, height=600,scrollbars=yes');
    //var childWin = window.open("childWin.html", "_blank", "height=400, width=550, status=yes, toolbar=no, menubar=no, location=no,addressbar=no);
}

function loadProject(){
    var childWin = window.open('jsp/upload_QueueWidget_zip.jsp', 'FileUploadWindow', 'width=850, height=600,scrollbars=yes');
    //var childWin = window.open("childWin.html", "_blank", "height=400, width=550, status=yes, toolbar=no, menubar=no, location=no,addressbar=no);

}

function preview() {
    //var contentUrl = document.getElementById("templateIframe").contentWindow.location.href;
    //var frame = document.getElementById("templateIframe").value;
    var code = $('#templateIframe').html();
    alert(code);
    //window.open("contentUrl",'source preview', 'width=850, height=400,scrollbars=yes');
}

function srcTest() {
    //alert("srcTest");
/*
    $('#templateIframe').bPopup({
        modalClose: true

        *//*
         #preview
         content:'iframe', //'ajax', 'iframe' or 'image'
         contentContainer:'.content',
         loadUrl:'http://dinbror.dk/blog'
         // loadUrl:'jsp/phr/html/loginmain1-test.html' //Uses jQuery.load()*//*
    });*/
   // var doc = $('#templateIframe').contentDocument || $('#templateIframe').contentWindow.document;
    //var doc = $('#templateIframe').get(0).contentWindow.print();
    var doc = $('#shutto-source').contents().find('html').html();

    alert(doc);


    //alert(doc.getElementById("inputarea").hasChildNodes());

}

