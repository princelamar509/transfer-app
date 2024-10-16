
import React, { useState } from 'react';
import { FaArrowLeft,  FaCheckCircle } from 'react-icons/fa';
const PaymentInfo = ({ prevStep, onSubmit }) => {
  const [nameOnCard, setNameOnCard] = useState('');
  const [creditCard, setCreditCard] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");
    onSubmit({
      nameOnCard,
      creditCard,
      expirationDate,
      cvv,

    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-section">
        <h3>Payment Information</h3>
        <div className="form-group">
          <label htmlFor="nameOnCard" >Name on Card:</label>
          <input
            type="text"
            id="nameOnCard"
            value={nameOnCard}
            onChange={(e) => setNameOnCard(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="creditCard">Credit Card Number:</label>
          <input
            type="text"
            id="creditCard"
            value={creditCard}
            onChange={(e) => setCreditCard(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="expirationDate">Expiration Date:</label>
          <input
            type="text"
            id="expirationDate"
            value={expirationDate}
            onChange={(e) => setExpirationDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="cvv">CVV:</label>
          <input
       
            type="text"
            id="cvv"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
           
          />
        </div>
      </div>

      <button type="button" className="back-btn" onClick={prevStep}>
          <FaArrowLeft style={{ marginRight: '8px' }} />
          Go Back
        </button>
      <button type="submit"  onClick={handleSubmit}>
          <FaCheckCircle style={{ marginRight: '8px' }} />
          Submit
        </button>
    </form>
  );
};

export default PaymentInfo;
