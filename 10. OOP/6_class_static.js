// Det "vanliga" sättet.. kräver en instansiering av objektet

// class UserService {
//   constructor(uri) {
//     this.baseUri = uri
//   }

//   signUp(user) {
//     console.log('Registrating the user.')
//     console.log(user);
//   }

//   signIn(email, password) {
//     console.log(`Signing in the user with ${email} and ${password}`)
//   }

// }

// const userService = new UserService()
// userService.signUp({firstName: 'Kalle', lastName: 'Anka'})
// userService.signIn('kalle@mail.com', 'BytMig123')


//Static
class AdminService {
    constructor(uri) {
      this.baseUri = uri
    }
  
    static signUp(user) {
      console.log('Registrating a new admin user.')
      console.log(user);
    }
  
    static signIn(email, password) {
      console.log(`Signing in the admin with ${email} and ${password}`)
    }
  }
  
  AdminService.signUp({firstName: 'Kalle', lastName: 'Anka'})
  AdminService.signIn('kalle@mail.com', 'BytMig123')