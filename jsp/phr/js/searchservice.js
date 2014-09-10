function chenge(flag){
	switch(flag){
		case 1:{
			$("#measurement").addClass("ui-btn-active-cope");
			$("#blood").removeClass("ui-btn-active-cope");
			$("#urinary").removeClass("ui-btn-active-cope");
			$("#liver").removeClass("ui-btn-active-cope");
			
			$(".measurement").removeClass("jqm-cutover-unchenge");
			$(".measurement").addClass("jqm-cutover-chenge");
			$(".blood").removeClass("jqm-cutover-chenge");
			$(".blood").addClass("jqm-cutover-unchenge");
			$(".urinary").removeClass("jqm-cutover-chenge");
			$(".urinary").addClass("jqm-cutover-unchenge");
			$(".liver").removeClass("jqm-cutover-chenge");
			$(".liver").addClass("jqm-cutover-unchenge");
			break;
		};
		case 2:{
			$("#measurement").removeClass("ui-btn-active-cope");
			$("#blood").addClass("ui-btn-active-cope");
			$("#urinary").removeClass("ui-btn-active-cope");
			$("#liver").removeClass("ui-btn-active-cope");
			
			$(".measurement").removeClass("jqm-cutover-chenge");
			$(".measurement").addClass("jqm-cutover-unchenge");
			$(".blood").removeClass("jqm-cutover-unchenge");
			$(".blood").addClass("jqm-cutover-chenge");
			$(".urinary").removeClass("jqm-cutover-chenge");
			$(".urinary").addClass("jqm-cutover-unchenge");
			$(".liver").removeClass("jqm-cutover-chenge");
			$(".liver").addClass("jqm-cutover-unchenge");
			break;
		};
		case 3:{
			$("#measurement").removeClass("ui-btn-active-cope");
			$("#blood").removeClass("ui-btn-active-cope");
			$("#urinary").addClass("ui-btn-active-cope");
			$("#liver").removeClass("ui-btn-active-cope");
			
			$(".measurement").removeClass("jqm-cutover-chenge");
			$(".measurement").addClass("jqm-cutover-unchenge");
			$(".blood").removeClass("jqm-cutover-chenge");
			$(".blood").addClass("jqm-cutover-unchenge");
			$(".urinary").removeClass("jqm-cutover-unchenge");
			$(".urinary").addClass("jqm-cutover-chenge");
			$(".liver").removeClass("jqm-cutover-chenge");
			$(".liver").addClass("jqm-cutover-unchenge");
			break;
		};
		case 4:{
			$("#measurement").removeClass("ui-btn-active-cope");
			$("#blood").removeClass("ui-btn-active-cope");
			$("#urinary").removeClass("ui-btn-active-cope");
			$("#liver").addClass("ui-btn-active-cope");
			
			$(".measurement").removeClass("jqm-cutover-chenge");
			$(".measurement").addClass("jqm-cutover-unchenge");
			$(".blood").removeClass("jqm-cutover-chenge");
			$(".blood").addClass("jqm-cutover-unchenge");
			$(".urinary").removeClass("jqm-cutover-chenge");
			$(".urinary").addClass("jqm-cutover-unchenge");
			$(".liver").removeClass("jqm-cutover-unchenge");
			$(".liver").addClass("jqm-cutover-chenge");
			break;
		};
	}
}