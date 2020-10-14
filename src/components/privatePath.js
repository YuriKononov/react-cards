import React from 'react';
import { Route, Redirect } from  "react-router-dom";

export default function PrivatePath(props) {
    const authentified = localStorage.getItem('auth-token') === undefined || localStorage.getItem('auth-token') === null ? false : true;
    return (
        authentified ? (<Route  path={props.path}  exact={props.exact} component={props.component} />) : 
            (<Redirect  to="/log"  />)
    )
}
