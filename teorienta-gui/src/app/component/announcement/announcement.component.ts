import { Component, OnInit } from '@angular/core';

import { Announcement } from '../../common/announcement';
import { AnnouncementService } from '../../services/announcement/announcement.service';

import { User } from '../../common/user';
import { UserService } from '../../services/user/user.service';

import { Email } from '../../common/email';
import { EmailService } from '../../services/email/email.service';

import { checkEmpty } from '../../common/validate';


@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.css']
})


export class AnnouncementComponent implements OnInit {
  announcement: Announcement = new Announcement();
  announcements: Announcement[] = [];

  announcementAux: Announcement = new Announcement();
  announcementsAux: Announcement[] = [];

  userAux: User = new User();
  usersAux: User[] = [];

  email: Email;

  stringTo: string;

  constructor(private announcementServices: AnnouncementService, private userService: UserService, private emailService: EmailService) {
    this.announcementServices = announcementServices;
    this.userService = userService;
    this.emailService = emailService;
  }

  ngOnInit(): void {
    this.announcementServices.getAnnouncements()
      .subscribe(
        announ => { this.announcements = announ; }
      );

  }

  copyFrom(announcement: Announcement): void {
    this.announcementsAux.pop();
    this.announcementsAux.push(announcement);
  }

  async subscribeAnnouncement(announcement: Announcement): Promise<void> {
    const errorMessage = this.validateAnnouncement(announcement);

    if (errorMessage) {
      throw new Error(errorMessage);
    }

    this.announcementServices.postAnnouncements(announcement)
      .subscribe(
        announ => {
          if (announ) {
            this.announcements.push(announcement);
            this.announcement = new Announcement();
          }
        }
      );

    this.getSendUserEmail(announcement);
  }

  validateAnnouncement(announcement: Announcement): string {
    const title = announcement.title;
    const category = announcement.category;
    const objective = announcement.objective;
    const dateSubmission = announcement.dateSubmission;
    const urlDocument = announcement.urlDocument;

    if (checkEmpty(title)) {
      return 'O título não pode ficar vazio.';
    }

    if (checkEmpty(category)) {
      return 'A categoria não pode ficar vazia.';
    }

    if (checkEmpty(objective)) {
      return 'O objetivo não pode ficar vazio.';
    }

    if (checkEmpty(dateSubmission)) {
      return 'A data de submissão não pode ficar vazia.';
    }

    if (checkEmpty(urlDocument)) {
      return 'A URL do edital não pode ficar vazia.';
    }

    return null;
  }

  unsubscribeAnnouncement(objectId: string): void {

    this.announcementServices.deleteAnnouncements(objectId)
      .subscribe(
        _ => {
          if (objectId) {
            let index = 0;
            const len = this.announcements.length;
            for (let i = 0; i < len; i++) {
              if (this.announcements[i].title === objectId) {
                index = i;
              }
            }
            this.announcements.splice(index, 1);
          }
        }
      );
  }

  updateAnnouncement(announcement: Announcement): void {

    this.announcementServices.updateAnnouncements(announcement)
      .subscribe(
        _ => {
          if (announcement) {
            let index = 0;
            const len = this.announcements.length;
            for (let i = 0; i < len; i++) {
              if (this.announcements[i]._id === announcement._id) {
                index = i;

              }
            }
            this.announcements[index] = announcement;
            this.announcementAux = new Announcement();
          }
        }
      );
  }

  getSendUserEmail(announcement: Announcement): void {
    this.userService.getEmailUser()
      .subscribe(
        (userArrow: any) => {
          this.usersAux = userArrow;

          for (let i = 0; i < this.usersAux.length; i++) {
            this.sendEmail(this.usersAux[i].email, announcement);
          }
        }
      );
  }
  // montar a mensagem de email

  sendEmail(destinatary: string, announcement: Announcement): any {
    const subject = 'Editais novos foram cadastrados, a Te-orienta separou alguns que pode ser do seu interesse';
    const message = 'Edital: ' + announcement.title + '\n' +
      'Categoria: ' + announcement.category + '\n' +
      'Data de Submissão: ' + announcement.dateSubmission + '\n';
    const to: string = destinatary;
    const email: Email = new Email(to, subject, message);

    this.emailService.postEmail(email)
      .subscribe();

  }
}
