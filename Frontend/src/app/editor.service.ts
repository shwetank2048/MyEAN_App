import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable()
export class EditorService {

  constructor(private http:HttpClient) { }

  saveImage(object:any){
    console.log("Inservice")
    return this.http.post("http://localhost:3003/canvas/add",object);

  }
  

}
