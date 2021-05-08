import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {
  disPlayName = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
  phone = new FormControl('', [Validators.required]);
  TD = new FormControl('', [Validators.required]);
  content = new FormControl('', [Validators.required]);
  getErrorMessageDisPlayName() {
    if (this.disPlayName.hasError('required')) {
      return 'Họ Tên Không Được Để Trống';
    }
  }
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Email Không Được Để Trống';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  getErrorMessagePhone() {
    if (this.phone.hasError('required')) {
      return 'Số Điện Thoại Không Được Để Trống';
    }
  }
  getErrorMessageTD() {
    if (this.TD.hasError('required')) {
      return 'Tiêu Đề Không Được Để Trống';
    }
  }
  getErrorMessageContent() {
    if (this.content.hasError('required')) {
      return 'Nội Dung Không Được Để Trống';
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
