
import {useState} from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import styled from "styled-components";

const LoginContainer = styled.div`display: flex; 
justify-content: space-between;
 gap: 2em; 
 padding: 1em;
  width: 85%;
   margin: 0 auto;`

const LoginDetails = styled.div`
// color: blue; 
// width: 50%;
`


const LoginH1 = styled.h1`
text-align: center; 
font-size:4rem;
`


const LoginH2 = styled.h2
  `text-align: center; 
  margin: 3em 0;
  COLOR:blue;`

const EmailContainer = styled.div`
border-bottom: 4px solid blue;
 height: fit-content;`

const EmailText = styled.p`
// color: gray;
//  font-size: 1.5rem;
//   padding-left: 1em;
//    position:relative;
//     bottom:4em;
//      opacity:0;
//      color:green;`

const EmailInput = styled.input`
// border: none;
//  width: 100%; 
//  outline: none; 
//  padding:0.5em 1em;
//   font-size: 1.5rem;
// &:focus {
//          &::placeholder {
//         color:transparent;
//     }
// }
`
const PasswordText = styled.p`
// color: blue;
//  font-size: 1.5rem; 
//  opacity:0;`

const PasswordContainer = styled.div`
// border-bottom: 4px solid ;
//  margin-bottom: .5em;`

const PasswordInput = styled.input`
// border:none;
//  width: 100%;
//   outline: none;
//    padding:.5em 1em;
//     font-size: 1.5rem;`

const ShowPassword = styled.div`

// width: fit-content; 
// height: fit-content;
//  cursor: pointer;`

const InputShowFlex = styled.div`
// display: flex; 
// align-items: center;`

const LoginButton = styled.button`
// width: 100%;
//  background: blue; 
//  color: white; 
//  padding: 1em 2em;
//  border-radius: 5px; 
//  border: none;
//   font-size: 1.5rem;`

const ForgotPassword=styled.button``


const LoginReset = styled.div`
// display: flex; 
// justify-content:space-between; 
// padding: 1em 0;`


const LoginItems = () => {
    const [show, setShow] = useState(false)
    return (
        <LoginContainer>
            <LoginDetails>
                <LoginH1>Quote Note </LoginH1>
                <LoginH2>LOGIN </LoginH2>
                <EmailContainer className="email-container">
                    <EmailInput type="email" placeholder="Email" className="email" />
                    <EmailText className="email-text">Email</EmailText>
                </EmailContainer>
                <PasswordContainer>
                    <PasswordText>Password</PasswordText>
                    <InputShowFlex>
                        <PasswordInput type={show?"text":"password"} placeholder="Password" />
                        
                        <ShowPassword onClick={()=>setShow(prev=>!prev)}>{show?<VisibilityIcon/>:<VisibilityOffIcon/>}</ShowPassword>
                    </InputShowFlex>
                </PasswordContainer>
                <LoginButton>Login</LoginButton>
                <LoginReset>
                    <ForgotPassword>Forgot your password?</ForgotPassword>
                </LoginReset>
            
              
            </LoginDetails>

        </LoginContainer>
    )
}
export default LoginItems;
