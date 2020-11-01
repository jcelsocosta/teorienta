import { Component, OnInit } from '@angular/core';
import axios from 'axios'
import {Announcement} from '../../common/announcement';
import {AnnouncementService} from '../../services/announcement/announcement.service';
@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.css']
})
export class AnnouncementComponent implements OnInit {
  announcement: Announcement = new Announcement();
  announcements: Announcement[] = [];
  title: String
  objective: String
  fomentation: String
  category: String
  dateSubmission: String
  cnpj: String
  cpf: String
  urlDocument: String
  available: boolean


  constructor(private announcementServices: AnnouncementService) {

  }

  ngOnInit(): void {
    this.announcementServices.getAnnouncements()
      .subscribe(
        announ => {this.announcements = announ}
      );
  }
  
  
  subscribeAnnouncement(announcement: Announcement){
    this.announcementServices.postAnnouncements(announcement)
      .subscribe(
        announ => { 
          if(announ){
            this.announcements.push(announcement)
            this.announcement = new Announcement();
          }
        }
      );
  }

  unsubscribeAnnouncement(objectId:String){
    this.announcementServices.deleteAnnouncements(objectId)
    .subscribe(
      _ =>{
        if(objectId){
          let index = 0;
          let len = this.announcements.length;
          for(let i: number = 0; i < len; i++){
            if(this.announcements[i].title == objectId){
              index = i;
            }
          }
          this.announcements.splice(index,1);
        }
        
      }
    );
      
  }

  updateAnnouncement(announcement: Announcement){
    this.announcement = new Announcement(); 
    this.announcementServices.updateAnnouncements(announcement)
    .subscribe(
      _ =>{
        if(announcement){
          let index = 0;
          let len = this.announcements.length;
          for(let i: number = 0; i < len; i++){
            if(this.announcements[i].title == announcement.title){
              index = i;
            }
          }
          this.announcements[index] = announcement;
         
        }
        
      }
    );
      
  }  
}
