var colorList = ['#C33531', '#FFC90E', '#64BD3D', '#EE9201', '#3C90C8', '#F65B8E', '#0AAF9F', '#E89589', '#90FCE1']
var trend_xAxis_data = [8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];
var trend_legend_data = ["病人数", "就诊数","病历数","交易金额","交易笔数","随访数","影像数","牙齿检查数","短信数"];
var trend_selects = {
	"病人数":true,
	"就诊数":false,
	"病历数":false,
	"交易金额":false,
	"交易笔数":false,
	"随访数":false,
	"影像数":false,
	"牙齿检查数":false,
	"短信数":false
}
var trend_series_data = [
	  [50, 92,61, 84, 80,60,70,20, 52, 31, 24, 60,40,20,23,33],
	  [20, 52, 31, 24, 60,40,20,84, 80,60,70,20, 52, 31, 24, 60],
	  [20,84, 80,60,70,20, 52, 31, 24, 60, 72,31, 64, 50,30,70],
	  [50, 92,61,84, 80,60,70,20, 52, 31, 24, 60, 84, 80,60,70],
	  [20, 52, 31, 84, 80,60,70,20, 52, 31, 24, 60,24, 60,40,20],
	  [20, 72,84, 80,60,70,20, 52, 31, 24, 60,31, 64, 50,30,70],
	  [50,84, 80,60,70,20, 52, 31, 24, 60, 92,61, 84, 80,60,70],
	  [20, 52, 31, 24, 84, 80,60,70,20, 52, 31, 24, 60,60,40,20],
	  [20, 72,31,84, 80,60,70,20, 52, 31, 24, 60, 64, 50,30,70]
	]
var data1=5433085;
var data2 = 13973714;
var data3 = 9026243;
var data4 = 8006757065;
var data5 = 8531165;
var data6 = 2137790;
var data7 = 3120087;
var data8 = 54194;
var data9 = 0;

var trend_series = [];
for(var i=0; i<trend_legend_data.length; i++) {
    var item = {
    	lineStyle:{
	    	color:colorList[i]
	    },
        name: trend_legend_data[i],
        data: trend_series_data[i],
        type: 'line',
        barWidth : 30
    };
    trend_series.push(item);
}

//省份总计数据，地图背景色深浅显示
var visualMapData = [
        {name: '北京',value: Math.round(Math.random()*1000)},
        {name: '天津',value: Math.round(Math.random()*1000)},
        {name: '上海',value: Math.round(Math.random()*1000)},
        {name: '重庆',value: Math.round(Math.random()*1000)},
        {name: '河北',value: Math.round(Math.random()*1000)},
        {name: '河南',value: Math.round(Math.random()*1000)},
        {name: '云南',value: Math.round(Math.random()*1000)},
        {name: '辽宁',value: Math.round(Math.random()*1000)},
        {name: '黑龙江',value: Math.round(Math.random()*1000)},
        {name: '湖南',value: Math.round(Math.random()*1000)},
        {name: '安徽',value: Math.round(Math.random()*1000)},
        {name: '山东',value: Math.round(Math.random()*1000)},
        {name: '新疆',value: Math.round(Math.random()*1000)},
        {name: '江苏',value: Math.round(Math.random()*1000)},
        {name: '浙江',value: Math.round(Math.random()*1000)},
        {name: '江西',value: Math.round(Math.random()*1000)},
        {name: '湖北',value: Math.round(Math.random()*1000)},
        {name: '广西',value: Math.round(Math.random()*1000)},
        {name: '甘肃',value: Math.round(Math.random()*1000)},
        {name: '山西',value: Math.round(Math.random()*1000)},
        {name: '内蒙古',value: Math.round(Math.random()*1000)},
        {name: '陕西',value: Math.round(Math.random()*1000)},
        {name: '吉林',value: Math.round(Math.random()*1000)},
        {name: '福建',value: Math.round(Math.random()*1000)},
        {name: '贵州',value: Math.round(Math.random()*1000)},
        {name: '广东',value: Math.round(Math.random()*1000)},
        {name: '青海',value: Math.round(Math.random()*1000)},
        {name: '西藏',value: Math.round(Math.random()*1000)},
        {name: '四川',value: Math.round(Math.random()*1000)},
        {name: '宁夏',value: Math.round(Math.random()*1000)},
        {name: '海南',value: Math.round(Math.random()*1000)},
        {name: '台湾',value: Math.round(Math.random()*1000)},
        {name: '香港',value: Math.round(Math.random()*1000)},
        {name: '澳门',value: Math.round(Math.random()*1000)}
    ]

var newData = [
     {name: '西安', value: [{customername:'未央浐灞赵婧口腔'},{patientcount:4}]},
     {name: '成都', value: [{customername:'成都丽美口腔'},{patientcount:4}]},
     {name: '银川', value: [{customername:'银川固德口腔门诊'},{patientcount:4}]},
     {name: '上海', value: [{customername:'上海海康门诊部'},{patientcount:4}]},
     {name: '沈阳', value: [{customername:'和平圣帝雅口腔'},{patientcount:4}]},
     {name: '拉萨', value: [{customername:'和平圣帝雅口腔'},{patientcount:4}]},
     {name: '库尔勒', value: [{customername:'圣帝雅口腔'},{patientcount:4}]}
];

//匹配城市经纬度并添加到数组
function convertData(data) {
   var res = [];
   for (var i = 0; i < data.length; i++) {
       var geoCoord = geoCoordMap[data[i].name];
       if (geoCoord) {
           res.push({
               name: data[i].name,
               value: geoCoord.concat(data[i].value)
           });
       }
   }
   return res;
};

//地图显示指标
var mapChart = echarts.init(document.getElementById("map"));

optionMap = {
    tooltip: {},
    visualMap: {
        min: 0,
        max: 1500,
        left: 'left',
        top: 'bottom',
        text: ['High','Low'],
        seriesIndex: [1],
        textStyle: {
            color: '#fff'
        },
        inRange: {
            color: ['#ffffff', '#7F7F7F']
        },
        calculable : true
    },
    geo: {
        map: 'china',
        roam: true,
        zoom: 1.2,
        label: {
            normal: {
                show: true,
                textStyle: {
                    color: 'rgba(0,0,0,0.4)'
                }
            }
        },
        itemStyle: {
            normal:{
                borderColor: 'rgba(0, 0, 0, 0.2)'
            },
            emphasis:{
                areaColor: null,
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                shadowBlur: 20,
                borderWidth: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        }
    },
    series : [
       {
       	   name: '新增数据',
           type: 'effectScatter',
           coordinateSystem: 'geo',
           data: convertData(newData),
           symbolSize: 20,
           showEffectOn: 'render',
           rippleEffect: {
               brushType: 'stroke'
           },
           tooltip : {
		        trigger: 'item',
		        formatter: function(value){
		        	var index = value.dataIndex;
		        	var classfyName;
		        	if(index == 0){
		        		classfyName = '病人数：'
		        	}
		        	if(index == 1){
		        		classfyName = '就诊数：'
		        	}
		        	if(index == 2){
		        		classfyName = '病历数：'
		        	}
		        	if(index == 3){
		        		classfyName = '交易金额：'
		        	}
		        	if(index == 4){
		        		classfyName = '交易笔数：'
		        	}
		        	if(index == 5){
		        		classfyName = '随访数：'
		        	}
		        	if(index == 6){
		        		classfyName = '影像数：'
		        	}
		        	if(index == 7){
		        		classfyName = '牙齿检查数：'
		        	}
		        	if(index == 8){
		        		classfyName = '短信数：'
		        	}
					return value.seriesName+'（'+value.name+'）'+"<br>"+value.data.value[2].customername+"<br>"+classfyName+value.data.value[3].patientcount;
				}
		    },
            label: {
                normal: {
                   formatter: '{b}',
                   position: 'right',
                   show: false
                },
                emphasis: {
                   show: true
                }
            },
            itemStyle: {
                normal: {
                   color: '#F06C00'
                }
            }
        },
        {
            name: '总诊所数',
            type: 'map',
            geoIndex: 0,
            // tooltip: {show: false},
            data:visualMapData
        }
    ]
};
mapChart.setOption(optionMap);

//走势图显示指标
var trendChart = echarts.init(document.getElementById("trend"));
optionTrend = {
    tooltip: {
        trigger: 'axis'
    },
    legend: {
    	textStyle:{
    		color:'#FFFFFF'
    	},
        data:trend_legend_data,
        selected:trend_selects
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        axisLine:{
            lineStyle:{
                color:'#FFFFFF',
            }
        },
        splitLine:{
        	show: true
        },
        data: trend_xAxis_data
    },
    yAxis: {
        type: 'value',
        axisLine:{
            lineStyle:{
                color:'#FFFFFF',
            }
        },
        splitLine:{
        	show: false
        }
    },
    series: trend_series
};
trendChart.setOption(optionTrend, true);

//依次显示tooltips
var j = 0;
function showTips(){
	setInterval(function () {
		if (j > newData.length){
			j=0;
			return;
		}
		mapChart.dispatchAction({
			type: 'showTip',
			seriesIndex:0,//第几条series
			dataIndex: j-1,//第几个tooltip
	   });
	    j++;
	},3000);	
}
var timer = setInterval(showTips(),3000)


    /**
     * 进入/退出全屏模式
     */
    var fullScreenDisplay = true;
    function switchFullScreenDisplay() {
        if (fullScreenDisplay) {
            launchFullscreen();
        } else {
            exitFullscreen();
        }

        resizeCharts();
        fullScreenDisplay = !fullScreenDisplay;
    }

    /**
     * 调用浏览器全屏方法，对AllContent节点全屏显示。
     * 注意：全屏后如果超出屏幕高度，无法出现滚动条
     */
    function launchFullscreen() {
        var element = document.getElementById('allContent');
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else {
            $(element).addClass('full-screen');
            abp.message.info('浏览器不支持直接调用全屏功能，请按F11手动切换全屏');
        }
    }

    /**
     * 退出全屏显示
     */
    function exitFullscreen() {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else {
            $('#allContent').removeClass('full-screen');
            abp.message.info('浏览器不支持直接调用全屏功能，请按F11手动退出全屏');
        }
    }
    
	function resizeCharts(){
		$('#left').resize();
		trendChart.resize();
		$('#map').resize();
	}
