import { Component, OnInit } from '@angular/core';
import { Notification} from '../../common/notification';
import { Announcement } from '../../common/announcement';
import {Observable} from 'rxjs';
import {NotificationService} from '../../services/notification/notification.service';
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
  
  constructor(private notificationService: NotificationService) {
    this.x = 0;
    this.question = [this.x];
   }

  ngOnInit(): void {
    this.getOneNotification();
  }

  getOneNotification(){
    const objectId = this.loadId();
    this.notificationService.getOneNotification(objectId)
      .subscribe(
        noti => {this.notifications = noti}
      );
      
  }
  loadId(): String{
    const obj = localStorage.getItem('objectId');
    return obj;
  }

  addQuestion(){
    this.x = this.x + 1;
    this.question.push(this.x);
  }
  removeQuestion(){
    this.question.pop();
  }

}
