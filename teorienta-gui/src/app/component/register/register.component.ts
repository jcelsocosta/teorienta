import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service'
import { AuthService } from '../../services/auth.service'
import { FlashMessagesService } from 'angular2-flash-messages'
import { Router } from '@angular/router'
import axios from 'axios'

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
  userTypes: Array<Object>
  userTypeSelected: any

  constructor(
    private validateService: ValidateService,
    private flashMesssage: FlashMessagesService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.userTypes = [{ id: 1, type: 'Administrador' }, { id: 2, type: 'Cliente' }]
  }

  onRegisterSubmit() {
    const user = {
      name: this.name,
      email: this.email,
      username: this.username,
      password: this.password,
      userType: this.userTypeSelected
    }

    const messageError = this.validateService.validateRegister(user)

    if (messageError) {
      this.flashMesssage.show(messageError, { cssClass: 'alert-danger', timeout: 3000 })
      return false
    }

    // Register user
    this.authService.registerUser(user).then(response => {
      
      const body = response.data
      
      if (body.success) {
        this.flashMesssage.show("You are now registered and can log in.", { cssClass: 'alert-success', timeout: 3000 })
        this.router.navigate(['/login'])
      } else {
        this.flashMesssage.show("Something went wrong.", { cssClass: 'alert-danger', timeout: 3000 })
        this.router.navigate(['/register'])
      }
    }).catch((error) => {
      console.log("aqui: "+error)
    })
  }

}
