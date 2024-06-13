import styles from "./Subscription.module.css";

export default function Subscription() {
  return (
    <div className={styles.subscription}>
      <div className={styles.parent}>
        <div className={styles.div}>
          <p className={styles.p}>
            <b>Подпишитесь на рассылку и</b>
          </p>
          <p className={styles.p}>
            <b>получите скидку</b>
            <span className={styles.span}> 10% </span>
            <b>на</b>
          </p>
          <p className={styles.p}>
            <b>Ваш заказ</b>
          </p>
        </div>
        <div className={styles.div1}>
          Оставайтесь в курсе наших новостей и получите скидку 10%
        </div>
        <div className={styles.frameParent}>
          <input className={styles.frameChild} placeholder="Эл. почта" type="email" />
          <button className={styles.button}>
            <b className={styles.b}>ПОДПИСАТЬСЯ</b>
          </button>
        </div>
      </div>
    </div>
  );
};