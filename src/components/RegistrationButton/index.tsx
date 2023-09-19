import { useModal } from '../../hooks';
import { Modal } from '../Modal';
import { RegistrationForm } from '../RegistrationForm';

import styles from './styles.module.scss';

type RegistrationButtonProps = {
  text: string;
};

export const RegistrationButton = ({ text }: RegistrationButtonProps) => {
  const { isModalOpen, openModal, closeModal, modalContent } = useModal();

  return (
    <>
      <button
        onClick={() =>
          openModal(
            <Modal
              contentClassName={styles.modal__registration}
              buttonClassName={styles.modal__button}
              onClose={closeModal}
            >
              <RegistrationForm onClose={closeModal} />
            </Modal>,
          )
        }
        type="submit"
        className="login-button"
      >
        {text}
      </button>
      {isModalOpen && modalContent}
    </>
  );
};
