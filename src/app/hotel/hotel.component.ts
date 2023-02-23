import { Component } from '@angular/core';
import { HotelDTO } from '../hotel-dto';
import { HotelOperationService } from '../hotel-operation.service';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent {
 hotel:HotelDTO=new HotelDTO(0,'','','','',0,'','',0,'','');
  allHotels:HotelDTO[]=[];
  constructor(private hotelServive:HotelOperationService ){
   
  }


  getAllHotels(){
  this.hotelServive.getAllHotelsFromSpring().subscribe(
    data=>{
      console.log("data :- "+data);
      
      this.allHotels = data;
    },err=>{
      console.log("error from spring ",err);

    } 
  );
  }
  
}
