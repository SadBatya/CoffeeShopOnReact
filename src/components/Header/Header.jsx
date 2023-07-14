import React from 'react';
import styles from './Header.module.scss';
import { NavLink } from 'react-router-dom';

const Header = () => {
  console.log(styles)
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to='#' className={styles.logo}></NavLink>
          </li>
          <li>
            <NavLink to='/HomePage' className={navData => navData.isActive ? styles.active : styles.item}>Home</NavLink>
          </li>
          <li>
            <NavLink to='/Menu' className={navData => navData.isActive ? styles.active : styles.item}>Menu</NavLink>
          </li>
          <li>
            <NavLink to='/AboutUs' className={navData => navData.isActive ? styles.active : styles.item}>About us</NavLink>
          </li>
          <li>
            <NavLink to='/OurStory' className={navData => navData.isActive ? styles.active : styles.item}>Our Story</NavLink>
          </li>
          <li>
            <NavLink to='/Blog' className={navData => navData.isActive ? styles.active : styles.item}>Blog</NavLink>
          </li>
          <li>
            <NavLink to='/Contact' className={navData => navData.isActive ? styles.active : styles.item}>Contact</NavLink>
          </li>
        </ul>
      </nav>
      <NavLink to='#' className={styles.header__btn}>
        <span>Clone Project</span>
        <span className={styles.arrow}></span>
      </NavLink>
    </header>
  );
};


export default Header