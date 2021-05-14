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

  constructor(private http: HttpClient) {}
  //login
  login(loginForm): Observable<any> {
    return this.http.post(`/auth/login`, loginForm);
  }
  register(resForm): Observable<any> {
    return this.http.post(`/auth/signup`, resForm);
  }
  //subject
  getSubject(): Observable<any> {
    return this.http.get(
      `/subject?search=&limit=100&offset=0&order=id&direction=DESC`
    );
  }
  postSubject(formData): Observable<any> {
    return this.http.post(`/subject`, formData);
  }
  editSubject(formData): Observable<any> {
    return this.http.put(`/subject`, formData);
  }
  deleteSubject(id): Observable<any> {
    return this.http.delete(`/subject/${id}`);
  }
  searchSubjct(search): Observable<any> {
    return this.http.get(`/subject?search=${search}`);
  }
  //user
  getUser(): Observable<any> {
    return this.http.get(
      `/user?search=&limit=100&offset=0&order=id&direction=DESC`
    );
  }
  deleteUser(id): Observable<any> {
    return this.http.delete(`/user/${id}`);
  }
  //category
  getCategory(): Observable<any> {
    return this.http.get(
      `/category?search=&limit=1000&offset=0&order=subjectId&direction=DESC`
    );
  }
  getCategoryByIdSubject(id): Observable<any> {
    return this.http.get(
      `/category?search=&limit=1000&offset=0&order=id&direction=DESC&subjectId=${id}`
    );
  }
  postCategory(formData): Observable<any> {
    return this.http.post(`/category`, formData);
  }
  updateCategory(formData): Observable<any> {
    return this.http.put(`/category`, formData);
  }
  deleteCategory(id): Observable<any> {
    return this.http.delete(`/category/${id}`);
  }
  //feedback
  getFeedback(): Observable<any> {
    return this.http.get(`/feedback`);
  }
  deleteFeedback(id): Observable<any> {
    return this.http.delete(`/feedback/${id}`);
  }
  getLevel(): Observable<any> {
    return this.http.get(`/level`);
  }
  postQuestion(formData): Observable<any>{
    return this.http.post(`/question`,formData);
  }
  deleteQuestion(id):Observable <any>{
    return this.http.delete(`/question/${id}`)
  }
  postAnswer(formData): Observable<any>{
    return this.http.post(`/answer`, formData);
  }
  getQuestion(): Observable<any>{
    return this.http.get(`/question`);
  }
  getQuestion2(id):Observable<any>{
    return this.http.get(`/question?search=&limit=10&offset=0&order=id&direction=DESC&categoryId=${id}`)
  }
  seenAsnwer(id):Observable<any>{
    return this.http.get(`/answer?search=&limit=1000&offset=0&order=id&direction=DESC&questionId=${id}`)
  }
  updateQuestion(formData): Observable<any> {
    return this.http.put(`/question`,formData);
  }
}
