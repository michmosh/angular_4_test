import { Component, OnInit } from '@angular/core';
import { NewServiceService } from '../new-service.service';
@Component({
  selector: 'app-cars-component',
  templateUrl: './cars-component.component.html',
  styleUrls: ['./cars-component.component.css']
})
export class CarsComponentComponent implements OnInit {
  cars:Array<any>;
  users:Array<any>;
  constructor(private service:NewServiceService) {

   }

  ngOnInit():void{
    this.cars =  this.service.sendData(); 
    this.service.getApiData().subscribe(data => {
      this.users = data;
  });
  }

}
