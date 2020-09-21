import { Component, OnInit } from '@angular/core';
import axios from 'axios';
@Component({
  selector: 'app-feed-announcement',
  templateUrl: './feed-announcement.component.html',
  styleUrls: ['./feed-announcement.component.css']
})
export class FeedAnnouncementComponent implements OnInit {
  announcements: Array<any>
  constructor() { }

  ngOnInit(): void {
    this.printListAnnouncement();
  }
  async printListAnnouncement(){
    const response = await axios({
      method: "POST",
      url: "http://localhost:3000/announcements/announcements",
      data: {}
    })

    this.announcements = response.data.announcements.map((element) => {
      return {
        title: element.title,
        urlDocument: element.urlDocument,
        available: element.available
      }
    })
  }

}
