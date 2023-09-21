import cx from 'classnames';
import { Navigation } from '../Navigation';
import styles from './styles.module.scss';

export const Footer = () => (
  <div className={cx(styles.footer, 'wrapper')}>
    <Navigation className={styles.navigation__footer} />
  </div>
);
