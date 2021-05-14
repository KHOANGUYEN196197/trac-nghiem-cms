import { MatDialog } from "@angular/material/dialog";
import { AuthService } from "./../../services/auth.service";
import { Component, OnInit } from "@angular/core";
import Swal from "sweetalert2";
@Component({
  selector: "app-modal-create-question-admin",
  templateUrl: "./modal-create-question-admin.component.html",
  styleUrls: ["./modal-create-question-admin.component.css"],
})
export class ModalCreateQuestionAdminComponent implements OnInit {

  subjects = [];
  subject;
  categoris = [];
  levels = [];
  level;
  category;
  nameQuestion;
  constructor(private authService: AuthService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.getSubject();
    this.getLevel();
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

  getLevel() {
    this.authService.getLevel().subscribe((res) => {
      this.levels = res.result;
    });
  }
  postQuestion() {
    const data = {
      levelId: this.level,
      cateId: this.category,
      content: this.nameQuestion,
    };
    if(this.level ===undefined || this.category ===undefined || this.nameQuestion ===undefined){
      Swal.fire({
        title: "Có lỗi",
        text: "Vui Lòng Nhập Vào Các Trường Bỏ Trống",
        icon: "warning",
        showConfirmButton: false,
        timer: 1500,
      });
    }else{
      this.authService.postQuestion(data).subscribe(
        (res) => {
          this.dialog.closeAll();
          Swal.fire({
            icon: "success",
            title: "Tạo Câu Hỏi Thành Công",
            timer: 1500,
            position: "center",
            showConfirmButton: false,
          });
        },
        (error) => {
          Swal.fire({
            title: "Có lỗi",
            text: "Lỗi xảy ra khi Tạo Câu Hỏi.",
            icon: "warning",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      );
    }
  }
}
