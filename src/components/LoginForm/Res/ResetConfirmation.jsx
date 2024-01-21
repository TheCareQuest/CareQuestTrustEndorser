// ResetConfirmation.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const ResetConfirmation = ({ email }) => (
  <div id="reset-confirmation">
    <h2>Password Reset Email Sent</h2>
    <p>We have sent an email to {email} with a link to reset your password.</p>
    <Link to="/" className="return-to-login">
      Return to Login Page
    </Link>
  </div>
);

export default ResetConfirmation;
