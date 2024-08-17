import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const ExecutiveInfoModal = ({ isOpen, onRequestClose, executive }) => {
  if (!executive) {
    return null;
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Executive Information"
      className="modal"
      overlayClassName="overlay"
    >
      <h2>{executive.name}</h2>
      <p>{executive.position}</p>
      <p>{executive.description}</p>
      <button onClick={onRequestClose}>Close</button>
    </Modal>
  );
};

export default ExecutiveInfoModal;
