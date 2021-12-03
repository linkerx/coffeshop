export function addProduct(product) {
    return (dispatch) => {
        dispatch({type: 'ORDER_PRODUCT_ADD', payload: product});
    }
}

export function removeProduct(product) {
    return (dispatch) => {
        dispatch({type: 'ORDER_PRODUCT_REMOVE', payload: product});
    }
}

export const changeCombo = (combo) => (dispatch) => {
    return dispatch({type: 'ORDER_CHANGE_COMBO', payload: combo});
}