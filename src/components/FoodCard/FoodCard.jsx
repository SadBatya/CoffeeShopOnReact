import React from 'react';
import styles from './FoodCard.module.css';
import cardImg from './../../img/Image-1.jpg'

const FoodCard = () => {
  return (
    <div class={styles.menuCard}>
      <img src={cardImg} alt='' />
      <div class={styles.cardName}>
        <span>Drp Cofee</span>
        <span>$08.85</span>
      </div>
    </div>
  );
};

export default FoodCard
