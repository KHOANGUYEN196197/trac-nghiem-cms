import { AuthService } from './../../services/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit, Input } from "@angular/core";
import Swal from "sweetalert2";
@Component({
  selector: "app-create-answer-question-admin",
  templateUrl: "./create-answer-question-admin.component.html",
  styleUrls: ["./create-answer-question-admin.component.css"],
})
export class CreateAnswerQuestionAdminComponent implements OnInit {
  @Input() data;
  answer1;
  answer2;
  answer3;
  answer4;
  answer7 = false;
  dissebel4 = false;
  dissebel3 = false;
  dissebel2 = false;
  dissebel1 = false;
  answers = [];
  checkAnswer = false;
  localQuestion;
  constructor(private authService: AuthService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.seenAnswer();
    this.localQuestion = JSON.parse(localStorage.getItem('resQuestion'))
  }
  seenAnswer() {
    this.authService.seenAsnwer(this.data).subscribe((res) => {
      this.answers = res.result;
      if ((this.answers[0] === undefined)) {
        this.checkAnswer = true;
      }
    });
  }

  modelChanged4(newObj) {
    if (newObj) {
      this.dissebel4 = true;
    } else {
      this.dissebel4 = false;
    }
  }
  modelChanged3(newObj) {
    if (newObj) {
      this.dissebel3 = true;
    } else {
      this.dissebel3 = false;
    }
  }
  modelChanged2(newObj) {
    if (newObj) {
      this.dissebel2 = true;
    } else {
      this.dissebel2 = false;
    }
  }
  modelChanged1(newObj) {
    if (newObj) {
      this.dissebel1 = true;
    } else {
      this.dissebel1 = false;
    }
  }
  postAnswer() {
    if(this.answer1 ===undefined || this.answer2 ===undefined || this.answer3 ===undefined || this.answer4 ===undefined){
      Swal.fire({
        title: "Có lỗi",
        text: "Vui Lòng Nhập Vào Các Trường Bỏ Trống",
        icon: "warning",
        showConfirmButton: false,
        timer: 1500,
      });
    } else{
      const data1 = {
        content: this.answer1,
        questionId: this.data,
        isCorrect: this.dissebel1,
      };
        this.authService.postAnswer(data1).subscribe(
          (res) => {
            this.dialog.closeAll();
            Swal.fire({
              icon: "success",
              title: "Tạo Câu Trả Lời Thành Công",
              timer: 1500,
              position: "center",
              showConfirmButton: false,
            });
          },
          (error) => {
            Swal.fire({
              title: "Có lỗi",
              text: "Lỗi xảy ra khi Tạo Câu Trả Lời.",
              icon: "warning",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        );
      
      const data2 = {
        content: this.answer2,
        questionId: this.data,
        isCorrect: this.dissebel2,
      };
        this.authService.postAnswer(data2).subscribe(
          (res) => {
            this.dialog.closeAll();
            Swal.fire({
              icon: "success",
              title: "Tạo Câu Trả Lời Thành Công",
              timer: 1500,
              position: "center",
              showConfirmButton: false,
            });
          },
          (error) => {
            Swal.fire({
              title: "Có lỗi",
              text: "Lỗi xảy ra khi Tạo Câu Trả Lời.",
              icon: "warning",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        );
      
      const data3 = {
        content: this.answer3,
        questionId: this.data,
        isCorrect: this.dissebel3,
      };
  
        this.authService.postAnswer(data3).subscribe(
          (res) => {
            this.dialog.closeAll();
            Swal.fire({
              icon: "success",
              title: "Tạo Câu Trả Lời Thành Công",
              timer: 1500,
              position: "center",
              showConfirmButton: false,
            });
          },
          (error) => {
            Swal.fire({
              title: "Có lỗi",
              text: "Lỗi xảy ra khi Tạo Câu Trả Lời.",
              icon: "warning",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        );
      
      const data4 = {
        content: this.answer4,
        questionId: this.data,
        isCorrect: this.dissebel4,
      };
        this.authService.postAnswer(data4).subscribe(
          (res) => {
            this.dialog.closeAll();
            Swal.fire({
              icon: "success",
              title: "Tạo Câu Trả Lời Thành Công",
              timer: 1500,
              position: "center",
              showConfirmButton: false,
            });
          },
          (error) => {
            Swal.fire({
              title: "Có lỗi",
              text: "Lỗi xảy ra khi Tạo Câu Trả Lời.",
              icon: "warning",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        );
      
    }
  }
  closeModal(){
    Swal.fire({
      title: "Xóa Câu Hỏi Khi Nhấn Hủy!",
      showCancelButton: true,
      confirmButtonText: `Có`,
      cancelButtonText: "Không",
    }).then((result) => {
      if (result.isConfirmed) {
        this.authService.deleteQuestion(this.localQuestion.id).subscribe((res) => {
          Swal.fire({
            icon: "success",
            title: "Xóa thành công",
            timer: 1500,
            position: "center",
            showConfirmButton: false,
          });
        });
        this.dialog.closeAll();
      }
    });
  }
}
