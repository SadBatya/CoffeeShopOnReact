import React from 'react';
import styles from './Card.module.css';

const Card = (props) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardIcon}>
        <img src={props.img}/>
      </div>
      <div className={styles.cardTitle}>{props.name}</div>
      <p className={styles.subtitle}>
        {props.description}
      </p>
    </div>
  );
};

export default Card
