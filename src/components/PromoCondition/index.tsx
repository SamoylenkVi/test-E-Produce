import styles from './styles.module.scss';

export const PromoCondition = () => (
  <div className="wrapper">
    <h1 className={styles.promoCondition__mainTitle}>Выигрывай призы</h1>
    <h2 className={styles.promoCondition__title}>Гарантированный приз</h2>
    <div className={styles.promoCondition__content}>
      <span className={styles.promoCondition__image}></span>
      <p>
        {`Зарегистрируйте один чек\nи получите подписку\nЯндекс Плюс на 1 год`}
      </p>
    </div>
  </div>
);
