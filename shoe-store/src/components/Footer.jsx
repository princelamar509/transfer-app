import React,{ useState} from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram,  faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const [showFAQ, setShowFAQ] = useState(false);

  const toggleFAQ = () => {
    setShowFAQ(!showFAQ);
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>About Us</h4>
          <p>
            We make international money transfers fast, secure, and affordable.
            Our mission is to bring the world closer by making financial
            services accessible to everyone.
          </p>
        </div>


        <div className="footer-section">
          <h4>Headquarters</h4>
          <ul>
            <li>123 Transfer Avenue</li>
            <li>New York, NY 10001, USA</li>
            <li>Email: support@transferapp.com</li>
            <li>Phone: +1 (555) 123-4567</li>
          </ul>
        </div>

  
        <div className="footer-section">
          <h4 onClick={toggleFAQ} className="clickable">
            FAQs {showFAQ ? "▲" : "▼"}
          </h4>
          {showFAQ && (
            <ul>
              <li><a href="#">How to transfer money?</a></li>
              <li><a href="#">What are the fees?</a></li>
              <li><a href="#">How long does it take?</a></li>
              <li><a href="#">Is my money safe?</a></li>
              <li><a href="#">Can I cancel a transfer?</a></li>
            </ul>
          )}
        </div>

     
        <div className="footer-section">
          <h4>Support</h4>
          <ul>
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Customer Support</a></li>
            <li><a href="#">Live Chat</a></li>
            <li><a href="#">Email Us</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Security</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>

   
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>  
            <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>  
            <a href="#"><FontAwesomeIcon icon={faWhatsapp} /></a>

          </div>
        </div>
      </div>

     
      <div className="footer-bottom">
        <p>&copy; 2024 TransferApp. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;