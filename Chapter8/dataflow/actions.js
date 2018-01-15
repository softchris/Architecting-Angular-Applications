// actions.js
function createItem(title){
  return { type: 'CREATE_ITEM', payload: { title: title } };
}

export default createItem;