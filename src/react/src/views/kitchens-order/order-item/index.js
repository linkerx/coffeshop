import React from 'react';

import './styles.scss';

class OrderProduct extends React.Component {

    render() {
        const item = this.props.product.item;
        const count = this.props.product.count;
        const uprice = parseFloat(item.price);
        const tax = ((uprice*item.tax)/100)*count;
        const total = parseFloat(item.price)*count;

        return (
            <div className='bill-item'>
                <div className='item-name'>{count} X {item.name}</div>
            </div>
        )
    }
}

export default OrderProduct;