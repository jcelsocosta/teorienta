import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import {Announcement} from '../../common/announcement';
import {AnnouncementService} from '../../services/announcement/announcement.service';
import {User} from '../../common/user';
@Component({
  selector: 'app-feed-announcement',
  templateUrl: './feed-announcement.component.html',
  styleUrls: ['./feed-announcement.component.css']
})
export class FeedAnnouncementComponent implements OnInit {
    announcement: Announcement = new Announcement();
    announcements: Announcement[] = [];
    user: User = new User();
    users: User[] = [];
    
  constructor(private announcementServices: AnnouncementService) { 
  }

  ngOnInit(): void {

    this.announcementServices.getAnnouncements()
      .subscribe(
        announ => {this.announcements = announ}
      );
  }

  loadUser(): any {
    let response = localStorage.getItem("user");
    
    return response;
  }
  aplicarEdital(announcement: Announcement): void{
    const user = this.loadUser();
    const announ = {
      _id: announcement._id,
      title: announcement.title,
      objective: announcement.objective,
      fomentation: announcement.fomentation,
      category: announcement.category,
      dateSubmission: announcement.dateSubmission,
      cnpj: announcement.cnpj,
      cpf: announcement.cpf,
      urlDocument: announcement.urlDocument,
      available: announcement.available
    }
    alert(user+"\n"+announ._id+" - "+announ.title+" - "+announ.objective+" - "+announ.dateSubmission);
  }

  
  
  
  

}
