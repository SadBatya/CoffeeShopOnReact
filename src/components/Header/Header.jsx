import React from 'react';
import styles from './Header.module.scss';

const Header = () => {
  console.log(styles)
  return (
    <header>
      <nav>
        <ul>
          <li>
            <a href='#' class='logo'></a>
          </li>
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
            <a href='#'>Our Story</a>
          </li>
          <li>
            <a href='#'>Blog</a>
          </li>
          <li>
            <a href='#'>Contact</a>
          </li>
        </ul>
      </nav>
      <a href='#' className={styles.header__btn}>
        <span>Clone Project</span>
        <span className={styles.arrow}></span>
      </a>
    </header>
  );
};


export default Header