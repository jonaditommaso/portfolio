import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/header.css';

function NavigationLinks({children}) {

    return (
        <NavLink to={`${children}`} className={`link`} activeClassName={'linkClicked'}>
            <span>{children?.toUpperCase()}</span>
        </NavLink>
    );
}

export default NavigationLinks;
