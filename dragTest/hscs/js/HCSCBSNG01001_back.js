/*
 * this is a javascript file
 */
$(document).ready(function(){
	var fullPath1=window.document.location.href;
	//本体に住所を取得後の目次,如:/ prj /…xxx . jsp /
	var pathName1=window.document.location.pathname;
	//本体に住所を取得するなど、「http://localhost:8080だった
	var pos1=fullPath1.indexOf(pathName1);
	var hostPath1=fullPath1.substring(0,pos1);
	//取得」/ "のプロジェクト名、例えば:/ prjだった
	var projectName1=pathName1.substring(0,pathName1.substr(1).indexOf('/')+1);
	var actionName1="/HCSCBSNG0100101";
	var servletURL1 =hostPath1+projectName1+actionName1+"?rdm="+Math.random();
	$("#invalidationUle").click(function() {
		alert(111111);
		var ids=$("#gridPageInfoTable").jqGrid('getGridParam',"selarrrow");
		var idsum="";
		var id=0;
		for(var k=0; k<ids.length; k++) {
			var list=$("#gridPageInfoTable1").jqGrid('getRowData',ids[k]);
			var userLicenseId=list.userLicenseId;

	        var startIndex = userLicenseId.indexOf("\">", 0) + 2;
	        var endIndex = userLicenseId.indexOf("</a>", 0);
	        var userLicenseId1 = userLicenseId.substring(startIndex, endIndex);
			alert(userLicenseId1);
			var userLicenseStatus=list.userLicenseStatus;
			if(userLicenseStatus=="無効化"){
				alert("您选择的"+userLicenseId1+"是無効化的！");
				id=id+1;
				break;
			}
	        idsum=idsum+userLicenseId1+",";
		}
        if(id==0){
    		submitform('HCSCBSNG0100104?Ids='+idsum);
        }

	});
	// 初期化の場合
	updateMemberTbl(servletURL1);

});
	//検索
	function updateMemberTbl1(servletURL1) {
		var pageSize = $("#pageSize").val();
		var pageSizeList = $("#pageSizeList").val().split(",");
		jQuery("#gridPageInfoTable").jqGrid({
			url:servletURL1,
			mtype:'POST',
			datatype: 'json',
			postData: {
				managerViewFlag: $('#managerViewFlag').attr("checked"),
		    },
			colNames:["ユーザライセンスID","閲覧ライセンス有無","フロントアプリID","フロントアプリ名","状態","発行日","認証日","無効日"],
			colModel:[
			  /** ユーザライセンスID*/
			  {name:'userLicenseId', index:'user_license_id', width:90, align:'center', sorttype:'text',formatter:function(cellvalue){
			  		html = "\'"+ cellvalue + "\'";
			  		var temp = "<a href=\"javascript:void(0);\" onclick=\"setParm(";
			  		temp = temp + html + ")\">";
			  		temp = temp + cellvalue + "</a>";
			  		return temp;
		  }},
			  /** 閲覧ライセンス有無 */
			  {name:'isOrNotExeact', index:'tt_review_license.user_license_id', width:90, align:'left', sorttype:'text',formatter:function(cellvalue){
			  		if(cellvalue!=null){
			  			return "有";

			  		}else{
			  			return "無";
			  		}
		  }},
			  /** フロントアプリID */
			  {name:'frontApplicationId', index:'front_application_id', width:90, align:'left', sorttype:'text'},
			  /** フロントアプリName */
			  {name:'frontApplicationName', index:'front_application_name', width:90, align:'left', sorttype:'text'},
			  /** 状態 */
			  {name:'userLicenseStatus', index:'user_license_status', width:90, align:'left', sorttype:'text',formatter:function(cellvalue){
			  		if(cellvalue=="0"){
			  			return "発行済";
			  		}else if(cellvalue=="1"){
			  			return "認証済";
			  		}else if(cellvalue=="9"){
			  			return "無効化";
			  		}
		  }},
			  /** 発行日 */
			  {name:'userLicenseIssueDate', index:'user_license_issue_date', width:90, align:'left', sorttype:'text'},
			  /** 認証日 */
			  {name:'userLicenseCertifyDate', index:'user_license_certify_date', width:90, align:'left', sorttype:'text'},
			  /**  無効日* */
			  {name:'userLicenseInvalidateDate', index:'user_license_invalidate_date', width:90, align:'left', sorttype:'text'}
			],
			rowNum: pageSize,
			rowList: pageSizeList,
			pager:'#gridPageInfoPage',
			sortname: 'user_license_issue_date',
			sortorder: 'desc',
			viewrecords: true,
			height: 'auto',
			multiselect: true,
			autowidth:true,
			loadonce: false,
			gridview: true,
			// 番号を表示する
			// rownumbers:true,
			jsonReader:{
				root: "uleResult",
				page:"currpage",
				total:"totalPage",
				records:"records",
				repeatitems: false
			},
			 ondblClickRow: function(id){
		           $('#gridPageInfoTable').jqGrid('editRow',id,{
		               keys : true,        //这里按[enter]保存
		               url:  "test.action",
		               extraparam: {
		                   "map.id": id,
		                   "map.test": $("#"+id+"test").val(),
		               }
		           });
		       }
		});
	}

	function setParm(parm) {

		$("#userLicenseId").val(parm);
		submitform('HCSCBSNG0100102');

	}
