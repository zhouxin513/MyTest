$(document).ready(function(){
	var fullPath1=window.document.location.href;
	//本体に住所を取得後の目次,如:/ prj /…xxx . jsp /
	var pathName1=window.document.location.pathname;
	//本体に住所を取得するなど、「http://localhost:8080だった
	var pos1=fullPath1.indexOf(pathName1);
	var hostPath1=fullPath1.substring(0,pos1);
	//取得」/ "のプロジェクト名、例えば:/ prjだった
	var projectName1=pathName1.substring(0,pathName1.substr(1).indexOf('/')+1);
	var actionName1= "/HCSCBSNG0400102";
	var servletURL1 =hostPath1+projectName1+actionName1+"?rdm="+Math.random();
	// 初期化の場合

	$("#invalidationRdl").click(function() {
		alert(111111);
		var ids=$("#gridPageInfoTable1").jqGrid('getGridParam',"selarrrow");
		var idsum="";
		for(var k=0; k<ids.length; k++) {
			var list=$("#gridPageInfoTable1").jqGrid('getRowData',ids[k]);
			var reviewLicenseId=list.reviewLicenseId;

			alert(reviewLicenseId);
			var reviewLicenseStatus=list.reviewLicenseStatus;
			if(reviewLicenseStatus=="無効化"){
				alert("您选择的"+reviewLicenseId+"是無効化的！");
				break;
			}
	        idsum=idsum+reviewLicenseId+",";
		}
		submitform('HCSCBSNG0400105?Ids='+idsum);
	});

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
			colNames:["閲覧用ライセンスID","閲覧ユーザ名","閲覧状態","閲覧ライセンス発行日","閲覧ライセンス認証日","閲覧ライセンス無効日","前回閲覧日"],
			colModel:[
			  /** 閲覧用ライセンスID*/
			  {name:'reviewLicenseId', index:'review_license_id', width:90, align:'center', sorttype:'text'},
			  /** 閲覧ユーザ名*/
			  {name:'reviewLicenseUserName', index:'review_license_user_name', width:90, align:'center', sorttype:'text'},
			  /** 閲覧状態 */
			  {name:'reviewLicenseStatus', index:'review_license_status', width:90, align:'left', sorttype:'text',formatter:function(cellvalue){
			  		if(cellvalue=="0"){
			  			return "発行済";
			  		}else if(cellvalue=="1"){
			  			return "認証済";
			  		}else if(cellvalue=="9"){
			  			return "無効化";
			  		}
		  }},
			  /** 閲覧ライセンス発行日 */
			  {name:'reviewLicenseIssueDate', index:'review_license_issue_date', width:90, align:'left', sorttype:'text'},
			  /** 閲覧ライセンス認証日 */
			  {name:'reviewLicenseCertifyDate', index:'review_license_certify_date', width:90, align:'left', sorttype:'text'},
			  /** 閲覧ライセンス無効日 */
			  {name:'reviewLicenseInvalidateDate', index:'review_license_invalidate_date', width:90, align:'left', sorttype:'text'},
			  /** 前回閲覧日 */
			  {name:'lastReviewDate', index:'last_review_date', width:90, align:'left', sorttype:'text'},
			],
			rowNum: pageSize,
			rowList: pageSizeList,
			pager:'#gridPageInfoPage1',
			sortname: 'review_license_id',
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
				root: "reviewDetails",
				page:"currpage",
				total:"totalPage",
				repeatitems: false
			},
		});
	}
