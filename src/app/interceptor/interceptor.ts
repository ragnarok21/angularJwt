import { Injectable, Injector } from '@angular/core';
import {  HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { catchError, tap} from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { environment } from '../../environments/environment';
import {TokenStorage} from '../service/token.storage';


@Injectable()
export class Interceptor implements HttpInterceptor {
  constructor(private token: TokenStorage) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    console.log('intercepted request ... ');

    const authRequest = req.clone(
      { headers: req.headers.set('Authorization', environment.BEARER + ' ' + this.token.getToken())});

    console.log('Sending request with new header now ...');

    return next.handle(authRequest)
      .pipe(
        tap(event => {
          if (event instanceof HttpResponse) {
            console.log(event.status);
          }
        }, error => {
          console.error(error.status);
          console.error(error.message);
        }));
  }
}
