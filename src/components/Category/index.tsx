'use client';

import styles from "./Category.module.css";

export default function Categories() {
    return (
        <div className={styles.menu}>
        <div className={styles.menu1}>
          <div className={styles.categories}>
            <button className={styles.button}>Женщины</button>
            <button className={styles.button}>Мужчины</button>
            <button className={styles.button}>Дети</button>
          </div>
          <div className={styles.categories2}>
            <button className={styles.button3}>Одежда</button>
            <button className={styles.button3}>Обувь</button>
            <button className={styles.button3}>Сумки и аксессуары</button>
            <button className={styles.button3}>Нижнее бельё</button>
            <b className={styles.b}>Распродажа</b>
          </div>
        </div>
      </div>
    )
}