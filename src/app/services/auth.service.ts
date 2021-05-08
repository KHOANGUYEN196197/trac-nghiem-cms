import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "./../../environments/environment";
interface Location {
  latitude: string;
  longitude: string;
}
@Injectable({
  providedIn: "root",
})
export class AuthService {
  logId;
  url = environment.apiUrl;
  
  constructor(private http: HttpClient) {
  }

  login(loginForm): Observable<any> {
      return this.http.post(`/auth/login`, loginForm);
  }
  register(resForm):  Observable<any>{
    return this.http.post(`/auth/signup`, resForm);
  }
  abc(){
    
  }

}
