import React from 'react';

const Modal = ({ show, onClose, children }) => {
  if (!show) return null;

  return (
    <div>
      <div>{children}</div>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default Modal;
