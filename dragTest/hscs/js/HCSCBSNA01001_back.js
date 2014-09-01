$(document).ready(function(){
		var fullPath1=window.document.location.href;
		//本体に住所を取得後の目次,如:/ prj /…xxx . jsp /
		var pathName1=window.document.location.pathname;
		//本体に住所を取得するなど、「http://localhost:8080だった
		var pos1=fullPath1.indexOf(pathName1);
		var hostPath1=fullPath1.substring(0,pos1);
		//取得」/ "のプロジェクト名、例えば:/ prjだった
		var projectName1=pathName1.substring(0,pathName1.substr(1).indexOf('/')+1);
		var actionName1= "/HCSCBSNA0100101";
		var servletURL1 =hostPath1+projectName1+actionName1+"?rdm="+Math.random();
		$("#deleteCtt").click(function() {
//			var servletUrl = hostPath1+projectName1+"/HCSCBSNA01001Action_004?rdm="+Math.random();
//			updateMemberTbl1(servletUrl);
			var checkedVals = "";
			$(":checkbox[name=checkbox1name][checked]").each(function(){
				checkedVals += $(this).val()+ "$" +$(this).attr("title") +"," ;
			});
			if(checkedVals != ""){
				checkedVals = checkedVals.slice(0, checkedVals.length-1);
			}
			$("#contractId").val(checkedVals);
			submitform('HCSCBSNA0100104');
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
				colNames:["基盤契約ID","会社名","通貨","総金額","契約開始年月日","契約完了年月日",
				          "作成年月日","ステータス","","排他キー"],
				colModel:[
				  /** 基盤契約ID*/
				  {name:'contractId', index:'contract_id', width:90, align:'center', sorttype:'text',formatter:function(cellvalue){
					  		var html = "\'"+ cellvalue + "\'";
					  		var temp = "<a href=\"javascript:void(0);\" onclick=\"setParm1(";
					  		temp = temp + html + ")\">";
					  		temp = temp + cellvalue + "</a>";
					  		return temp;
				  }},
				  /** 会社名*/
				  {name:'companyId', index:'company_id', width:90, align:'center', sorttype:'text'},
				  /** 通貨 */
				  {name:'currency', index:'currency', width:90, align:'left', sorttype:'text'},
				  /** 総金額 */
				  {name:'contractTotalAmount', index:'contract_total_amount', width:90, align:'left', sorttype:'text'},
				  /** 契約開始年月日*/
				  {name:'cttStartDate', index:'contract_start_date', width:90, align:'center', sorttype:'text'},
				  /** 契約完了年月日*/
				  {name:'cttEndDate', index:'contract_end_date', width:90, align:'center', sorttype:'text'},
				  /** 作成年月日 */
				  {name:'cttCreateDate', index:'create_date', width:90, align:'left', sorttype:'text'},
				  /** ステータス */
				  {name:'cttStatusName', index:'contract_status', width:90, align:'left', sorttype:'text',formatter:function(cellvalue){
					   // <s:text name="%{form.contract.payTypeName}"></s:text>
				  		var html = "\""+ cellvalue + "\"";
				  		var temp = "<s:text name=";
				  		temp = temp + html + "></s:text>";
				  		return temp;
				  }},
				  /** ステータス key */
				  {name:'contractStatus', index:'contract_status', width:90, align:'left', hidden:true},
				  /** 排他キー */
				  {name:'exclusiveKey', index:'exclusive_key', width:90, align:'left', hidden:true},
				],
				rowNum: pageSize,
				rowList: pageSizeList,
				pager:'#gridPageInfoPage1',
				sortname: 'contract_id',
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
					root: "cttResult",
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
		function setParm1(parm) {
			$("#contractId").val(parm);
			submitform('HCSCBSNA0100102');
		}

