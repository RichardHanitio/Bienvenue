import React from 'react'
import {AiOutlineInstagram, AiOutlineWhatsApp, AiOutlineTwitter} from "react-icons/ai";

import Container from './Footer.styled'


const Footer = () => {
  return (
    <Container>
      <div className="footer-inner-container">
        <div className="footer-left">
          <div className="footer-logo">
            <img src="/assets/logo-large.png" alt="logo" />
          </div>
          <div className="footer-media">
            <ul className="footer-list">
              <li className="footer-title">Social Media</li>
              <li>
                <AiOutlineInstagram className="footer-media-logo"/>
                <span className="footer-media-name">bienvenue.official</span>
              </li>
              <li>
                <AiOutlineWhatsApp className="footer-media-logo"/>
                <span className="footer-media-name">+621234567890</span>
              </li>
              <li>
                <AiOutlineTwitter className="footer-media-logo"/>
                <span className="footer-media-name">bienvenue.official</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-right">
          <div className="footer-menu">
            <ul className="footer-list">
              <li className="footer-title">Menu</li>
              <li><span className="footer-media-name">Steak</span></li>
              <li><span className="footer-media-name">Spaghetti</span></li>
              <li><span className="footer-media-name">Snacks</span></li>
              <li><span className="footer-media-name">Salad</span></li>
              <li><span className="footer-media-name">Drinks</span></li>
            </ul>
          </div>
          <div className="footer-support">
            <ul className="footer-list">
              <li className="footer-title">Support</li>
              <li><span className="footer-media-name">Contact Us</span></li>
              <li><span className="footer-media-name">About Us</span></li>
              <li><span className="footer-media-name">Reservations</span></li>
            </ul>
          </div>
          <div className="footer-address-operational">
            <ul className="footer-list">
              <li className="footer-title">Address</li>
              <li><span className="footer-media-name">Jl. Letjen S Parman No. 58, Petisah Tengah, Kec. Medan Petisah, Kota Medan, Sumatera Utara 20111</span></li>
            </ul>

            <ul className="footer-list">
              <li className="footer-title">Operational Hours</li>
              <li><span className="footer-media-name">Monday - Sunday 08.00 - 23.00 (GMT+7)</span></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        Copyright © 2022 Bienvenue. All rights reserved
      </div>
    </Container>
  )
}

export default Footer