// same as before
function setSelectedItem(index) {
    store['selectedIndex'] = index;
}

dispatcher.register((message) => {
    switch (message.type) {
        case 'SELECT_ITEM':
            setSelectedItem(message.data)
    }
});
//

class Store {
    constructor() { this.listeners = []; }
    addListener(listener) {
        if (!this.listeners['change']) { this.listeners['change'] = []; }
        this.listeners['change'].push(listener);
    }

    emitChange() {
        if (this.listeners['change']) {
            this.listeners['change'].forEach(cb => cb());
        }
    }

    getSelectedItem() {
        return store['selectedIndex'];
    }
}

const store = new Store();

export default store;
