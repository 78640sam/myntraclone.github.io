import "./style.css";
//import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Header from './Header';
import Footer from './Footer';
import { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import {Navigate} from "react-router-dom"
 function LoginData() {
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();
  const [homeBool, setBool] = useState(false);

  const login = () => {
    fetch("http://localhost:3004/user").then(response => response.json())
      .then(data => data.forEach(el => {
       if(el.email===email && el.password===pass){
    setBool(true);
   }
      })

      )

      if(homeBool){
        return <Navigate to="/" />;
      }else{
        alert("Enter Valid Creadentials")
      }
  }
  
  
  
 

  return (
    <>
      <Header />
      <hr/>
      <div className="container-login">
      
        <div className="login-main-1">
  <h1 className="span-tag">Login</h1>
          <TextField id="outlined-basic"className="input-ui"   label="Email" variant="outlined"  onChange={(e) => {
            setEmail(e.target.value);

          }} /> <br /> <br /> <br />
          <TextField id="outlined-basic" className="input-ui"   label="Password" variant="outlined"  onChange={(e) => {
            setPass(e.target.value);

          }} />
          <br /> <br /> <br />
          <Button  variant="contained"  className="login-btn-1" onClick={login}> Signup </Button>
       <br/> <br/> <span>Go to</span> <a className="link" href="/Signup"> <span className="span-tag"> Signup</span> </a>
        </div>





      </div>
      <hr/>
      <Footer />
    </>
  );
}
export default LoginData;
