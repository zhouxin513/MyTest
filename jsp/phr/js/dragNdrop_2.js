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

    //dataTransfer対象からセットされたデーターを取得する
    var data = ev.dataTransfer.getData("Text");
    //alert(data);

    /*本体のエレメントIDを取得し、コピーする　方法
     　ev.target.appendChild(document.getElementById(data).cloneNode(true));
     */

    /*iframeのエレメントIDを取得し、コピーする 方法
     ev.target.appendChild(document.getElementById("shutto-source").contentWindow.document.getElementById(data).cloneNode(true));
     */

    /*iframeのエレメントIDを取得し、別のiframeにコピーする 方法*/
    ev.target.appendChild(window.parent.document.getElementById("shutto-source").contentWindow.document.getElementById(data).cloneNode(true));

    var node = document.getElementById(data);

    var uniqueID2 = "mobile-" + data;

    // 新規追加ロードに属性やスタイル、アクションなどを定義する
    $(node).css({
        "color": "red",
        "border": "1px solid red",
        "width": "100%"

    });
    $(node).attr({
        "draggable": "true",
        "ondragstart": "drag(event)",
        "id": uniqueID2,
        "class": "shutto-component-group shutto-component"
    });

    //　右クリックのメニューの定義
    $(node).contextMenu('myMenu2', {

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

        }

    });//contextMenu end.

}//fution drop end


/*Convert対象ページのエレメントに対する処理*/
function convertPage() {
    var ifrbody = $("#shutto-source").contents().find('body');
    //alert("1");
    var ifrItems = ifrbody.find("*");
    // alert(y.length);

    for (var j = 0; j < ifrItems.length; j++) {

        //alert(y[j].nodeValue);
        //if(ifrItems[j].id == "drop-box")continue;

        var uniqueNum = Math.floor(Math.random() * 99999);
        var uniqueID = 'id-' + String(uniqueNum);
        //elementsに「id」があるかどうかを判断する必要がある
        // alert(j + ' :' + uniqueID);
        $(ifrItems[j]).css({
            "color": "red",
            "border": "1px solid red"
        });
        $(ifrItems[j]).attr({
            "draggable": "true",
            "ondragstart": "window.parent.drag(event)",
            "id": uniqueID
        });
        $(ifrItems[j]).mouseover(function(){
            this.style.backgroundColor = "yellow";
            this.style.border = "0px solid red"

        });
        $(ifrItems[j]).mouseout(function(){
            this.style.backgroundColor = "white";
            this.style.border = "0px solid white"
        });
    }

}

function openUploader() {

    var childWin = window.open('jsp/upload_QueueWidget.jsp', 'FileUploadWindow', 'width=850, height=600,scrollbars=yes');
    //var childWin = window.open("childWin.html", "_blank", "height=400, width=550, status=yes, toolbar=no, menubar=no, location=no,addressbar=no);
}


function preview() {
    //var contentUrl = document.getElementById("templateIframe").contentWindow.location.href;
    //var frame = document.getElementById("templateIframe").value;
    var code = $('#templateIframe').findhis.html();

    alert(code);

    //window.open("contentUrl",'source preview', 'width=850, height=400,scrollbars=yes');
}




