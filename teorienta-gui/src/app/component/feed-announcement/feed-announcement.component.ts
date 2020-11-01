import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import {Announcement} from '../../common/announcement';
import {AnnouncementService} from '../../services/announcement/announcement.service';

@Component({
  selector: 'app-feed-announcement',
  templateUrl: './feed-announcement.component.html',
  styleUrls: ['./feed-announcement.component.css']
})
export class FeedAnnouncementComponent implements OnInit {
    announcement: Announcement = new Announcement();
    announcements: Announcement[] = [];

  constructor(private announcementServices: AnnouncementService) { 
  }

  ngOnInit(): void {

    this.announcementServices.getAnnouncements()
      .subscribe(
        announ => {this.announcements = announ}
      );
  }

  loadUser(): any {
    return (localStorage.getItem('user'));
  }
  aplicarEdital(): void{
    const user = this.loadUser();
    alert(user+"/n"+this.announcements[0].title)
  }

  
  
  
  

}
