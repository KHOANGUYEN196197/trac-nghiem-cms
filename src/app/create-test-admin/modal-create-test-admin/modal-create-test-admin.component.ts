import { Router } from '@angular/router';
import { MatDialog } from "@angular/material/dialog";
import { AuthService } from "./../../services/auth.service";
import { Component, OnInit } from "@angular/core";
import Swal from "sweetalert2";
@Component({
  selector: "app-modal-create-test-admin",
  templateUrl: "./modal-create-test-admin.component.html",
  styleUrls: ["./modal-create-test-admin.component.css"],
})
export class ModalCreateTestAdminComponent implements OnInit {
  nameSubject;
  constructor(private router: Router,private authService: AuthService, public dialog: MatDialog) {}

  ngOnInit(): void {}
  openSubject() {
    const data = {
      name: this.nameSubject,
    };
    if(this.nameSubject ===undefined){
      Swal.fire({
        title: "Có lỗi",
        text: "Vui Lòng Nhập Vào Trường Môn Học",
        icon: "warning",
        showConfirmButton: false,
        timer: 1500,
      });
    }else{
      this.authService.postSubject(data).subscribe(
        (res) => {
          this.dialog.closeAll();
          Swal.fire({
            icon: "success",
            title: "Tạo Môn Học Thành Công",
            timer: 1500,
            position: "center",
            showConfirmButton: false,
          });
        },
        (error) => {
          Swal.fire({
            title: "Có lỗi",
            text: "Lỗi xảy ra khi Tạo Môn Học.",
            icon: "warning",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      );
    }

  }
}
