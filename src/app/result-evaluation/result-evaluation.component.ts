import { AuthService } from './../services/auth.service';
import { Component, OnInit, Inject, NgZone, PLATFORM_ID } from "@angular/core";

import { isPlatformBrowser } from "@angular/common";

// amCharts imports
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

@Component({
  selector: "app-result-evaluation",
  templateUrl: "./result-evaluation.component.html",
  styleUrls: ["./result-evaluation.component.scss"],
})
export class ResultEvaluationComponent implements OnInit {
  questions = [];
  subjects = [];
  subject;
  categoris = [];
  datas;
  userId;
  reviewAveragePercent = '';
  reviewPercents='';
  private chart: am4charts.XYChart;
  constructor(@Inject(PLATFORM_ID) private platformId, private zone: NgZone, private authService: AuthService) {
    am4core.useTheme(am4themes_animated);
  }

  ngOnInit(): void {
    this.userId = localStorage.getItem("UserID");
    this.getSubject();
  }
  getSubject() {
    this.authService.getSubject().subscribe((res) => {
      this.subjects = res.result;
    });
  }
  selectSubject(subject) {
    this.authService.getCategoryByIdSubject(subject.id).subscribe((res) => {
      this.categoris = res.result;
    });
  }
  selectCategory(category){
    
  this.authService.getWidgetData(this.userId,category.id).subscribe((res: any) =>{
    this.datas = res.result;
    this.ngAfterViewInit();
  });
  this.authService.getReview(this.userId,category.id).subscribe((res: any) =>{
    console.log(666666,res.result.averagePercent);
    if(res.result.averagePercent === null){
      this.reviewAveragePercent = ''
    }else if(res.result.averagePercent < 50){
      this.reviewAveragePercent = 'Kiến thức phần này của bạn còn rất hạn chế điểm phần này của các bài test còn chưa cao.Bạn cần cố gắng cải thiện hơn nữa'
    }else if(res.result.averagePercent >=50 && res.result.averagePercent < 70  ){
      this.reviewAveragePercent = 'Kiến thức của bạn ở phần này chỉ ở mức trung bình. Bạn cần cố gắng hơn để cải thiện thành tích của mình'
    } else if(res.result.averagePercent >=70 && res.result.averagePercent < 85){
      this.reviewAveragePercent = 'Kiến thức của bạn ở phần này khá tốt. Bạn cố gắng thêm để đặt được số điểm cao hơn nữa'
    } else if(res.result.averagePercent > 85){
      this.reviewAveragePercent = ' Kiến Thức của bạn ở phần này rất tốt.Bạn cố gắng giữ phong độ'
    }


    if(res.result.percents[0] > res.result.percents[1] > res.result.percents[2]){
      this.reviewPercents = 'Có sự tiến bộ ổn định trong thời gian qua'
    } else if(res.result.percents[0] < res.result.percents[1] < res.result.percents[2]){
      this.reviewPercents = 'Bạn không có sự tiến bộ trong thời gian qua. Kết quả các bài kiếm tra có chứa nội dung này đang giảm'
    } else if(res.result.percents[0] < res.result.percents[1] > res.result.percents[2]){
      this.reviewPercents = 'Trong thời gian gần đây bnj không có tiến bộ. Kết quả các bài kiểm tra có chứa nội dung này giảm xuống.'
    } else if(res.result.percents[0] > res.result.percents[1] < res.result.percents[2]){
      this.reviewPercents = 'Bạn có sự tiến bộ hơn trong thời gian trước.'
    } else if(res.result.percents.length = 0){
      this.reviewPercents = ''
    }
  });
  }
  ngAfterViewInit() {
    let chart = am4core.create("chartdiv", am4charts.XYChart);
    chart.scrollbarX = new am4core.Scrollbar();

    // Add data
    chart.data = this.datas
    console.log(chart.data);
    

    // Create axes
    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "testId";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 30;
    categoryAxis.renderer.labels.template.horizontalCenter = "right";
    categoryAxis.renderer.labels.template.verticalCenter = "middle";
    categoryAxis.tooltip.disabled = true;
    categoryAxis.renderer.minHeight = 110;

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.renderer.minWidth = 50;

    // Create series
    let series = chart.series.push(new am4charts.ColumnSeries());
    series.sequencedInterpolation = true;
    series.dataFields.valueY = "percent";
    series.dataFields.categoryX = "testId";
    series.tooltipText = "[{categoryX}: bold]{valueY}[/]";
    series.columns.template.strokeWidth = 0;

    series.tooltip.pointerOrientation = "vertical";

    series.columns.template.column.cornerRadiusTopLeft = 10;
    series.columns.template.column.cornerRadiusTopRight = 10;
    series.columns.template.column.fillOpacity = 0.8;

    // on hover, make corner radiuses bigger
    let hoverState = series.columns.template.column.states.create("hover");
    hoverState.properties.cornerRadiusTopLeft = 0;
    hoverState.properties.cornerRadiusTopRight = 0;
    hoverState.properties.fillOpacity = 1;

    series.columns.template.adapter.add("fill", function (fill, target) {
      return chart.colors.getIndex(target.dataItem.index);
    });

    // Cursor
    chart.cursor = new am4charts.XYCursor();
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
