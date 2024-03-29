import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  constructor(
    private authService: AuthService,
    private router: Router,
    private flashMessage: FlashMessagesService
  ) { }

  ngOnInit(): void { }

  onLoginSubmit(): void { }

  login(): void {
    const user = {
      username: this.username,
      password: this.password
    };

    this.authService.authenticateUser(user).then(response => {
      const body = response.data;
      if (body.success) {
        this.authService.storeUserData(body.token, body.user);
        this.flashMessage.show('Você está logado.', { cssClass: 'alert-success', timeout: 5000 });
        if (body.user.userType === 2) {
          this.router.navigate(['/feed-announcement']);
        } else {
          this.router.navigate(['/dashboard']);
        }
      } else {
        this.flashMessage.show(body.msg, { cssClass: 'alert-danger', timeout: 5000 });
        this.router.navigate(['/login']);
      }
    });
  }
}
