import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users :any;

  constructor(private http:HttpClient) { }

  ngOnInit() {
    let response= this.http.get("http://jsonplaceholder.typicode.com/users");
    //response.subscribe((data)=>console.log(data));
    response.subscribe((data)=>this.users=data);
  }

}
