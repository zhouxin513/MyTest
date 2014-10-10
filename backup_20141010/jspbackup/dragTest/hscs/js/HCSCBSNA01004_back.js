$(document).ready(function(){
	var fullPath1=window.document.location.href;
	//本体に住所を取得後の目次,如:/ prj /…xxx . jsp /
	var pathName1=window.document.location.pathname;
	//本体に住所を取得するなど、「http://localhost:8080だった
	var pos1=fullPath1.indexOf(pathName1);
	var hostPath1=fullPath1.substring(0,pos1);
	//取得」/ "のプロジェクト名、例えば:/ prjだった
	var projectName1=pathName1.substring(0,pathName1.substr(1).indexOf('/')+1);
	var actionName1= "/HCSCBSNA0100403";
	var servletURL1 =hostPath1+projectName1+actionName1+"?rdm="+Math.random();
	// 初期化の場合
	updateMemberTbl1(servletURL1);

});
	//検索
	function updateMemberTbl1(servletURL1) {
		var pageSize = $("#pageSize1").val();
		var pageSizeList = $("#pageSizeList1").val().split(",");
		jQuery("#gridPageInfoTable1").jqGrid({
			url:servletURL1,
			mtype:'POST',
			datatype: 'json',
			postData: {
				managerViewFlag: $('#managerViewFlag').attr("checked"),
		    },
			colNames:["明細ID","サービス名","契約件数","単価","作成日時"],
			colModel:[
			  /** 明細ID*/
			  {name:'contractDetailId', index:'contract_detail_id', width:90, align:'center', sorttype:'text',formatter:function(cellvalue){
				  var html = "\'"+ cellvalue + "\'";
			  		var temp = "<a href=\"javascript:void(0);\" onclick=\"setParm(";
			  		temp = temp + html + ")\">";
			  		temp = temp + cellvalue + "</a>";
			  		return temp;
			  }},
			  /** サービス名*/
			  {name:'serviceName', index:'service_name', width:90, align:'center', sorttype:'text'},
			  /** 契約件数 */
			  {name:'contractDetailCount', index:'contract_detail_count', width:90, align:'right', sorttype:'text'},
			  /** 単価 */
			  {name:'contractDetailAmount', index:'contract_detail_amount', width:90, align:'right', sorttype:'text'},
			  /** 作成日時 */
			  {name:'cddCreateDate', index:'create_date', width:90, align:'center', sorttype:'text'},
			],
			rowNum: pageSize,
			rowList: pageSizeList,
			pager:'#gridPageInfoPage1',
			sortname: 'contract_detail_id',
			sortorder: 'ASC',
			viewrecords: true,
			height: 'auto',
			// multiselect: true,
			autowidth:true,
			loadonce: false,
			gridview: true,
			// 番号を表示する
			// rownumbers:true,
			jsonReader:{
				root:"ctdResult",
				page:"currpage",
				total:"totalPage",
				repeatitems: false
			},
		});
	}
	function setParm(parm) {
		$("#contractDetailId").val(parm);
		submitform('HCSCBSNA0100404');
	}
