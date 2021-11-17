import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { disableLeftBar, closeLeftBar } from 'actions/panel/leftbar';
import { disableRightBar, closeRightBar } from 'actions/panel/rightbar';
import { openHeader } from 'actions/panel/header';

import { getMealTypes } from 'actions/products/mealTypes';

import './styles.scss';
import { __esModule } from 'react-router-dom/cjs/react-router-dom.min';

class Menu extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            activeMealType: 0
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
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.mealTypes !== this.props.mealTypes && this.props.mealTypes.length > 0) {
            this.setState({
                activeMealType: this.props.mealTypes[0].id
            }); 
        }
    }

    changeType(id) {
        this.setState({
            activeMealType: id 
        })
    }

    render() {
        return(
            <section id='menu'>
                <nav className='sections'>
                    <ul>
                        { this.props.mealTypes.map((item) => {
                                if(item.id === this.state.activeMealType) {
                                    return <li key={item.id} className='active'>{item.name}</li>
                                } else {
                                    return <li key={item.id} onClick={() => this.changeType(item.id)}>{item.name}</li>
                                }

                        }) }
                    </ul>
                </nav>
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
        getMealTypes
    }, dispatch);
  }

  function mapStateToProps(state) {
    return {
      mealTypes: state.mealTypes
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
