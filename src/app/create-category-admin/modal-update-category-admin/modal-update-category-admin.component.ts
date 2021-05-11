import { MatDialog } from '@angular/material/dialog';
import { AuthService } from './../../services/auth.service';
import { Component, Input, OnInit } from '@angular/core';
import Swal from "sweetalert2";
@Component({
  selector: 'app-modal-update-category-admin',
  templateUrl: './modal-update-category-admin.component.html',
  styleUrls: ['./modal-update-category-admin.component.css']
})
export class ModalUpdateCategoryAdminComponent implements OnInit {
@Input() data;
  constructor(private authService: AuthService, public dialog: MatDialog) { }

  ngOnInit(): void {
    console.log(this.data);
    
  }
  updateCategory(){
    const data = {
      id: this.data.id,
      name: this.data.name
    }
    if (this.data.name === "") {
      Swal.fire({
        title: "Có lỗi",
        text: "Vui Lòng Nhập Vào Trường Tên Chương",
        icon: "warning",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      this.authService.updateCategory(data).subscribe(
        (res) => {
          this.dialog.closeAll();
          Swal.fire({
            icon: "success",
            title: "Cập Nhập Chương Thành Công",
            timer: 1500,
            position: "center",
            showConfirmButton: false,
          });
        },
        (err) => {
          Swal.fire({
            title: "Có lỗi",
            text: "Lỗi xảy ra khi Cập Nhập Chương.",
            icon: "warning",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      );
    }
    
  }

}
