import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './loginForm.css';

const LoginForm = ({ handleLogin }) => {
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [typedEmail, setTypedEmail] = useState('');
  const [resetLinkSent, setResetLinkSent] = useState(false);
  const navigate = useNavigate();

const handleLoginClick = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      console.log('Response from backend:', data); // Log the response from backend

      if (response.ok) {
        console.log('Login successful');
        handleLogin();
        navigate('/');
      } else {
        console.log('Login failed:', data.message || 'Unknown error');
        setError(data.message || 'Login failed');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      setError('An error occurred while logging in');
    }
  };

  const handleForgotPasswordClick = () => {
    setShowForgotPassword(true);
  };

  const handleResetLinkClick = () => {
    // Logic to send the reset link (not implemented in this example)
    // Simulating success after 2 seconds
    setTimeout(() => {
      setResetLinkSent(true);
    }, 2000);
  };

  return (
    <div id="login-container">
    <div id="loginform">
      <img id="logo" src="logoc.png" alt="Logo" />
      <FormHeader title="Login" />
      {error && <ErrorMessageBox message={error} />}
      {!showForgotPassword ? (
        <Form
          email={email}
          password={password}
          rememberMe={rememberMe}
          onemailChange={(value) => setemail(value)}
          onPasswordChange={(value) => setPassword(value)}
          onRememberMeChange={() => setRememberMe(!rememberMe)}
          onLogin={handleLoginClick}
          onForgotPasswordClick={handleForgotPasswordClick}
        />
      ) : (
        <ForgotPasswordForm
          typedEmail={typedEmail}
          onTypedEmailChange={(value) => setTypedEmail(value)}
          onResetLinkClick={handleResetLinkClick}
          resetLinkSent={resetLinkSent}
        />
      )}
    </div></div>
  );
};

const FormHeader = ({ title }) => <h2 id="headerTitle">{title}</h2>;

const Form = ({ email, password, rememberMe, onemailChange, onPasswordChange, onRememberMeChange, onLogin, onForgotPasswordClick }) => (
  <div>
    <FormInput
      description="Username"
      placeholder="Enter your email"
      type="text"
      value={email}
      onChange={onemailChange}
    />
    <FormInput
      description="Password"
      placeholder="Enter your password"
      type="password"
      value={password}
      onChange={onPasswordChange}
    />
    <div className="row">
      <div className="checkbox">
        {/* <input type="checkbox" checked={rememberMe} onChange={onRememberMeChange} />
        <label>Remember Me</label> */}
      </div>
      <Link to="#" className="forgot-password" onClick={onForgotPasswordClick}>
        Forgot Password?
      </Link>
    </div>
    <FormButton title="Log in" onClick={onLogin} />
  </div>
);

const FormInput = ({ description, placeholder, type, value, onChange }) => (
  <div className="row">
    <label>{description}</label>
    <input type={type} placeholder={placeholder} value={value} onChange={(e) => onChange(e.target.value)} />
  </div>
);

const ForgotPasswordForm = ({ typedEmail, onTypedEmailChange, onResetLinkClick, resetLinkSent }) => (
  <div>
    <p className="forgot-password-info">Enter your email to receive a reset link:</p>
    <FormInput
      description="Email"
      placeholder="Enter your email"
      type="email"
      value={typedEmail}
      onChange={onTypedEmailChange}
    />
    {resetLinkSent ? (
      <div className="reset-link-sent-message">
        <p>We have sent an email to {typedEmail} with a link to reset your password.</p>
      </div>
    ) : (
      <FormButton title="Send Reset Link" onClick={onResetLinkClick} />
    )}
  </div>
);

const FormButton = ({ title, onClick }) => (
  <div id="button" className="row">
    <button onClick={onClick}>{title}</button>
  </div>
);

const ErrorMessageBox = ({ message }) => (
  <div className="error-message">
    <p>{message}</p>
  </div>
);

export default LoginForm;