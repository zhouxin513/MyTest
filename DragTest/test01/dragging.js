/**
 * Created by bestskip on 2014/09/08.
 */
    //================dragging.js

    //obj 当前对象 2.指定event对象 主要是为了兼容ff，true指定是否只能在父级元素中拖拽
    function divDragging(obj, e, limit){
        //alert(parent.document.getElementById('iframe').src);
        //alert(e.srcElement.id);
        if(!e) e=window.event;
        var x=parseInt(obj.style.left);
        var y=parseInt(obj.style.top);
        //clientX clientY事件发生时 鼠标的横纵坐标，他们的值是相对于包容窗口的左上角生成的
        var x_=e.clientX-x;
        var y_=e.clientY-y;

        if(document.addEventListener){//ff浏览器 注册事件监听器
        document.addEventListener('mousemove', divmove, true);//两个参数 1。事件的类型 2.事件处理的函数
        document.addEventListener('mouseup', divup, true);
        } else if(document.attachEvent){//ie
        document.attachEvent('onmousemove', divmove);
        document.attachEvent('onmouseup', divup);
        }

        divstop(e);
        divabort(e);
        //alert(e.srcElement.id);

        function divmove(e){
        //var evt;
        if(!e)e=window.event;

        if(limit){
        var op=obj.parentNode;
        var opX=parseInt(op.style.left);
        var opY=parseInt(op.style.top);
        //offsetWidth相对于原窗口的宽度
        if((e.clientX-x_)<0) return false;
        else if((e.clientX-x_+obj.offsetWidth+opX)>(opX+op.offsetWidth)) return false;

        if(e.clientY-y_<0) return false;
        else if((e.clientY-y_+obj.offsetHeight+opY)>(opY+op.offsetHeight)) return false;
        //status=e.clientY-y_;
        }

        obj.style.left=e.clientX-x_+'px';
        obj.style.top=e.clientY-y_+'px';
        getResult(e.srcElement.id,e.clientX-x_,e.clientY-y_);
        //getInfo();
        divstop(e);
        }
        function divup(e){
        //var evt;
        if(!e)e=window.event;

        if(document.removeEventListener){
        document.removeEventListener('mousemove', divmove, true);
        document.removeEventListener('mouseup', divup, true);
        } else if(document.detachEvent){
        document.detachEvent('onmousemove', divmove);
        document.detachEvent('onmouseup', divup);
        }

        divstop(e);
        }

        function divstop(e){
        if(e.stopPropagation) return e.stopPropagation();
        else return e.cancelBubble=true;
        }
        //returnValue：一个布尔值属性，设置为false的时候可以组织浏览器执行默认的事件动作，相当于<a href=”#” onclick=”ProcessMethod();return false;” />。

        function divabort(e){
        if(e.preventDefault) return e.preventDefault();//
        else return e.returnValue=false;
        }

        }

    function getResult(div,a,b){
        //alert(div+" --"+a+"---"+b);
        var iframeObj1=parent.document.getElementById('iframe1').contentWindow.document;
        var iframeObj2=parent.document.getElementById('iframe2').contentWindow.document;
        //this div对象 指定event对象 主要是为了兼容ff，true 指定是否只能能在父级元素中拖拽
        if('div1'==div.toString()){
        //iframeObj2.getElementById('div2').Class='div1'+','+a+','+b;
        iframeObj2.getElementById('div2').style.left=a+'px';
        iframeObj2.getElementById('div2').style.top=b+'px';
        //alert(iframeObj2.getElementById('div2').id);

        }
        //alert(div.toString());
        if('div2'==div.toString()){

        //iframeObj2.getElementById('div2').Class='div1'+','+a+','+b;
        iframeObj1.getElementById('div1').style.left=a+'px';
        iframeObj1.getElementById('div1').style.top=b+'px';
        //alert(iframeObj2.getElementById('div2').id);

        }

        }



