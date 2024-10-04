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
const ContactPage = () => {
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


  // The form is not functional yet. It will need to be connected to a backend service to work.
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Contact Us</h1>
      <form style={styles.form}>
        <label style={styles.label} htmlFor="name">Name</label>
        <input style={styles.input} type="text" id="name" name="name" />

        <label style={styles.label} htmlFor="email">Email</label>
        <input style={styles.input} type="email" id="email" name="email" />

        <label style={styles.label} htmlFor="message">Message</label>
        <textarea style={styles.textarea} id="message" name="message"></textarea>

        <button
          style={styles.button}
          onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
          onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactPage;