import Person from './models/User.js';
import UserService from './services/UserService.js'
import { validate as va, sendMessage } from './functions/Functions.js'

const user = new Person('kaLLe', 'aNka', 'kalle@mail.com', 'BytMig123')

va(user, u => {
  UserService.signUp(u)
})

sendMessage('123456789', data => {
  console.log(data);
})