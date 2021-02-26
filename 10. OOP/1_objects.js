//THIS

//console.log(this);

const thisObj = {
    name: 'Name',
    // logThis() {
    //   console.log(this);
    // },
    // arrow: () => {
    //   console.log(this);
    // }
  }
  
  thisObj.logThis(); // Den här tittar på det som ligger direkt till vänster om metoden
  thisObj.arrow();
  
  
  const obj1 = {
    id: '1',
    firstName: 'Kalle',
    lastName: 'Anka',
    email: 'kalle@mail.com',
    loggedIn: false,
    login() {
      this.loggedIn = true
      console.log(`${this.firstName} has logged in`)
    },
    logout() {
      this.loggedIn = false
      console.log(`${this.firstName} has logged out`)
    },
  }
  
  obj1.login()
  console.log(obj1.loggedIn)
  obj1.logout()
  console.log(obj1.loggedIn)
  
  // const obj2 = {
  //   id: '2',
  //   firstName: 'Kajsa',
  //   lastName: 'Anka',
  //   email: 'kajsa@mail.com',
  //   loggedIn: false,
  //   login() {
  //     this.loggedIn = true
  //     console.log(`${this.firstName} has logged in`)
  //   },
  //   logout() {
  //     this.loggedIn = false
  //     console.log(`${this.firstName} has logged out`)
  //   },
  // }
  
  
  // obj2.login()
  // console.log(obj2)
  // obj2.logout()
  // console.log(obj2.loggedIn)
  
  