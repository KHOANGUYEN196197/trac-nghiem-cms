import { Component, OnInit, Inject, NgZone, PLATFORM_ID } from '@angular/core';

import { isPlatformBrowser } from '@angular/common';

// amCharts imports
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

@Component({
  selector: 'app-result-evaluation',
  templateUrl: './result-evaluation.component.html',
  styleUrls: ['./result-evaluation.component.scss']
})
export class ResultEvaluationComponent implements OnInit {

  private chart: am4charts.XYChart;

  constructor(@Inject(PLATFORM_ID) private platformId, private zone: NgZone) { }

  ngOnInit(): void {
  }
 

  browserOnly(f: () => void) {
    if (isPlatformBrowser(this.platformId)) {
      this.zone.runOutsideAngular(() => {
        f();
      });
    }
  }

  ngAfterViewInit() {
    // // Chart code goes in here
    // am4core.useTheme(am4themes_animated);
    // // am4core.useTheme(am4themes_kelly);
    
    // // Create chart instance
    // var chart = am4core.create("chartdiv", am4charts.XYChart3D);
    
    // // Add data
    // chart.data = [
    //   {
    //   "Đề Thi": "123546",
    //   "Số Câu Đúng": 50,
    //   "Số Câu Sai": 20
    // },{
    //   "Đề Thi": "123546s",
    //   "Số Câu Đúng": 50,
    //   "Số Câu Sai": 20
    // },
    // {
    //   "Đề Thi": "1235461",
    //   "Số Câu Đúng": 50,
    //   "Số Câu Sai": 20
    // },{
    //   "Đề Thi": "1235462",
    //   "Số Câu Đúng": 50,
    //   "Số Câu Sai": 20
    // },{
    //   "Đề Thi": "1235463",
    //   "Số Câu Đúng": 50,
    //   "Số Câu Sai": 20
    // },{
    //   "Đề Thi": "1235464",
    //   "Số Câu Đúng": 50,
    //   "Số Câu Sai": 20
    // },{
    //   "Đề Thi": "1235465",
    //   "Số Câu Đúng": 50,
    //   "Số Câu Sai": 20
    // },{
    //   "Đề Thi": "1235466",
    //   "Số Câu Đúng": 50,
    //   "Số Câu Sai": 20
    // },{
    //   "Đề Thi": "12354663",
    //   "Số Câu Đúng": 50,
    //   "Số Câu Sai": 20
    // },{
    //   "Đề Thi": "1235467",
    //   "Số Câu Đúng": 50,
    //   "Số Câu Sai": 20
    // },{
    //   "Đề Thi": "1235468",
    //   "Số Câu Đúng": 50,
    //   "Số Câu Sai": 20
    // },{
    //   "Đề Thi": "1235469",
    //   "Số Câu Đúng": 50,
    //   "Số Câu Sai": 20
    // },{
    //   "Đề Thi": "123546v",
    //   "Số Câu Đúng": 50,
    //   "Số Câu Sai": 20
    // },{
    //   "Đề Thi": "123546d",
    //   "Số Câu Đúng": 50,
    //   "Số Câu Sai": 20
    // },{
    //   "Đề Thi": "123546n",
    //   "Số Câu Đúng": 50,
    //   "Số Câu Sai": 20
    // },];
    
    // // Create axes
    // var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    // categoryAxis.dataFields.category = "Đề Thi";
    // categoryAxis.title.text = 'Mã Đề Thi Môn Toán';
    
    // var  valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    // valueAxis.title.text = "Số Câu";
    
    // // Create series
    // var series = chart.series.push(new am4charts.ColumnSeries3D());
    // series.dataFields.valueY = "Số Câu Đúng";
    // series.dataFields.categoryX = "Đề Thi";
    // series.name = "Số Câu Đúng";
    // series.tooltipText = "{name}: [bold]{valueY}[/]";
    
    // var series2 = chart.series.push(new am4charts.ColumnSeries3D());
    // series2.dataFields.valueY = "Số Câu Sai";
    // series2.dataFields.categoryX = "Đề Thi";
    // series2.name = "Số Câu Sai";
    // series2.tooltipText = "{name}: [bold]{valueY}[/]";
    
    // // Add cursor
    // chart.cursor = new am4charts.XYCursor();
    let chart = am4core.create("chartdiv", am4charts.XYChart);

// some extra padding for range labels
chart.paddingBottom = 50;

chart.cursor = new am4charts.XYCursor();
chart.scrollbarX = new am4core.Scrollbar();

// will use this to store colors of the same items
let colors = {};

let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "category";
categoryAxis.renderer.minGridDistance = 60;
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.dataItems.template.text = "{realName}";


let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.tooltip.disabled = true;
valueAxis.min = 0;

// single column series for all data
let columnSeries = chart.series.push(new am4charts.ColumnSeries());
columnSeries.columns.template.width = am4core.percent(80);
columnSeries.tooltipText = "{provider}: {realName}, {valueY}";
columnSeries.dataFields.categoryX = "category";
columnSeries.dataFields.valueY = "value";

// second value axis for quantity
let valueAxis2 = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis2.renderer.opposite = true;
valueAxis2.syncWithAxis = valueAxis;
valueAxis2.tooltip.disabled = true;

// quantity line series
let lineSeries = chart.series.push(new am4charts.LineSeries());
lineSeries.tooltipText = "{valueY}";
lineSeries.dataFields.categoryX = "category";
lineSeries.dataFields.valueY = "quantity";
lineSeries.yAxis = valueAxis2;
lineSeries.bullets.push(new am4charts.CircleBullet());
lineSeries.stroke = chart.colors.getIndex(13);
lineSeries.fill = lineSeries.stroke;
lineSeries.strokeWidth = 2;
lineSeries.snapTooltip = true;

// fill adapter, here we save color value to colors object so that each time the item has the same name, the same color is used


let rangeTemplate = categoryAxis.axisRanges.template;
rangeTemplate.tick.disabled = false;
rangeTemplate.tick.location = 0;
rangeTemplate.tick.strokeOpacity = 0.6;
rangeTemplate.tick.length = 60;
rangeTemplate.grid.strokeOpacity = 0.5;
rangeTemplate.label.tooltip = new am4core.Tooltip();
rangeTemplate.label.tooltip.dy = -10;
rangeTemplate.label.cloneTooltip = false;

///// DATA
let chartData = [];
let lineSeriesData = [];

let data =
{
 "45454545": {
   "Số Câu Đúng": 50,
   "Số Câu Sai": 10,
   "quantity":60
 },
 "456546456456": {
  "Số Câu Đúng": 10,
  "Số Câu Sai": 10,
  "quantity":20
 },
 "5675675685": {
  "Số Câu Đúng": 30,
  "Số Câu Sai": 20,
  "quantity":50
 },
 "7697856756": {
  "Số Câu Đúng": 55,
  "Số Câu Sai": 15,
  "quantity":70
 }
}

// process data ant prepare it for the chart
for (var providerName in data) {
 let providerData = data[providerName];

 // add data of one provider to temp array
 let tempArray = [];
 let count = 0;
 // add items
 for (var itemName in providerData) {
   if(itemName != "quantity"){
   count++;
   // we generate unique category for each column (providerName + "_" + itemName) and store realName
   tempArray.push({ category: providerName + "_" + itemName, realName: itemName, value: providerData[itemName], provider: providerName})
   }
 }
 // sort temp array
 tempArray.sort(function(a, b) {
   if (a.value > b.value) {
   return 1;
   }
   else if (a.value < b.value) {
   return -1
   }
   else {
   return 0;
   }
 })

 // add quantity and count to middle data item (line series uses it)
 let lineSeriesDataIndex = Math.floor(count / 2);
 tempArray[lineSeriesDataIndex].quantity = providerData.quantity;
 tempArray[lineSeriesDataIndex].count = count;
 // push to the final data
 am4core.array.each(tempArray, function(item) {
   chartData.push(item);
 })

 // create range (the additional label at the bottom)
 let range = categoryAxis.axisRanges.create();
 range.category = tempArray[0].category;
 range.endCategory = tempArray[tempArray.length - 1].category;
 range.label.text = tempArray[0].provider;
 range.label.dy = 30;
 range.label.truncate = true;
 range.label.fontWeight = "bold";
 range.label.tooltipText = tempArray[0].provider;

}

chart.data = chartData;


// last tick
let range = categoryAxis.axisRanges.create();
range.category = chart.data[chart.data.length - 1].category;
range.label.disabled = true;
range.tick.location = 1;
range.grid.location = 1;
  }

  ngOnDestroy() {
    // Clean up chart when the component is removed
    this.browserOnly(() => {
      if (this.chart) {
        this.chart.dispose();
      }
    });
  }
}
