import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Http, Headers } from '@angular/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import config from '../../../config/config';

const API_ENDPOINT = config.API_ENDPOINT;

// const API_ENDPOINT = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {

	result: any;

  constructor(
  	private http: Http,
  	private router: Router
  	) { }

  add = (credential: any) => {
    credential.role = "ATTENDANCE";
  	const header = this.createAuthorizationHeader();
    return this.http.post(`${API_ENDPOINT}/api/system`, credential, { headers: header })
      .map(res => this.result = res.json());        
  }

  getAttendance = (formData) => {

    console.log("[AttendanceService] :: data: " + JSON.stringify(formData) );

    // dont send empty/null form variables in a query to server !!!
    var query = {};
    for (var propName in formData) { 
      if (formData[propName] === null || formData[propName] === undefined || formData[propName].length === 0) {
        continue;
      }
      query[propName] = formData[propName];
    }

    const header = this.createAuthorizationHeader();
    return this.http.post(`${API_ENDPOINT}/api/attendance/all`, query, { headers: header })
      .map(res => this.result = res.json());        
  }

   getById = (id) => {
    const header = this.createAuthorizationHeader();
    return this.http.get(`${API_ENDPOINT}/api/attendance/${  id}`, { headers: header })
      .map(res => this.result = res.json());        
  } 

  getToken () {
  	console.log( '[AttendanceService] token '+localStorage.getItem('userToken'));
  	return localStorage.getItem('userToken') || '';
  }

  private handleError (error: Response | any ) {
  	console.error('[AttendanceService] :: handleError', error);
  	return Observable.throw(error);
  }

  createAuthorizationHeader () {
  	const headers = new Headers();
  	const token = this.getToken();
  	headers.append('Content-Type', 'application/json; charset=utf-8');
  	headers.append('Authorization', token);
  	return headers;
  }

}//AttendanceService
