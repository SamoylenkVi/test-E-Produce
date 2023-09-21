import { useState } from 'react';
import cx from 'classnames';

import { Navigation } from '../Navigation';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { Icon } from '../Icon';

import styles from './styles.module.scss';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handelMenu = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <header className={cx(styles.header, 'wrapper')}>
      <Icon component={Logo} className={styles.headerLogo} />
      <Navigation
        className={cx({
          [styles.navigationOpen]: isOpen,
          [styles.navigationHeader]: true,
        })}
      />
      <button
        className={styles.headerButton}
        aria-label={isOpen ? 'закрыть меню' : 'открыть меню'}
        type="button"
        onClick={handelMenu}
      >
        <span
          className={cx(styles.headerIcon, {
            [styles.headerIconOpen]: isOpen,
            [styles.headerIconClose]: !isOpen,
          })}
        ></span>
      </button>
    </header>
  );
};
