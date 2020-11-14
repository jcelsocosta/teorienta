import { Component, OnInit } from '@angular/core';
import { Notification} from '../../common/notification';
import { Announcement } from '../../common/announcement';
import {Observable} from 'rxjs';
import {NotificationService} from '../../services/notification/notification.service';
import {AnnouncementService } from '../../services/announcement/announcement.service';
import { AnonymousSubject } from 'rxjs/internal/Subject';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  announcement: Announcement = new Announcement();
  announcements: Announcement[] = [];
  announcementsAux: String [] = [];
  
  notification: Notification = new Notification();
  notifications: Notification[] = [];
  
  constructor(private notificationService: NotificationService, private announcementService: AnnouncementService) {
    
   }

  ngOnInit(): void {
    this.getOneNotification();
    const aux = this.getQuestion();
    
  }

  getOneNotification(){
    const objectId = this.loadId();
    this.notificationService.getOneNotification(objectId)
      .subscribe(
        noti => {this.notifications = noti}
      );
      
  }
  loadId(): String{
    const obj = localStorage.getItem('objectId');
    return obj;
  }

  getQuestion(){
    const objectId = this.loadId();
    
    this.announcementService.getOneAnnouncements(objectId)
        .subscribe(
            announ => {  
              this.announcements = announ;
            }
        );
  }

  

}
