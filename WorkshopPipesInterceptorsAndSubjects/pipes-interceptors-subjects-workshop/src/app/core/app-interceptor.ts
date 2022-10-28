import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Injectable, Provider } from "@angular/core";
import { nextTick } from "process";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

const API_URL = environment.apiUrl;
@Injectable()
export class AppInterceptor  implements HttpInterceptor{
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
   if(req.url.startsWith('/api')) {
      return next.handle(req.clone({
        url: req.url.replace('/api', API_URL),
        withCredentials: true
      }));
   }
   return next.handle(req);
  }

}

export const appInterceptorProvider: Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AppInterceptor,
  multi: true
}
