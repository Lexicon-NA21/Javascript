class Book {

    constructor(title, author, year) {
      this.title = title; 
      this.author = author;
      this.year = year;
      this.revised = false;
    }
    summary() {
      return `${this.title} was written by ${this.author} in ${this.year}.`
    }
     bookAge()  {
      const years = new Date().getFullYear() - this.year
  
      switch(years) {
        case 0:
          return `${this.title} is less then 1 year old.`
        case 1:
          return `${this.title} is 1 year old.`
        default:
          return `${this.title} is ${years} years old.`
      }
    }
    revise(year) {
      this.year = year;
      this.revised = true;
    }
  }

  const book1 = new Book('book1', 'Kalle', 2020);

  let books = [book1, book2, book3, hej];

console.log(books);

console.log(book2.bookAge());
book2.revise(2020);
console.log(book2.bookAge());



//Get och Set samt private fields och metoder, # = private
class Person {

  #firstName;
  #lastName;

  constructor(firstName, lastName) {
    this.#firstName = firstName;
    this.#lastName = lastName;
  }

  get fullName() {
    return `${this.#firstName} ${this.#lastName}`
  }

  get name() {
    return this.#lastName.toUpperCase();
  }

  set fullName(_value) {
    this.#privateFunc();
    const parts = _value.split(' ')
    this.#firstName = parts[0];
    this.#lastName = parts[1];
  }
  
  PublicFunc(){
    this.#privateFunc();
  }

  #privateFunc(){
    console.log('Inne i private funktion');
  }
}

const person = new Person('Kalle', 'Anka');
console.log(person.fullName);

person.fullName = 'John Doe';
console.log(person.fullName);

person.PublicFunc();






