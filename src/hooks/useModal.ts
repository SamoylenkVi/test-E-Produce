import { ReactNode, useState } from 'react';

export const useModal = (
  isModalOpenInitial = false,
  modalContentInitial: ReactNode = null,
) => {
  const [isModalOpen, setIsModalOpen] = useState(isModalOpenInitial);
  const [modalContent, setModalContent] =
    useState<ReactNode>(modalContentInitial);

  const openModal = (content?: ReactNode) => {
    if (content === undefined) {
      setModalContent(modalContentInitial);
    } else {
      setModalContent(content);
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setModalContent(null);
    setIsModalOpen(false);
  };

  return {
    isModalOpen,
    openModal,
    closeModal,
    modalContent,
  };
};
