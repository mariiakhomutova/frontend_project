import React from 'react';
import Image from 'next/image';
import styles from './Video.module.css';

export default function Video() {
  return (
    <div className={styles.video}>
        <div className={styles.ellipseParent}>
          <div className={styles.frameChild} />
          <Image className={styles.frameItem} src="/assets/icons/polygon-1.svg" alt="play" width={150} height={150} />
        </div>
      </div>
  );
};
