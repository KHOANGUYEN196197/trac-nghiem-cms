import { AuthService } from "./../../services/auth.service";
import { Component, OnInit, Inject, NgZone, PLATFORM_ID } from "@angular/core";
import { isPlatformBrowser } from "@angular/common";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

@Component({
  selector: "app-sta-feedback",
  templateUrl: "./sta-feedback.component.html",
  styleUrls: ["./sta-feedback.component.css"],
})
export class StaFeedbackComponent implements OnInit {
  feedbackStatistic;
  private chart: am4charts.PieChart3D;
  constructor(
    @Inject(PLATFORM_ID) private platformId,
    private zone: NgZone,
    private authService: AuthService
  ) {
    am4core.useTheme(am4themes_animated);
  }

  ngOnInit(): void {
    this.getHightTest();
  }
  getHightTest() {
    this.authService.getFeedbackStatistic().subscribe((res: any) => {
      this.feedbackStatistic = res.result;
      this.ngAfterViewInit();
    });
  }
  ngAfterViewInit() {
    let chart = am4core.create("chartdiv1", am4charts.PieChart3D);
    chart.hiddenState.properties.opacity = 0;
    chart.data = this.feedbackStatistic;
    chart.legend = new am4charts.Legend();
    let series = chart.series.push(new am4charts.PieSeries3D());
    series.dataFields.category = "rate";
    series.dataFields.value = "amount";
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
