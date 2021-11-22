import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { disableLeftBar, closeLeftBar } from 'actions/panel/leftbar';
import { disableRightBar, closeRightBar } from 'actions/panel/rightbar';
import { openHeader } from 'actions/panel/header';
import BillProduct from './bill-item';

import './styles.scss';

class Bill extends React.Component {

    componentDidMount(){
        this.props.openHeader()
        this.props.disableLeftBar();
        this.props.closeLeftBar();
        this.props.disableRightBar();
        this.props.closeRightBar();
    }

    render() {
        const products = this.props.order.products;
        const total = parseFloat(this.props.order.bill) + parseFloat(this.props.order.taxes);

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
                                <div className='total'>{'$' + this.props.order.taxes.toFixed(2)}</div>                            
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
}

    function mapDispatchToProps(dispatch) {
        return bindActionCreators({
            openHeader,
            disableLeftBar,
            closeLeftBar,
            disableRightBar,
            closeRightBar
        }, dispatch);
    }

    function mapStateToProps(state) {
        return {
            order: state.order
        }
    }

export default connect(mapStateToProps, mapDispatchToProps)(Bill);
