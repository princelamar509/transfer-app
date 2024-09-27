import React, { useState } from 'react';
import {  FaArrowRight } from 'react-icons/fa';
const SenderReceiverInfo = ({ nextStep }) => {
  const [senderName, setSenderName] = useState('');
  const [senderPhone, setSenderPhone] = useState('');
  const [receiverName, setReceiverName] = useState('');
  const [receiverPhone, setReceiverPhone] = useState('');

  const handleNext = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <form onSubmit={handleNext}>
      <div className="form-section">
        <h3>Sender Information</h3>
        <div className="form-group">
          <label htmlFor="senderName">Sender Name:</label>
          <input
            type="text"
            id="senderName"
            value={senderName}
            onChange={(e) => setSenderName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="senderPhone">Sender Phone Number:</label>
          <input
            type="text"
            id="senderPhone"
            value={senderPhone}
            onChange={(e) => setSenderPhone(e.target.value)}
            required
          />
        </div>
      </div>

      <div className="form-section">
        <h3>Receiver Information</h3>
        <div className="form-group">
          <label htmlFor="receiverName">Receiver Name:</label>
          <input
            type="text"
            id="receiverName"
            value={receiverName}
            onChange={(e) => setReceiverName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="receiverPhone">Receiver Phone Number:</label>
          <input
            type="text"
            id="receiverPhone"
            value={receiverPhone}
            onChange={(e) => setReceiverPhone(e.target.value)}
            required
          />
        </div>
      </div>

      <button type="button" onClick={handleNext }>
          <FaArrowRight style={{ marginRight: '8px' }} />
          Next
        </button>
    </form>
  );
};

export default SenderReceiverInfo;
