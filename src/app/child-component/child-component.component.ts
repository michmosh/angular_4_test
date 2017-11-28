import { Component, OnInit ,Input, Output, EventEmitter , OnChanges , SimpleChanges } from '@angular/core';
import {User} from '../user';
@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent  {
  @Input() data;
  @Input() users:Array<User>;
  @Output() textData:EventEmitter<string> = new EventEmitter<string>();
  @Output() outputUser:EventEmitter<User> = new EventEmitter<User>();
  text:string="";
  outUser:User = {name:'',age:0 ,hasDrivingLicense:false ,city:''};
 
  constructor() { 
   
  }
  sendText(){
    this.textData.emit(this.text)
  }
  setUser(name:string, age:number, hasDrivingLicense:boolean , city:string){
    this.outUser.name = name;
    this.outUser.age = age;
    this.outUser.hasDrivingLicense = hasDrivingLicense;
    this.outUser.city = city; 
  }
  sendUser(name:string, age:number, hasDrivingLicense:boolean , city:string){
    this.setUser(name, age, hasDrivingLicense , city);
    this.outputUser.emit(this.outUser);
  }

  ngOnChanges(changes:SimpleChanges){
   
  }

}
