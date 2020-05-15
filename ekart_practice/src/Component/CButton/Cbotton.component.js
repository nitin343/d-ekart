import React , {Component} from 'react';
import './CButton.style.scss';

const CButton = ({children , handleClick ,isGoogleSignIn, ...otherProps}) => (
    <button className={`custom-button`}
    {...otherProps}
   
    >
     {children}
    </button>
)

export default CButton;