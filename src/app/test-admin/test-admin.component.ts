import { AuthService } from "./../services/auth.service";
import { Component, OnInit } from "@angular/core";
import Swal from "sweetalert2";
@Component({
  selector: "app-test-admin",
  templateUrl: "./test-admin.component.html",
  styleUrls: ["./test-admin.component.scss"],
})
export class TestAdminComponent implements OnInit {
  users;
  user;
  selectUsers;
  tests;
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.getAllUser();
    this.getTest();
  }

  getAllUser() {
    this.authService.getUser().subscribe((res) => {
      this.users = res.result;
    });
  }
  selectUser(user) {
    this.authService.getTestByUser(user.id).subscribe((res: any) =>{
      this.tests = res.result;
    })
  }
  getTest() {
    this.authService.getAllTest().subscribe((res: any) => {
      this.tests = res.result;
      console.log(this.tests);
      
    });
  }
  deleteTest(id){
    Swal.fire({
      title: "Xác Nhận Xóa Bài Thi Này?",
      showCancelButton: true,
      confirmButtonText: `Xóa`,
      cancelButtonText: "Hủy",
    }).then((result) => {
      if (result.isConfirmed) {
        this.authService.deleteTest(id).subscribe((res) => {
          this.getTest();
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
