import React, { useState } from 'react'; // Import React and useState hook for managing state
// import { useHistory } from 'react-router-dom'; // Import useHistory hook for navigation


// Signup component for user registration and login
const Signup = () => {
  // State variables to manage form inputs and error messages
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  // const history = useHistory(); // Initialize useHistory hook

  // Function to handle form submission for login
  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    setError(""); // Clear any previous error messages

    // Below is the code for the try-catch block
    try {
      // Retrieve stored user data from localStorage
      const storedUser = JSON.parse(localStorage.getItem("user"));

      // Check if user data exists in localStorage
      if (!storedUser) {
        setError("User not found"); // Set error message if user is not found
        return; // Exit the function
      }

      // Below is the code for the decryptedPassword variable
      // Decrypt the stored password using the custom decryptPassword function
      const decryptedPassword = await decryptPassword(
        storedUser.encryptedPassword,
        storedUser.key,
        storedUser.iv
      );

      // Below is the code for the if-else block
      // Check if the entered email and password match the stored user data
      if (storedUser.email === email && decryptedPassword === password) {
        console.log("Login successful"); // Log success message to the console
        handleLogin(); // Call handleLogin function to proceed with login
      } else {
        setError("Invalid email or password"); // Set error message for invalid credentials
      }
    } catch (error) {
      console.error("Login error:", error); // Log any errors that occur during login
      setError("An error occurred during login"); // Set error message for login failure
    }
  };

  // Below is the code for the submitData function
  // Function to handle form submission for signup
  const submitData = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Below is the code for the try-catch block
    try {
      // Make a POST request to the signup API endpoint
      const response = await fetch('http://localhost:8080/api/SignUp', {
        method: 'POST', // HTTP method
        headers: {
          'Content-Type': 'application/json', // Set content type to JSON
        },
        // Send email and password in the request body
        body: JSON.stringify({ email, password }),
      });

      // Check if the response is successful
      if (response.ok) {
        const data = await response.json(); // Parse the response JSON
        console.log("Signup successful", data); // Log success message to the console
        history.push('/login'); // Redirect to the login page
      } else {
        setError("Signup failed"); // Set error message for signup failure
      }
    } catch (error) {
      console.error("Signup error:", error); // Log any errors that occur during signup
      setError("An error occurred during signup"); // Set error message for signup failure
    }
  };

  return (
    // JSX for rendering the signup form
    <div>
      <h2>Signup</h2>
      <form onSubmit={submitData}>
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
        <button type="submit">Signup</button>
      </form>
      {/* Display error message if any */}
      {error && <p>{error}</p>}
    </div>
  );
};

export default Signup;