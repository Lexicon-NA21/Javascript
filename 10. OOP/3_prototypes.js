function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.revised = false;
  }

  let book = new Book('Banan', 'Kalle', 1909);
  book.read = () => console.log('Read');

  Book.prototype.summary = function(){
      return `${this.title} was written by ${this.author}`;
  }

  console.log(book.summary());

  Book.prototype.bookAge = function() {
    const years = new Date().getFullYear() - this.year
  
    switch(years) {
      case 0:
        return `${this.title} is less then 1 year old.`
      case 1: 
        return `${this.title} is 1 year old.`
      default:
        return `${this.title} is ${years} years old`
    }
  }
  
  Book.prototype.revise = function(year) {
    this.year = year
    this.revised = true
  }