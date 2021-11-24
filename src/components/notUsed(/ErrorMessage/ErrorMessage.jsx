import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import styles from './ErrorMessage.module.css';
// import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

export default function ErrorMessage({
  onClose,

}) {
  const errorText = useSelector(state => state.phoneBook.error);
  useEffect(() => {
    window.addEventListener('keydown', handleEscape);
    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  });

  const handleEscape = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {      
      onClose();
    }
  };

  const handleBtnClick = () => {
    onClose();
  }
  
  return createPortal(
    <div className={styles.Overlay} onClick={handleBackdropClick}>
      <div className={styles.ModalMessage}>
        <p className={styles.MessageText}>{errorText}</p>
        <button type="button" className="button" onClick={handleBtnClick}>OK</button>
      </div>
    </div>,
    document.getElementById('modalRoot'),
  );
}

// ErrorMessage.propTypes = {
//   onClose: PropTypes.func.isRequired,

// };

// export default Modal;
