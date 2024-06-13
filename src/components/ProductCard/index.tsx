'use client';

import Image from "next/image";
import { useState, useEffect } from 'react';
import styles from "./ProductCard.module.css";

interface ProductCardProps {
  id: number;
}

const ProductCard = ({ id }: ProductCardProps) => {
  const [product, setProduct] = useState({ name: '', image: '', brand: '', price: '' });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchProductData = async () => {
      setLoading(true);
      setError(false);
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/product/${id}`);
        if (response.ok) {
          const data = await response.json();
          setProduct(data);
        } else {
          console.error('Failed to fetch product data');
          setError(true);
        }
      } catch (error) {
        console.error('Error fetching product data:', error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchProductData();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading product data.</div>;
  }

  return (
    <div className={[styles.div].join(" ")}>
      Истории
      <div className={styles.child} />
        <Image
          src={`/assets/images/product/${product.image}`}
          alt={product.name}
          width={424}
          height={600}
          className={styles.item}
        />
        <div className={styles.inner} />
        <b className={styles.b}>{product.name}</b>
        <b className={styles.loveRepublic}>{product.brand}</b>
        <Image
          src="/assets/icons/vector9.svg"
          alt="heart"
          width={33}
          height={28}
          className={styles.vectorIcon}
        />
        <b className={styles.b1}>{product.price} ₽</b>
        <button className={styles.button}>
          Добавить в корзину
        </button>
    </div>
  );
};

export default ProductCard;
