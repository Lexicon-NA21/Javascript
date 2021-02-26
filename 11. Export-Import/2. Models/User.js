import { fixName } from '../functions/Functions.js'

export default class User {
  constructor(firstName, lastName, email, password) {
    this.firstName = fixName(firstName)
    this.lastName = lastName;
    this.email = email;
    this.password = password;
  }
}