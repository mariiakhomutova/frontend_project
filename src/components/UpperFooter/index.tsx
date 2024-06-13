import Image from 'next/image';
import styles from "./UpperFooter.module.css";

export default function UpperFooter() {
  return (
    <div className={styles.upperfooter}>
      <div className={styles.infoParent}>
        <div className={styles.info}>
          <div className={styles.group}>
            <div className={styles.div9}>Информация</div>
            <Image className={styles.vectorIcon1} src="/assets/icons/vector6.svg" alt="v" width={4} height={16} />
          </div>
          <div className={styles.parent}>
            <div className={styles.div1}>Обработка заказов</div>
            <div className={styles.div1}>Информация о доставке</div>
            <div className={styles.div1}>Условия оплаты</div>
            <div className={styles.div1}>Условия возврата</div>
            <div className={styles.div1}>Условия покупки</div>
            <div className={styles.div1}>
              <p className={styles.p}>Конфиденциальность</p>
              <p className={styles.p}>и защита информации</p>
            </div>
            <div className={styles.div1}>Реквизиты</div>
            <div className={styles.div1}>Информация по уходу</div>
          </div>
        </div>
        <div className={styles.support}>
          <div className={styles.group}>
            <div className={styles.div13}>Служба поддержки</div>
            <Image className={styles.vectorIcon1} src="/assets/icons/vector6.svg" alt="v" width={4} height={16} />
          </div>
          <div className={styles.container}>
            <div className={styles.div1}>Чем мы можем вам помочь?</div>
            <div className={styles.div1}>Контакты</div>
            <div className={styles.div1}>Таблица размеров</div>
          </div>
        </div>
        <div className={styles.service}>
          <div className={styles.group}>
            <div className={styles.div13}>Сервис для клиентов</div>
            <Image className={styles.vectorIcon} src="/assets/icons/vector6.svg" alt="v" width={4} height={16} />
          </div>
          <div className={styles.parent1}>
            <div className={styles.div14}>Личный кабинет</div>
            <div className={styles.div1}>Корзина</div>
            <div className={styles.div1}>История заказов</div>
            <div className={styles.div1}>Рассылка новостей</div>
            <div className={styles.div1}>Поиск</div>
            <div className={styles.div1}>Карта сайта</div>
          </div>
        </div>
        <div className={styles.aboutParent}>
          <div className={styles.about}>
            <div className={styles.deepmag}>DEEPMAG</div>
            <div className={styles.parent2}>
              <div className={styles.div1}>О нас</div>
              <div className={styles.div1}>Карта DEEPMAG</div>
              <div className={styles.div1}>Подарочная карта</div>
              <div className={styles.div1}>Работа в DEEPMAG</div>
              <div className={styles.div1}>Магазины</div>
            </div>
          </div>
          <div className={styles.frameParent}>
            <a className={styles.frameGroup}>
              <Image className={styles.frameChild} src="/assets/icons/frame-6.svg" alt="inst" width={16} height={16} />
              <div className={styles.deepmagru}>@deepmag.ru</div>
            </a>
            <a
              className={styles.groupParent}
              href="mailto:info@tyumen-retail.com"
            >
              <Image className={styles.groupIcon} src="/assets/icons/group.svg" alt="mail" width={16} height={12} />
              <div className={styles.infotyumenRetailcom}>
                info@tyumen-retail.com
              </div>
            </a>
            <a className={styles.groupParent} href="tel:786940">
              <Image className={styles.frameChild} src="/assets/icons/vector7.svg" alt="phone" width={16} height={16} />
              <div className={styles.div1}>8 919 933 33 93</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
