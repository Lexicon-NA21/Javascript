class Item {

    // #checked
    // #text
  
    constructor(text, checked) {
      this.checked = checked;
      this.text = text;
    }
  
    // get text(){
    //   return this.#text;
    // }
  
    // get isChecked(){
    //   return this.#checked ? true : false;
    // } 
  
    // set check(value){
    //   if(typeof value === typeof Boolean){
    //     this.checked = value;
    //   }
    //   console.error(`Error! The value: ${value} is not a bool as expected`);
    // }
  }
  
  export default Item;