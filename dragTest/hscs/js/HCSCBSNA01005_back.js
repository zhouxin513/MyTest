$(document).ready(function(){
	var fullPath2=window.document.location.href;
	//本体に住所を取得後の目次,如:/ prj /…xxx . jsp /
	var pathName2=window.document.location.pathname;
	//本体に住所を取得するなど、「http://localhost:8080だった
	var pos2=fullPath2.indexOf(pathName2);
	var hostPath2=fullPath2.substring(0,pos2);
	//取得」/ "のプロジェクト名、例えば:/ prjだった
	var projectName2=pathName2.substring(0,pathName2.substr(1).indexOf('/')+1);
	var actionName2= "/HCSCBSNA0100501";
	var servletURL2 =hostPath2+projectName2+actionName2+"?rdm="+Math.random();
	// 初期化の場合
	updateMemberTbl2(servletURL2);

});
	//検索
	function updateMemberTbl2(servletURL2) {
		var pageSize = $("#pageSize2").val();
		var pageSizeList = $("#pageSizeList2").val().split(",");
		jQuery("#gridPageInfoTable2").jqGrid({
			url:servletURL2,
			mtype:'POST',
			datatype: 'json',
			postData: {
				managerViewFlag: $('#managerViewFlag').attr("checked"),
		    },
			colNames:["事業者ID","事業所名","事業者タイプ","電話番号","作成年月日"],
			colModel:[
			  /** 事業者ID*/
			  {name:'companyId', index:'company_id', width:90, align:'center', sorttype:'text',formatter:function(cellvalue){
				  	var html = "\'"+ cellvalue + "\'";
			  		var temp = "<a href=\"javascript:void(0);\" onclick=\"setParm2(";
			  		temp = temp + html + ")\">";
			  		temp = temp + cellvalue + "</a>";
			  		return temp;
			  }},
			  /** 事業所名*/
			  {name:'companyName', index:'company_name', width:90, align:'center', sorttype:'text'},
			  /** 事業者タイプ */
			  {name:'companyType', index:'company_type', width:90, align:'left', sorttype:'text'},
			  /** 電話番号 */
			  {name:'companyTel', index:'company_tel', width:90, align:'left', sorttype:'text'},
			  /** 作成年月日 */
			  {name:'companyEstablishDate', index:'company_establish_date', width:90, align:'left', sorttype:'text'},
			],
			rowNum: pageSize,
			rowList: pageSizeList,
			pager:'#gridPageInfoPage2',
			sortname: 'company_id',
			sortorder: 'ASC',
			viewrecords: true,
			height: 'auto',
			multiselect: true,
			autowidth:true,
			loadonce: false,
			gridview: true,
			// 番号を表示する
			// rownumbers:true,
			jsonReader:{
				root: "cpyResult",
				page:"currpage",
				total:"totalPage",
				repeatitems: false
			},
		});
	}
	function setParm2(parm) {
		$("#companyId").val(parm);
		submitform('HCSCBSNA0100503');
	}


