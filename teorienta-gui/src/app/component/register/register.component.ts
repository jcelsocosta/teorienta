import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service'
import { AuthService } from '../../services/auth.service'
import { FlashMessagesService } from 'angular2-flash-messages'
import { Router } from '@angular/router'
import axios from 'axios'
import { User} from '../../common/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  //user: User = new User();
  name: String;
  username: String;
  email: String;
  password: String;
  cnpj: String;
  cpf: String;
  userTypes: Array<Object>;
  userTypeSelected: any;

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
      cnpj: this.cnpj,
      cpf: this.cpf,
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
        this.flashMesssage.show("Você foi registrado e agora consegue logar.", { cssClass: 'alert-success', timeout: 3000 })
        this.router.navigate(['/login'])
      } else {
        this.flashMesssage.show("Algo deu errado.", { cssClass: 'alert-danger', timeout: 3000 })
        this.router.navigate(['/register'])
      }
    }).catch((error) => {
      console.log("aqui: "+error)
    })
  }

}
