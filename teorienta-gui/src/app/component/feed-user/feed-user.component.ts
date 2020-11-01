import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { retry, map, catchError } from 'rxjs/operators';
import axios from 'axios';

@Component({
  selector: 'app-feed-user',
  templateUrl: './feed-user.component.html',
  styleUrls: ['./feed-user.component.css']
})
export class FeedUserComponent implements OnInit {
  user:Array<any>;

  constructor() {
    
   }
   
  ngOnInit(): void {
    this.printUsuarios();
  }

 async printUsuarios(){
    const response = await axios({
      method: "POST",
      url: "http://localhost:3000/users/getUsers",
      data: {}
    })

    this.user = response.data.user.map((element)=>{
      return {
        name: element.name,
        email: element.email,
        username: element.username,
        cnpj: element.cnpj,
        cpf: element.cpf,
        password: element.passowrd,
        userType: element.userType
      }
    })
  }

  /*
  getUsers(): Observable<User[]>{
    return this.http.get<User[]>("http://localhost:3000/user/user")
      .pipe(
        retry(2)
      );
  } */
}
