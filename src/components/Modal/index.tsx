import { PropsWithChildren } from 'react';
import ReactModal from 'react-modal';
import cx from 'classnames';

import styles from './styles.module.scss';

type ModalProps = PropsWithChildren<{
  onClose: () => void;
  rootClassName?: string;
  buttonClassName?: string;
  contentClassName?: string;
  overlayClassName?: string;
}>;

ReactModal.setAppElement('#root');

export const Modal = ({
  onClose,
  rootClassName,
  contentClassName,
  overlayClassName,
  buttonClassName,
  children,
}: ModalProps) => {
  const rootClassNames = cx(styles.modal, rootClassName);
  const overlayClassNames = cx(styles.modal__overlay, overlayClassName);
  const contentClassNames = cx(styles.modal__content, contentClassName);

  return (
    <ReactModal
      portalClassName={rootClassNames}
      overlayClassName={overlayClassNames}
      className={contentClassNames}
      isOpen
    >
      {children}
      <button className={buttonClassName} onClick={onClose}></button>
    </ReactModal>
  );
};
