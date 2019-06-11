import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

const endpoint = 'http://ec2-18-188-166-192.us-east-2.compute.amazonaws.com:8080/query?name=';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) {
  }

  getData(query): Observable<any> {
    return this.http.get(endpoint + query);
  }

  getTableData(query): Observable<any> {
    return this.http.get(endpoint + query, { responseType: 'text' });
  }
}
