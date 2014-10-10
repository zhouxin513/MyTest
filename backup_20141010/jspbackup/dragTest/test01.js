
/*dragされる対象　drag eventが発生する時のファンクション*/
function drag(ev){
    ev.dataTransfer.setData("Text",ev.target.id);
    //alert(ev.dataTransfer.setData("Text",ev.target.id));
}

/*drag対象の置く場所にOndragとOndrop Eventが発生する時のファンクション*/
function allowDrop(ev){
    ev.preventDefault();
}

function drop(ev){
    //ev.preventDefault();
    //dataTransfer対象からセットされたデーターを取得する
    var data=ev.dataTransfer.getData("Text");
    //alert(data);

    //　本体のエレメントIDを取得し、コピーする
    //ev.target.appendChild(document.getElementById(data).cloneNode(true));
    // iframeのエレメントIDを取得し、コピーする
    ev.target.appendChild(document.getElementById("shutto-source").contentWindow.document.getElementById(data).cloneNode(true));

}


/*Convert対象ページのエレメントに対する処理*/
function convertPage(){
    var ifrbody = $("#shutto-source").contents().find('body');
    //alert("1");
    var ifrItems = ifrbody.find("*");
    // alert(y.length);

    for (var j = 0; j < ifrItems.length; j++) {

        //alert(y[j].nodeValue);
        //if(ifrItems[j].id == "drop-box")continue;
    	
        var uniqueNum = Math.floor( Math.random()*99999 );
        var uniqueID ='id-'+String(uniqueNum);
        //elementsに「id」があるかどうかを判断する必要がある
        // alert(j + ' :' + uniqueID);
        $(ifrItems[j]).css({
            "color": "red",
            "border": "1px solid red"
        });
        $(ifrItems[j]).attr({
            "draggable" : "true",
            "ondragstart" :"window.parent.drag(event)",
            "id":uniqueID
        });
    }
    $("body").append("i am here");
}
