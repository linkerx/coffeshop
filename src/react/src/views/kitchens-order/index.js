import React from 'react';
import { useSelector } from 'react-redux';
import OrderProduct from './order-item';
import { Link } from 'react-router-dom';

import './styles.scss';

const KitchensOrder = () => {
    const order = useSelector((state) => state.order)
    const total = parseFloat(order.bill) + parseFloat(order.taxes);

    return(
        <section id='bill'>
            <div className='message'>Please deliver this to clients</div>
            <div className='wrapper'>
                <div className='paper'>
                    <div className='header'>
                        <div>***************************************</div>
                        <h2>KITCHEN'S ORDER</h2>
                        <div>Agnos Challenge Coffeeshop</div>
                        <div>***************************************</div>
                    </div>

                    <div className='items'>
                    { Object.entries(order.products_order).map((product) => {
                        return (
                            <OrderProduct key={product[0]} product={product[1]} />
                        )
                    })}
                    </div>
                    <Link to='/bill'>View Client's Bill</Link>
                </div>
            </div>
        </section>
    );
}

export default KitchensOrder;
