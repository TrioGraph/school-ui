import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

const API_ENDPOINT = 'http://localhost:3000';


@Injectable({
  providedIn: 'root'
})
export class SectionService {

  result: any;

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}
  

  add = (credential: any) => {
  	const header = this.createAuthorizationHeader();
    return this.http.post(`${API_ENDPOINT}/api/section`+ credential, { headers: header })
      .subscribe((res: any)=> this.result = res.json());        
  }

  getToken () {
  	console.log( '[SectionService] token '+localStorage.getItem('userToken'));
    return localStorage.getItem('userToken') || '';
  }

  private handleError (error: Response | any) {
    console.error('[SectionService] :: handleError', error);
    return error;
  }

  createAuthorizationHeader () {
        const headers = new Headers();
        const token = this.getToken();
        headers.append('Content-Type', 'application/json; charset=utf-8');
        headers.append('Authorization', token);
        return headers;
    }

 
  
}//SectionService