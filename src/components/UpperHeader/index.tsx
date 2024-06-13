import React from 'react';
import Image from 'next/image';
import styles from './UpperHeader.module.css';

export default function UpperHeader() {
  return (
    <div className={styles.upperheader}>
      <div className={styles.contactsParent}>
        <div className={styles.contacts}>
          <div className={styles.email}>
            <a className={styles.group} href="mailto:support@deepmag.ru">
              <Image className={styles.mail} src="/assets/icons/vector.svg" alt="mail" width={20} height={8} />
              <Image className={styles.mail1} src="/assets/icons/vector1.svg" alt="mail1" width={20} height={14} />
            </a>
            <a className={styles.supportdeepmagru} href="mailto:support@deepmag.ru">
              support@deepmag.ru
            </a>
          </div>
          <a className={styles.contactNumber} href="tel:556744">
            <Image className={styles.phone} src="/assets/icons/vector2.svg" alt="phone" width={16} height={16} />
            <span className={styles.a}>+7(919)-123-45-56</span>
          </a>
          <button className={styles.whatsapp}>
            <Image className={styles.wa} src="/assets/icons/vector3.svg" alt="wa" width={16} height={16} />
            <span className={styles.whatsapp1}>Напишите нам в WhatsApp</span>
          </button>
        </div>
        <button className={styles.delivery}>
          <Image className={styles.mask} src="/assets/icons/vector4.svg" alt="mask" width={20} height={14} />
          <div className={styles.dil}>Бесконтактная доставка</div>
        </button>
      </div>
    </div>
  );
};
