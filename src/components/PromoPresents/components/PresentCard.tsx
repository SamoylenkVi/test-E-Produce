type PresentCardProps = {
  name?: string;
  imageUrl?: string;
};

import styles from '../styles.module.scss';

export const PresentCard = ({ name, imageUrl }: PresentCardProps) => (
  <li className={styles.present__card}>
    <img src={imageUrl}></img>
    <p>{name}</p>
  </li>
);
