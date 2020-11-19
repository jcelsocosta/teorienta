import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {retry} from 'rxjs/operators';
import  {Notification} from '../../common/notification';



@Injectable()
export class NotificationService {

    notifications: Notification[] = [];

    private headers = new HttpHeaders({'Content-Type': 'application/json'});
    private taURL = 'http://localhost:3000';
  
    constructor(private http: HttpClient) {}

    getNotification(): Observable<Notification[]> {
        return this.http.get<Notification[]>(this.taURL + "/notification/notification")
                  .pipe(
                     retry(2)
                   );
      }

    getOneNotification(objectId: any): Observable<Notification[]>{
      const taUrlget = 'http://localhost:3000/notification/oneNotification';
      const url = `${taUrlget}/${objectId}`;
      return this.http.get<Notification[]>(url)
              .pipe(
                retry(2)
              );
    }
    
    postNotification(notification: any): Observable<Notification>{
      const taUrlPost = 'http://localhost:3000/notification/createNotification';
      return this.http.post<any>(taUrlPost,notification,{headers:this.headers})
        .pipe(
          retry(2)
        );
    }

    
    deleteNotification(objectId:String): Observable<{}>{
      const taUrlDelete = 'http://localhost:3000/notification/delete';
      const url = `${taUrlDelete}/${objectId}`;
      return this.http.delete(url,{headers:this.headers})
        .pipe(
          retry(2)
        );
    }

    
}

