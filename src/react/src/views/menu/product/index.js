import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addProduct, removeProduct } from 'actions/order/order';
import './styles.scss';

const Product = (props) => {

    const order = useSelector((state) => state.order);
    const dispatch = useDispatch();

    const item = props.item;
    const showMinus = typeof(order.products_bill[item.id]) !== 'undefined';
    let count = 0;
    if(showMinus) {
        count = order.products_bill[item.id].count;
    }

    return (
        <div className='product'>
            <div className='image'><img src={item.image} alt={item.name} /></div>
            <div className='name'>{item.name}</div>
            <div className='price'>{'$' + parseFloat(item.price).toFixed(2)}</div>
            <i onClick={() => dispatch(addProduct(item))} className="add-product fas fa-plus"></i>
            {showMinus && <i onClick={() => dispatch(removeProduct(item))} className="remove-product fas fa-minus"></i>}
            <div className='count'>{count}</div>
        </div>
    )
}

export default Product;
