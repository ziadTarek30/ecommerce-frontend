import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ILoginInfo, ILoginRes, ITokenInfo } from '../models/auth.model';
import { BehaviorSubject, tap } from 'rxjs';
import { jwtDecode } from 'jwt-decode';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/api/v1/auth/login';
  private tokenKey = 'token';
  private authData = new BehaviorSubject<ITokenInfo | null>(null);
  constructor(private _httpClient: HttpClient, private _router: Router) {}

  isLoggedIn() {
    const token = localStorage.getItem('token');
    if (token) {
      const decode = jwtDecode<ITokenInfo>(token);
      if (this.isValidTokenExp(decode.exp))
        return true
    }
    return false;
  }

  login(info: ILoginInfo) {
    return this._httpClient.post<ILoginRes>(this.apiUrl, info).pipe(tap(res => {
      localStorage.setItem(this.tokenKey, res.data);
      const payload = jwtDecode<ITokenInfo>(res.data);
      this.authData.next(payload)
      if (payload.role === 'user')
        this._router.navigate(['home']);
      else
        this._router.navigate(['dashboard']);
    }));
  }

  isValidTokenExp(exp: number) {
    exp = exp * 1000;
    return exp > Date.now();
  }

  authInit() {
    const token = localStorage.getItem(this.tokenKey);
    if (token) {
      const payload = jwtDecode<ITokenInfo>(token);
      if (this.isValidTokenExp(payload.exp)) {
        this.authData.next(payload);
      }
      else {
        this.logout();
      }
    }
  }
  logout() {
    localStorage.removeItem(this.tokenKey);
    this.authData.next(null);
    this._router.navigate(['/auth'])
  }

  getAuthData() {
    return this.authData.asObservable();
  }

  getToken() {
    return localStorage.getItem('token')
  }
}
