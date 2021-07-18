import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse} from '@angular/common/http';
import { throwError } from 'rxjs/internal/observable/throwError';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})


export class ServerHttpService {
  
  private thhpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json',
      //Authorization : 'my-auth-token'
  
    }),
  };
//duong dan chinh tren sever
  private REST_API_SERVER='http://localhost:3000';
//dich vu Angular cung cap
  constructor(private httpClient: HttpClient) { }

  // khai bao RequestMaping voi Server
 public getProfile(): Observable<any>{
   const url= `${this.REST_API_SERVER}/profile`;
   return this.httpClient
   .get<any>(url, this.thhpOptions)
  ;
 }

 public getComment(): Observable<any>{
  const url= `${this.REST_API_SERVER}/comments`;
  return this.httpClient
  .get<any>(url, this.thhpOptions)
 ;
}





 // exception khi xay ra  
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }
}
