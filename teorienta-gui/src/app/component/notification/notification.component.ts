import { Component, OnInit } from '@angular/core';
import {Notification} from '../../common/notification';
import {NotificationService} from '../../services/notification/notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  notification: Notification = new Notification();
  notifications: Notification [] = [];


  constructor(private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.notificationService.getNotification()
      .subscribe(
        noti => { this.notifications = noti}
      );
  }

  storeDataLocal(title:any, nome:any){
    localStorage.setItem('title',title);
    localStorage.setItem('username',nome);
    
  }

}
