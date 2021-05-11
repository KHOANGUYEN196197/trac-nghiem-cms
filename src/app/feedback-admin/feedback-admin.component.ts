import { AuthService } from "./../services/auth.service";
import { Component, OnInit } from "@angular/core";
import Swal from "sweetalert2";

@Component({
  selector: "app-feedback-admin",
  templateUrl: "./feedback-admin.component.html",
  styleUrls: ["./feedback-admin.component.css"],
})
export class FeedbackAdminComponent implements OnInit {
  items = [];
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.getFeedback();
  }
  getFeedback() {
    this.authService.getFeedback().subscribe((res) => {
      this.items = res.result;
    });
  }
  deleteFeedback(id) {
    Swal.fire({
      title: "Xác Nhận Xóa Feedback Này?",
      showCancelButton: true,
      confirmButtonText: `Xóa`,
      cancelButtonText: "Hủy",
    }).then((result) => {
      if (result.isConfirmed) {
        this.authService.deleteFeedback(id).subscribe((res) => {
          this.getFeedback();
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
