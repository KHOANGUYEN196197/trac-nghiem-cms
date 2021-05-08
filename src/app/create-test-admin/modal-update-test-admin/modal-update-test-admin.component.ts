import { MatDialog } from "@angular/material/dialog";
import { AuthService } from "./../../services/auth.service";
import { Component, OnInit, Input } from "@angular/core";
import Swal from "sweetalert2";
@Component({
  selector: "app-modal-update-test-admin",
  templateUrl: "./modal-update-test-admin.component.html",
  styleUrls: ["./modal-update-test-admin.component.css"],
})
export class ModalUpdateTestAdminComponent implements OnInit {
  @Input() data;
  constructor(private authService: AuthService, public dialog: MatDialog) {}

  ngOnInit(): void {}
  editSubject() {
    const data = {
      id: this.data.id,
      name: this.data.name,
    };
    if (this.data.name === "") {
      Swal.fire({
        title: "Có lỗi",
        text: "Vui Lòng Nhập Vào Trường Môn Học",
        icon: "warning",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      this.authService.editSubject(data).subscribe(
        (res) => {
          this.dialog.closeAll();
          Swal.fire({
            icon: "success",
            title: "Cập Nhập Môn Học Thành Công",
            timer: 1500,
            position: "center",
            showConfirmButton: false,
          });
        },
        (err) => {
          Swal.fire({
            title: "Có lỗi",
            text: "Lỗi xảy ra khi Cập Nhập Môn Học.",
            icon: "warning",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      );
    }
  }
}
