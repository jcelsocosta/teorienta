import { Component, OnInit } from '@angular/core';
import { Notification } from '../../common/notification';
import { Announcement } from '../../common/announcement';
import { NotificationService } from '../../services/notification/notification.service';
import { AnnouncementService } from '../../services/announcement/announcement.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  announcement: Announcement = new Announcement();
  announcements: Announcement[] = [];
  announcementsAux: string[] = [];

  notification: Notification = new Notification();
  notifications: Notification[] = [];

  constructor(private notificationService: NotificationService, private announcementService: AnnouncementService) { }

  ngOnInit(): void {
    this.getOneNotification();
    const aux = this.getQuestion();
  }

  getOneNotification(): void {
    const objectId = this.loadId();
    this.notificationService.getOneNotification(objectId)
      .subscribe(
        noti => { this.notifications = noti; }
      );

  }
  loadId(): string {
    const obj = localStorage.getItem('objectId');
    return obj;
  }

  getQuestion(): void {
    const objectId = this.loadId();

    this.announcementService.getOneAnnouncements(objectId)
      .subscribe(
        announ => {
          this.announcements = announ;
        }
      );
  }
}
