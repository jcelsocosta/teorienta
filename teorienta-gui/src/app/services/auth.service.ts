import { Injectable } from '@angular/core';
import axios from 'axios'
import { JwtHelperService } from '@auth0/angular-jwt'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authToken: any
  user: any

  constructor() { }

  async registerUser(user) {
    return await axios({
      method: "POST",
      url: 'http://localhost:3000/users/register',
      data: {
        user
      },
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  async authenticateUser(user) {
    return await axios({
      method: "POST",
      url: 'http://localhost:3000/users/authenticate',
      data:
        user
      ,
      headers: {
        'Content-Type': 'application/json'
      },
    })
  }

  async getProfile() {
    this.loadToken()
    return await axios({
      method: "GET",
      url: "http://localhost:3000/users/profile",
      headers: {
        'Authorization': this.authToken,
        'Content-Type': 'application/json'
      }
    })
  }

  storeUserData(token, user) {
    localStorage.setItem('id_token', token)
    localStorage.setItem('user', JSON.stringify(user))
    this.authToken = token
    this.user = user
  }

  loadToken() {
    const token = localStorage.getItem('id_token')
    this.authToken = token
  }

  isUserAdmin() {
    const user = JSON.parse(localStorage.getItem('user'))
    if (user) {
      return user.userType == 1
    }
    return false
  }

  loggedIn() {
    const helper = new JwtHelperService()
    const token = localStorage.getItem('id_token')
    return !helper.isTokenExpired(token)
  }

  logout() {
    this.authToken = null
    this.user = null
    localStorage.clear()
  }
}
