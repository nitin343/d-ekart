import React from "react";
import { userDetail, userDName } from "../../redux/user/user.reselect";
import { Link } from "react-router-dom";
import "./profile.style.scss";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import CButton from "../CButton/Cbotton.component";
import ProfileShow from "../profileDropdown/profile.component";


const PDropdown = ({User }) => {

  
    return(
        <div className='container'>
        <div className="cart-dropdown">
        <div className="cart-items">
        <p className='name'>Hello &nbsp;{
            User ? `${User.displayName}` : ''
        }
        </p>
        
        <div className='welcome'>
        <p className='Ekart'>Welcome to Ekart</p>
        <p className='stay'>Stay Home , Shop From Home</p>
        </div>
        {
            User 
            ?
            <ProfileShow />
            :
            <CButton><Link to='signIn'>Sign In</Link></CButton>
        }
        </div>
        </div>
        </div>
        )}
        
        const mapStateToProps = createStructuredSelector({
            User : userDetail,
    
        })
        
        export default connect(mapStateToProps)(PDropdown);
        