import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from "@angular/common/http";

import { Observable } from "rxjs";
import { environment } from "../../environments/environment";
@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {
  token;
  constructor() {}
  public intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.token = localStorage.getItem("token");
    if (this.token) {
      req = req.clone({
        url: this.prepareUrl(req.url),
        setHeaders: {
          // enctype: 'multipart/form-data',
          "Content-Type": "application/json",
          Authorization: "Bearer " + this.token,
        },
      });
    } else {
      req = req.clone({
        url: this.prepareUrl(req.url),
      });
      console.log(req.url);
    }
    return next.handle(req);
  }
  private isAbsoluteUrl(url: string): boolean {
    const absolutePattern = /^https?:\/\//i;
    return absolutePattern.test(url);
  }
  private prepareUrl(url: string): string {
    url = this.isAbsoluteUrl(url) ? url : environment.apiUrl + url;
    console.log(url);
    //ko vao day
    return url;
  }
  public isAuthenticated() {
    return this.token != null;
  }
}
