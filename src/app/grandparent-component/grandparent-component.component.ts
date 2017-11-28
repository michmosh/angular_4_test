import { Component, OnInit , Input } from '@angular/core';
import {User} from '../user';
@Component({
  selector: 'app-grandparent-component',
  templateUrl: './grandparent-component.component.html',
  styleUrls: ['./grandparent-component.component.css']
})
export class GrandparentComponentComponent  {
  data:string = "im a string from grandparent component";
  name:string = ""; 
  age:number = 0; 
  hasDrivingLicense:boolean = false;
  city:string="";
  users:Array<User>=[];
  textFromChild:string;
  user:User = new User(this.name, this.age,this.hasDrivingLicense,this.city);
  constructor() {
    
  }
  setCity(city:string):void{
    this.city = city;
  }
  createUser():void{
    this.users.push(new User(this.name , this.age , this.hasDrivingLicense, this.city));
  }
  // gets text from child after click event 
  getText(text:string):void{
    this.textFromChild = text;
  }
  //gets the User object from child after change on child input
  getUser(user:User) :void{
    this.user = new User(user.name , user.age , user.hasDrivingLicense , user.city);

  }


 

}
