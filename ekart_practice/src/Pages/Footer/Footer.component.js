import React from "react";
import "./Footer.style.scss";
import Time from "../timeStamp/TimeStamp";


const Footer = () => {
  return (
    <div className='footer1'>
      <div class="card text-center">
        <div class="card-header">Assets By Myntra</div>
        <div class="card-body">
          <h5 class="card-title">Special title treatment</h5>
          <p class="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <a  class="btn btn-primary">
            Go somewhere
          </a>
        </div>
        <div class="card-footer text-muted">&copy; Registered In 2020
         <Time />
       
        </div>
      </div>
    </div>
  );
};

export default Footer;
