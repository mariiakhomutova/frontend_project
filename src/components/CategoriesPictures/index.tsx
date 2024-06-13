import styles from "./CategoriesPictures.module.css";

export default function CategoriesPictures () {
  return (
    <div className={styles.categoriesPictures}>
      <div className={styles.categories}>
        <div className={styles.yobys1Wrapper}>
          <button className={styles.yobys1} />
        </div>
        <div className={styles.yobys1Wrapper}>
          <button className={styles.vexbys1} />
        </div>
        <div className={styles.yobys1Wrapper}>
          <button className={styles.ltnb1} />
        </div>
      </div>
    </div>
  );
};
