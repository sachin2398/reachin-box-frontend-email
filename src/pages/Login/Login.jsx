import React from 'react';
import richlogo from '../../Assets/logo-richin-box.png';
import googleLogo from '../../Assets/google-logo-9808.png';
import {signInWithPopup } from "firebase/auth";
import "./Login.css";
import { auth, googleProvider } from '../../firebase/FirebaseSetup';
import { useNavigate} from 'react-router-dom';
const Login = () => {
  const history = useNavigate();
  const googleSignin = async () => {
    try {
   
      await signInWithPopup(auth, googleProvider);
      history("/user");
    } catch (error) {
      console.log(error);
    }
   
  };
  console.log(auth);
  return (
      <div className='login-background'  >
          <div className='header' >
              <img src={richlogo} alt="-richin-boxlogo" />
          </div>
      <div className='login-body' >
          <div className='bd-1'  >
          <div className='bd-1-a'>
            <p>Create a new account</p>
            <div onClick={googleSignin}>
              <img src={googleLogo} alt="google-logo" />
              <p>Sign Up With Google</p>
            </div>
            </div>
          <div  className='bd-1-b'>
            <button>Create an Account</button>
            <div>
              <span>Already have an account?</span><span>Sign in</span>
            </div>
            </div>
        </div>
          </div>
          <div className='footer'>
              <p>© 2023 Reachinbox. All rights reserved.</p>
          </div>
    </div>
  )
}

export default Login