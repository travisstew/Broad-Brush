import React from 'react';

function Footer(){
  return(
      <div className="footer small" style={{color:'white'}}>
    <div class="container">
      <div class="row">
        <div class="col-md-4 widget">
          <h2 class="widget_title green">Our Services</h2>
          <ul>
            <li><a>Web Design and Development</a></li>
          
          </ul>
        </div>
        <div class="col-md-4 widget">
          <h2 class="widget_title green">Quick Links</h2>
          <ul>
            <li><a href="javascript:void(0)">Home</a></li>
            <li><a href="javascript:void(0)">About us</a></li>
            <li><a href="javascript:void(0)">Contact us</a></li>
          </ul>
        </div>
        <div class="col-md-4 widget">
          <h2 class="widget_title green">Contact Us</h2>
          <div class="row1">Thanks for visiting our site</div>
        
        </div>
      </div>
    </div>
      </div>
  );
}
export default Footer;