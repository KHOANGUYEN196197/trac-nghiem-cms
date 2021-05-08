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
  getSubject():  Observable<any>{
    return this.http.get(`/subject?search=&limit=100&offset=0&order=id&direction=DESC` );
  }
  postSubject(formData): Observable<any>{
    return this.http.post(`/subject`, formData);
  }
  editSubject(formData): Observable<any>{
    return this.http.put(`/subject`, formData)
  }
  deleteSubject(id): Observable<any>{
    return this.http.delete(`/subject/${id}`);
  }
  searchSubjct(search):Observable<any>{
    return this.http.get(`/subject?search=${search}`);
  }
  getUser(): Observable<any>{
    return this.http.get(`/user?search=&limit=100&offset=0&order=id&direction=DESC`);
  }
  deleteUser(id):Observable<any>{
    return this.http.delete(`/user/${id}`);
  }

}
