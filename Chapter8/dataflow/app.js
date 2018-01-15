const { dispatch, getState, select, subscribe } = require('./redux');
const { addItem } = require('./actions');

subscribe(() => {
  console.log('store changed');
});

console.log('initial state', getState());
dispatch(addItem('A book'));
dispatch(addItem('A second book'));
console.log('after dispatch', getState());
console.log('items', select('items'));