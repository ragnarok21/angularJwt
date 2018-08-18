import { Injectable } from '@angular/core';

const TOKEN_KEY = 'AuthToken';
const TOKEN_BEARER = 'BearerToken';

@Injectable({
  providedIn:  'root'
})
export class TokenStorage {

  constructor() { }

  signOut() {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.clear();
  }

  public saveToken(token: string) {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY,  token);
  }

  public getToken(): string {
    return sessionStorage.getItem(TOKEN_KEY);
  }

  public saveTokenBearer(tokenBearer: string) {
    window.sessionStorage.removeItem(TOKEN_BEARER);
    window.sessionStorage.setItem(TOKEN_BEARER, tokenBearer);
  }
}
