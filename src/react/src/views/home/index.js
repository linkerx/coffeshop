import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Link } from 'react-router-dom';

import { disableLeftBar, closeLeftBar } from 'actions/panel/leftbar';
import { disableRightBar, closeRightBar } from 'actions/panel/rightbar';
import { closeHeader } from 'actions/panel/header';

import './styles.scss';

class Home extends React.Component {

    componentDidMount(){
        this.props.closeHeader();
        this.props.disableLeftBar();
        this.props.closeLeftBar();
        this.props.disableRightBar();
        this.props.closeRightBar();
    }

    render() {
        return(
            <section id='home'>
                <img src='/images/logo.png' />
                <div className='welcome'>Welcome to the cofeeshop</div>
                <Link to='/menu'>Create your order</Link>
            </section>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        closeHeader,
        disableLeftBar,
        closeLeftBar,
        disableRightBar,
        closeRightBar,
    }, dispatch);
  }

export default connect(null, mapDispatchToProps)(Home);
