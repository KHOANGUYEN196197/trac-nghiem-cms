import { Component, OnInit } from "@angular/core";
import { AuthService } from "../services/auth.service";
import {
  FormControl,
  FormBuilder,
  FormGroup,
  Validators,
} from "@angular/forms";
import { ToastrManager } from 'ng6-toastr-notifications';
import { Router } from "@angular/router";
import jwt_decode from "jwt-decode";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  checkToken: any;
  public registrationForm = this.formBuilder.group({
    email: ["tony123@gmail.com", [Validators.required]],
    password: [
      "123456",
      [Validators.required, Validators.maxLength(100), Validators.minLength(5)],
    ],
  });
  public errorMessages = {
    email: [{ type: "required", message: "Tên Đăng Nhập Không Được Để Trống" }],
    password: [
      { type: "required", message: "Mật Khẩu Không Được Để Trống" },
      { type: "maxlength", message: "Mật Khẩu Quá Dài " },
      { type: "minlength", message: "Mật Khẩu Quá Ngắn " },
    ],
  };
  get email() {
    return this.registrationForm.get("email");
  }
  get password() {
    return this.registrationForm.get("password");
  }
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    public toastr: ToastrManager
  ) {
    this.checkToken = localStorage.getItem("token");
    if (this.checkToken !== null) {
      this.router.navigate(["/dashboard"]);
    } else {
      this.router.navigate(["/login"]);
    }
  }
  ngOnInit(): void {}
  login() {
    if (this.email.value !== "" && this.password.value !== "") {
      this.authService.login(this.registrationForm.value).subscribe(
        (res: any) => {
          const decoded : any = jwt_decode(res.result.token);
          localStorage.setItem("UserID", decoded.id);
          localStorage.setItem("Name", decoded.name);
          localStorage.setItem("Role", decoded.role);
          if ( decoded.role === "admin") {
            localStorage.setItem("token", res.result.token);
            const token = localStorage.getItem("token");
            this.toastr.successToastr("Xin Chào " + decoded.name, null, {
              toastTimeout: 2000,
            });
            this.router.navigate(["/InfoUserAdmin"]);
          } else if (decoded.role === "user") {
            localStorage.setItem("token", res.result.token);
            const token = localStorage.getItem("token");
            this.toastr.successToastr("Xin Chào " + decoded.name, null, {
              toastTimeout: 2000,
            });
            this.router.navigate(["/dashboard"]);
          }
        },
        (error) => {
          this.toastr.errorToastr("Tài Khoản Sai Hoặc Chưa Được Đăng Ký");
        }
      );
    }
  }
  register(){
    this.router.navigate(["/register"]);
  }
  resetPassword(){

  }
}
