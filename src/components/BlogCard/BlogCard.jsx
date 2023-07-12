import React from 'react';
import styles from './BlogCard.module.css';
import cooffeeImg from './../../img/Image—копия1.jpg'

const BlogCard = () => {
  return (
    <div className={styles.blogCard}>
      <div className={styles.blogInfo}>
        <div className={styles.cardDate}>21 Jun 2021</div>
        <div className={styles.cardTitle}>Extra Thick Homemad Pizza Sauce</div>
        <p className={styles.subtitle}>
          Through True Rich Attended does no end it his mother since favourable
          real had half every him case in packages enquire we up ecstatic..
          Through True Rich Attended does no end it his mother
        </p>
      </div>
      <img src={cooffeeImg} alt='' />
    </div>
  );
};

export default BlogCard