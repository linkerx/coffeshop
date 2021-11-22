import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './styles.scss';

class OrderBill extends React.Component {
  render() {
    return (
      <Link to='/bill'>
        <div className='order-bill'>
          <i className="fas fa-cash-register"></i>
          <div className='bill'>{this.props.order && '$' + this.props.order.bill.toFixed(2)}</div>
        </div>
      </Link>
    )
  }
}

function mapStateToProps(state) {
  return {
    order: state.order,
  }
}

export default withRouter(connect(mapStateToProps)(OrderBill))

