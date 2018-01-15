class View {
    selectIndex(index) {
        Dispatcher.dispatch({
            type: 'SELECT_INDEX',
            data: index
        });
    }

    createProduct(product) {
        Dispatcher.dispatch({
            type: 'CREATE_PRODUCT',
            data: product
        });
    }

    removeProduct(product) {
        Dispatcher.dispatch({
            type: 'REMOVE_PRODUCT',
            data: product
        });
    }
}

let view = new View();