import {Injectable, Inject} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry, map, catchError } from 'rxjs/operators';
import { Email } from '../../common/email';

@Injectable()
export class EmailService{

    email: Email;

    private headers = new HttpHeaders({'Content-Type': 'application/json'});
    private taURL = 'http://localhost:3000';

    constructor(private http: HttpClient){

    }

    postEmail(email: Email): any{
       
        return this.http.post<any>(this.taURL+"/email/sendEmail",email,{headers:this.headers})
        .pipe(
          retry(2)
        );
    }
}

