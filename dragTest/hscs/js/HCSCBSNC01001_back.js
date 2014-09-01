

$(document).ready(function(){

	var fullPath=window.document.location.href;
	//本体に住所を取得後の目次,如:/ prj /…xxx . jsp /
	var pathName=window.document.location.pathname;
	//本体に住所を取得するなど、「http://localhost:8080だった
	var pos=fullPath.indexOf(pathName);
	var hostPath=fullPath.substring(0,pos);
	//取得」/ "のプロジェクト名、例えば:/ prjだった
	var projectName=pathName.substring(0,pathName.substr(1).indexOf('/')+1);
	var actionName= "/HCSCBSNC0100102";
	var servletURL =hostPath+projectName+actionName;

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
//				managerViewFlag: $('#managerViewFlag').attr("checked"),
		    },
			colNames:["デバイス種類ID","デバイス分類","デバイス分類id","（委託）生産会社","（委託）生産会社id","デバイス名(型番)","登録日","ステータス"],
			colModel:[
			  /** デバイス種類ID */
			  {name:'deviceTypeId', index:'device_type_id', width:90, align:'center', sorttype:'text'},
			  /** デバイス分類 */
			  {name:'value1', index:'value1', width:180, align:'center', sorttype:'text'},
			  /** デバイス分類id */
			  {name:'key1', index:'key1', hidden:true },
			  /** （委託）生産会社 */
			  {name:'companyName', index:'company_name', width:180, align:'left', sorttype:'text'},
			  /** （委託）生産会社id */
			  {name:'companyId', index:'company_id;', hidden:true },
			  /** デバイス名(型番) */
			  {name:'deviceTypeName', index:'device_type_name', width:120, align:'left', sorttype:'text'},
			  /** 登録日(show) */
			  {name:'createDateShow', index:'create_date', width:180, align:'left', sorttype:'text'},
			  /** ステータス */
			  {name:'deviceStatus', index:'device_status', width:120, align:'left', sorttype:'text'},
			],
			rowNum: pageSize,
			rowList: pageSizeList,
			pager:'#gridPageInfoPage',
			sortname: 'device_type_id',
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
				root: "deviceTypeInfoLists",
				page:"currpage",
				total:"totalPage",
				repeatitems: false
			}
		});
	}
});
