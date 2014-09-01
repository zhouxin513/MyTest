
$(document).ready(function(){

	var warnFlag = $("#warnFlag").val();
	var warnMessage = $("#warnMessage").val();
	if(warnFlag == '1') {
		okCancel();
	}

	function okCancel() {
		var bln = window.confirm(warnMessage);
		if (bln) {
			submitform("HCSCBSNF0100102.action");
		}
	}
});
