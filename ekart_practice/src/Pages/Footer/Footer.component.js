import React from "react";
import "./Footer.style.scss";
import Time from "../timeStamp/TimeStamp";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <div className='footer1'>
      <div class="card text-center">
        <div class="card-header">Assets By Myntra</div>
        <div className="card-body">
          <h5 className="card-title">FOLLOW US ON SOCIAL MEDIA</h5>
          <div className="social-media">
          <a className='link123' target="_blank" href='https://www.facebook.com/nitin.phulekar'><i className='fab fa-facebook' ></i></a> 
          <a className='link123' href=''><i className='fab fa-twitter' ></i></a> 
          <a className='link123' href=''><i className='fab fa-whatsapp' ></i></a>
           <a className='link123' href=''><i className='fab fa-instagram' ></i></a> 
           <a className='link123' href=''><i className='fab fa-youtube' ></i></a>
          </div>
          <a  className="btn btn-primary text-white">
         Contact us
          </a>
        </div>
        <div class="card-footer text-muted">&copy; Ekart Ltd.
         <Time />
       
        </div>
      </div>
    </div>
  );
};

export default Footer;
