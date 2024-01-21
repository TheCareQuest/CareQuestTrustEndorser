// import React from 'react';
// import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
// import './Footer.css';

// const Footer = () => {
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="footer-container">
     
//       <div className="footer-column">
//         <h3>Follow Us</h3>
//         <div className="social-icons">
//           <a href="#" className="social-icon"><FaFacebook /></a>
//           <a href="#" className="social-icon"><FaTwitter /></a>
//           <a href="#" className="social-icon"><FaInstagram /></a>
//           <a href="#" className="social-icon"><FaYoutube /></a>
//           <a href="#" className="social-icon"><FaEnvelope /></a>
//           <a href="#" className="social-icon"><FaWhatsapp /></a>
//         </div>
//       </div>

//       <div className="footer-column">
//         <h3>Contact Us</h3>
//         <p>Email: thecarequest@gmail.com</p>
//         <p>Phone: +1 123-456-7890</p>
//         <p>Address: 123 Main St, Islamabad</p>
//       </div>

//       <div className="footer-column">
//         <h3>Subscribe to our Newsletter</h3>
//         <form>
//           <input type="email" placeholder="Enter your email" />
//           <button type="submit" className="buttonf">Subscribe</button>
//         </form>
//       </div>

//       <div className="footer-column">
//         <p>&copy; {currentYear} The Care Quest. All rights reserved.</p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();



  const socialMediaAccounts = {
    facebook: 'https://www.facebook.com/your-facebook-page',
    twitter: 'https://twitter.com/your-twitter-account',
    instagram: 'https://instagram.com/thecarequest?igshid=NzZlODBkYWE4Ng==',
    youtube: 'https://www.youtube.com/your-youtube-channel',
    email: 'thecarequest1@gmail.com',
    whatsapp: 'https://wa.me/qr/OYWILWXGQHSCE1', // Replace with your WhatsApp number
  };

  return (
    <footer className="footer-container">
      <div className="footer-column">
        <h3>Follow Us</h3>
        <div className="social-icons">
          <a href={socialMediaAccounts.facebook} className="social-icon"><FaFacebook /></a>
          <a href={socialMediaAccounts.twitter} className="social-icon"><FaTwitter /></a>
          <a href={socialMediaAccounts.instagram} className="social-icon"><FaInstagram /></a>
          <a href={socialMediaAccounts.youtube} className="social-icon"><FaYoutube /></a>
          <a href={socialMediaAccounts.email} className="social-icon"><FaEnvelope /></a>
          <a href={socialMediaAccounts.whatsapp} className="social-icon"><FaWhatsapp /></a>
        </div>
      </div>

      <div className="footer-column">
        <h3>Contact Us</h3>
        <p>Email: thecarequest@gmail.com</p>
        <p>Phone: 03332469349</p>
        <p>Address: 123 Main St, Islamabad</p>
      </div>

      <div className="footer-column">
        <h3>Subscribe to our Newsletter</h3>
        <form>
          <input type="email" placeholder="Enter your email" />
          <button type="submit" className="buttonf">Subscribe</button>
        </form>
      </div>

      <div className="footer-column">
        <p>&copy; {currentYear} The Care Quest. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
