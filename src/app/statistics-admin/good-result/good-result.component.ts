import { AuthService } from "./../../services/auth.service";
import { Component, OnInit, Inject, NgZone, PLATFORM_ID } from "@angular/core";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
@Component({
  selector: "app-good-result",
  templateUrl: "./good-result.component.html",
  styleUrls: ["./good-result.component.css"],
})
export class GoodResultComponent implements OnInit {
  goodResults;
  constructor(
    @Inject(PLATFORM_ID) private platformId,
    private zone: NgZone,
    private authService: AuthService
  ) {
    am4core.useTheme(am4themes_animated);
  }

  ngOnInit(): void {
    this.getgoodResult();
  }
  getgoodResult() {
    this.authService.getGoodResult().subscribe((res: any) => {
      this.goodResults = res.result;
      this.ngAfterViewInit();
    });
  }
  ngAfterViewInit() {
    let chart = am4core.create("chartdiv4", am4charts.XYChart);
    chart.hiddenState.properties.opacity = 0;
    chart.legend = new am4charts.Legend();
    chart.data = this.goodResults;
    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "name";
    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.renderer.minWidth = 50;

    let series = chart.series.push(new am4charts.ColumnSeries());
    series.sequencedInterpolation = true;
    series.dataFields.valueY = "avgPercent";
    series.dataFields.categoryX = "name";
    series.tooltipText = "[{categoryX}: bold]{valueY}[/]";
    series.columns.template.strokeWidth = 0;
    series.tooltip.pointerOrientation = "vertical";
    series.columns.template.column.cornerRadiusTopLeft = 10;
    series.columns.template.column.cornerRadiusTopRight = 10;
    series.columns.template.column.fillOpacity = 0.8;
    let hoverState = series.columns.template.column.states.create("hover");
    hoverState.properties.cornerRadiusTopLeft = 0;
    hoverState.properties.cornerRadiusTopRight = 0;
    hoverState.properties.fillOpacity = 1;
    series.columns.template.adapter.add("fill", function (fill, target) {
      return chart.colors.getIndex(target.dataItem.index);
    });
    chart.cursor = new am4charts.XYCursor();
  }
}
