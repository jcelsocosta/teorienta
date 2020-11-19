import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {retry} from 'rxjs/operators';
import { User } from '../../common/user';

@Injectable()
export class UserService{
    user: User = new User();
    private headers = new HttpHeaders({'Content-Type': 'application/json'});
    private taURL = 'http://localhost:3000';

    constructor(private http: HttpClient){}

    getEmailUser(): any{
        return this.http.get<User[]>(this.taURL + "/users/listUserEmail")
        .pipe(
           retry(2)
         );
        
    }
}

