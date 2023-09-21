import cx from 'classnames';
import { RegistrationButton } from '../RegistrationButton';
import styles from './styles.module.scss';

type NavigationProps = {
  className?: string;
};

export const Navigation = ({ className }: NavigationProps) => {
  return (
    <nav className={cx(styles.navigation, className)}>
      <ul className={styles.navigation__list}>
        <li className={styles.navigation__item}>
          <a className={styles.navigation__link}>Главная</a>
        </li>
        <li className={styles.navigation__item}>
          <a href="#presents" className={styles.navigation__link}>
            Призы
          </a>
        </li>
        <li className={styles.navigation__item}>
          <a className={styles.navigation__link}>Как участвовать</a>
        </li>
        <li className={styles.navigation__item}>
          <a className={styles.navigation__link}>Вопросы и ответы</a>
        </li>
      </ul>
      <RegistrationButton
        text={'Личный кабинет'}
        registrationClass={styles.navigation__button}
      />
    </nav>
  );
};
