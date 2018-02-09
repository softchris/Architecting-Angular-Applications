import store from "./storeII";

class View {
  constructor(store) {
    this.index = 0;
    store.addListener(this.notifyChanged);
  }

  notifyChanged() {
    this.index = store.getSelectedItem();
  }
}

let view = new View();
