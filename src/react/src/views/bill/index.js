import React from 'react';
import { useSelector } from 'react-redux';
import BillProduct from './bill-item';

import './styles.scss';

const Bill = () => {
    const order = useSelector((state) => state.order)

    const products = order.products;
    const total = parseFloat(order.bill) + parseFloat(order.taxes);

    return(
        <section id='bill'>
            <div className='message'>Your order will be ready soon</div>
            <div className='wrapper'>
                <div className='paper'>
                    <div className='header'>
                        <div>***************************************</div>
                        <h2>YOUR BILL</h2>
                        <div>Agnos Challenge Coffeeshop</div>
                        <div>***************************************</div>
                    </div>

                    <div className='items'>
                    { Object.entries(products).map((product) => {
                        return (
                            <BillProduct key={product[0]} product={product[1]} showTax={true}/>
                        )
                    })}
                    </div>

                    <div className='taxes'>
                        <div>***************************************</div>
                        <div className='taxes-items'>
                            <div className='tax-name'>Taxes</div>
                            <div className='total'>{'$' + order.taxes.toFixed(2)}</div>                            
                        </div>
                        <div>***************************************</div>
                    </div>
                    <div className='total'>
                        <h2>Total: {'$' + total.toFixed(2)}</h2>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Bill;
