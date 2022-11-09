import React from 'react';
import map from '../images/map.png';

export default function ContactUs() {
  return (
    <div className='cardBody d-flex m-3' >
       
      <div className="contactHeader"><h1 >Contact Us</h1><br></br><br></br>
<h3>All India Football Federation</h3><br></br>
<h5>Football House, Sector 19, Phase 1,<br></br>
Dwarka, New Delhi: 110075.<br></br>
Telephone: +91-11-25308200/201/202/203/204/205<br></br>
Fax: +91-11- 25308234/36<br></br>
Email: aiff@the-aiff.com</h5>
<br></br><br></br>
Helpline: +91-8506991991 (This facility is available between 10:00 AM to 06:00 PM from Monday to Friday. Please call during the mentioned time)
</div>

<div> <img src={map} className="m-3 " alt="contact-map"/></div>
    </div>
  )
}
