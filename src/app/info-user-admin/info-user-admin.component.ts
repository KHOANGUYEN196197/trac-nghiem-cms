import { AuthService } from "./../services/auth.service";
import { Component, OnInit } from "@angular/core";
import Swal from "sweetalert2";

@Component({
  selector: "app-info-user-admin",
  templateUrl: "./info-user-admin.component.html",
  styleUrls: ["./info-user-admin.component.scss"],
})
export class InfoUserAdminComponent implements OnInit {
  items = [];
  constructor(private authService: AuthService) {}

  ngOnInit(): void {this.getUser()}
  getUser(){
    this.authService.getUser().subscribe((res =>{
      this.items = res.result
    }))
  }
  deleteAcount(id) {
    Swal.fire({
      title: "Xác Nhận Xóa Acount Này?",
      showCancelButton: true,
      confirmButtonText: `Xóa`,
      cancelButtonText: "Hủy",
    }).then((result) => {
      if (result.isConfirmed) {
        this.authService.deleteUser(id).subscribe((res =>{
          this.getUser();
          Swal.fire({
            icon: "success",
            title: "Xóa thành công",
            timer: 1500,
            position: "center",
            showConfirmButton: false,
          });
        }))
      }
    });
  }
}
