import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class MyServiceService {
  arr:Array<any> = [{type:'car',wheels:4}, {type:'truck',wheels:6} , {type:'motorcycle',wheels:2}]
  url:string = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { 
  }

  getData(){
    return this.arr;
  }

  getApiData():Observable<any>{
    return this.http.get(this.url)
      .map(
        data => {
         return data;
        }
      );
  }



}
