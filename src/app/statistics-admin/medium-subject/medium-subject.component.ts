import { AuthService } from "./../../services/auth.service";
import { Component, OnInit, Inject, NgZone, PLATFORM_ID } from "@angular/core";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

@Component({
  selector: "app-medium-subject",
  templateUrl: "./medium-subject.component.html",
  styleUrls: ["./medium-subject.component.css"],
})
export class MediumSubjectComponent implements OnInit {
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
    this.authService.getSubject().subscribe((res) => {
      this.subjects = res.result;
    });
  }
  selectSubject(subject) {
    this.authService.getMediumSubject(subject.id).subscribe((res: any) => {
      this.mediumSubjects = res.result;
      this.ngAfterViewInit();
    });
  }

  ngAfterViewInit() {
    let chart = am4core.create("chartdiv3", am4charts.XYChart);

    //thống kể điểm trung bình
    chart.hiddenState.properties.opacity = 0;

    //thống kể điểm trung bình
    chart.legend = new am4charts.Legend();

    //thống kể điểm trung bình
    chart.data = this.mediumSubjects;

    //thống kể điểm trung bình
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
