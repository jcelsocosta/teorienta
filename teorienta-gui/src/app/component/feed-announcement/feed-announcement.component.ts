import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { Announcement } from '../../common/announcement';
import { AnnouncementService } from '../../services/announcement/announcement.service';
import { User } from '../../common/user';
import { Notification } from '../../common/notification';

import { NotificationService } from '../../services/notification/notification.service';


@Component({
  selector: 'app-feed-announcement',
  templateUrl: './feed-announcement.component.html',
  styleUrls: ['./feed-announcement.component.css']
})
export class FeedAnnouncementComponent implements OnInit {
  notification: Notification = new Notification();
  notifications: Notification[] = [];

  announcement: Announcement = new Announcement();
  announcements: Announcement[] = [];
  user: User = new User();
  users: User[] = [];

  constructor(private announcementServices: AnnouncementService, private notificationServices: NotificationService) {
  }

  ngOnInit(): void {

    this.announcementServices.getAnnouncements()
      .subscribe(
        announ => { this.announcements = announ }
      );
  }

  loadUser(): any {
    let response = localStorage.getItem("user");
    let array = JSON.parse(response);
    return array;
  }
  aplicarEdital(announcement: Announcement): void {
    const user = this.loadUser();

    let notify = {
      idAnnouncement: announcement._id as Number,
      titleAnnouncement: announcement.title as String,
      objectiveAnnouncement: announcement.objective as String,
      fomentationAnnouncement: announcement.fomentation as Number,
      categoryAnnouncement: announcement.category as String,
      dateSubmissionAnnouncement: announcement.dateSubmission as String,
      cnpjAnnouncement: announcement.cnpj as Boolean,
      cpfAnnouncement: announcement.cpf as Boolean,
      urlDocumentAnnouncement: announcement.urlDocument as String,
      availableAnnouncement: announcement.available as boolean,
      nameUser: user.name as String,
      emailUser: user.email as String,
      cpfUser: user.cpf as Boolean,
      cnpjUser: user.cnpj as Boolean,
      usernameUser: user.username as String,
    }
    this.notificationServices.postNotification(notify as Notification)
      .subscribe();
  }


}
