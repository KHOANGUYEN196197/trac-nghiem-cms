import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router) { }
  ngOnInit(){

  }
  clickTao(){
    this.router.navigateByUrl("/CreateSubject");
  }
  clickThongTin(){
    this.router.navigateByUrl("/LearningInformation");
  }
  clickDanhGia(){
    this.router.navigateByUrl("/ResultEvaluation");
  }
}
