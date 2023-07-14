import React from 'react';
import styles from './Card.module.css';

const Card = (props) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardIcon}></div>
      <div className={styles.cardTitle}>Quafe Cake</div>
      <p className={styles.subtitle}>
        Through True Rich Attended no end it his mother since favourable real
        had half every him.
      </p>
    </div>
  );
};



export default Card
