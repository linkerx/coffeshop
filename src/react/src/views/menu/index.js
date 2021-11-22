import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { disableLeftBar, closeLeftBar } from 'actions/panel/leftbar';
import { disableRightBar, closeRightBar } from 'actions/panel/rightbar';
import { openHeader } from 'actions/panel/header';

import { getMealTypes } from 'actions/products/mealTypes';
import { getProducts, getCombos } from 'actions/products/products';

import Product from './product';
import Combo from './combo';

import './styles.scss';

class Menu extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            productsFilter: {
                mealTypeId: 0
            },
        }

        this.changeType = this.changeType.bind(this);
    }

    componentDidMount(){
        this.props.openHeader()
        this.props.disableLeftBar();
        this.props.closeLeftBar();
        this.props.disableRightBar();
        this.props.closeRightBar();
        this.props.getMealTypes();
        this.props.getCombos();
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

    render() {
        return(
            <section id='menu'>
                <div className='combos-list'>
                    { this.props.combos.map((item) => {
                        return <Combo key={item.id} item={item} />
                    })}
                </div>
                <nav className='sections'>
                    <ul>
                        { this.props.mealTypes.map((item) => {
                            let count = 0;
                            if(typeof(this.props.order.byType[item.id]) !== 'undefined') {
                                count = this.props.order.byType[item.id];
                            }
                            if(item.id === this.state.productsFilter.mealTypeId) {
                                return <li key={item.id} className='active'>{item.name} {count > 0 && <span>({count})</span>}</li>
                            } else {
                                return <li key={item.id} onClick={() => this.changeType(item.id)}>{item.name} {count > 0 && <span>({count})</span>}</li>
                            }

                        })}
                    </ul>
                </nav>
                <div className='product-list'>
                    { this.props.products.map((item) => {
                        return <Product key={item.id} item={item} />
                    })}
                </div>
                <div className='images-credits'>
                    All products images extracted from <a href="http://www.freepik.com">freepik</a>
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
        getCombos
    }, dispatch);
  }

  function mapStateToProps(state) {
    return {
      mealTypes: state.mealTypes,
      products: state.products,
      combos: state.combos,
      order: state.order
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
