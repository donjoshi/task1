import React from 'react'
import './footer.css'
import logo from './footer-logo.png'

// export default function Footer() {
//   return (
//     <div>
      
//     </div>
//   )
// }

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <img src={logo} alt="Scrt.link Logo" className="footer-logo" />
        <div className="footer-links">
          <div className="footer-column">
            <h4>Secrets</h4>
            <ul>
              <li>Text</li>
              <li>Files</li>
              <li>Redirect</li>
              <li>Neogram</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Integrations</h4>
            <ul>
              <li>Slack App</li>
              <li>Google Chrome</li>
              <li>Mozilla Firefox</li>
              <li>Microsoft Edge</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Information</h4>
            <ul>
              <li>About</li>
              <li>Security</li>
              <li>Privacy</li>
              <li>Pricing</li>
              <li>Blog</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Help</h4>
            <ul>
              <li>FAQ</li>
              <li>Twitter</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-middle">
        <span>Secrets created: 75,433 | viewed: 57,855</span>
        <div className="footer-social">
          <i className="fa fa-twitter" aria-hidden="true"></i>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          Scrt.link lets you share sensitive information online. End-to-end encrypted. One time. Keep confidential <br /> information out of email, Slack, Teams, Whatsapp or any other communication channel. A one-time disposable <br /> link guarantees your secrets can only ever be accessed once - before being destroyed forever.
        </p>
        <p>©2024 SANTiHANS GmbH | Imprint | Privacy Policy | Cookie Policy | Status</p>
        <div className="footer-languages">
          <span>English</span> | <span>Deutsch</span> | <span>Français</span> | <span>Serbian</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
