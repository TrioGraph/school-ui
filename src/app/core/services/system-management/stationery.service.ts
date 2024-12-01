import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import config from '../../../config/config';

const API_ENDPOINT = config.API_ENDPOINT;


// const API_ENDPOINT = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class StationeryService {

	result: any;

  constructor(
  	private http: HttpClient,
  	private router: Router
  	) {}

  add = (credential: any) => {
  	const header = this.createAuthorizationHeader();
  	return this.http.post(`${API_ENDPOINT}/api/system`+ credential, { headers: header })
  	// .subscribe((res: any) => this.result = res.json());
  }

  getStationery = (formData: any) => {

    console.log("[StationeryService] :: data: " + JSON.stringify(formData) );

    // dont send empty/null form variables in a query to server !!!
    var query: any = {};
    for (var propName in formData) { 
      if (formData[propName] === null || formData[propName] === undefined || formData[propName].length === 0) {
        continue;
      }
      query[propName] = formData[propName];
    }

    const header = this.createAuthorizationHeader();
    // return this.http.post(`${API_ENDPOINT}/api/stationery`, query, { headers: header })
    return this.http.post(`${API_ENDPOINT}/api/stationery`, query)
      // .subscribe((res: any)=> this.result = res.json());        
  }


  getToken () {
  	console.log( '[StationeryService] token '+localStorage.getItem('userToken'));
  	return localStorage.getItem('userToken') || '';
  }

  private handleError (error: Response | any ) {
  	console.error('[StationeryService] :: handleError', error);
  	return error;
  }

  createAuthorizationHeader () {
  	const headers = new Headers();
  	const token = this.getToken();
  	headers.append('Content-Type', 'application/json; charset=utf-8');
  	headers.append('Authorization', token);
  	return headers;
  }

}//StationeryService
