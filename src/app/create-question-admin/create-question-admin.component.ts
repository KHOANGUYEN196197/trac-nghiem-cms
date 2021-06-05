import Swal from "sweetalert2";
import { CreateAnswerQuestionAdminComponent } from "./create-answer-question-admin/create-answer-question-admin.component";
import { SeenAnswerComponent } from "./seen-answer/seen-answer.component";
import { ModalCreateQuestionAdminComponent } from "./modal-create-question-admin/modal-create-question-admin.component";
import { ModalUpdateQuestionAdminComponent } from "./modal-update-question-admin/modal-update-question-admin.component";
import { AuthService } from "./../services/auth.service";
import { MatDialog } from "@angular/material/dialog";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-create-question-admin",
  templateUrl: "./create-question-admin.component.html",
  styleUrls: ["./create-question-admin.component.css"],
})
export class CreateQuestionAdminComponent implements OnInit {
  items = [];
  constructor(public dialog: MatDialog, private authService: AuthService) {}
  questions = [];
  subjects = [];
  subject;
  categoris = [];
  checkLoading = true;
  ngOnInit(): void {
    this.getQuestion();
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
    this.authService.getQuestion2(category.id).subscribe((res =>{
      this.questions = res.result;
    }))
  }
  getQuestion() {
    this.checkLoading = true;
    this.authService.getQuestion().subscribe((res) => {
      this.questions = res.result;
      this.checkLoading = false
    });
  }
  Createquestion() {
    const dialogRef = this.dialog.open(ModalCreateQuestionAdminComponent);
    dialogRef.afterClosed().subscribe((result) => {
      if (result === undefined) {
        this.getQuestion();
        const idQuestion = JSON.parse(localStorage.getItem('resQuestion'))
        console.log(7777777,idQuestion);
         this.modalAsnwer(idQuestion.id);
      }
    });
  }
  editQuestion(item) {
    const dialogRef = this.dialog.open(ModalUpdateQuestionAdminComponent);
     dialogRef.componentInstance.data = item;
    dialogRef.afterClosed().subscribe((result) => {
      if (result === undefined) {
        this.getQuestion();
      }
    });
  }
  seenAsnwer(id) {
    const dialogRef = this.dialog.open(SeenAnswerComponent);
    dialogRef.componentInstance.data = id;
    dialogRef.afterClosed().subscribe((result) => {
      if (result === undefined) {
      }
    });
  }
  modalAsnwer(id) {
    const dialogRef = this.dialog.open(CreateAnswerQuestionAdminComponent);
    dialogRef.componentInstance.data = id;
    dialogRef.afterClosed().subscribe((result) => {
      if (result === undefined) {
        this.getQuestion();
      }
    });
  }
  deleteQuestion(id) {
    Swal.fire({
      title: "Xác Nhận Xóa Câu Hỏi Này?",
      showCancelButton: true,
      confirmButtonText: `Xóa`,
      cancelButtonText: "Hủy",
    }).then((result) => {
      if (result.isConfirmed) {
        this.authService.deleteQuestion(id).subscribe((res) => {
          this.getQuestion();
          Swal.fire({
            icon: "success",
            title: "Xóa thành công",
            timer: 1500,
            position: "center",
            showConfirmButton: false,
          });
        });
      }
    });
  }
}
