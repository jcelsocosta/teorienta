import { Component, OnInit } from '@angular/core';
import { Announcement } from '../../common/announcement';
import { AnnouncementService } from '../../services/announcement/announcement.service';
import { User } from '../../common/user';
import { Notification } from '../../common/notification';

import { NotificationService } from '../../services/notification/notification.service';
import { FlashMessagesService } from 'angular2-flash-messages';


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

  constructor(
    private announcementServices: AnnouncementService,
    private notificationServices: NotificationService,
    private flashMessage: FlashMessagesService
    ) {
      this.announcementServices = announcementServices;
      this.notificationServices = notificationServices;
      this.flashMessage = flashMessage;
  }

  ngOnInit(): void {

    this.announcementServices.getAnnouncements()
      .subscribe(
        announ => { this.announcements = announ; }
      );
  }

  loadUser(): any {
    const response = localStorage.getItem('user');
    const array = JSON.parse(response);
    return array;
  }
  aplicarEdital(announcement: Announcement): void {
    const user = this.loadUser();

    const notify = {
      idAnnouncement: announcement._id as number,
      titleAnnouncement: announcement.title as string,
      objectiveAnnouncement: announcement.objective as string,
      fomentationAnnouncement: announcement.fomentation as number,
      categoryAnnouncement: announcement.category as string,
      dateSubmissionAnnouncement: announcement.dateSubmission as string,
      cnpjAnnouncement: announcement.cnpj as boolean,
      cpfAnnouncement: announcement.cpf as boolean,
      urlDocumentAnnouncement: announcement.urlDocument as string,
      availableAnnouncement: announcement.available as boolean,
      nameUser: user.name as string,
      emailUser: user.email as string,
      cpfUser: user.cpf as boolean,
      cnpjUser: user.cnpj as boolean,
      usernameUser: user.username as string,
    };

    this.notificationServices.postNotification(notify as Notification)
      .subscribe( el => {
        this.flashMessage.show('Edital aplicado com sucesso.', { cssClass: 'alert-success', timeout: 3000 });
      });
  }
}
