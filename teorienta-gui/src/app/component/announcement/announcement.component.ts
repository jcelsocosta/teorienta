import { Component, OnInit } from '@angular/core';
import axios from 'axios'

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.css']
})
export class AnnouncementComponent implements OnInit {

  title: String
  urlDocument: String
  available: boolean

  announcements: Array<any>

  constructor() {

    this.getAnnouncementsFromServer()

  }

  async updateAnnouncement() {
    
  }

  async getAnnouncementsFromServer() {
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

  async saveAnnouncement() {

    this.available = this.available == undefined ? false : true

    const response = await axios({
      method: "POST",
      url: "http://localhost:3000/announcements/createAnnouncement",
      data: {
        title: this.title,
        urlDocument: this.urlDocument,
        available: this.available
      }
    })

  }

  ngOnInit(): void {
  }

}
