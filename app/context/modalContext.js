'use client';

import { createContext, useContext, useState, useEffect } from 'react';

const ModalContext = createContext({
  openModals: 0,
  openModal: () => {},
  closeModal: () => {},
});

export const ModalProvider = ({ children }) => {
  const [openModals, setOpenModals] = useState(0);

  useEffect(() => {
    if (openModals > 0) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [openModals]);

  const openModal = () => setOpenModals((count) => count + 1);
  const closeModal = () => setOpenModals((count) => Math.max(count - 1, 0));

  return (
    <ModalContext.Provider value={{ openModals, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModalControl = () => useContext(ModalContext);