import { HttpClientJsonpModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http:HttpClient) { }
    getTodos(){
      return this.http.get("http://jsonplaceholder.typicode.com/todos"); 
    }
}
