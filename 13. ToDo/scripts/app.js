import  Item  from './item.js';

((todo) => {
  const items = document.querySelector('#toDoItems');

  todo.save = function () {
    let items = document.querySelectorAll('li');
    var result = Array.from(items).map((e) => new Item(e.childNodes[0].nodeValue, e.classList.contains("change")));
    localStorage.setItem('items', JSON.stringify(result));
  };

  todo.additem = function(event) {
    event.preventDefault();
    const input = this['todoInput'];
    const li = createElement(input);
    items.appendChild(li);
    input.value = '';
  }

  function remove() {
    this.parentElement.remove();
  }

  function change() {
    this.classList.toggle('change');
  }

  const createElement = (input) => {
    let li = document.createElement('li');
    li.innerHTML = input.value;
    li.classList.add('list-group-item') 
    li.addEventListener('click', change);
    
    let button = document.createElement('button');
    button.classList.add('btn', 'btn-danger');
    button.innerHTML = 'X';
    button.addEventListener('click', remove);
    
    li.appendChild(button);

    return li;
  }

})((window.todo = window.todo || {}));

document.querySelector('h1').addEventListener('click', todo.save);
document.querySelector('#todoForm').addEventListener('submit', todo.additem);