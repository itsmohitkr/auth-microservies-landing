import React, { useState } from "react";
import "./App.css";
import Docs from "./Docs";

function App() {
  // State to manage form inputs and messages
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [appName, setAppName] = useState("");
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // New state to manage button loading state

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission

    // Prepare the request body
    const requestBody = {
      name,
      app_name: appName,
      email: email,
    };

    setIsLoading(true); // Set loading to true when request starts

    try {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_DEPLOYED_URL}/requestApi`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log("Success:", data);

      // Show success message
      setMessage("Request submitted successfully!");
      setIsSuccess(true);

      // Clear the form
      setName("");
      setEmail("");
      setAppName("");

      // Hide message after 3 seconds
      setTimeout(() => {
        setMessage("");
        setIsSuccess(false);
      }, 3000);
    } catch (error) {
      console.error("Error:", error);
      // Show error message (optional)
      setMessage("Error submitting the request. Please try again.");
      setIsSuccess(false);
      setTimeout(() => {
        setMessage("");
      }, 3000);
    } finally {
      setIsLoading(false); // Set loading to false after the request completes
    }
  };

  return (
    <div className="app-container">
      {/* Section 1: Welcome Message */}
      <div className="welcome-section">
        <h1>Welcome to Auth Microservices</h1>
        <p>
          Our authentication microservices offer a simple and secure way to
          integrate user authentication into your application. Whether you're
          building a new app or upgrading an existing one, our API is designed
          to be easy to implement, reliable, and secure.
        </p>
      </div>

      {/* Section 2: Text and Form */}
      <div className="form-section">
        <div className="text-left">
          <h2>Get Started</h2>
          <p>
            To get started, fill out the form on the right to request access.
            We'll provide you with an API key that can be used for
            authentication in your application.
          </p>
        </div>
        <div className="form-right">
          <h2>Request Access to the API</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name:</label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="app-name">Application Name:</label>
              <input
                type="text"
                id="app-name"
                placeholder="Enter your application name"
                value={appName}
                onChange={(e) => setAppName(e.target.value)}
              />
            </div>
            {/* Disable the button if the request is in progress */}
            <button type="submit" disabled={isLoading}>
              {isLoading ? "Submitting..." : "Request Access to API"}
            </button>
          </form>
          {/* Success/Error Message */}
          {message && (
            <div className={`message ${isSuccess ? "success" : "error"}`}>
              {message}
            </div>
          )}
        </div>
      </div>

      {/* Section 3: Documentation */}
      <Docs />
    </div>
  );
}

export default App;
