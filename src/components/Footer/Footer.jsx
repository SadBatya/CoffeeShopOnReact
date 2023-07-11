import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer>
      <a href='#' class='logo'></a>
      <nav>
        <ul>
          <li>
            <a href='#'>Home</a>
          </li>
          <li>
            <a href='#'>Menu</a>
          </li>
          <li>
            <a href='#'>About us</a>
          </li>
          <li>
            <a href='#'>Our story</a>
          </li>
          <li>
            <a href='#'>Blog</a>
          </li>
          <li>
            <a href='#'>Contact us</a>
          </li>
        </ul>
      </nav>
      <div class='socials'>
        <div class='footer__text'>© 2021 Finsweet | All rights reserved.</div>
        <div class='footer__icons'>
          <div class='facebook__icon'>
            <a href='#'>
              <img src={facebook} alt='' />
            </a>
          </div>
          <div class='twitter__icon'>
            <a href='#'>
              <img src={twitter} alt='' />
            </a>
          </div>
          <div class='instagram__icon'>
            <a href='#'>
              <img src={instagram} alt='' />
            </a>
          </div>
          <div class='linkedin__icon'>
            <a href='#'>
              <img src={linkeIn} alt='' />
            </a>
          </div>
        </div>
        <div class='footer__btn'>
          <span>Contact Us</span>
          <div class='arrow'></div>
        </div>
      </div>
    </footer>
  );
};


export default Footer
