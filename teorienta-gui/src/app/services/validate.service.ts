import { Injectable } from '@angular/core';
import { checkEmpty } from '../../shared/common/common';

@Injectable()
export class ValidateService {

  constructor() { }

  validateRegister(user: any): any {
    if (checkEmpty(user.name)) {
      return 'Name cannot be empty.';
    }

    if (checkEmpty(user.username)) {
      return 'Username cannot be empty.';
    }

    if (checkEmpty(user.email)) {
      return 'Email cannot be empty.';
    }

    if (checkEmpty(user.password)) {
      return 'Password cannot be empty.';
    }

    if (!this.validateEmail(user.email)) {
      return 'Please fill in a valid email.';
    }

    return null;
  }

  validateEmail(email: any): any {
    const re = /^(([^<>()\[\]\\.,;:\s@']+(\.[^<>()\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
}
