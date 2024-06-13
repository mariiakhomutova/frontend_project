import React from 'react';
import styles from './DownFooter.module.css';

export default function Downfooter () {
    return (
      <div className={styles.lowerfooter}>
        <div className={styles.frameParent}>
          <div className={styles.deepMagWrapper}>
            <div className={styles.deepMag}>© 2021 DEEP MAG Все права защищены </div>
          </div>
          <div className={styles.deepMagWrapper}>
            <div className={styles.deepMag}>Политика конфиденциальности</div>
          </div>
        </div>
      </div>
    );
};
