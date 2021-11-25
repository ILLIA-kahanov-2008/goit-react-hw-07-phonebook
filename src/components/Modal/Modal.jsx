import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import styles from './Modal.module.css';
import PropTypes from 'prop-types';

export default function Modal({ closeModal, children }) {
  useEffect(() => {
    window.addEventListener('keydown', handleEscape);
    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  });

  const handleEscape = e => {
    if (e.code === 'Escape') {
      closeModal();
    }
  };

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      closeModal();
    }
  };

  return createPortal(
    <div className={styles.Overlay} onClick={handleBackdropClick}>
      <div className={styles.Modal}>{children}</div>
    </div>,
    document.getElementById('modalRoot'),
  );
}

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
};
