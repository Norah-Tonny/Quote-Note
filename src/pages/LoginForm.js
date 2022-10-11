import styled from "styled-components";
import LoginItems from "../Components/LoginItems"
import Nav from "../Components/Nav";
const LoginFormContainer = styled.div``;

const LoginForm = () => {
  return (<LoginFormContainer>
    <Nav />
    
  <LoginItems/>
  </LoginFormContainer>
  );
};
export default LoginForm;
