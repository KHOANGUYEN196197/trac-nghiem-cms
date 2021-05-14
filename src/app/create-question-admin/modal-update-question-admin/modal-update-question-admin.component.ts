import { AuthService } from './../../services/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit,Input } from '@angular/core';
import Swal from "sweetalert2";
@Component({
  selector: 'app-modal-update-question-admin',
  templateUrl: './modal-update-question-admin.component.html',
  styleUrls: ['./modal-update-question-admin.component.css']
})
export class ModalUpdateQuestionAdminComponent implements OnInit {
  @Input() data;
  subjects = [];
  subject;
  categoris = [];
  levels = [];
  level;
  category;
  nameQuestion;
  constructor(private authService: AuthService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getSubject();
    this.getLevel();
    console.log(this.data);
    
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
  updateQuestion() {
    const data = {
      id: this.data.id,
      levelId: this.data.levelId,
      cateId: this.data.category.id,
      content: this.data.content,
    };
    if( this.data.content ===undefined){
      Swal.fire({
        title: "Có lỗi",
        text: "Vui Lòng Nhập Vào Nội Dung Câu Hỏi",
        icon: "warning",
        showConfirmButton: false,
        timer: 1500,
      });
    }else{
      this.authService.updateQuestion(data).subscribe(
        (res) => {
          this.dialog.closeAll();
          Swal.fire({
            icon: "success",
            title: "Cập Nhập Câu Hỏi Thành Công",
            timer: 1500,
            position: "center",
            showConfirmButton: false,
          });
        },
        (error) => {
          Swal.fire({
            title: "Có lỗi",
            text: "Lỗi xảy ra khi Cập Nhập Câu Hỏi.",
            icon: "warning",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      );
    }
  }
}
