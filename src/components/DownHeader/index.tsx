import type { NextPage } from "next";
import Image from 'next/image';
import Link from "next/link";
import styles from "./DownHeader.module.css";

export default function DownHeader() {
  return (
    <div className={styles.downheader}>
      <div className={styles.frameParent}>
        <div className={styles.logoParent}>
          <a className={styles.logo}>
            <Image className={styles.fill1} src="/assets/icons/fill-1-1.svg" alt="fill11" width={19} height={25} />
            <Image className={styles.fill1} src="/assets/icons/fill-3-1.svg" alt="fill31" width={15} height={25} />
            <Image className={styles.fill1} src="/assets/icons/fill-3-2.svg" alt="fill32" width={15} height={25} />
            <Image className={styles.fill1} src="/assets/icons/fill-7-1.svg" alt="fill71" width={19} height={25} />
            <Image className={styles.fill1} src="/assets/icons/fill-9-1.svg" alt="fill91" width={21} height={25} />
            <Image className={styles.fill1} src="/assets/icons/fill-11-1.svg" alt="fill111" width={21} height={25} />
            <Image className={styles.fill1} src="/assets/icons/fill-13-1.svg" alt="fill131" width={21} height={25} />
          </a>
          <div className={styles.div}>
            <div className={styles.child} />
            <div className={styles.item} />
            <div className={styles.inner} />
            <div className={styles.rectangleDiv} />
          </div>
        </div>
        <input className={styles.searchBar} placeholder="Поиск" type="search" />
        <div className={styles.icons}>
          <div className={styles.authorization}>
            <Link className={styles.a} href="/authorization">
              Вход/регистрация
            </Link>
            <Link href="/authorization">
            <Image className={styles.enter1Icon} src="/assets/icons/enter-1.svg" alt="enter1icon" width={30} height={30} />
            </Link>
          </div>
          <button className={styles.button}>
            <Image className={styles.icon} src="/assets/icons/3.svg" alt="icon" width={30} height={30} />
            <div className={styles.ellipse} />
            <div className={styles.div1}>0</div>
          </button>
          <Link className={styles.a1} href="/cart">
            <Image className={styles.icon1} src="/assets/icons/1.svg" alt="icon1" width={30} height={30} />
            <div className={styles.ellipseDiv} />
            <div className={styles.div2}>0</div>
          </Link>
        </div>
      </div>
    </div>
  );
};
