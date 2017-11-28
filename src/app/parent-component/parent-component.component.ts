import { Component, OnInit, Input, Output , EventEmitter } from '@angular/core';
import {User} from '../user';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css']
})
export class ParentComponentComponent {
  @Input() data;
  @Input() users:Array<User>;
  @Output() textData:EventEmitter<String> = new EventEmitter<String>();
  @Output() outputUser:EventEmitter<User> = new EventEmitter<User>();
  user:User;
  text:string;
  constructor() { 

  }

  getText(message:string) : void{
    this.text = message;
    this.resendText();
  }

  resendText():void{
    this.textData.emit(this.text);
  }

  getUser(user:User):void {
    this.user = user;
    this.outputUser.emit(this.user);
  }




}
