import ProductConstants from './product-constants';
import dispatcher from './dispatcher';

export let ProductActions = {
    selectIndex: function (i) {
        dispatcher.dispatch({ type: ProductConstants.SELECT_INDEX, data: i });
    },
    createProduct: function (product) {
        dispatcher.dispatch({ type: ProductConstants.CREATE_PRODUCT, data: product });
    },
    removeProduct: function (product) {
        dispatcher.dispatch({ type: ProductConstants.REMOVE_PRODUCT, data: product });
    }
}