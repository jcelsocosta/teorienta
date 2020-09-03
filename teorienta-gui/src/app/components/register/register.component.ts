import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service'
import { AuthService } from '../../services/auth.service'
import { FlashMessagesService } from 'angular2-flash-messages'
import { Router } from '@angular/router'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name: String
  username: String
  email: String
  password: String

  constructor(
    private validateService: ValidateService,
    private flashMesssage: FlashMessagesService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onRegisterSubmit() {
    const user = {
      name: this.name,
      email: this.email,
      username: this.username,
      password: this.password
    }

    const messageError = this.validateService.validateRegister(user)

    if (messageError) {
      this.flashMesssage.show(messageError, { cssClass: 'alert-danger', timeout: 3000 })
      return false
    }

    // Register user
    this.authService.registerUser(user).subscribe(data => {
      
      const body = JSON.parse((data as any)._body)
      
      if (body.success) {
        this.flashMesssage.show("You are now registered and can log in.", { cssClass: 'alert-success', timeout: 3000 })
        this.router.navigate(['/login'])
      } else {
        this.flashMesssage.show("Something went wrong.", { cssClass: 'alert-danger', timeout: 3000 })
        this.router.navigate(['/register'])
      }
    })

  }

}
