import React from 'react';
import PropTypes from 'prop-types';

import s from './ErrorMessage.module.css'

function ErrorMessage({errorText, onClose}) {
  
  const handleBtnClick = () => {
    onClose();
  }

  return (
    <div className={s.ErrorMessage}>
      <p className={s.MessageText}>{errorText}</p>
      <button type="button" className="button" onClick={handleBtnClick}>OK</button>
    </div>
  );
}

export default ErrorMessage;

ErrorMessage.propTypes = {
  onClose: PropTypes.func.isRequired,
  errorText: PropTypes.string,
};