import { Component, OnInit, Inject, NgZone, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {
  
  private chart: am4charts.PieChart3D;


  constructor(@Inject(PLATFORM_ID) private platformId, private zone: NgZone) { 
    am4core.useTheme(am4themes_animated);
  }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    let chart1 = am4core.create("chartdiv1", am4charts.PieChart3D);
    let chart2 = am4core.create("chartdiv2", am4charts.PieChart3D);
    let chart3 = am4core.create("chartdiv3", am4charts.PieChart3D);
    let chart4 = am4core.create("chartdiv4", am4charts.PieChart3D);
    let chart5 = am4core.create("chartdiv5", am4charts.PieChart3D);
    chart1.hiddenState.properties.opacity = 0; // this creates initial fade-in
    chart2.hiddenState.properties.opacity = 0; // this creates initial fade-in
    chart3.hiddenState.properties.opacity = 0; // this creates initial fade-in
    chart4.hiddenState.properties.opacity = 0; // this creates initial fade-in
    chart5.hiddenState.properties.opacity = 0; // this creates initial fade-in

chart1.legend = new am4charts.Legend();
chart2.legend = new am4charts.Legend();
chart3.legend = new am4charts.Legend();
chart4.legend = new am4charts.Legend();
chart5.legend = new am4charts.Legend();
    chart1.data = [
      {
        country: "Toán",
        litres: 501.9
      },
      {
        country: "Lý",
        litres: 301.9
      },
      {
        country: "Hóa",
        litres: 201.1
      },
      {
        country: "Sinh",
        litres: 165.8
      },
      {
        country: "Sử",
        litres: 139.9
      },
    ];
    chart2.data = [
      {
        country: "Toán",
        litres: 501.9
      },
      {
        country: "Lý",
        litres: 301.9
      },
      {
        country: "Hóa",
        litres: 201.1
      },
      {
        country: "Sinh",
        litres: 165.8
      },
      {
        country: "Sử",
        litres: 139.9
      },
    ];
    chart3.data = [
      {
        country: "Toán",
        litres: 501.9
      },
      {
        country: "Lý",
        litres: 301.9
      },
      {
        country: "Hóa",
        litres: 201.1
      },
      {
        country: "Sinh",
        litres: 165.8
      },
      {
        country: "Sử",
        litres: 139.9
      },
    ];
    chart4.data = [
      {
        country: "Toán",
        litres: 501.9
      },
      {
        country: "Lý",
        litres: 301.9
      },
      {
        country: "Hóa",
        litres: 201.1
      },
      {
        country: "Sinh",
        litres: 165.8
      },
      {
        country: "Sử",
        litres: 139.9
      },
    ];
    chart5.data = [
      {
        country: "Toán",
        litres: 501.9
      },
      {
        country: "Lý",
        litres: 301.9
      },
      {
        country: "Hóa",
        litres: 201.1
      },
      {
        country: "Sinh",
        litres: 165.8
      },
      {
        country: "Sử",
        litres: 139.9
      },
    ];
    
    let series1 = chart1.series.push(new am4charts.PieSeries3D());
    let series2 = chart2.series.push(new am4charts.PieSeries3D());
    let series3 = chart3.series.push(new am4charts.PieSeries3D());
    let series4 = chart4.series.push(new am4charts.PieSeries3D());
    let series5 = chart5.series.push(new am4charts.PieSeries3D());

    series1.dataFields.value = "litres";
    series1.dataFields.category = "country";
    series2.dataFields.value = "litres";
    series3.dataFields.category = "country";
    series3.dataFields.value = "litres";
    series4.dataFields.category = "country";
    series4.dataFields.value = "litres";
    series5.dataFields.category = "country";
    series5.dataFields.value = "litres";
  }
  browserOnly(f: () => void) {
    if (isPlatformBrowser(this.platformId)) {
      this.zone.runOutsideAngular(() => {
        f();
      });
    }
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
