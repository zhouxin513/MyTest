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
    //alert(data);

    //　本体のエレメントIDを取得し、コピーする
    //ev.target.appendChild(document.getElementById(data).cloneNode(true));
    // iframeのエレメントIDを取得し、コピーする
    //ev.target.appendChild(document.getElementById("shutto-source").contentWindow.document.getElementById(data).cloneNode(true));
    // alert(data);
    //ev.target.appendChild(document.getElementById("iframe1").contentWindow.document.getElementById(data).cloneNode(true));
    var node = ev.target.appendChild(window.parent.document.getElementById("iframe1").contentWindow.document.getElementById(data).cloneNode(true));
    //var node = document.getElementById(data);
    //alert(node);
    var uniqueID2 = "mobile-" + data;
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
    });
    //alert(uniqueID2);
}

function showIframe2source(){
    alert("showIframe2source dynamically");
    //alert($('#iframe2').documentElement.outerHTML);
    alert($('#iframe2').contents().find('*').html());
    //contents().find('body').html()contentWindow.document)
}

function previewIframe2(){
    var contentUrl = document.getElementById("iframe2").contentWindow.location.href;
    window.open("contentUrl",'source preview', 'width=850, height=400,scrollbars=yes')
}

/*Convert対象ページのエレメントに対する処理*/
function convertPage() {
    var ifrbody = $("#iframe1").contents().find('body');
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
        "display": "inline-block",
        "-webkit-transition-duration": "0.3s",
        "transition-duration": "0.3s",
        "-webkit-transition-property": "box-shadow",
        "transition-property": "box-shadow",
        "-webkit-transform": "translateZ(0)",
        "transform": "translateZ(0)",
        "box-shadow": "inset 0 0 0 4px #e1e1e1, 0 0 1px rgba(0, 0, 0, 0)",
        "color": "red",
        "border": "1px solid red"
        });
        $(ifrItems[j]).hover(
            function () {
                $(this).css({
                    "box-shadow": "inset 0 0 0 4px #666666, 0 0 1px rgba(0, 0, 0, 0)"
                });
            },
            function () {
                $(this).css({
                    "box-shadow": "inset 0 0 0 4px #e1e1e1, 0 0 1px rgba(0, 0, 0, 0)"
                });
            }
        );
        /*$(ifrItems[j]).focus().css({
                "box-shadow": "inset 0 0 0 4px #666666, 0 0 1px rgba(0, 0, 0, 0)"
            }
        );
        $(ifrItems[j]).active().css({
                "box-shadow": "inset 0 0 0 4px #666666, 0 0 1px rgba(0, 0, 0, 0)"
            }
        );*/
        $(ifrItems[j]).attr({
            "draggable": "true",
            "ondragstart": "drag(event)",
            "id": uniqueID,
            "class": "border-fade"
        });
    }
}












