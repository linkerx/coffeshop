const OrderReducer = (state = { products: {}, bill: 0 , byType: {}, taxes: 0}, action) => {
    switch(action.type){
        case 'ORDER_PRODUCT_ADD': {
            const item = action.payload;

            // products
            let products = Object.assign(state.products); 
            if(typeof(products[item.id]) == 'undefined') {
                products[item.id] = {};
                products[item.id]['item'] = item;
                products[item.id]['count'] = 1;
            } else {
                products[item.id]['count']++;
            }

            // byType
            let byType = Object.assign(state.byType); 
            if(typeof(byType[item.mealTypeId]) == 'undefined') {
                byType[item.mealTypeId] = 1;
            } else {
                byType[item.mealTypeId]++;
            }

            // bill
            let bill = parseFloat(state.bill) + parseFloat(action.payload.price);
            // taxes
            let taxes = parseFloat(state.taxes) + (parseFloat(action.payload.price)*action.payload.tax/100);
            return {products, bill, byType, taxes};
        }
        case 'ORDER_PRODUCT_REMOVE': {
            const item = action.payload;

            let products = Object.assign(state.products); 
            if(typeof(products[item.id]) !== 'undefined') {

                // products
                if(products[item.id].count > 1) {
                    products[item.id]['count']--;
                } else {
                    delete products[item.id];
                }

                // byType
                let byType = Object.assign(state.byType); 
                if(byType[item.mealTypeId] > 1) {
                    byType[item.mealTypeId]--;
                } else {
                    delete byType[item.mealTypeId];
                }                

                // bill
                let bill = parseFloat(state.bill) - parseFloat(action.payload.price);
                // taxes
                let taxes = parseFloat(state.taxes) - (parseFloat(action.payload.price)*action.payload.tax/100);
                return {products, bill, byType, taxes};
            }
            return state;
        }
        default:
    }
    return state;
}
export default OrderReducer;
  