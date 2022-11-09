import React from 'react'
import '../css/style.css';
import 'bootstrap/dist/css/bootstrap.css';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Navigate1 from './Navigate1';
import logo from '../images/Logo.png';
import Players from './showplayer'
import Teams from './teamdetails';
import ContactUs from './ContactUs';

export default function TabCheck() {
  return (
 <div>
    <div style={{ display: 'block', padding: 30 }} className="container">
        <Navigate1/>
      <Tabs defaultActiveKey="second">
        <Tab eventKey="first" title="Players">
         <Players/>
        </Tab>
        <Tab eventKey="second" title="Teams">
          <Teams/>
        </Tab>
        <Tab eventKey="third" title="Contact Us">
         <ContactUs/>
        </Tab>
      </Tabs>
      <div className="container">
            <div className="footer-logo">
                <img src={logo} alt="footer-logo"/>
            </div>
            <div className="social-icon">
                <a href="https://www.instagram.com/ayubh9288"><i className="fa fa-instagram"></i></a>
                <a href="https://twitter.com/ayubh9288"><i className="fa fa-twitter"></i></a>
                <a href="#"><i className="fa fa-dribbble"></i></a>
                <a href="#"><i className="fa fa-youtube-play" ></i></a>
            </div>
            <div className="footer-text">
                <p className="text-center"></p>
            </div>
        </div>
    </div>
 </div>
  )
}
