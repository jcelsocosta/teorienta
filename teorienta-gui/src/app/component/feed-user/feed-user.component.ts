import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { retry, map, catchError } from 'rxjs/operators';
import axios from 'axios';
import { User } from '../../common/user';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-feed-user',
  templateUrl: './feed-user.component.html',
  styleUrls: ['./feed-user.component.css']
})
export class FeedUserComponent implements OnInit {
  user: Array<any>;
  private userService: UserService;
  userAux: User = new User();
  usersAux: User[] = [];


  constructor(userService: UserService) {
    this.userService = userService;
  }

  ngOnInit(): void {
    this.printUsuarios();
    this.getUserEmail();
  }

  async printUsuarios(): Promise<any> {
    const response = await axios({
      method: 'POST',
      url: 'http://localhost:3000/users/getUsers',
      data: {}
    });

    this.user = response.data.user.map((element: any) => {
      return {
        name: element.name,
        email: element.email,
        username: element.username,
        cnpj: element.cnpj,
        cpf: element.cpf,
        password: element.passowrd,
        userType: element.userType
      };
    });
  }

  getUserEmail(): void {

    this.userService.getEmailUser()
      .subscribe(
        (userArrow: any) => { this.usersAux = userArrow; }
      );
  }
}
