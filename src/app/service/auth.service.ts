import {Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders , HttpParams , HttpBackend} from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn:  'root'
})
export class AuthService {

  private httpClient: HttpClient;

  constructor(handler: HttpBackend) {
    this.httpClient = new HttpClient(handler);
  }

  attemptAuth(body): Observable<any> {

    const hashDigest = btoa(environment.CLIENT_ID + ':' + environment.SECRET_ID);

    const params = new HttpParams()
      .set(environment.USERNAME, body.username)
      .set(environment.PASSWORD, body.password)
      .set(environment.GRANT_TYPE, body.grant_type);


    return this.httpClient.post(environment.URL_BASE + '/oauth/token',
      params.toString(),
      {
        headers: new HttpHeaders()
          .set('Content-Type', 'application/x-www-form-urlencoded')
          .set('Authorization', environment.BASIC + ' ' + hashDigest)
      }
    );
  }

}
