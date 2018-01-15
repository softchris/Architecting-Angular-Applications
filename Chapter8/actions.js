function addItem(title) {
  return {
    type: 'CREATE_ITEM',
    payload: { title }
  };
}

module.exports = {
  addItem
}