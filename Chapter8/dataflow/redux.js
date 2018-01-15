// redux.js
const { itemsReducer } = require('./reducers');
const EventEmitter = require('events');
const emitter = new EventEmitter();

let state = {
  items: []
};

function store(state = { items: [] }, action) {
  return {
    items: itemsReducer(state.items, action)
  };
}

function getState() {
  return state;
}

function dispatch(action) {
  const oldState = state;
  state = store(state, action);
  emitter.emit('changed');
}

function select(slice) {
  return state[slice];
}

function subscribe(cb) {
  emitter.on('changed', cb);
}

module.exports = {
  getState, dispatch, select, subscribe
}