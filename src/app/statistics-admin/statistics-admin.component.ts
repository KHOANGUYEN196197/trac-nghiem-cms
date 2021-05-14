import { Component, OnInit, Inject, NgZone, PLATFORM_ID } from "@angular/core";
import { isPlatformBrowser } from "@angular/common";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

@Component({
  selector: "app-statistics-admin",
  templateUrl: "./statistics-admin.component.html",
  styleUrls: ["./statistics-admin.component.css"],
})
export class StatisticsAdminComponent implements OnInit {
  private chart: am4charts.PieChart3D;

  constructor(@Inject(PLATFORM_ID) private platformId, private zone: NgZone) {
    am4core.useTheme(am4themes_animated);
  }

  ngOnInit(): void {}
  ngAfterViewInit() {
    //thông kê user làm bài kiểm tra nhiều nhất
    let chart1 = am4core.create("chartdiv1", am4charts.PieChart3D);

    //thống kể điểm trung bình
    let chart2 = am4core.create("chartdiv2", am4charts.XYChart);
    let chart4 = am4core.create("chartdiv4", am4charts.XYChart);
    let chart5 = am4core.create("chartdiv5", am4charts.XYChart);
    let chart6 = am4core.create("chartdiv6", am4charts.XYChart);
    let chart7 = am4core.create("chartdiv7", am4charts.XYChart);

    //đánh giá app
    let chart3 = am4core.create("chartdiv3", am4charts.PieChart3D);

    //thông kê user làm bài kiểm tra nhiều nhất
    chart1.hiddenState.properties.opacity = 0;

    //thống kể điểm trung bình
    chart2.hiddenState.properties.opacity = 0;
    chart4.hiddenState.properties.opacity = 0;
    chart5.hiddenState.properties.opacity = 0;
    chart6.hiddenState.properties.opacity = 0;
    chart7.hiddenState.properties.opacity = 0;

    //đánh giá app
    chart3.hiddenState.properties.opacity = 0;

    //thông kê user làm bài kiểm tra nhiều nhất
    chart1.legend = new am4charts.Legend();

    //thống kể điểm trung bình
    chart2.legend = new am4charts.Legend();
    chart4.legend = new am4charts.Legend();
    chart5.legend = new am4charts.Legend();
    chart6.legend = new am4charts.Legend();
    chart7.legend = new am4charts.Legend();

    //đánh giá app
    chart3.legend = new am4charts.Legend();

    //thông kê user làm bài kiểm tra nhiều nhất
    chart1.data = [
      {
        nameUser: "Toán",
        countNumber: 12,
      },
      {
        nameUser: "Lý",
        countNumber: 6,
      },
    ];
    //đánh giá app
    chart3.data = [
      {
        nameUser: "Toán",
        litres: 501.9,
      },
      {
        country: "Lý",
        litres: 301.9,
      },
    ];

    //thống kể điểm trung bình
    chart2.data = [
      {
        nameUser: "Nguyễn Hữu Khoa",
        stb: 5.5,
      },
      {
        nameUser: "Huỳnh Ngọc Thọ",
        stb: 6.5,
      },
      {
        nameUser: "Nguyễn Cảnh Hiếu",
        stb: 8.5,
      },
      {
        nameUser: "Nguyễn Lê Lâm",
        stb: 3.5,
      },
    ];
    chart4.data = [
      {
        nameUser: "Nguyễn Hữu Khoa",
        stb: 5.5,
      },
      {
        nameUser: "Huỳnh Ngọc Thọ",
        stb: 6.5,
      },
      {
        nameUser: "Nguyễn Cảnh Hiếu",
        stb: 8.5,
      },
      {
        nameUser: "Nguyễn Lê Lâm",
        stb: 3.5,
      },
    ];
    chart5.data = [
      {
        nameUser: "Nguyễn Hữu Khoa",
        stb: 5.5,
      },
      {
        nameUser: "Huỳnh Ngọc Thọ",
        stb: 6.5,
      },
      {
        nameUser: "Nguyễn Cảnh Hiếu",
        stb: 8.5,
      },
      {
        nameUser: "Nguyễn Lê Lâm",
        stb: 3.5,
      },
    ];
    chart6.data = [
      {
        nameUser: "Nguyễn Hữu Khoa",
        stb: 5.5,
      },
      {
        nameUser: "Huỳnh Ngọc Thọ",
        stb: 6.5,
      },
      {
        nameUser: "Nguyễn Cảnh Hiếu",
        stb: 8.5,
      },
      {
        nameUser: "Nguyễn Lê Lâm",
        stb: 3.5,
      },
    ];
    chart7.data = [
      {
        nameUser: "Nguyễn Hữu Khoa",
        stb: 5.5,
      },
      {
        nameUser: "Huỳnh Ngọc Thọ",
        stb: 6.5,
      },
      {
        nameUser: "Nguyễn Cảnh Hiếu",
        stb: 8.5,
      },
      {
        nameUser: "Nguyễn Lê Lâm",
        stb: 3.5,
      },
    ];

    //thông kê user làm bài kiểm tra nhiều nhất
    let series1 = chart1.series.push(new am4charts.PieSeries3D());

    //thống kể điểm trung bình
    let categoryAxis2 = chart2.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis2.dataFields.category = "nameUser";
    let valueAxis2 = chart2.yAxes.push(new am4charts.ValueAxis());
    valueAxis2.renderer.minWidth = 50;

    let categoryAxis4 = chart4.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis4.dataFields.category = "nameUser";
    let valueAxis4 = chart4.yAxes.push(new am4charts.ValueAxis());
    valueAxis4.renderer.minWidth = 50;

    let categoryAxis5 = chart5.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis5.dataFields.category = "nameUser";
    let valueAxis5 = chart5.yAxes.push(new am4charts.ValueAxis());
    valueAxis5.renderer.minWidth = 50;

    let categoryAxis6 = chart6.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis6.dataFields.category = "nameUser";
    let valueAxis6 = chart6.yAxes.push(new am4charts.ValueAxis());
    valueAxis6.renderer.minWidth = 50;

    let categoryAxis7 = chart7.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis7.dataFields.category = "nameUser";
    let valueAxis7 = chart7.yAxes.push(new am4charts.ValueAxis());
    valueAxis7.renderer.minWidth = 50;


    let series2 = chart2.series.push(new am4charts.ColumnSeries());
    series2.sequencedInterpolation = true;
    series2.dataFields.valueY = "stb";
    series2.dataFields.categoryX = "nameUser";
    series2.tooltipText = "[{categoryX}: bold]{valueY}[/]";
    series2.columns.template.strokeWidth = 0;
    series2.tooltip.pointerOrientation = "vertical";
    series2.columns.template.column.cornerRadiusTopLeft = 10;
    series2.columns.template.column.cornerRadiusTopRight = 10;
    series2.columns.template.column.fillOpacity = 0.8;
    let hoverState2 = series2.columns.template.column.states.create("hover");
    hoverState2.properties.cornerRadiusTopLeft = 0;
    hoverState2.properties.cornerRadiusTopRight = 0;
    hoverState2.properties.fillOpacity = 1;
    series2.columns.template.adapter.add("fill", function (fill, target) {
      return chart2.colors.getIndex(target.dataItem.index);
    });
    chart2.cursor = new am4charts.XYCursor();
    //
    let series4 = chart4.series.push(new am4charts.ColumnSeries());
    series4.sequencedInterpolation = true;
    series4.dataFields.valueY = "stb";
    series4.dataFields.categoryX = "nameUser";
    series4.tooltipText = "[{categoryX}: bold]{valueY}[/]";
    series4.columns.template.strokeWidth = 0;
    series4.tooltip.pointerOrientation = "vertical";
    series4.columns.template.column.cornerRadiusTopLeft = 10;
    series4.columns.template.column.cornerRadiusTopRight = 10;
    series4.columns.template.column.fillOpacity = 0.8;
    let hoverState4 = series4.columns.template.column.states.create("hover");
    hoverState4.properties.cornerRadiusTopLeft = 0;
    hoverState4.properties.cornerRadiusTopRight = 0;
    hoverState4.properties.fillOpacity = 1;
    series4.columns.template.adapter.add("fill", function (fill, target) {
      return chart4.colors.getIndex(target.dataItem.index);
    });
    chart4.cursor = new am4charts.XYCursor();
    //

    let series5 = chart5.series.push(new am4charts.ColumnSeries());
    series5.sequencedInterpolation = true;
    series5.dataFields.valueY = "stb";
    series5.dataFields.categoryX = "nameUser";
    series5.tooltipText = "[{categoryX}: bold]{valueY}[/]";
    series5.columns.template.strokeWidth = 0;
    series5.tooltip.pointerOrientation = "vertical";
    series5.columns.template.column.cornerRadiusTopLeft = 10;
    series5.columns.template.column.cornerRadiusTopRight = 10;
    series5.columns.template.column.fillOpacity = 0.8;
    let hoverState5 = series5.columns.template.column.states.create("hover");
    hoverState5.properties.cornerRadiusTopLeft = 0;
    hoverState5.properties.cornerRadiusTopRight = 0;
    hoverState5.properties.fillOpacity = 1;
    series5.columns.template.adapter.add("fill", function (fill, target) {
      return chart5.colors.getIndex(target.dataItem.index);
    });
    chart5.cursor = new am4charts.XYCursor();
//

    let series6 = chart6.series.push(new am4charts.ColumnSeries());
    series6.sequencedInterpolation = true;
    series6.dataFields.valueY = "stb";
    series6.dataFields.categoryX = "nameUser";
    series6.tooltipText = "[{categoryX}: bold]{valueY}[/]";
    series6.columns.template.strokeWidth = 0;
    series6.tooltip.pointerOrientation = "vertical";
    series6.columns.template.column.cornerRadiusTopLeft = 10;
    series6.columns.template.column.cornerRadiusTopRight = 10;
    series6.columns.template.column.fillOpacity = 0.8;
    let hoverState6 = series6.columns.template.column.states.create("hover");
    hoverState6.properties.cornerRadiusTopLeft = 0;
    hoverState6.properties.cornerRadiusTopRight = 0;
    hoverState6.properties.fillOpacity = 1;
    series6.columns.template.adapter.add("fill", function (fill, target) {
      return chart6.colors.getIndex(target.dataItem.index);
    });
    chart6.cursor = new am4charts.XYCursor();

    //

    let series7 = chart7.series.push(new am4charts.ColumnSeries());
    series7.sequencedInterpolation = true;
    series7.dataFields.valueY = "stb";
    series7.dataFields.categoryX = "nameUser";
    series7.tooltipText = "[{categoryX}: bold]{valueY}[/]";
    series7.columns.template.strokeWidth = 0;
    series7.tooltip.pointerOrientation = "vertical";
    series7.columns.template.column.cornerRadiusTopLeft = 10;
    series7.columns.template.column.cornerRadiusTopRight = 10;
    series7.columns.template.column.fillOpacity = 0.8;
    let hoverState7 = series7.columns.template.column.states.create("hover");
    hoverState7.properties.cornerRadiusTopLeft = 0;
    hoverState7.properties.cornerRadiusTopRight = 0;
    hoverState7.properties.fillOpacity = 1;
    series7.columns.template.adapter.add("fill", function (fill, target) {
      return chart7.colors.getIndex(target.dataItem.index);
    });
    chart7.cursor = new am4charts.XYCursor();

    //đánh giá app
    let series3 = chart3.series.push(new am4charts.PieSeries3D());

    //thông kê user làm bài kiểm tra nhiều nhất
    series1.dataFields.value = "countNumber";
    series1.dataFields.category = "nameUser";

    //đánh giá app
    series3.dataFields.category = "country";
    series3.dataFields.value = "litres";
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
