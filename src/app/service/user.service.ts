import {Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders , HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn:  'root'
})
export class UserService {
  constructor(private http: HttpClient) {
  }

  helloWorld(): Observable<any> {

    return this.http.get(environment.URL_BASE + '/springjwt/hello');
  }

}
