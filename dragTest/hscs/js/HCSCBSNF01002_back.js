$(document).ready(function(){

	var fullPath=window.document.location.href;
	//本体に住所を取得後の目次,如:/ prj /…xxx . jsp /
	var pathName=window.document.location.pathname;
	//本体に住所を取得するなど、「http://localhost:8080だった
	var pos=fullPath.indexOf(pathName);
	var hostPath=fullPath.substring(0,pos);
	//取得」/ "のプロジェクト名、例えば:/ prjだった
	var projectName=pathName.substring(0,pathName.substr(1).indexOf('/')+1);
	var actionName= "/HCSCBSNF0100202";
	var servletURL =hostPath+projectName+actionName+"?rdm="+Math.random();

	$("#deleteCtt").click(function() {
		var checkedVals = "";
		$(":checkbox[name=checkbox1name][checked]").each(function(){
			checkedVals += $(this).val()+ "$" +$(this).attr("title") +"," ;
		});
		if(checkedVals != ""){
			checkedVals = checkedVals.slice(0, checkedVals.length-1);
		}
		$("#userDevice").val(checkedVals);
		alert(checkedVals);
		submitform('HCSCBSNF0100206');
	});

//	var pageSize = '<s:property value="form.pageSize" />';
//	var pageSizeListString = '<s:property value="form.pageSizeList" />';
//	var pageSizeList = pageSizeListString.split(",");
	// 初期化の場合
	updateMemberTbl();
	//検索
	function updateMemberTbl() {
		var pageSize = $("#pageSize").val();
		var pageSizeList = $("#pageSizeList").val().split(",");
		jQuery("#gridPageInfoTable").jqGrid({
			url:servletURL,
			mtype:'POST',
			datatype: 'json',
			postData: {
				managerViewFlag: $('#managerViewFlag').attr("checked"),
		    },
			colNames:["デバイスID","デバイス種類名称","デバイス登録日","ステータス","排他キー"],
			colModel:[
			  /** デバイスID*/
			  {name:'deviceId', index:'device_id', width:90, align:'center', sorttype:'text', formatter:formatDeviceIdLink},
			  /** デバイス種類名称*/
			  {name:'deviceTypeName', index:'device_type_name', width:180, align:'center', sorttype:'text'},
			  /** デバイス登録日 */
			  {name:'userDeviceRegistDate', index:'user_device_regist_date', width:180, align:'left', sorttype:'text'},
			  /** ステータス */
			  {name:'deviceStatus', index:'device_status', width:120, align:'left', sorttype:'text'},
			  /** 排他キー */
			  {name:'exclusiveKey', index:'exclusive_key', width:10, align:'left', hidden:true},
			],
			rowNum: pageSize,
			rowList: pageSizeList,
			pager:'#gridPageInfoPage',
			sortname: 'device_id',
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
				root: "deviceTypes",
				page:"currpage",
				total:"totalPage",
				repeatitems: false
			},
			gridComplete: function() {
                var rowIds = jQuery("#gridPageInfoTable").jqGrid('getDataIDs');
                for(var k=0; k<rowIds.length; k++) {
                   var curRowData = jQuery("#gridPageInfoTable").jqGrid('getRowData', rowIds[k]);
                   var curChk = $("#"+rowIds[k]+"").find(":checkbox");
                   var conta  = curRowData.deviceId+"";
                   var startIndex = conta.indexOf("\">", 0) + 2;
                   var endIndex = conta.indexOf("</a>", 0);
                   var cttId = conta.substring(startIndex, endIndex);
                   curChk.attr('name', 'checkbox1name');
                   curChk.attr('value', cttId);                                                       // デバイスID
                   curChk.attr('title', curRowData.deviceStatus+"$"+curRowData.exclusiveKey);         // ステータス,排他キー
                }
            }
		});
	}

	/**
	 * 主題
	 */
	function formatDeviceIdLink(cellvalue, options, rowObject){
//		var temp = '<a href="javascript:void(0);" class="actionLink" actionLink-id= ?deviceId' + '=' + cellvalue + "&rdm=" + Math.random() +'>' + cellvalue + "</a>";
		var temp = '<a href="javascript:void(0);" class="actionLink" actionLink-id=' + cellvalue + '&deviceTypeId='
		           + rowObject.deviceTypeId + '&deviceTypeName=' + rowObject.deviceTypeName + '>' + cellvalue + "</a>";
  		return temp;
	}

	$('.actionLink').live('click', function() {
		var deviceId = $(this).attr('actionLink-id');
		submitform("HCSCBSNF0100204" + "?deviceId=" + deviceId + "&rdm=" + Math.random());
	});
});
