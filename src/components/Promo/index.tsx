import { RegistrationButton } from '../RegistrationButton';

import styles from './styles.module.scss';

export const Promo = () => (
  <div className={styles.promo}>
    <h1 className={styles.promo__title}>
      {` Участвуй в\xA0акции\xA0и выигрывай \nпризы!
   `}{' '}
    </h1>

    <RegistrationButton
      text={'Участвовать'}
      registrationClass={styles.promo__button}
    />
  </div>
);
