import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import config from '../../../config/config';

const API_ENDPOINT = config.API_ENDPOINT;
//const API_ENDPOINT = 'http://localhost:3000';
//const API_ENDPOINT = 'http://192.168.1.13:3000';

@Injectable({
  providedIn: 'root'
})
export class FinanceManagerService {
  result: any;
  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  add = (credential: any) => {
    credential.role = "FINANCE-MANAGER";
  	const header = this.createAuthorizationHeader();
    return this.http.post(`${API_ENDPOINT}/api/user` + credential, { headers: header })
      // .subscribe((res:any) => this.result = res.json());        
  }

   getFinanceManagers = (formData: any) => {
    console.log("[FinanceManagerService] :: data: " + JSON.stringify(formData) );
    // dont send empty/null form variables in a query to server !!!
    var query: any = {};
    for (var propName in formData) { 
      if (formData[propName] === null || formData[propName] === undefined || formData[propName].length === 0) {
        continue;
      }
      query[propName] = formData[propName];
    }
    const header = this.createAuthorizationHeader();
    return this.http.post(`${API_ENDPOINT}/api/financeManagers/all` + query, { headers: header })
      // .subscribe((res: any) => this.result = res.json());        
  }

   getById = (id: any) => {
    const header = this.createAuthorizationHeader();
    return this.http.get(`${API_ENDPOINT}/api/financeManager/${  id}`+ { headers: header })
      // .subscribe((res: any) => this.result = res.json());        
  }

  getToken () {
  	console.log( '[SectionService] token '+localStorage.getItem('userToken'));
    return localStorage.getItem('userToken') || '';
  }
  private handleError (error: Response | any) {
    console.error('[FinanceMangerService] :: handleError', error);
    return error;
  }

  createAuthorizationHeader () {
        const headers = new Headers();
        const token = this.getToken();
        headers.append('Content-Type', 'application/json; charset=utf-8');
        headers.append('Authorization', token);
        return headers;
  } 
}//FinanceManagerService
