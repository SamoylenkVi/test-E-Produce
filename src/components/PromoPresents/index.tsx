import useViewport from '../../hooks/useViewport';
import { RegistrationButton } from '../RegistrationButton';
import { PresentCard } from './components/PresentCard';
import { presents } from './components/mock';

import styles from './styles.module.scss';

export const PromoPresents = () => {
  const { isMobile } = useViewport();

  return (
    <div id="presents" className={styles.presents}>
      <div className="wrapper">
        <h1 className={styles.presents__title}>Ежемесячный приз</h1>
        <ul className={styles.presents__list}>
          {presents.map(({ name, image, id }) => {
            return <PresentCard key={id} name={name} imageUrl={image} />;
          })}
        </ul>
        <RegistrationButton
          text={isMobile ? 'Участвовать' : 'Загрузить чек'}
          registrationClass={styles.presents__button}
        />
      </div>
    </div>
  );
};
