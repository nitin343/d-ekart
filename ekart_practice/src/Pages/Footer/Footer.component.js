// import React from "react";
// import "./Footer.style.scss";
// import Time from "../timeStamp/TimeStamp";
// import { Link } from "react-router-dom";


// const Footer = () => {
//   return (
//     <div className='footer1'>
//       <div class="card text-center">
//         <div class="card-header">Assets By Myntra</div>
//         <div className="card-body">
//           <h5 className="card-title">FOLLOW US ON SOCIAL MEDIA</h5>
//           <div className="social-media">
//           <a className='link123' target="_blank" href='https://www.facebook.com/nitin.phulekar'><i className='fab fa-facebook' ></i></a> 
//           <a className='link123' href=''><i className='fab fa-twitter' ></i></a> 
//           <a className='link123' href=''><i className='fab fa-whatsapp' ></i></a>
//            <a className='link123' href=''><i className='fab fa-instagram' ></i></a> 
//            <a className='link123' href=''><i className='fab fa-youtube' ></i></a>
//           </div>
//           <a  className="btn btn-primary text-white">
//          Contact us
//           </a>
//         </div>
//         <div class="card-footer text-muted">&copy; Ekart Ltd.
//          <Time />
       
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;


import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import "./Footer.style.scss";

export default class Footer extends Component {
    render() {
        return (
             
    <footer class="site-footer">
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-6">
          <h6>About</h6>
          <p class="text-justify">Scanfcode.com <i>CODE WANTS TO BE SIMPLE </i> is an initiative  to help the upcoming programmers with the code. Scanfcode focuses on providing the most efficient code or snippets as the code wants to be simple. We will help programmers build up concepts in different programming languages that include C, C++, Java, HTML, CSS, Bootstrap, JavaScript, PHP, Android, SQL and Algorithm.</p>
        </div>

        <div class="col-xs-6 col-md-3">
          <h6>Categories</h6>
          <ul class="footer-links">
            <li><a href="http://scanfcode.com/category/c-language/">Jackets</a></li>
            <li><a href="http://scanfcode.com/category/front-end-development/">Shoes</a></li>
            <li><a href="http://scanfcode.com/category/back-end-development/">Hats</a></li>
            <li><a href="http://scanfcode.com/category/java-programming-language/">Mens</a></li>
        
          </ul>
        </div>

        <div class="col-xs-6 col-md-3">
          <h6>Quick Links</h6>
          <ul class="footer-links">
            <li><a href="http://scanfcode.com/about/">Home</a></li>
            <li><a href="http://scanfcode.com/contact/">Shop</a></li>
            <li><a href="http://scanfcode.com/contribute-at-scanfcode/">Contribute</a></li>
            <li><a href="http://scanfcode.com/privacy-policy/">Privacy Policy</a></li>
            <li><a href="http://scanfcode.com/sitemap/">Sitemap</a></li>
          </ul>
        </div>
      </div>
     
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-8 col-sm-6 col-xs-12">
          <p class="copyright-text">Copyright &copy; 2017 All Rights Reserved by 
       <a href="#">Ekart</a>.
          </p>
        </div>

        <div class="col-md-4 col-sm-6 col-xs-12">
          <ul class="social-icons">
            <li><a class="facebook" href="#"><i class="fa fa-facebook"></i></a></li>
            <li><a class="twitter" href="#"><i class="fa fa-twitter"></i></a></li>
            <li><a class="dribbble" href="#"><i class="fa fa-dribbble"></i></a></li>
            <li><a class="linkedin" href="#"><i class="fa fa-linkedin"></i></a></li>   
          </ul>
        </div>
      </div>
    </div>
</footer>
        )
    }
}

