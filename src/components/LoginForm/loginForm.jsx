import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './loginForm.css';

const LoginForm = ({ handleLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [typedEmail, setTypedEmail] = useState('');
  const [resetLinkSent, setResetLinkSent] = useState(false);
  const navigate = useNavigate();

  const handleLoginClick = () => {
    if (username === 'shafaq' && password === 'shah123') {
      handleLogin();
      navigate('/');
    } else {
      setError('Incorrect username or password');
      setTimeout(() => {
        setUsername('');
        setPassword('');
        setError('');
      }, 2000);
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
          username={username}
          password={password}
          rememberMe={rememberMe}
          onUsernameChange={(value) => setUsername(value)}
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

const Form = ({ username, password, rememberMe, onUsernameChange, onPasswordChange, onRememberMeChange, onLogin, onForgotPasswordClick }) => (
  <div>
    <FormInput
      description="Username"
      placeholder="Enter your username"
      type="text"
      value={username}
      onChange={onUsernameChange}
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
