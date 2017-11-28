import { Injectable } from '@angular/core';
import { MyServiceService } from './my-service.service';

@Injectable()
export class NewServiceService {
  arr:any={};
  constructor(private apiService:MyServiceService) {

   }
  getData(){
     this.arr = this.apiService.getData() ;
  }
  sendData(){
    this.getData();
    return this.arr;
  }

  getApiData(){
    return this.apiService.getApiData();
  }

}
