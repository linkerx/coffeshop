export default function(state = { products: [], bill: 0 },action) {
    switch(action.type){
        case 'ORDER_PRODUCT_ADD':
            let products = [].concat(state.products,[action.payload]);
            let bill = parseFloat(state.bill) + parseFloat(action.payload.price);
            return {products, bill};
        default:
    }
    return state;
}
  