import styled from "styled-components";
const breakpoints = {
  small: "576px",
  medium: "768px",
  large: "992px",
  xlarge: "1200px",
};

// Container
export const Container = styled.div`
background-color: white;
margin:40px 40px 40px 40px;

border-radius: 10px;
box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
position: relative;
overflow: hidden;
width: 70%;
max-width: 100%;
min-height: 500px;
overflow-y: auto;
/* Center the container using flexbox */
display: flex;
justify-content: center; /* Horizontally center */
align-items: center; /* Vertically center */
flex-direction: column;
margin:0% 20% 1% 20% ;
@media (max-width: 768px) {
  width: 80%;
  margin: 10%;
}

@media (max-width: 576px) {
  width: 90%;
  margin: 15%;
}
`;

// SignUpContainer
export const SignUpContainer = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
  left: 0;
  width: 50%;
  opacity: 0;
  z-index: 1;
  ${props =>
    !props.signinIn
      ? `
    transform: translateX(100%);
    opacity: 1;
    z-index: 5;
  `
      : null}
      
`;

// SignInContainer
export const SignInContainer = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
  left: 0;
  width: 50%;
  z-index: 2;
  ${props => (!props.signinIn ? `transform: translateX(100%);` : null)}
`;

// Form
export const Form = styled.form`
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 50px;
  height: 100%;
  text-align: center;
`;

// Title
export const Title = styled.h1`
  font-weight: bold;
  margin: 0;
  @media (max-width: ${breakpoints.medium}) {
    font-size: 24px;
`;

// Input
export const Input = styled.input`
  background-color:  #99f0e7;;
  border: none;
  padding: 12px 15px;
  margin: 8px 0;
  width: 100%;
`;

// Button
export const Button = styled.button`
  border-radius: 20px;
  border: 1px solid #99f0e7;
  background-color: #99f0e7;
  color: #ffffff;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
  &:active {
    transform: scale(0.95);
  }
  &:focus {
    outline: none;
  }
  @media (max-width: ${breakpoints.medium}) {
    padding: 10px 40px;
    font-size: 14px;
  }

  @media (max-width: ${breakpoints.small}) {
    padding: 8px 35px;
    font-size: 12px;
  }
`;

// GhostButton
export const GhostButton = styled(Button)`
  background-color: transparent;
  border-color: #ffffff;
`;

// Anchor
export const Anchor = styled.a`
  color: #333;
  font-size: 14px;
  text-decoration: none;
  margin: 15px 0;
`;

// OverlayContainer
export const OverlayContainer = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: transform 0.6s ease-in-out;
  z-index: 100;
  ${props =>
    !props.signinIn ? `transform: translateX(-100%);` : null}
`;

// Overlay
export const Overlay = styled.div`
  background: #99f0e7;
  background: -webkit-linear-gradient(to right, #99f0e7, #4f7369);
  background: linear-gradient(to right, #99f0e7, #4f7369);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 0;
  color: #ffffff;
  position: relative;
  left: -100%;
  height: 100%;
  width: 200%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
  ${props => (!props.signinIn ? `transform: translateX(50%);` : null)}
`;

// OverlayPanel
export const OverlayPanel = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 40px;
  text-align: center;
  top: 0;
  height: 100%;
  width: 50%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
`;

// LeftOverlayPanel
export const LeftOverlayPanel = styled(OverlayPanel)`
  transform: translateX(-20%);
  ${props => (!props.signinIn ? `transform: translateX(0);` : null)}
`;

// RightOverlayPanel
export const RightOverlayPanel = styled(OverlayPanel)`
  right: 0;
  transform: translateX(0);
  ${props => (!props.signinIn ? `transform: translateX(20%);` : null)}
`;

// Paragraph
export const Paragraph = styled.p`
 
  font-size: 14px;
  font-weight: 100;
  line-height: 20px;
  letter-spacing: 0.5px;
  margin: 20px 40px 50px 40px;
`;
