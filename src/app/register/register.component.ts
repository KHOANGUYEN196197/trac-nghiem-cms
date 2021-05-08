import { Component, OnInit } from '@angular/core';
import { AuthService } from "../services/auth.service";
import {
  FormControl,
  FormBuilder,
  FormGroup,
  Validators,
} from "@angular/forms";
import { ToastrManager } from 'ng6-toastr-notifications';
import { Router } from "@angular/router";
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  checkToken : any;
  public registrationForm = this.formBuilder.group({
    name: ["", [Validators.required]],
    email: ["", [Validators.required]],
    password: [
      "",
      [Validators.required, Validators.maxLength(100), Validators.minLength(5)],
    ],
    phone: [
      "",
      [Validators.required],
    ],
  });
  public errorMessages = {
    name: [{ type: "required", message: "Họ Và Tên Không Được Để Trống" }],
    email: [{ type: "required", message: "Tên Đăng Nhập Không Được Để Trống" }],
    password: [
      { type: "required", message: "Mật Khẩu Không Được Để Trống" },
      { type: "maxlength", message: "Mật Khẩu Quá Dài " },
      { type: "minlength", message: "Mật Khẩu Quá Ngắn " },
    ],
    phone: [
      { type: "required", message: "Số Điện Thoại Không Được Để Trống" },
    ],
  };
  get name() {
    return this.registrationForm.get("name");
  }
  get email() {
    return this.registrationForm.get("email");
  }
  get password() {
    return this.registrationForm.get("password");
  }
  get phone() {
    return this.registrationForm.get("phone");
  }
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    public toastr: ToastrManager
  ) 
  {}
  ngOnInit(): void {}
  register() {
    this.authService.register(this.registrationForm.value).subscribe((res =>{
      this.toastr.successToastr("Đăng Ký Tài Khoản Thành Công!");
      this.router.navigate(["/login"]);
    }),
    (error) => {
      this.toastr.errorToastr("Có Lỗi Khi Đăng Ký Tài Khoản");
    })
  }
  login(){
    this.router.navigate(["/login"]);
  }
}
