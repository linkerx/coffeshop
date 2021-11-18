import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './styles.scss';

class OrderBill extends React.Component {
  render() {
    return (
      <div className='order-bill'>
        <i className="fas fa-bell"></i>
        <div className='bill'>{this.props.order && this.props.order.bill}</div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    order: state.order,
  }
}

export default withRouter(connect(mapStateToProps)(OrderBill))

