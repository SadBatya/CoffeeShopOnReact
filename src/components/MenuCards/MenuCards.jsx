import styles from './../MenuCards/MenuCards.module.scss'

export default function MenuCards(props) {
  return (
    <div className={styles.menu__card}>
      <img src={props.img} alt="" />
      <div className={styles.card__name}>
        <span>{props.name}</span>
        <span>{props.price}</span>
      </div>
    </div>
  )
}


