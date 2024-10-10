import { Link, useNavigate } from 'react-router-dom'; // Import Link and useNavigate from react-router-dom for navigation
import React, { useState, useEffect } from 'react'; // Import React and useState, useEffect hooks for managing state and side effects

// Login component for user authentication
function Login({ handleLogin, setUser }) {
  // State variables to manage form inputs and error messages
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate hook for navigation

  // Function to decrypt the stored password
  const decryptPassword = async (encryptedPassword, key, iv) => {
    const decoder = new TextDecoder(); // Initialize TextDecoder to decode the decrypted data
    // Import the encryption key
    const importedKey = await crypto.subtle.importKey(
      "raw",
      Uint8Array.from(atob(key), (c) => c.charCodeAt(0)), // Convert base64 key to Uint8Array
      { name: "AES-GCM", length: 256 }, // Specify the encryption algorithm and key length
      false,
      ["decrypt"] // Specify the key usage
    );
    // Decrypt the encrypted password
    const decryptedData = await crypto.subtle.decrypt(
      {
        name: "AES-GCM", // Specify the encryption algorithm
        iv: Uint8Array.from(atob(iv), (c) => c.charCodeAt(0)), // Convert base64 IV to Uint8Array
      },
      importedKey, // Use the imported key for decryption
      Uint8Array.from(atob(encryptedPassword), (c) => c.charCodeAt(0)) // Convert base64 encrypted password to Uint8Array
    );
    return decoder.decode(decryptedData); // Decode and return the decrypted data
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    setError(""); // Clear any previous error messages

    try {
      // Retrieve stored user data from localStorage
      const storedUser = JSON.parse(localStorage.getItem("user"));

      // Check if user data exists in localStorage
      if (!storedUser) {
        setError("User not found"); // Set error message if user is not found
        return; // Exit the function
      }

      // Decrypt the stored password using the custom decryptPassword function
      const decryptedPassword = await decryptPassword(
        storedUser.encryptedPassword,
        storedUser.key,
        storedUser.iv
      );

      // Check if the entered email and password match the stored user data
      if (storedUser.email === email && decryptedPassword === password) {
        console.log("Login successful"); // Log success message to the console
        setUser(storedUser); // Set the user state with the stored user data
        handleLogin(); // Call handleLogin function to proceed with login
        navigate('/'); // Redirect to the home page
      } else {
        setError("Invalid email or password"); // Set error message for invalid credentials
      }
    } catch (error) {
      console.error("Login error:", error); // Log any errors that occur during login
      setError("An error occurred during login"); // Set error message for login failure
    }
  };

  return (
    // JSX for rendering the login form
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        {/* Input field for email */}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        {/* Input field for password */}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {/* Submit button for the form */}
        <button type="submit">Login</button>
      </form>
      {/* Display error message if any */}
      {error && <p>{error}</p>}
      {/* Link to the signup page */}
      <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
    </div>
  );
}

export default Login;