import { AuthService } from "./../../services/auth.service";
import { Component, OnInit, Inject, NgZone, PLATFORM_ID } from "@angular/core";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { isPlatformBrowser } from "@angular/common";
@Component({
  selector: "app-good-result",
  templateUrl: "./good-result.component.html",
  styleUrls: ["./good-result.component.css"],
})
export class GoodResultComponent implements OnInit {
  private chart: am4charts.RadarChart;
  subjects;
  subject;
  mediumSubjects;
  constructor(
    @Inject(PLATFORM_ID) private platformId,
    private zone: NgZone,
    private authService: AuthService
  ) {
    am4core.useTheme(am4themes_animated);
  }

  ngOnInit(): void {
     this.getAllSubjec();
  }
  getAllSubjec() {
    this.authService.getUser().subscribe((res) => {
      this.subjects = res.result;
    });
  }
  selectSubject(subject) {
    this.authService.getSubjectByUser(subject.id).subscribe((res: any) => {
      this.mediumSubjects = res.result;
      this.ngAfterViewInit();
    });
  }

  ngAfterViewInit() {
    let chart = am4core.create("chartdiv11", am4charts.RadarChart);
    chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

    chart.data = this.mediumSubjects;

    chart.padding(20, 20, 20, 20);

    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis() as any);
    categoryAxis.dataFields.category = "name";
    categoryAxis.renderer.labels.template.location = 0.5;
    categoryAxis.renderer.tooltipLocation = 0.5;

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis() as any);
    valueAxis.tooltip.disabled = true;
    valueAxis.renderer.labels.template.horizontalCenter = "left";
    valueAxis.minX = 0;

    let series1 = chart.series.push(new am4charts.RadarColumnSeries());
    series1.columns.template.tooltipText = "{name}: {valueY.value}";
    series1.columns.template.width = am4core.percent(80);
    series1.name = "Series 1";
    series1.dataFields.categoryX = "name";
    series1.dataFields.valueY = "percent";
    series1.stacked = true;
    chart.seriesContainer.zIndex = -1;

    chart.scrollbarX = new am4core.Scrollbar();
    chart.scrollbarX.exportable = false;
    chart.scrollbarY = new am4core.Scrollbar();
    chart.scrollbarY.exportable = false;

    chart.cursor = new am4charts.RadarCursor();
    chart.cursor.xAxis = categoryAxis;
    chart.cursor.fullWidthLineX = true;
    chart.cursor.lineX.strokeOpacity = 0;
    chart.cursor.lineX.fillOpacity = 0.1;
    chart.cursor.lineX.fill = am4core.color("#000000");
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
