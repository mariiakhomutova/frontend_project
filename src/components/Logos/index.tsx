'use client';

import Image from 'next/image';
import styles from "./Logos.module.css";

export default function Logos() {
    return (
        <div className={styles.container}>
        <Image
          className={styles.im}
          src="/assets/images/armani.png"
          alt="logo"
          width={140}
          height={140}
        />
        <Image
          className={styles.im}
          src="/assets/images/Guess.png"
          alt="logo"
          width={140}
          height={140}
        />
        <Image
          className={styles.im}
          src="/assets/images/CK.png"
          alt="logo"
          width={140}
          height={140}
        />
        <Image
          className={styles.im}
          src="/assets/images/Geox.png"
          alt="logo"
          width={140}
          height={140}
        />
        <Image
          className={styles.im}
          src="/assets/images/gant.png"
          alt="logo"
          width={140}
          height={140}
        />
        <Image
          className={styles.im}
          src="/assets/images/DM.png"
          alt="logo"
          width={140}
          height={140}
        />
      </div>
    );
  }