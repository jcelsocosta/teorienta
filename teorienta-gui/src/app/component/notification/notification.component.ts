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

  storeDataLocal(notification:any){
    const objectId = notification.titleAnnouncement;
    const n = new Notification()
    let notify = {
      titleAnnouncement: notification.titleAnnouncement,
      objectiveAnnouncement: notification.objectiveAnnouncement,
      fomentationAnnouncement: notification.fomentationAnnouncement,
      categoryAnnouncement: notification.categoryAnnouncement,
      dateSubmissionAnnouncement: notification.dateSubmissionAnnouncement,
      cnpjAnnouncement: notification.cnpjAnnouncement,
      cpfAnnouncement: notification.cpfAnnouncement,
      urlDocumentAnnouncement: notification.urlDocumentAnnouncement,
      availableAnnouncement: notification.availableAnnouncement,
    
      nameUser: notification.nameUser,
      emailUser: notification.emailUser,
      cpfUser: notification.cpfUser,
      cnpjUser: notification.cnpjUser,
      usernameUser: notification.usernameUser
    }
    
    localStorage.setItem('objectId',objectId);
  }

}
