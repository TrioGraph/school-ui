import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import config from '../../../config/config';
import { Injectable } from '@angular/core';

const API_ENDPOINT = config.API_ENDPOINT;

// const API_ENDPOINT = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {

	result: any;

  constructor(
  	private http: HttpClient,
  	private router: Router
  	) { }

  add = (credential: any) => {
    credential.role = "ATTENDANCE";
  	const header = this.createAuthorizationHeader();
    return this.http.post(`${API_ENDPOINT}/api/system` + credential, { headers: header })
      .subscribe((res: any) => this.result = res.json());        
  }

  getAttendance = (formData: any) => {

    console.log("[AttendanceService] :: data: " + JSON.stringify(formData) );

    // dont send empty/null form variables in a query to server !!!
    var query: any = {};
    for (var propName in formData) { 
      if (formData[propName] === null || formData[propName] === undefined || formData[propName].length === 0) {
        continue;
      }
      query[propName] = formData[propName];
    }

    const header = this.createAuthorizationHeader();
    return this.http.post(`${API_ENDPOINT}/api/attendance/all`+ query, { headers: header })
      // .subscribe((res: any) => this.result = res.json());        
  }

   getById = (id: any) => {
    const header = this.createAuthorizationHeader();
    // return this.http.get(`${API_ENDPOINT}/api/attendance/${  id}`, { headers: header })
    return this.http.get(`${API_ENDPOINT}/api/attendance/${  id}`)
      .subscribe((res: any) => this.result = res.json());        
  } 

  getToken () {
  	console.log( '[AttendanceService] token '+localStorage.getItem('userToken'));
  	return localStorage.getItem('userToken') || '';
  }

  private handleError (error: Response | any ) {
  	console.error('[AttendanceService] :: handleError', error);
  	return error;
  }

  createAuthorizationHeader () {
  	const headers = new Headers();
  	const token = this.getToken();
  	headers.append('Content-Type', 'application/json; charset=utf-8');
  	headers.append('Authorization', token);
  	return headers;
  }

}//AttendanceService
