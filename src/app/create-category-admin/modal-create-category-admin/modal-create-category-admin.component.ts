import { MatDialog } from "@angular/material/dialog";
import { AuthService } from "./../../services/auth.service";
import { Component, OnInit } from "@angular/core";
import Swal from "sweetalert2";
@Component({
  selector: "app-modal-create-category-admin",
  templateUrl: "./modal-create-category-admin.component.html",
  styleUrls: ["./modal-create-category-admin.component.css"],
})
export class ModalCreateCategoryAdminComponent implements OnInit {
  constructor(private authService: AuthService, public dialog: MatDialog) {}
  subjects = [];
  subject;
  nameCategory;
  ngOnInit(): void {
    this.getSubject();
  }
  getSubject() {
    this.authService.getSubject().subscribe((res) => {
      this.subjects = res.result;
    });
  }
  postCategory() {
    const data = {
      subjectId: this.subject,
      name: this.nameCategory,
    };
    if (this.nameCategory === undefined) {
      Swal.fire({
        title: "Có lỗi",
        text: "Vui Lòng Nhập Vào Tên Chương",
        icon: "warning",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      this.authService.postCategory(data).subscribe(
        (res) => {
          this.dialog.closeAll();
          Swal.fire({
            icon: "success",
            title: "Tạo Chương Thành Công",
            timer: 1500,
            position: "center",
            showConfirmButton: false,
          });
        },
        (err) => {
          Swal.fire({
            title: "Có lỗi",
            text: "Lỗi xảy ra khi Tạo Chương.",
            icon: "warning",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      );
    }
  }
}
