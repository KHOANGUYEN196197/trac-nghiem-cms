import { Router } from "@angular/router";
import { AuthService } from "./../services/auth.service";
import { Component, OnInit } from "@angular/core";
import Swal from "sweetalert2";
export interface PeriodicElement {
  monThi: string;
  maDe: number;
  soCau: number;
  thoiGianThi: string;
  doKho: string;
  diem: string;
  ngayThi: string;
  HanhDong: string;
}
@Component({
  selector: "app-learning-information",
  templateUrl: "./learning-information.component.html",
  styleUrls: ["./learning-information.component.scss"],
})
export class LearningInformationComponent implements OnInit {
  subjects = [];
  type = false;
  tests;
  search = "";
  userId;
  checkFinishTime;
  displayedColumns: string[] = [
    "maDe",
    "monThi",
    "soCau",
    "thoiGianThi",
    "doKho",
    "diem",
    "ngayThi",
    "HanhDong",
  ];
  constructor(private authServive: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.userId = localStorage.getItem("UserID");
    this.getTest();
    this.getSubject();
  }
  getSubject() {
    this.authServive.getSubject().subscribe((res) => {
      this.subjects = res.result;
    });
  }
  selectSubject(subject) {
    this.authServive
      .getTestWithUserIds(this.userId, subject.id)
      .subscribe((res) => {
        this.tests = res.result;
      });
  }
  selectSubjectNone() {
    this.getTest();
  }
  typeCard() {
    this.type = false;
  }
  typeTable() {
    this.type = true;
  }
  getTest() {
    this.authServive
      .getTestWithUserIds(this.userId, this.search)
      .subscribe((res) => {
        this.tests = res.result;
        console.log(1212,this.tests);
        const now = new Date()
        const currTime = now.valueOf()
        this.checkFinishTime = currTime  
      });
  }

  ResultTest(id) {
    this.router.navigateByUrl(`/ResultSubject/${id}`);
  }
  CreateTest(id){
    this.router.navigateByUrl(`/Subject/${id}`);
  }
}
