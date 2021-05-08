import { Observable } from 'rxjs';
import { ModalUpdateTestAdminComponent } from "./modal-update-test-admin/modal-update-test-admin.component";
import { AuthService } from "./../services/auth.service";
import { ModalCreateTestAdminComponent } from "./modal-create-test-admin/modal-create-test-admin.component";
import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import Swal from "sweetalert2";
import { debounce } from "lodash";
@Component({
  selector: "app-create-test-admin",
  templateUrl: "./create-test-admin.component.html",
  styleUrls: ["./create-test-admin.component.scss"],
})
export class CreateTestAdminComponent implements OnInit {
  items;
  searchSubject;
  constructor(public dialog: MatDialog, private authService: AuthService) {}

  ngOnInit(): void {
    this.getSubject();
  }
  CreateSubject() {
    const dialogRef = this.dialog.open(ModalCreateTestAdminComponent);

    dialogRef.afterClosed().subscribe((result) => {
      if (result === undefined) {
        this.getSubject();
      }
    });
  }
  editAdmin(item) {
    const dialogRef = this.dialog.open(ModalUpdateTestAdminComponent);
    dialogRef.componentInstance.data = item;
    dialogRef.afterClosed().subscribe((result) => {
      if (result === undefined) {
        this.getSubject();
      }
    });
  }
  getSubject() {
    this.authService.getSubject().subscribe((res) => {
      this.items = res.result;
    });
  }
  deleteSubject(id) {
    Swal.fire({
      title: "Xác Nhận Xóa Môn Học Này?",
      showCancelButton: true,
      confirmButtonText: `Xóa`,
      cancelButtonText: "Hủy",
    }).then((result) => {
      if (result.isConfirmed) {
        this.authService.deleteSubject(id).subscribe((res) => {
          this.getSubject();
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
  modelChangedSearch = debounce((newObj) => {
    this.searchSubject = newObj;
    if (newObj == "") {
      this.getSubject();
    }else{
      this.authService.searchSubjct(this.searchSubject).subscribe((res =>{
        this.items = res.result;
      }))
    }
  }, 500)
}
