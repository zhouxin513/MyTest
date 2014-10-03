$(function(){
	chenge(1);
});
function chenge(flag){
	switch(flag){
		case 1:{
			$("#examination").addClass("ui-btn-active-cope");
			$("#inquiry").removeClass("ui-btn-active-cope");
			
			$(".examination").removeClass("jqm-cutover-unchenge");
			$(".examination").addClass("jqm-cutover-chenge");
			$(".inquiry").removeClass("jqm-cutover-chenge");
			$(".inquiry").addClass("jqm-cutover-unchenge");
			break;
		};
		case 2:{
			$("#examination").removeClass("ui-btn-active-cope");
			$("#inquiry").addClass("ui-btn-active-cope");
			
			$(".examination").removeClass("jqm-cutover-chenge");
			$(".examination").addClass("jqm-cutover-unchenge");
			$(".inquiry").removeClass("jqm-cutover-unchenge");
			$(".inquiry").addClass("jqm-cutover-chenge");
			break;
		};
	}
}
function showHighchart() {

	var series = [{
		name: 'chart',
		id:'chart',
		data: [[2011,55],[2012,56],[2013,66],[2014,53]],
		type:'line',
		color:'#0070C0'
	}];

	this.chart = new Highcharts.Chart({
		chart: {
			renderTo: 'chart_show',
//			width:285,
//            height:200,
            margin: [40, null, null, 45],
		},title:{  
            text:'chart',
            x:0,
            style: {
                font: 'bold 17px Verdana, sans-serif',
                color: 'black'
              }
        },
		colors: [ '#00cccc' ],
		legend: {
			enabled: false
//			width : 60,
//			align: 'right',
//			verticalAlign: 'middle',
//			x: 0,
//            y: 0,
//			borderWidth: 0,
//			layout: 'vertical'
		},
		// X軸																																																																																																																																																																														
		xAxis: {
			type: 'datetime',
//        	lineWidth : HIGHCHARTS_AXIS_WIDTH, // width of yAxis
//        	gridLineWidth:HIGHCHARTS_AXIS_WIDTH,
			gridLineColor:'#C0C0C0',
			labels : {
//				step:stepLabelStep,
				formatter: function() {
					return this.value;
				}
			},
//			tickWidth: HIGHCHARTS_AXIS_WIDTH,
//			tickLength : 5, // line of bottom
            tickInterval: 1,
		},
		// Y軸
		yAxis: [{
			labels: {
				formatter: function() {
					return this.value;
				}
			},
//        	lineWidth : HIGHCHARTS_AXIS_WIDTH, // width of yAxis
//        	gridLineWidth:HIGHCHARTS_AXIS_WIDTH,
//			tickInterval: 25,
			color: 'black',
			title: { text: null },
			min: 0,
//			max: 100
		}],
		// ツールチップ
		tooltip: {
			// ツールチップのテキストを指定
			formatter: function() {
				var timeText = this.y;
				return ''+this.x +':'+ timeText+'KG';		
			}
		},
		plotOptions: {
			line: {
				pointPlacement:'on',
				stacking: 'normal'
			}
		},
		series: series
	});
}