const OrderReducer = (state = { products_order: {}, products_bill: {}, bill: 0 , byType: {}, taxes: 0}, action) => {
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

    const addToList = (list, item, count) => {
        let newList = Object.assign(list); 
        if(typeof(list[item.id]) === 'undefined') {
            newList[item.id] = {};
            newList[item.id].item = item;
            newList[item.id].count = count;
        } else {
            newList[item.id].count = newList[item.id].count + count;
        }
        return newList;
    }

    // products
    let products_bill = addToList(order.products_bill, item, 1); 
    let products_order = order.products_order;
    if(item.isCombo) {
        item.child.forEach((child) => {
           products_order = addToList(products_order, child, child.combo.count);
        });
    } else {
        products_order = addToList(products_order, item, 1);
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
    return {products_order, products_bill, bill, byType, taxes};
}

const RemoveProduct = (order, item) => {

    const remFromList = (list, item, count) => {
        let newList = Object.assign(list); 
        if(newList[item.id].count > count) {
            newList[item.id].count =  newList[item.id].count - count;
        } else {
            delete newList[item.id];
        }
        return newList;
    }   

    if(typeof(order.products_bill[item.id]) !== 'undefined') {
        
        let products_bill = remFromList(order.products_bill, item, 1);
        let products_order = order.products_order;
        if(item.isCombo) {
            item.child.forEach((child) => {
                products_order = remFromList(products_order, child, child.combo.count);
            });
        } else {
            products_order = remFromList(products_order, item, 1);
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
        return {products_order, products_bill, bill, byType, taxes};
    }
    return order;
}

  