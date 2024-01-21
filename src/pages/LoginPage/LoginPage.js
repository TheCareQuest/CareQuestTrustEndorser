import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import {
  Container,
  SignUpContainer,
  SignInContainer,
  Form,
  Title,
  Input,
  Button,
  GhostButton,
  Anchor,
  OverlayContainer,
  Overlay,
  OverlayPanel,
  LeftOverlayPanel,
  RightOverlayPanel,
  Paragraph,
} from '../../components/StyledComponents/StyledComponents.js' // Import your styled-components

function AuthForm() {
  const [signIn, toggle] = React.useState(true);
  const [loginData,setLoginData] = useState({
    username:'',
    password:'',
  })
  const [registrationData,setRegistrationData] = useState({
    username:'',
    password:''
})
//submit function
const handleLoginSubmit = async(e) => {
  e.preventDefault();
 
  try{
   const response = await axios.post('http://localhost:8000/LoginPage',loginData);
   const {success,message} = response.data;
 
   if(success){
     console.log('Login Successfully')
   }
   else{
     console.log(message);
   }
  }
  catch(error){
   console.error('Login error',error)
  }
  setLoginData({
     username:'',
     password:''
  })
 }
 
   const handleLoginChange = (e) => {
     const {name,value} = e.target;
     setLoginData((prevData) => ({
       ...prevData,
       [name]:value
     }))
   }
   const handleRegistrationChange = (e) => {
    const {name,value} = e.target;
    
    setRegistrationData((prevData) => ({
        ...prevData,
        [name] : value,
    }))
    
    }
    
    const handleRegistrationSubmit = async(e) => {
    e.preventDefault();
    try{
        const response = await axios.post('http://localhost:8000/LoginPage',registrationData);
        console.log(response.data);
    }
    catch(error){
        console.log(error)
    }
    setRegistrationData({
        username:'',
        password:'',
    })
    }
  return (
    
    <Container>
      <SignUpContainer signinIn={signIn}>
        <Form onSubmit={handleRegistrationSubmit}>
          <Title>Create Account</Title>
          <Input type="text" placeholder="Name"  value={registrationData.username}
        onChange={handleRegistrationChange}
        required/>
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Password" value={registrationData.password}
        onChange={handleRegistrationChange}
        required/>
          <Button >Sign Up</Button>
        </Form>
      </SignUpContainer>

      <SignInContainer signinIn={signIn}>
        <Form onSubmit={handleLoginSubmit}>
          <Title>Sign in</Title>
          <Input type="email" placeholder="Email" value={loginData.username}
        onChange={handleLoginChange} required/>
          <Input type="password" placeholder="Password" value={loginData.password}
        onChange={handleLoginChange}
        required />
          <Anchor href="#">Forgot your password?</Anchor>
          <Button>Sigin In</Button>
        </Form>
      </SignInContainer>

      <OverlayContainer signinIn={signIn}>
        <Overlay signinIn={signIn}>
          <LeftOverlayPanel signinIn={signIn}>
          <Title>Hello, Care Providers!</Title>
            <Paragraph>
              Enter your personal details and start contributing in noble cause.
            </Paragraph>
            <GhostButton onClick={() => toggle(true)}>Sign In</GhostButton>
          </LeftOverlayPanel>

          <RightOverlayPanel signinIn={signIn}>
          <Title>Welcome Back!</Title>
            <Paragraph>
              To keep helping others, please login with your personal info.
            </Paragraph>
            
            <GhostButton onClick={() => toggle(false)}>Sign Up</GhostButton>
          </RightOverlayPanel>
        </Overlay>
      </OverlayContainer>
    </Container>
  );
}

export default AuthForm;