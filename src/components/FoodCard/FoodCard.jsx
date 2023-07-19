import React from 'react';
import styles from './FoodCard.module.css';

const FoodCard = (props) => {
  return (
    <div class={styles.menuCard}>
      <div>{props.icon}</div>
      <div class={styles.cardName}>
        <span>{props.name}</span>
        <span>{props.price}</span>
      </div>
    </div>
  );
};

export default FoodCard
