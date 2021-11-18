export function addProduct(product) {
    return (dispatch) => {
        dispatch({type: 'ORDER_PRODUCT_ADD', payload: product});
    }
}
