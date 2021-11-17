import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import { Route} from "react-router-dom";

class PrivateRoute extends React.Component {

  render(){
    return (this.props.user.authenticated
      ?
        <Route {...this.props} />
      :
        <Redirect to='/' />
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
  }
}

export default withRouter(connect(mapStateToProps)(PrivateRoute))
