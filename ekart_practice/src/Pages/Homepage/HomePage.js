import React from 'react';
import './HomePage.scss';
import Directory from'../../Component/Directory/Directory.component';

class HomePage extends React.Component {
    render(){
        return(
 
<div className="home1">
            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2020/5/11/78877a1b-8c2c-4946-9739-5da36af5fc041589217592782-flip-flop-dk.jpg" class="d-block w-100" alt="courosel1" />
    </div>
    <div class="carousel-item">
      <img src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2020/4/24/2fc9ef53-0aab-49a7-869a-3a93e9505e3d1587726261377-Desktop-Green--1-.jpg" class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2020/5/11/299393a8-0512-4c7d-9c5d-f858993718601589217592822-HRX_Desk_Banner--1-.jpg" class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
    <img src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2020/5/11/16cbba00-68f1-4989-85bb-316ad9ca11111589217592716-Anouk_Desk_Banner.jpg" class="d-block w-100" alt="..." />
  </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
  </div>

  <div className='homepage'>
     <h2 className="shop1"># Shop Top Categories</h2>
    <Directory />
  </div>


  <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2020/5/4/8d96cf6e-62c5-4fda-b3ff-1291cf1f9f911588574101923-wildcraft-desktop-banner.jpg" class="d-block w-100" alt="courosel1" />
    </div>
    <div class="carousel-item">
      <img src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2020/5/5/a34d9efa-34aa-415a-84e6-314dc1f63d701588697841207-desktop-Banner.jpg" class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2020/4/29/2800198a-5b1e-44af-b59a-60d8521eb9aa1588170588288-DK.jpg" class="d-block w-100" alt="..." />
    </div>
   
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
  </div>

  
</div>

        )
    }
}


export default HomePage;