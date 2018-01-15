let store = {};

function setSelectedItem(index) {
    store['selectedIndex'] = index;
}

dispatcher.register((message) => {
    switch (message.type) {
        case 'SELECT_ITEM':
            setSelectedItem(message.data)
    }
});