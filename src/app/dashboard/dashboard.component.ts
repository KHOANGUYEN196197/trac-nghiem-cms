import { RatingComponent } from "./rating/rating.component";
import { MatDialog } from "@angular/material/dialog";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
  constructor(private router: Router, public dialog: MatDialog) {
  }
  ngOnInit() {
    let isFeedBack = localStorage.getItem("hasFeedback");
    console.log(typeof  isFeedBack);
    
    setTimeout(() => {
      if (isFeedBack === 'false') {
        this.rating();
      }
    }, 2000);
  }
  clickTao() {
    this.router.navigateByUrl("/CreateSubject");
  }
  clickThongTin() {
    this.router.navigateByUrl("/LearningInformation");
  }
  clickDanhGia() {
    this.router.navigateByUrl("/ResultEvaluation");
  }
  clickFeedBack() {
    this.router.navigateByUrl("/Feedback");
  }
  clickThongKe() {
    this.router.navigateByUrl("/Statistics");
  }
  rating() {
    const dialogRef = this.dialog.open(RatingComponent);

    dialogRef.afterClosed().subscribe((result) => {
      if (result === undefined) {
      }
    });
  }
}
