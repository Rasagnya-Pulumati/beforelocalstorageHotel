import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Hotel } from '../hotel';
import { HotelOperationService } from '../hotel-operation.service';
import { HotelDTO } from '../hotel-dto';
@Component({
  selector: 'app-hotel-detail',
  templateUrl: './hotel-detail.component.html',
  styleUrls: ['./hotel-detail.component.css']
})
export class HotelDetailComponent {
 // hotel:HotelDTO=new HotelDTO(0,'','','','',0,'','',0,'','');
  allHotels:HotelDTO[]=[];
  constructor(private hotelServive:HotelOperationService ){
   
  }


  getByCity(city:string){
    this.hotelServive.getHotelsDetailsbyCity(city).subscribe(
      data=>{
        console.log("data :- "+data);
        
        this.allHotels = data;
      },err=>{
        console.log("error from spring ",err);
  
      } 
    );

  }
  

}