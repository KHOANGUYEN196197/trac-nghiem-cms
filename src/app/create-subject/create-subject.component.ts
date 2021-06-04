import { AuthService } from "./../services/auth.service";
import { ModalEditSubjectComponent } from "./modal-edit-subject/modal-edit-subject.component";
import { ModalDeleteSubjectComponent } from "./modal-delete-subject/modal-delete-subject.component";
import { ModalCreateSubjectComponent } from "./modal-create-subject/modal-create-subject.component";
import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Router } from "@angular/router";
import Swal from "sweetalert2";
@Component({
  selector: "app-create-subject",
  templateUrl: "./create-subject.component.html",
  styleUrls: ["./create-subject.component.scss"],
})
export class CreateSubjectComponent implements OnInit {
  subjects = [];
  userId;
  constructor(
    public dialog: MatDialog,
    private router: Router,
    private authServive: AuthService
  ) {}

  ngOnInit(): void {
    this.userId = localStorage.getItem("UserID");
    this.getTestWithUserId();
  }
  CreateSubject() {
    const dialogRef = this.dialog.open(ModalCreateSubjectComponent);

    dialogRef.afterClosed().subscribe((result) => {
      if (result === undefined) {
      }
    });
  }
  deleteTest(id) {
    Swal.fire({
      title: "Xác Nhận Xóa bài Test Này?",
      showCancelButton: true,
      confirmButtonText: `Xóa`,
      cancelButtonText: "Hủy",
    }).then((result) => {
      if (result.isConfirmed) {
        this.authServive.deleteTest(id).subscribe((res) => {
          this.getTestWithUserId();
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
  getTestWithUserId() {
    this.authServive.getTestWithUserId(this.userId).subscribe((res) => {
      this.subjects = res.result;      
    });
  }
}
