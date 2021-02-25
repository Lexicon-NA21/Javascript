// Funktioner tittar inte på datatyp för parametrar går bra att skicka in vad som helst
//   Behöver därför inte specifiera datatyp
//   Tittar inte om antal parametrar matchar för få är ok eller för många är ok
//   Default värden på parametrar kan sättas precis som vanligt

// Deklarera en funktion:
//   --------------------------

//   */

 namnetPåFunc();

  //Named function
  function namnetPåFunc() {
    //här skriver vi den kod vi vill ska köras när vi kallar på funktionen.
    console.log('hej på dig du');
  }
  
  //Function expression
  let greet = function() {
      console.log('hej hej')
    }
    
    
    greet();
    greet = "Hej";
  

  function hej(message){
      for(let arg of arguments){
          console.log(arg);
      }
       console.log(message);
    //   console.log(message2);
    //   console.log(message3);
  }

  hej('Hej',23, 45, 45,656, {name: 'kalle'},342);

  const func2 = function(firstName = 'John', lastName = 'Doe') {
    let _fullName = firstName + ' ' + lastName
    console.log(_fullName.trim())
  }

  const greet2 = (name) => {
  return `Hej ${name}`

}

// om jag har precis 1 parameter behövs inte parenteserna
// const greet = name => {
//   return `Hej ${name}`
// }

// Om jag bara gör 1 sak i min funktion så kan jag skriva den på 1 rad, då sker return automatiskt
//const greet = name => `Hej ${name}`


// Callback functions

const func = callback => {
    // Jag räknar ut ett värde / skapar något / eller vad som helst
    let value = 'test';
    callback(value);
  }
  
  func(vadSom => { //här har jag automatiskt tillgång till parametern som skickas från den första functionen
    // Här kan jag välja vad jag vill göra med den parametern
    console.log(vadSom);
  })

  // Exempel på en callback funktion
//let names = ['Kalle', 'Kajsa', 'Joakim', 'Lucas']

// names.forEach(name => {
//   console.log(name)
// })

/* 
  METODER
  -----------------------------
  metoder är funktioner som är inbyggda på ett objekt

*/



let user = {
    firstName: 'Kalle',
    lastName: 'Anka',
    fullName: function() {
      console.log(this);
      return this.firstName + ' ' + this.lastName
    },
    fullName2: () => {
      console.log(this)
      return this.firstName + ' ' + this.lastName
    }
  }
  // console.log(this);
  console.log(user.fullName());
  console.log(user.fullName2());
  
  // user.fullName();
  
  
  
  //arguments är en array av argumenten metoden tar emot när den kallas på
  //bra att använda när man skickar in för många argument! Enda sättet att "fånga" dessa
  let result = argumentsExample('Kalle', 'Kajsa', 'Fnatte');
  
  function argumentsExample() {
     for(let para of arguments){
       console.log(para);
     }
  }
  
