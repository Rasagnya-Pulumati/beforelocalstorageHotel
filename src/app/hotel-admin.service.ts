import { Injectable } from '@angular/core';
import { Hotel } from './hotel';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HotelAdminService {

  constructor(private http:HttpClient) { }
  //hotelArr:Hotel[] = [];
  baseURL:string = 'http://localhost:2004';
  endpoint=this.baseURL+'/Hotel/add'

  addHotel(hotel:Hotel):Observable<Object>
  {
    
    console.log('Hotel Service - Create Hotel called ');
    return this.http.post<Hotel>(`${this.endpoint}`,hotel);
  }
  
}
