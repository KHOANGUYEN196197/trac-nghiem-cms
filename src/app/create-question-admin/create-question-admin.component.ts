import { SeenAnswerComponent } from './seen-answer/seen-answer.component';
import { ModalCreateQuestionAdminComponent } from './modal-create-question-admin/modal-create-question-admin.component';
import { ModalUpdateQuestionAdminComponent } from './modal-update-question-admin/modal-update-question-admin.component';
import { AuthService } from './../services/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-question-admin',
  templateUrl: './create-question-admin.component.html',
  styleUrls: ['./create-question-admin.component.css']
})
export class CreateQuestionAdminComponent implements OnInit {
items = [
  {
    id: 1,
    name: '2323',
    email: '34324',
    phone:'343434',
  }
];
  constructor(public dialog: MatDialog, private authService: AuthService) { }
questions =[];
  ngOnInit(): void {
    this.getQuestion();
  }
  getQuestion(){
    this.authService.getQuestion().subscribe((res =>{
      this.questions = res.result;
    }))
  }
  Createquestion() {
    const dialogRef = this.dialog.open(ModalCreateQuestionAdminComponent);

    dialogRef.afterClosed().subscribe((result) => {
      if (result === undefined) {
      }
    });
  }
  editQuestion(item) {
    const dialogRef = this.dialog.open(ModalUpdateQuestionAdminComponent);
    // dialogRef.componentInstance.data = item;
    dialogRef.afterClosed().subscribe((result) => {
      if (result === undefined) {
      }
    });
  }
  seenAsnwer(id){
    const dialogRef = this.dialog.open(SeenAnswerComponent);
     dialogRef.componentInstance.data = id;
    dialogRef.afterClosed().subscribe((result) => {
      if (result === undefined) {
      }
    });
  }

}
