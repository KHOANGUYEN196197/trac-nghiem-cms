import { MatDialog } from "@angular/material/dialog";
import { AuthService } from "./../services/auth.service";
import { Component, OnInit } from "@angular/core";
import Swal from "sweetalert2";
@Component({
  selector: "app-info-user",
  templateUrl: "./info-user.component.html",
  styleUrls: ["./info-user.component.scss"],
})
export class InfoUserComponent implements OnInit {
  newPass;
  oldPass;
  userId;
  constructor(private authService: AuthService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.userId = localStorage.getItem("UserID");
  }
  changePass() {
    const data = {
      userId: this.userId,
      oldPassword: this.oldPass,
      newPassword: this.newPass,
    };

    if (this.oldPass === undefined || this.newPass === undefined) {
      Swal.fire({
        title: "Có lỗi",
        text: "Vui Lòng Nhập Vào Input Trống",
        icon: "warning",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      this.authService.changePass(data).subscribe(
        (res) => {
          this.dialog.closeAll();
          Swal.fire({
            icon: "success",
            title: "Đổi Mật Khẩu Thành Công",
            timer: 1500,
            position: "center",
            showConfirmButton: false,
          });
        },
        (err) => {
          Swal.fire({
            title: "Có lỗi",
            text: "Lỗi xảy ra khi Đổi Mật Khẩu.",
            icon: "warning",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      );
    }
  }
}
