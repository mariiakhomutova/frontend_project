import Image from 'next/image';
import styles from "./About.module.css";

export default function About () {
  return (
    <div className={styles.about}>
      <div className={styles.frame}>
        <div className={styles.frameChild} />
        <div className={styles.frameItem} />
        <Image className={styles.photo202006251052111Icon} src="/assets/images/photo-20200625-105211-1@2x.png" alt="field"  width={928} height={673} />
        <div className={styles.frameInner}>
          <div className={styles.deepmagParent}>
            <b className={styles.deepmag}>DEEPMAG</b>
            <div className={styles.c}>
              — Cеть магазинов мировых брендов ARMANI EXCHANGE, GANT, CALVIN
              KLEIN, TOMMY HILFIGER, GEOX. Более 10 лет мы являемся официальными
              представителями всемирно известных брендов в Тюмени,
              законодателями ярких трендов и модных тенденций.
            </div>
            <div className={styles.parent}>
              <button className={styles.button}>Читать далее</button>
              <Image className={styles.arrowIcon} src="/assets/icons/arrow-5.svg" alt="arrow" width={100} height={0} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}