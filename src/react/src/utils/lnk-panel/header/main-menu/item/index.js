import React from 'react';
import { NavLink } from "react-router-dom";

class NavItem extends React.Component {
  render() {
    return (
      <li>
        <NavLink exact to={this.props.item.url} activeClassName='active' >{this.props.item.label}</NavLink>
      </li>
    )
  }
}

export default NavItem;
