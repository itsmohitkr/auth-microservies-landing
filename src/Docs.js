import React from "react";
import "./Docs.css";

function Docs() {
  return (
    <div className="docs-section">
      <h2>API Documentation</h2>
      <p className="note">
        Note: All requests to the authentication microservices require an
        <strong> x-api-key</strong> in the headers.
      </p>
      <p>
        Base URL: <strong>https://devplanet.online</strong>
      </p>

      {/* API Endpoint 1 */}
      <div className="api-endpoint">
        <h3>POST /signup</h3>
        <p>Register a new user</p>
        <h4>Request Body:</h4>
        <div className="code-block">
          {`{
  "data": {
    "email": "john.doe@example.com",
    "password": "password123",
    "full_name": "John Doe"
  }
}`}
        </div>
        <h4>Response:</h4>
        <div className="code-block">
          {`{
  "data": {
    "user_id": 1,
    "email": "john.doe@example.com",
    "full_name": "John Doe",
    "created_at": "2024-08-20T12:33:52.390Z",
    "updated_at": "2024-08-20T12:33:52.390Z"
  }
}`}
        </div>
        <p className="status-code green">Status Code: 201 Created</p>
      </div>

      {/* API Endpoint 2 */}
      <div className="api-endpoint">
        <h3>POST /login</h3>
        <p>Authenticate a user and generate a token</p>
        <h4>Request Body:</h4>
        <div className="code-block">
          {`{
  "data": {
    "email": "john.doe@example.com",
    "password": "password123"
  }
}`}
        </div>
        <h4>Response:</h4>
        <div className="code-block">
          {`{
  "data": {
    "user_id": 1,
    "full_name": "John Doe",
    "email": "john.doe@example.com",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "created_at": "2024-08-20T12:33:52.390Z"
  }
}`}
        </div>
        <p className="status-code green">Status Code: 200 OK</p>
      </div>

      {/* API Endpoint 3 */}
      <div className="api-endpoint">
        <h3>GET /verify-token</h3>
        <p>Verify the user’s JWT token</p>
        <h4>Response:</h4>
        <div className="code-block">
          {`{
  "user": {
    "id": 1,
    "email": "john.doe@example.com",
    "full_name": "John Doe",
    "iat": 1725454746
  }
}`}
        </div>
        <p className="status-code green">Status Code: 200 OK</p>
      </div>

      {/* API Endpoint 4 */}
      <div className="api-endpoint">
        <h3>POST /logout</h3>
        <p>Logout user and clear the cookie</p>
        <h4>Request Body:</h4>
        <div className="code-block">
          {`{
  "data": {
    "email": "john.doe@example.com"
  }
}`}
        </div>
        <h4>Response:</h4>
        <div className="code-block">
          {`{
  "message": "Logged out"
}`}
        </div>
        <p className="status-code green">Status Code: 200 OK</p>
      </div>

      {/* API Endpoint 5 */}
      <div className="api-endpoint">
        <h3>POST /forgot-password</h3>
        <p>Send password reset email</p>
        <h4>Request Body:</h4>
        <div className="code-block">
          {`{
  "data": {
    "email": "john.doe@example.com"
  }
}`}
        </div>
        <h4>Response:</h4>
        <div className="code-block">
          {`{
  "message": "Password reset link sent to your email"
}`}
        </div>
        <p className="status-code green">Status Code: 200 OK</p>
      </div>

      {/* API Endpoint 6 */}
      <div className="api-endpoint">
        <h3>POST /reset-password?token=token</h3>
        <p>Reset the user's password</p>
        <h4>Request Body:</h4>
        <div className="code-block">
          {`{
  "data": {
    "newPassword": "newpassword123"
  }
}`}
        </div>
        <h4>Response:</h4>
        <div className="code-block">
          {`{
  "message": "Password successfully reset. Please Login to view resources."
}`}
        </div>
        <p className="status-code green">Status Code: 200 OK</p>
      </div>
    </div>
  );
}

export default Docs;
