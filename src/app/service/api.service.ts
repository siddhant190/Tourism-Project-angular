import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private httpHeaders: any;
  access_token = ""

  constructor(private http: HttpClient) {
    this.access_token = sessionStorage.getItem("access_token") || "";
    if(this.access_token)
    this.updateCommonHeaders()
  }

  updateCommonHeaders(){
    this.httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + sessionStorage.getItem("access_token")
      
    });
  }

  private getHttpOptions(): any {
    return {
      headers: this.httpHeaders,
    };
  }

  private baseUrl = 'http://localhost:8080';

loginUser(credentials: { email: string, password: string }): Observable < any > {
  return this.http.post<any>(`${this.baseUrl}/loginAccount`, credentials);
}

register(user: any): Observable < any > {
  return this.http.post<any>(`${this.baseUrl}/register`, user);
}

getAllPackages(): Observable < any > {
  return this.http.get<any>(`${this.baseUrl}/getAllPackage`, this.getHttpOptions());
}

getPackageById(id: any): Observable < any > {
  const data ={...{
    params:new HttpParams().set('id',id),    
  }, ...this.getHttpOptions()}
  console.log(data)
  return this.http.get<any>(`${this.baseUrl}/getPackageById`, data);
}

addPackage(tourPackage: any): Observable < any > {
  console.log("Tour Package Data:", tourPackage);
  return this.http.post<any>(`${this.baseUrl}/addPackage`, tourPackage,this.getHttpOptions());
}

bookPackage(bookingData:any) {
  console.log(bookingData)
  return this.http.post(`${this.baseUrl}/addBooking`,bookingData,this.getHttpOptions());
}

deletePackage(id:number): Observable < any > {
  let param = new HttpParams().set('id',id);
  return this.http.delete(`${this.baseUrl}/deletePack`,{headers: this.httpHeaders, params:param,responseType: 'text'});
}

updatePackage(id: any,packageData: any): Observable < any > {
  const options ={...{
    params:new HttpParams().set('id',id),
    
  }, ...this.getHttpOptions()}
  
  return this.http.put<any>(`${this.baseUrl}/updatePackages`,packageData,options);
}


getAllUsers(): Observable < any > {
  return this.http.get<any>(`${this.baseUrl}/getAllUser`,this.getHttpOptions());
}


getAllBooking(): Observable < any > {
  return this.http.get<any>(`${this.baseUrl}/getAllBooking`,this.getHttpOptions());
}

getBookingByUser(username:any) : Observable<any>{
  const data ={...{
    params:new HttpParams().set('username',username),    
  }, ...this.getHttpOptions()}
  console.log(data)
  return this.http.get<any>(`${this.baseUrl}/getBookingByUserId`,data);
}



}