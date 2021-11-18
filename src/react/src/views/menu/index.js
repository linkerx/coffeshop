import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { disableLeftBar, closeLeftBar } from 'actions/panel/leftbar';
import { disableRightBar, closeRightBar } from 'actions/panel/rightbar';
import { openHeader } from 'actions/panel/header';

import { getMealTypes } from 'actions/products/mealTypes';
import { getProducts } from 'actions/products/products';
import { addProduct } from 'actions/order/order';


import './styles.scss';
import { __esModule } from 'react-router-dom/cjs/react-router-dom.min';

class Menu extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            productsFilter: {
                mealTypeId: 0
            },
        }

        this.changeType = this.changeType.bind(this);
        this.addProductToOrder = this.addProductToOrder.bind(this);
    }

    componentDidMount(){
        this.props.openHeader()
        this.props.disableLeftBar();
        this.props.closeLeftBar();
        this.props.disableRightBar();
        this.props.closeRightBar();
        this.props.getMealTypes();
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.mealTypes !== this.props.mealTypes && this.props.mealTypes.length > 0) {
            this.setState({
                productsFilter: {mealTypeId: this.props.mealTypes[0].id}
            }); 
        }
        if(prevState.productsFilter !== this.state.productsFilter ) {
            this.props.getProducts(this.state.productsFilter);
        }

    }

    changeType(id) {
        this.setState({
            productsFilter: {mealTypeId: id} 
        })
    }

    addProductToOrder(item) {
        this.props.addProduct(item);
    }

    render() {
        return(
            <section id='menu'>
                <nav className='sections'>
                    <ul>
                        { this.props.mealTypes.map((item) => {
                            if(item.id === this.state.productsFilter.mealTypeId) {
                                return <li key={item.id} className='active'>{item.name}</li>
                            } else {
                                return <li key={item.id} onClick={() => this.changeType(item.id)}>{item.name}</li>
                            }

                        })}
                    </ul>
                </nav>
                <div className='product-list'>
                    <ul>
                        { this.props.products.map((item) => {
                            return <li key={item.id} className='active' onClick={() => this.addProductToOrder(item)}>{item.name}{item.price}</li>
                        })}
                    </ul>
                </div>
            </section>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        openHeader,
        disableLeftBar,
        closeLeftBar,
        disableRightBar,
        closeRightBar,
        getMealTypes,
        getProducts,
        addProduct
    }, dispatch);
  }

  function mapStateToProps(state) {
    return {
      mealTypes: state.mealTypes,
      products: state.products
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
