// list-view.js
const { createItem } = require('./actions');
const { select } = require('./redux');

class ListItemsView {
  constructor() {
    const items = select('items');
    const elem = document.getElementById('list');
    elem.innerHTML = '';
    items.forEach( item => {
      const li = document.createElement('li');
      li.innerHTML = item;
      elem.appendChild(li);  
    });
  }
}