import { AuthService } from "./../services/auth.service";
import { Component, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import Swal from "sweetalert2";
@Component({
  selector: "app-feedback",
  templateUrl: "./feedback.component.html",
  styleUrls: ["./feedback.component.scss"],
})
export class FeedbackComponent implements OnInit {
  disPlayName = new FormControl("", [Validators.required]);
  email = new FormControl("", [Validators.required, Validators.email]);
  phone = new FormControl("", [Validators.required]);
  TD = new FormControl("", [Validators.required]);
  content = new FormControl("", [Validators.required]);
  getErrorMessageTD() {
    if (this.TD.hasError("required")) {
      return "Tiêu Đề Không Được Để Trống";
    }
  }
  getErrorMessageContent() {
    if (this.content.hasError("required")) {
      return "Nội Dung Không Được Để Trống";
    }
  }

  constructor(private authServive: AuthService) {}

  ngOnInit(): void {}
  postFeedBack() {
    const userId = localStorage.getItem("UserID");
    if (this.TD.value === '' || this.content.value === '') {
      Swal.fire({
        title: "Có lỗi",
        text: "Vui Lòng Nhập Vào Các Input Trống.",
        icon: "warning",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      const data = {
        userId: userId,
        title: this.TD.value,
        content: this.content.value,
      };
      console.log(data);
      this.authServive.postRating(data).subscribe(
        (res) => {
          console.log(res);
          Swal.fire({
            icon: "success",
            title: "Gửi Phản Hồi Thành Công",
            timer: 1500,
            position: "center",
            showConfirmButton: false,
          });
        },
        (err) => {
          Swal.fire({
            title: "Có lỗi",
            text: "Lỗi xảy ra khi Gửi Phản Hồi.",
            icon: "warning",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      );
    }
  }
}
