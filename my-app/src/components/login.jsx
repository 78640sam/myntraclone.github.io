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
   
    fetch("https://myntajsonserver.herokuapp.com/user").then(response => response.json())
      .then((data) => 
      data.forEach((element) => {
        if(element.email===email && element.password===pass){
          console.log(element)
          setBool(true)
        }
      })
      )

  }
  if(homeBool){
    return <Navigate to="/" ></Navigate>
  }
  
  
 

  return (
    <>
      <Header />
      <hr/>
      <div className="container-login">
      
        <div className="login-main-1">
  <h1 className="span-tag">Login</h1>
          <TextField id="outlined-basic"className="input-ui"   label="Email" variant="outlined"  onChange={(el) => {
            setEmail(el.target.value);

          }} /> <br /> <br /> <br />
          <TextField id="outlined-basic" className="input-ui"   label="Password" variant="outlined"  onChange={(el) => {
            setPass(el.target.value);

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
