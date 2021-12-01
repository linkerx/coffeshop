import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addProduct, removeProduct } from 'actions/order/order';

import './styles.scss';

class Combo extends React.Component {

    constructor(props) {
        super(props);

        this.addProductToOrder = this.addProductToOrder.bind(this);
        this.removeProductFromOrder = this.removeProductFromOrder.bind(this);
    }

    addProductToOrder(item) {
        this.props.addProduct(item);
    }

    removeProductFromOrder(item) {
        this.props.removeProduct(item);
    }

    render () {
        const item = this.props.item;
        const showMinus = typeof(this.props.order.products[item.id]) !== 'undefined';
        let count = 0;
        if(showMinus) {
            count = this.props.order.products[item.id].count;
        }

        return (
            <div className='combo'>
                <div className='image'><img src={item.image} alt={item.name} /></div>
                <div className='name'>{item.name}</div>
                <div className='price'>{'$' + parseFloat(item.price).toFixed(2)}</div>
                <i onClick={() => this.addProductToOrder(item)} className="add-product fas fa-plus"></i>
                {showMinus && <i onClick={() => this.removeProductFromOrder(item)} className="remove-product fas fa-minus"></i>}
                <div className='count'>{count}</div>
            </div>
        )
    }
}

    function mapStateToProps(state) {
        return {
            order: state.order,
        }
    }
  

    function mapDispatchToProps(dispatch) {
        return bindActionCreators({
            addProduct,
            removeProduct
        }, dispatch);
    }

export default connect(mapStateToProps, mapDispatchToProps)(Combo);
