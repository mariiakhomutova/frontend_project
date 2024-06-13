import styles from "./Promo.module.css";
import Image from "next/image";

export default function Promo() {
  return (
    <div className={styles.promo}>
      <div className={styles.frameParent}>
        <button className={styles.frameWrapper} autoFocus={true}>
          <div className={styles.parent}>
            <div className={styles.div}>-30%</div>
            <div className={styles.div1}>на аксессуары</div>
          </div>
        </button>
        <Image className={styles.frameChild} src="/assets/images/rectangle-175@2x.png" alt="earrings" width={205} height={300} />
        <div className={styles.div2}>
          <div className={styles.child} />
          <Image className={styles.item} src="/assets/icons/arrow-4.svg" alt="arrow" width={66.67} height={0}/>
          <div className={styles.div3}>Серьги позолоченные</div>
          <b className={styles.b}>300₽</b>
          <button className={styles.button}>Подробнее</button>
        </div>
        <Image className={styles.frameItem} src="/assets/images/rectangle-175@2x.png" alt="earrings" width={205} height={300} />
        <Image className={styles.frameInner} src="/assets/images/rectangle-175@2x.png" alt="earrings" width={205} height={300} />
        <div>
        <Image className={styles.rectangleIcon} src="/assets/images/rectangle-1771@2x.png" alt="earrings" width={205} height={300} />
        </div>
      </div>
    </div>
  );
};

