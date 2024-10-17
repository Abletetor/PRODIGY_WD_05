import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import './Footer.css'; // Create a corresponding CSS file for styling

const Footer = () => {
   return (
      <footer className="footer">
         <div className="footer-container">
            <div className="footer-left">
               <h3>MyWeatherApp</h3>
               <p>Providing real-time weather updates with a sleek and modern interface.</p>
               <p>© 2024 iametor. All rights reserved.</p>
            </div>
            <div className="footer-right">
               <h4>Follow Us</h4>
               <div className="footer-social-icons">
                  <a href="#" rel="noopener noreferrer">
                     <FaFacebookF />
                  </a>
                  <a href="#" rel="noopener noreferrer">
                     <FaTwitter />
                  </a>
                  <a href="#" rel="noopener noreferrer">
                     <FaInstagram />
                  </a>
                  <a href="#" rel="noopener noreferrer">
                     <FaLinkedinIn />
                  </a>
               </div>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
