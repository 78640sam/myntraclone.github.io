import "./style.css";
//import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Header from './Header';
import Footer from './Footer';
import { useState } from "react";

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
      <div className="container-login">
        <div className="login-main-1">

          <input className="login-input" placeholder="Enter Email" type="text" onChange={(el) => {
            setEmail(el.target.value);

          }} /> <br /> <br /> <br />
          <input className="login-input" placeholder="Enter password" type="password" onChange={(el) => {
            setPass(el.target.value);

          }} />
          <br /> <br /> <br />
          <button  className="login-btn" onClick={login}> Signup </button>

        </div>





      </div>
      <Footer />
    </>
  );
}
export default LoginData;
