import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: Object

  constructor(
    private authService: AuthService
  ) {

  }

  ngOnInit(): void {
    this.getProfile()
  }

  async getProfile() {
    await this.authService.getProfile().then(response => {
      const data = response.data
      console.log(this.user)
      this.user = data.user
    })

  }

}
