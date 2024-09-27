import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight} from 'react-icons/fa';
const TransferDetails = ({ nextStep, prevStep }) => {
  const [sendAmount, setSendAmount] = useState('');
  const [receiveAmount, setReceiveAmount] = useState('');
  const [sendingCountry, setSendingCountry] = useState('');
  const [receivingCountry, setReceivingCountry] = useState('');
  const [exchangeRate, setExchangeRate] = useState(1);

  const countries = [
    { code: 'IN', name: 'India', rate: 83.38 },
    { code: 'PH', name: 'Philippines', rate: 58.41 },
    { code: 'NG', name: 'Nigeria', rate: 1515.90 },
    { code: 'US', name: 'USA', rate: 1 },
    { code: 'CA', name: 'Canada', rate: 1.75 },
    { code: 'UK', name: 'UK', rate: 1.3 },
    { code: 'FR', name: 'France', rate: 1.2 },
    { code: 'DE', name: 'Germany', rate: 1.1 },
    { code: 'HT', name: 'Haiti', rate: 132.56 },
    { code: 'DR', name: 'Dominican Republic', rate: 59.10 },
    { code: 'GH', name: 'Ghana', rate: 15.26 },
  ];

  const handleSendAmountChange = (e) => {
    const amount = e.target.value;
    setSendAmount(amount);
    if (receivingCountry) {
      const selectedCountryData = countries.find((c) => c.code === receivingCountry);
      const rate = selectedCountryData ? selectedCountryData.rate : 1;
      setExchangeRate(rate);
      setReceiveAmount((amount * rate).toFixed(2));
    }
  };

  const handleCountryChange = (e) => {
    const country = e.target.value;
    setReceivingCountry(country);
    const selectedCountryData = countries.find((c) => c.code === country);
    const rate = selectedCountryData ? selectedCountryData.rate : 1;
    setExchangeRate(rate);
    if (sendAmount) {
      setReceiveAmount((sendAmount * rate).toFixed(2));
    }
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (sendAmount && receiveAmount) {
      nextStep(); 
    } else {
      alert("Please fill out all fields correctly.");
    }
  };

  return (
    <form onSubmit={handleNext}>
      <div className="form-section">
        <h3>Transfer Details</h3>
        <div className="form-group">
          <label htmlFor="sendingCountry">Sending Country:</label>
          <select
            id="sendingCountry"
            value={sendingCountry}
            onChange={(e) => setSendingCountry(e.target.value)}
            required
          >
            <option value="">Select Country</option>
            {countries.map((country) => (
              <option key={country.code} value={country.code}>
                {country.name}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="receivingCountry">Receiving Country:</label>
          <select
            id="receivingCountry"
            value={receivingCountry}
            onChange={handleCountryChange}
            required
          >
            <option value="">Select Country</option>
            {countries.map((country) => (
              <option key={country.code} value={country.code}>
                {country.name}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="sendAmount">Send Amount:</label>
          <input
            type="number"
            id="sendAmount"
            value={sendAmount}
            onChange={handleSendAmountChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="receiveAmount">Receive Amount:</label>
          <input
            type="text"
            id="receiveAmount"
            value={receiveAmount}
            readOnly
          />
        </div>
      </div>

      <div className="button-group">
      <button type="button" className="back-btn" onClick={prevStep}>
          <FaArrowLeft style={{ marginRight: '8px' }} />
          Go Back
        </button>

        <button type="button" onClick={handleNext}>
          <FaArrowRight style={{ marginRight: '8px' }} />
          Next
        </button>
      </div>
    </form>
  );
};

export default TransferDetails;
