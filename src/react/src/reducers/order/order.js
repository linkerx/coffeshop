const OrderReducer = (state = { products: {}, bill: 0 , byType: {}, taxes: 0}, action) => {
    switch(action.type){
        case 'ORDER_PRODUCT_ADD': {
            return AddProduct(state,action.payload);
        }
        case 'ORDER_PRODUCT_REMOVE': {
            return RemoveProduct(state,action.payload);
        }
        case 'ORDER_CHANGE_COMBO': {
            const combo = action.payload;

            let order = Object.assign(state);
            combo.child.forEach((child) => {
                Array.from(
                    Array(child.combo.count), 
                    () => {
                        order = RemoveProduct(order,child);
                    }
                );
            });
            return AddProduct(order,action.payload); 
        }
        default:
    }
    return state;
}
export default OrderReducer;

const AddProduct = (order, item) => {
    // products
    let products = Object.assign(order.products); 
    if(typeof(products[item.id]) === 'undefined') {
        products[item.id] = {};
        products[item.id].item = item;
        products[item.id].count = 1;
    } else {
        products[item.id].count ++;
    }

    // byType
    let byType = Object.assign(order.byType); 
    if(typeof(byType[item.mealTypeId]) === 'undefined') {
        byType[item.mealTypeId] = 1;
    } else {
        byType[item.mealTypeId]++;
    }

    // bill
    let bill = parseFloat(order.bill) + parseFloat(item.price);
    // taxes
    let taxes = parseFloat(order.taxes) + (parseFloat(item.price)*item.tax/100);
    return {products, bill, byType, taxes};
}

const RemoveProduct = (order, item) => {
    let products = Object.assign(order.products); 
    if(typeof(products[item.id]) !== 'undefined') {

        // products
        if(products[item.id].count > 1) {
            products[item.id].count --;
        } else {
            delete products[item.id];
        }

        // byType
        let byType = Object.assign(order.byType); 
        if(byType[item.mealTypeId] > 1) {
            byType[item.mealTypeId] --;
        } else {
            delete byType[item.mealTypeId];
        }                

        // bill
        let bill = parseFloat(order.bill) - parseFloat(item.price);
        // taxes
        let taxes = parseFloat(order.taxes) - (parseFloat(item.price)*item.tax/100);
        return {products, bill, byType, taxes};
    }
    return order;
}

  