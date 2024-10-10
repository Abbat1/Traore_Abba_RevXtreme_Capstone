import React from 'react';
import { Link } from 'react-router-dom';


// Assuming these are the common theme colors used in Navbar.jsx and Homepage.jsx
const theme = {
  primaryColor: '#3498db',
  secondaryColor: '#2ecc71',
  backgroundColor: '#f5f5f5',
  textColor: '#333',
  borderColor: '#ddd',
};

//styling for my contact page
const ContactUs = () => {
  const styles = {
    container: {
      maxWidth: '600px',
      margin: '50px auto',
      padding: '20px',
      backgroundColor: '#fff',
      border: `1px solid ${theme.borderColor}`,
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      paddingBottom: '50px',
    },
    header: {
      color: theme.primaryColor,
      textAlign: 'center',
      marginBottom: '20px',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
    },
    label: {
      marginBottom: '5px',
      fontWeight: 'bold',
    },
    input: {
      padding: '10px',
      marginBottom: '15px',
      border: `1px solid ${theme.borderColor}`,
      borderRadius: '4px',
      fontSize: '16px',
    },
    textarea: {
      padding: '10px',
      marginBottom: '15px',
      border: `1px solid ${theme.borderColor}`,
      borderRadius: '4px',
      fontSize: '16px',
    },
    button: {
      padding: '10px 15px',
      backgroundColor: theme.primaryColor,
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '16px',
    },
    buttonHover: {
      backgroundColor: theme.secondaryColor,
    },
  };
}

// Footer Component
const Footer = () => {
  return (
    // Footer container
    <footer>
      {/* Form for email subscription */}
      <form className="cta-form">
        {/* Email input field */}
        <input type="email" placeholder="Enter Email" required />
        {/* Submit button for the form */}
        <button type="submit">Subscribe and Save 5%</button>
      </form>
      {/* Footer text */}
      <p>&copy; 2024 RevXtreme. All rights reserved.</p>
    </footer>
  );
};

export default ContactUs;