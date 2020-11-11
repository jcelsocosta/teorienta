import { Component, OnInit } from '@angular/core';
import { Notification} from '../../common/notification';
import { Announcement } from '../../common/announcement';
import {Observable} from 'rxjs';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  x: number;
  answer: String;
  question: Array<any>

  notification: Notification = new Notification();
  notifications: Notification[] = [];
  
  constructor() {
    this.x = 0;
    this.question = [this.x];
   }

  ngOnInit(): void {
    this.loadStoreData()
  }
   loadStoreData(): void{
    const notify = localStorage.getItem('notify') as unknown as Notification
    this.notifications.push(notify);
  }

  addQuestion(){
    this.x = this.x + 1;
    this.question.push(this.x);
  }
  removeQuestion(){
    this.question.pop();
  }

}
