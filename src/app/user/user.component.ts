import { HttpClient } from '@angular/common/http';
import { AstMemoryEfficientTransformer } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users :any;
  todos : any;

  constructor(private http:HttpClient, private service:TodoService) { }

  ngOnInit() {
    let response= this.http.get("http://jsonplaceholder.typicode.com/users");
    //response.subscribe((data)=>console.log(data));
    response.subscribe((data)=>this.users=data);

    this.todos = this.service.getTodos().subscribe((data) =>this.todos=data);
  }

}
