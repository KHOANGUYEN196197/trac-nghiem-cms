import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  private jwtToken;
  constructor() {
    const token: any = localStorage.getItem('token');
    if (token) {
      this.jwtToken = token;
    }
  }
  public isAuthenticated() {
    return this.jwtToken != null;
  }
}
