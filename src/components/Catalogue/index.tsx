import ProductCard from '../ProductCard';
import styles from './Catalogue.module.css';

const Catalog = () => {
  const productIds = [2, 3, 4, 5];

  return (
    <div className={[styles.specialOffer].join(" ")}>
      <div className={styles.skirts}>
        {productIds.map(id => (
          <ProductCard key={id} id={id} />
        ))}
      </div>
    </div>
  );
};

export default Catalog;
