import { Component, OnInit } from '@angular/core';

import { Announcement } from '../../common/announcement';
import { AnnouncementService } from '../../services/announcement/announcement.service';

import { User } from '../../common/user';
import { UserService } from '../../services/user/user.service';

import { Email } from '../../common/email';
import { EmailService } from '../../services/email/email.service';

import { checkEmpty } from '../../common/validate'


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

  stringTo: String = "";

  constructor(private announcementServices: AnnouncementService, private userService: UserService, private emailService: EmailService) {

  }

  ngOnInit(): void {
    this.announcementServices.getAnnouncements()
      .subscribe(
        announ => { this.announcements = announ }
      );

  }

  copyFrom(announcement: Announcement) {
    this.announcementsAux.pop();
    this.announcementsAux.push(announcement)
  }

  async subscribeAnnouncement(announcement: Announcement) {
    console.log(announcement)

    const errorMessage = await this.validateAnnouncement(announcement)
    if (errorMessage) {
      throw new Error(errorMessage);
    }

    this.announcementServices.postAnnouncements(announcement)
      .subscribe(
        announ => {
          if (announ) {
            this.announcements.push(announcement)
            this.announcement = new Announcement();
          }
        }
      );

    this.getSendUserEmail(announcement);
  }

  async validateAnnouncement(announcement: Announcement): Promise<string> {
    const title = announcement.title
    const category = announcement.category
    const objective = announcement.objective
    const dateSubmission = announcement.dateSubmission
    const urlDocument = announcement.urlDocument

    if (await checkEmpty(title)) {
      return "O título não pode ficar vazio."
    }

    if (await checkEmpty(category)) {
      return "A categoria não pode ficar vazia."
    }

    if (await checkEmpty(objective)) {
      return "O objetivo não pode ficar vazio."
    }

    if (await checkEmpty(dateSubmission)) {
      return "A data de submissão não pode ficar vazia."
    }

    if (await checkEmpty(urlDocument)) {
      return "A URL do edital não pode ficar vazia."
    }

    return null
  }

  unsubscribeAnnouncement(objectId: String) {

    this.announcementServices.deleteAnnouncements(objectId)
      .subscribe(
        _ => {
          if (objectId) {
            let index = 0;
            let len = this.announcements.length;
            for (let i: number = 0; i < len; i++) {
              if (this.announcements[i].title == objectId) {
                index = i;
              }
            }
            this.announcements.splice(index, 1);
          }

        }
      );

  }

  updateAnnouncement(announcement: Announcement) {

    this.announcementServices.updateAnnouncements(announcement)
      .subscribe(
        _ => {
          if (announcement) {
            let index = 0;
            let len = this.announcements.length;
            for (let i: number = 0; i < len; i++) {
              if (this.announcements[i]._id == announcement._id) {
                index = i;

              }
            }
            this.announcements[index] = announcement;
            this.announcementAux = new Announcement();
          }

        }
      );
  }

  getSendUserEmail(announcement: Announcement) {
    this.userService.getEmailUser()
      .subscribe(
        userArrow => {
          this.usersAux = userArrow;
          console.log(this.usersAux)
          for (let i = 0; i < this.usersAux.length; i++) {
            this.sendEmail(this.usersAux[i].email, announcement);
          }
        }

      );

  }
  // montar a mensagem de email 

  sendEmail(destinatary: String, announcement: Announcement): any {
    console.log(destinatary)

    let subject: String = "Editais novos foram cadastrados, a Te-orienta separou alguns que pode ser do seu interesse";
    let message: String = "Edital: " + announcement.title + "\n" +
      "Categoria: " + announcement.category + "\n" +
      "Data de Submissão: " + announcement.dateSubmission + "\n";
    let to: String = destinatary;
    const email: Email = new Email(to, subject, message);

    this.emailService.postEmail(email)
      .subscribe();

  }



}

