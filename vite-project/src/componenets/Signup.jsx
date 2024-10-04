import { Link, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

// Below is the code for the Login component
function Signup({ handleLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const Navigate=  useNavigate();
// Below is the code for the decryptPassword function
  const decryptPassword = async (encryptedPassword, key, iv) => {
    const decoder = new TextDecoder();
    const importedKey = await crypto.subtle.importKey(
      "raw",
      Uint8Array.from(atob(key), (c) => c.charCodeAt(0)),
      { name: "AES-GCM", length: 256 },
      false,
      ["decrypt"]
    );
// Below is the code for the decryptData variable
    const decryptedData = await crypto.subtle.decrypt(
      {
        name: "AES-GCM",
        iv: Uint8Array.from(atob(iv), (c) => c.charCodeAt(0)),
      },
      importedKey,
      Uint8Array.from(atob(encryptedPassword), (c) => c.charCodeAt(0))
    );
    return decoder.decode(decryptedData);
  };
// Below is the code for the handleSubmit function
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
// Below is the code for the try-catch block
    try {
      const storedUser = JSON.parse(localStorage.getItem("user"));

      if (!storedUser) {
        setError("User not found");
        return;
      }
// Below is the code for the decryptedPassword variable
      const decryptedPassword = await decryptPassword(
        storedUser.encryptedPassword,
        storedUser.key,
        storedUser.iv
      );
// Below is the code for the if-else block
      if (storedUser.email === email && decryptedPassword === password) {
        console.log("Login successful");
        handleLogin();
      } else {
        setError("Invalid email or password");
      }
    } catch (error) {
      console.error("Login error:", error);
      setError("An error occurred during login");
    }
  };
// Below is the code for the submitData function
  const submitData = async (e) => {
    e.preventDefault();
// Below is the code for the try-catch block
    try {
      const response = await fetch('http://localhost:8080/api/SignUp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setError(errorData.message || 'Registration failed.');
        return;
      }

      // Optionally, you can redirect to the login page on successful signup
      Navigate('/LogIn');
    } catch (err) {
      console.log(err);
      setError('An error occurred. Please try again.');
    }
  };
// Below is the code for the return statement
  return (
   <div className = "Sign in">
   <form className="space-y-6" onSubmit={submitData} style={{paddingTop: "400px", marginLeft: "700px"}}>
   <h1> Sign Up </h1>
    
   <Link to="/login" style={{color: "#ff6600" }}>Already have an account? Login</Link>
    

      {error && <p className="text-red-500">{error}</p>}
      <div>
          
        <label htmlFor="email" className="block text-sm font-medium text-onyx">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 block w-full px-3 py-2 bg-timberwolf border border-onyx rounded-md shadow-sm focus:outline-none focus:ring-keppel focus:border-keppel"
        />
      </div>
      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium text-onyx"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-1 block w-full px-3 py-2 bg-timberwolf border border-onyx rounded-md shadow-sm focus:outline-none focus:ring-keppel focus:border-keppel"
        />
      </div>
      <div>
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-platinum bg-saffron hover:bg-keppel focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-keppel"
        >
          Sign Up
        </button>
      </div>
    </form>
    </div>
);
}

export default Signup;