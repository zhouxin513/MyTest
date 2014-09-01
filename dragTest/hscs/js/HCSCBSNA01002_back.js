$(document).ready(function(){
	var fullPath1=window.document.location.href;
	//本体に住所を取得後の目次,如:/ prj /…xxx . jsp /
	var pathName1=window.document.location.pathname;
	//本体に住所を取得するなど、「http://localhost:8080だった
	var pos1=fullPath1.indexOf(pathName1);
	var hostPath1=fullPath1.substring(0,pos1);
	//取得」/ "のプロジェクト名、例えば:/ prjだった
	var projectName1=pathName1.substring(0,pathName1.substr(1).indexOf('/')+1);
	var actionName1= "/HCSCBSNA0100203";
	var servletURL1 =hostPath1+projectName1+actionName1+"?rdm="+Math.random();

	$("#btnDelete").click(function() {
//		var servletUrl = hostPath1+projectName1+"/HCSCBSNA01002Action_009?rdm="+Math.random();
//		updateMemberTbl1(servletUrl);
		var checkedVals = "";
		$(":checkbox[name=checkbox1name][checked]").each(function(){
			checkedVals += $(this).val()+ "$" +$(this).attr("title") +"," ;
		});
		if(checkedVals != ""){
			checkedVals = checkedVals.slice(0, checkedVals.length-1);
		}
		$("#contractDetailId").val(checkedVals);
		submitform('HCSCBSNA0100209');
	}
	);
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
			colNames:["明細ID","サービス名","契約件数","単価","作成日時","排他キー"],
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
			  {name:'contractDetailCount', index:'contract_detail_count', width:90, align:'left', sorttype:'text'},
			  /** 単価 */
			  {name:'contractDetailAmount', index:'contract_detail_amount', width:90, align:'left', sorttype:'text'},
			  /** 作成日時 */
			  {name:'cddCreateDate', index:'create_date', width:90, align:'left', sorttype:'text'},
			  /** 排他キー */
			  {name:'exclusiveKey', index:'exclusive_key', width:90, align:'left', hidden:true},
			],
			rowNum: pageSize,
			rowList: pageSizeList,
			pager:'#gridPageInfoPage1',
			sortname: 'contract_detail_id',
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
				root: "ctdResult",
				page:"currpage",
				total:"totalPage",
				repeatitems: false
			},
			gridComplete: function() {
                var rowIds = jQuery("#gridPageInfoTable1").jqGrid('getDataIDs');
                for(var k=0; k<rowIds.length; k++) {
                   var curRowData = jQuery("#gridPageInfoTable1").jqGrid('getRowData', rowIds[k]);
                   var curChk = $("#"+rowIds[k]+"").find(":checkbox");
                   var conta  = curRowData.contractId+"";
                   var startIndex = conta.indexOf("\">", 0) + 2;
                   var endIndex = conta.indexOf("</a>", 0);
                   var cttId = conta.substring(startIndex, endIndex);
                   curChk.attr('name', 'checkbox1name');
                   // curChk.attr('id', curRowData.exclusiveKey);
                   curChk.attr('value', cttId);
                   curChk.attr('title', curRowData.contractStatus+"$"+curRowData.exclusiveKey);
                   //curChk.attr('checked', 'true');
                }
            }
		});
	}
	function setParm(parm) {
		$("#contractDetailId").val(parm);
		submitform('HCSCBSNA0100204');
	}

