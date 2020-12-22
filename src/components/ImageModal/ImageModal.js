import React from 'react';
import Modal from 'react-modal';
import './ImageModal.css';

Modal.setAppElement('#root');

export default function ImageModal({ closeModalWindow, clickedImage }) {
  const handleClose = (e) => {
    if (e.key === 'Escape') {
      closeModalWindow();
    }
  };
  return (
    <div onKeyUp={handleClose}>
      <Modal onKeyUp={handleClose} isOpen={true} className="modalWindow">
        <button
          onClick={closeModalWindow}
          className="red accent-4 white-text z-depth-5 closeButton"
        >
          X
        </button>
        <img className="modalImage" src={clickedImage} alt="produto" />
      </Modal>
    </div>
  );
}
