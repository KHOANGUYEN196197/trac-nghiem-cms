import { AuthService } from './../../services/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from "@angular/core";
import {MatDialog} from '@angular/material/dialog';
@Component({
  selector: "app-modal-create-subject",
  templateUrl: "./modal-create-subject.component.html",
  styleUrls: ["./modal-create-subject.component.scss"],
})
export class ModalCreateSubjectComponent implements OnInit {
  add;
  toppingList: string[] = [
    "Extra cheese",
    "Mushroom",
    "Onion",
    "Pepperoni",
    "Sausage",
    "Tomato",
  ];
  constructor( private router: Router,public dialog: MatDialog, private authServive:AuthService) {}
  subjects;
  subject;
  levels;
  level;
  amount;
  time;
  categoris;
  category;
  times = [
    {
      id : 1,
      name: '10 phút',
      time: 10
    },
    {
      id : 2,
      name: '20 phút',
      time: 20
    }
  ]
  amuounts = [
    {
      id: 1,
      name: '10 cau',
      amount: 2
    },
    {
      id: 2,
      name: '20 cau',
      amount: 3
    }
  ]
  ngOnInit(): void {
    this.getAllSubjec();
    this.getLevel();
  }
  getAllSubjec(){
    this.authServive.getSubject().subscribe((res)=>{
      this.subjects = res.result
      console.log(this.subjects);
      
    })
  }
  selectSubject(subject) {
    this.authServive.getCategoryByIdSubject(subject.id).subscribe((res) => {
      this.categoris = res.result;
    });
  }
  getLevel(){
    this.authServive.getLevel().subscribe((res =>{
      this.levels = res.result;
    }))
  }
  createTest(){
    const userId = localStorage.getItem('UserID')
    const data = {
      subjectId : +this.subject,
      levelId: +this.level,
      amount: +this.amount,
      time: +this.time,
      userId: +userId,
      categoryIds: this.category,
    }
    console.log(data);
    this.authServive.createTest(data).subscribe((res =>{
      console.log(121212,res)
      this.getTestDetail(res.result.id)
    }))
  }
  getTestDetail(id){
    console.log(id);
    this.authServive.getTestDetail(id).subscribe((res =>{
      this.router.navigateByUrl(`/Subject/${id}`)
    }))
  }
}
