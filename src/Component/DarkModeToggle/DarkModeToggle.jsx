import PropTypes from 'prop-types';
import './DarkModeToggle.css';
import { FaMoon, FaSun } from 'react-icons/fa';

const DarkModeToggle = ({ darkMode, toggleDarkMode }) => {
   return (
      <div className="dark-mode-toggle" onClick={ toggleDarkMode }>
         { darkMode ? (
            <FaSun className="toggle-icon sun-icon" />
         ) : (
            <FaMoon className="toggle-icon moon-icon" />
         ) }
      </div>
   );
};

// Add prop types for validation
DarkModeToggle.propTypes = {
   toggleDarkMode: PropTypes.func.isRequired,
   darkMode: PropTypes.bool.isRequired,
};
export default DarkModeToggle;
