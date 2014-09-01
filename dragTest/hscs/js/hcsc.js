var submitFlag=0;

$(function(){
	//catch ajaxStatus
	$.ajaxSetup({
	     contentType:"application/x-www-form-urlencoded;charset=utf-8",   
	     complete:function(XMLHttpRequest,textStatus){
	    	 if(textStatus!='success'){
	    		 if(textStatus=='timeout'){
	    			 alert('timeout');
	    		 }else{
	    			//submitform('SystemErrorAction01');
	    		 }
	    	 }
	     }
	});
	
	//if ajaxError,to error page
	$(document).ajaxError(function(event, request, options, thrownError){
		submitform('SystemErrorAction01');
	});
});

function submitform(action) {
	//if(submitFlag==0){
		document.forms[0].action = action;
	    document.forms[0].submit();
	    submitFlag=1;
	//}
}

function submitformNotRefresh(action) {
	document.forms[0].action = action;
    document.forms[0].submit();
}

String.prototype.replaceAll = function(s1,s2) { 
    return this.replace(new RegExp(s1,"gm"),s2); 
};

//危険文字が含まれています
function isDangerString(str){
	if(str.indexOf('\'') != -1){
		return true;
	}
	else if(str.indexOf("&") != -1){
		return true;
	}
	else if(str.indexOf("<") != -1){
		return true;
	}
	else if(str.indexOf(">") != -1){
		return true;
	}
	else if(str.indexOf("\\") != -1){
		return true;
	}
	else if(str.indexOf("\"") != -1){
		return true;
	}
	else if(str.indexOf("_") != -1){
		return true;
	}
	else if(str.indexOf(",") != -1){
		return true;
	}
	return false;
}