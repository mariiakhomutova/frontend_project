import Image from 'next/image';
import Link from "next/link";
import styles from "./AuthorMenu.module.css";

export default function AuthorMenu () {
  return (
    <div className={styles.personal}>
      <div className={styles.menuParent}>
        <div className={styles.menu}>
          <div className={styles.categories}>
            <div className={styles.div}>Женщины</div>
            <div className={styles.div}>Мужчины</div>
            <div className={styles.div}>Дети</div>
          </div>
          <div className={styles.categories2}>
            <div className={styles.div3}>Одежда</div>
            <div className={styles.div3}>Обувь</div>
            <div className={styles.div3}>Сумки и аксессуары</div>
            <div className={styles.div3}>Нижнее бельё</div>
            <b className={styles.b}>Распродажа</b>
          </div>
        </div>
        <div className={styles.path}>
          <Link className={styles.a} href="/">
            Главная
          </Link>
          <Image className={styles.pathChild} src="/assets/icons/vector-6.svg" width={4} height={8} alt="pointer"/>
          <div className={styles.div7}>Личный кабинет</div>
          <Image className={styles.pathChild} src="/assets/icons/vector-6.svg" width={4} height={8} alt="pointer" />
          <div className={styles.div8}>Авторизация</div>
        </div>
        <b className={styles.b1}>Личный кабинет</b>
      </div>
    </div>
  );
};