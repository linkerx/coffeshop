import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './styles.scss';

const OrderBill = () => {

  const order = useSelector((state) => state.order);

  return (
    <Link to='/bill'>
      <div className='order-bill'>
        <i className="fas fa-cash-register"></i>
        <div className='bill'>{order && '$' + order.bill.toFixed(2)}</div>
      </div>
    </Link>
  )
}
export default OrderBill;

