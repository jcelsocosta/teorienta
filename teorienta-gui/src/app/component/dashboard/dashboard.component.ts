import { Component, OnInit } from '@angular/core';
import { Notification } from '../../common/notification';
import { NotificationService } from 'src/app/services/notification/notification.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  notification: Notification = new Notification();
  notifications: Notification[] = [];


  constructor(private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.notificationService.getNotification()
      .subscribe(
        noti => { this.notifications = noti }
      );
  }

}
