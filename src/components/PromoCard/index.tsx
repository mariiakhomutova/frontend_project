'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import styles from './PromoCard.module.css';

interface Promo {
  id: number;
  title: string;
  text: string;
  image: string;
}

interface PromoCardProps {
  id: number;
}

const PromoCard = ({ id }: PromoCardProps) => {
  const [promo, setPromo] = useState<Promo | null>(null);

  useEffect(() => {
    const fetchPromoData = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/promo`);
        if (response.ok) {
          const data: Promo = await response.json();
          setPromo(data);
        } else {
          console.error('Failed to fetch data:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchPromoData();
  }, [id]);

  if (!promo) {
    return null;
  }

  return (
    <div>
      <button className={styles.frameWrapper} autoFocus={true}>
        <Image src={`/assets/images/promo/${promo.image}`} alt={promo.title} width={672} height={300} />
        <div className={styles.parent}>
          <div className={styles.div}>{promo.title}</div>
          <div className={styles.div1}>{promo.text}</div>
        </div>
      </button>
    </div>
  );
};

export default PromoCard;
