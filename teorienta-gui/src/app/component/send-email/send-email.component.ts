import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import {ValidateService} from '../../services/validate.service';


@Component({
  selector: 'app-send-email',
  templateUrl: './send-email.component.html',
  styleUrls: ['./send-email.component.css']
})
export class SendEmailComponent implements OnInit {
  to: String;
  subject: String;
  message: String;

  constructor(private validateService: ValidateService) { 
  }

  ngOnInit(): void {
  }

  async enviarEmail(){
    const  mail = {
      to: this.to,
      subject: this.subject,
      message: this.message
    }

   

    const response = await axios({
      method: "POST",
      url: "http://localhost:3000/email/sendEmail",
      data:{
        to: this.to,
        subject: this.subject,
        message: this.message
      }
    })
    
    this.clearInput();
   
  }

  async clearInput(){
    this.to = "";
    this.subject = "";
    this.message = "";
  }

}
