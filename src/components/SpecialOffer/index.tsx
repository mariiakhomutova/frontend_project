import Image from 'next/image';
import styles from "./SpecialOffer.module.css";

export default function SpecialOffer() {
  return (
    <div className={styles.specialOffer}>
      <div className={styles.frameParent}>
        <Image className={styles.frameChild} src="/assets/images/frame-979@2x.png" alt="newautumn" width={927.49} height={300} />
        <div className={styles.parent}>
          <button className={styles.button}>Верхняя одежда</button>
          <button className={styles.button}>Толстовки</button>
          <button className={styles.button}>Сапоги</button>
        </div>
      </div>
    </div>
  );
};
