import { AuthService } from './../../../services/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ToastrManager } from "ng6-toastr-notifications";
import Swal from "sweetalert2";
@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {
  rating: number;
  constructor( private authService: AuthService,private router: Router, public dialog: MatDialog, public toastr: ToastrManager,) {}

  ngOnInit(): void {}
  voteRating() {
    const userId = localStorage.getItem("UserID");
    const data = {
      title: "",
      content: "",
      userId: userId,
      rate: +this.rating,
    };
    console.log(data);
    this.authService.postRating(data).subscribe((res) => {
      localStorage.setItem("hasFeedback", "true");
      this.dialog.closeAll();
      Swal.fire({
        icon: "success",
        title:
          "FeedBack Thành Công. Đánh Giá của Bạn Đã Được Chúng Tôi Ghi Nhận",
        timer: 1500,
        position: "center",
        showConfirmButton: false,
      });
    });
  }
  logOut(){
    this.dialog.closeAll();
    localStorage.clear();
    this.router.navigate(["/login"]);
    this.toastr.successToastr("Đăng Xuất Thành Công! ", null, {
      toastTimeout: 2000,
    });
  }

}
