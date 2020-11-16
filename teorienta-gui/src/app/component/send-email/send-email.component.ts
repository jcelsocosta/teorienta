import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { EmailService } from '../../services/email/email.service';
import { Email } from '../../common/email';
@Component({
  selector: 'app-send-email',
  templateUrl: './send-email.component.html',
  styleUrls: ['./send-email.component.css']
})
export class SendEmailComponent implements OnInit {
  email: Email;
  to: String;
  subject: String;
  message: String;
  
  constructor(private emailService: EmailService) {
    
  }

  ngOnInit(): void {
    
  }

    sendEmail(email: Email):any{
    
      this.emailService.postEmail(email)
        .subscribe();
      email.clean();
  }
  


}
