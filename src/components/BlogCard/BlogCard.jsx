import React from 'react';
import styles from './BlogCard.module.css';


const BlogCard = (props) => {
  return (
    <div className={styles.blogCard}>
      <div className={styles.blogInfo}>
        <div className={styles.cardDate}>{props.date}</div>
        <div className={styles.cardTitle}>{props.title}</div>
        <p className={styles.subtitle}>
          {props.description}
        </p>
      </div>
      <img src={props.img} alt='' />
    </div>
  );
};

export default BlogCard