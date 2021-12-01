import React, { useContext, useEffect } from 'react';
import { useSelector } from 'react-redux'
import { Redirect, Route } from "react-router-dom";
import { PanelConfigContext } from './panelconfig';

const PanelRoute = (props) => {

  const user = useSelector((state) => state.user);
  const panelConfiguration = useContext(PanelConfigContext);

  let forbidden = false;
  if ( props.private && !user.authenticated ) {
    forbidden = true;
  }

  useEffect(() => {
    Object.keys(panelConfiguration).forEach( (key) => {
        if(props.configuration && typeof(props.configuration[key] !== 'undefined')){
          panelConfiguration[key][1](props.configuration[key]);
        } else {
          panelConfiguration[key][1](false);
        }
      }
    )
  },[props.path]); // eslint-disable-line react-hooks/exhaustive-deps

  return ( forbidden
    ?
      <Redirect to='/' />
    :
      <Route {...props} />
  )
}

export default PanelRoute;
