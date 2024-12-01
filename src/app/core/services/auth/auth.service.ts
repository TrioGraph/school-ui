import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import config from '../../../config/config';
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

const API_ENDPOINT = config.API_ENDPOINT;
//const API_ENDPOINT = 'http://localhost:3000';
//const API_ENDPOINT = 'http://192.168.1.13:3000';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private token: any;
  result: any;
  private loggedIn = new BehaviorSubject<boolean>(false);

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}
  

  get isLoggedIn() {

    if(this.getToken().length > 0 ) {
      this.loggedIn.next(true);
    }

    return this.loggedIn.asObservable();
  }

  login = (credential: any) => {
    return this.http.post(`${API_ENDPOINT}/api/auth/login`, credential)
      // .subscribe((res: any) => this.result = res.json());        
  }

  saveToken (token: string) {
    localStorage.setItem('userToken', token);
  }

  getToken () {
    return localStorage.getItem('userToken') || '';
  }

  saveUser(name: string, id: string, role: string) {
    localStorage.setItem('userName', name);
    localStorage.setItem('userId', id);
    localStorage.setItem('role', role);
  }


  private handleError (error: Response | any) {
    console.error('[AuthService] :: handleError', error);
    return error;
  }

  loginDone() {
  	this.loggedIn.next(true);
    this.router.navigate(['/']);
  }

  logout() {
    this.loggedIn.next(false);
    localStorage.removeItem('userToken');
    localStorage.removeItem('selected_stu_id');
    localStorage.removeItem('userName');
    localStorage.removeItem('userId');
    localStorage.removeItem('role');
    this.router.navigate(['/auth']);
  }
  
}//AuthService