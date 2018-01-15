// create-view.js
const { createItem } = require('./actions');
const { dispatch } = require('./redux');

class CreateItemView {
  saveItem() {
    const elem = document.getElementById('input');
    dispatch(createItem(elem.value));
  }
}