import { EventEmitter } from "events";

let store = {};

class Store extends EventEmitter {
  constructor() {}

  addListener(listener) {
    this.on("changed", listener);
  }

  emitChange() {
    this.emit("changed");
  }

  getSelectedItem() {
    return store["selectedItem"];
  }
}

const storeInstance = new Store();

function createProduct(product) {
  if (!store["products"]) {
    store["products"] = [];
  }
  store["products"].push(product);
}

function removeProduct(product) {
  var index = store["products"].indexOf(product);
  if (index !== -1) {
    store["products"].splice(index, 1);
  }
}

dispatcher.register(({ type, data }) => {
  switch (type) {
    case ProductConstants.SELECT_INDEX:
      selectIndex(data);
      storeInstance.emitChange();
      break;
    case ProductConstants.CREATE_PRODUCT:
      createProduct(data);
      storeInstance.emitChange();
      break;
    case ProductConstants.REMOVE_PRODUCT:
      removeProduct(data);
      storeInstance.emitChange();
  }
});
