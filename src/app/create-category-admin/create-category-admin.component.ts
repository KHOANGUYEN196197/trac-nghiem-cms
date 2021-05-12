import { ModalUpdateCategoryAdminComponent } from "./modal-update-category-admin/modal-update-category-admin.component";
import { ModalCreateCategoryAdminComponent } from "./modal-create-category-admin/modal-create-category-admin.component";
import { MatDialog } from "@angular/material/dialog";
import { Component, OnInit } from "@angular/core";
import Swal from "sweetalert2";
import { AuthService } from "./../services/auth.service";
@Component({
  selector: "app-create-category-admin",
  templateUrl: "./create-category-admin.component.html",
  styleUrls: ["./create-category-admin.component.css"],
})
export class CreateCategoryAdminComponent implements OnInit {
  titleSubject;
  items = [];
  subjects = [];
  subject;
  constructor(private authService: AuthService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.getCategory();
    this.getSubject();
  }
  getSubject() {
    this.authService.getSubject().subscribe((res) => {
      this.subjects = res.result;
    });
   
  }
  getCategory() {    
    this.authService.getCategory().subscribe((res) => {
      this.items = res.result;
    });
  }
  selectSubject(subject){
    this.titleSubject=subject.name
    this.authService.getCategoryByIdSubject(subject.id).subscribe((res =>{
      this.items = res.result;      
    }))
    
  }
  CreateCategory() {
    const dialogRef = this.dialog.open(ModalCreateCategoryAdminComponent);
    dialogRef.afterClosed().subscribe((result) => {
      if (result === undefined) {
        this.getCategory();
      }
    });
  }
  editCategory(item) {
    const dialogRef = this.dialog.open(ModalUpdateCategoryAdminComponent);
    dialogRef.componentInstance.data = item;
    dialogRef.afterClosed().subscribe((result) => {
      if (result === undefined) {
        this.getCategory();
      }
    });
  }
  deleteCategory(id) {
    Swal.fire({
      title: "Xác Nhận Xóa Môn Học Này?",
      showCancelButton: true,
      confirmButtonText: `Xóa`,
      cancelButtonText: "Hủy",
    }).then((result) => {
      if (result.isConfirmed) {
        this.authService.deleteCategory(id).subscribe((res) => {
          this.getCategory();
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
