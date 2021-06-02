import { AuthService } from './../services/auth.service';
import { Component, OnInit } from "@angular/core";
import { debounce } from "lodash";
export interface PeriodicElement {
  monThi: string;
  maDe: number;
  soCau: number;
  thoiGianThi: string;
  doKho: string;
  diem: string;
  ngayThi: string;
}
@Component({
  selector: "app-learning-information",
  templateUrl: "./learning-information.component.html",
  styleUrls: ["./learning-information.component.scss"],
})
export class LearningInformationComponent implements OnInit {
  type = false;
  tests;
  search= '';
  userId;
  displayedColumns: string[] = [
    "maDe",
    "monThi",
    "soCau",
    "thoiGianThi",
    "doKho",
    "diem",
    "ngayThi",
  ];
  constructor(private authServive: AuthService) {}

  ngOnInit(): void {
    this.userId = localStorage.getItem('UserID');
    this.getTest();
  }
  typeCard() {
    this.type = false;
  }
  typeTable() {
    this.type = true;
  }
  getTest(){
    this.authServive.getTestWithUserIds(this.userId, this.search).subscribe((res =>{
      console.log(121212, res);
      this.tests = res.result; 
    }))
  }
  modelChangedSearch = debounce((newObj) => {
    this.search = newObj;
    if (newObj == "") {
      this.getTest();
    }else{
      this.authServive.getTestWithUserIds(this.userId,this.search).subscribe((res =>{
        this.tests = res.result; 
      }))
    }
  }, 500)
}
