import "./style.css";
//import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
 import Header from './Header';
 import Footer from './Footer';
 import { useState } from "react";
function LoginData() {
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();

  const login = (data) => {
    fetch("http://localhost:3004/user").then(response => response.json())
    .then(data => console.log(data));
  

    
   
  
  }

  return (
      <>
        <Header/>
    <div className="Header-container">
    <div>
 
    <input type="text" placeholder="Enter Your Email" onChange={(el) => {
            setEmail(el.target.value);
          
          }}/> <br/> <br/> <br/>
      <input type="text" placeholder="Enter Your Password"onChange={(el) => {
            setPass(el.target.value);
           
          }}/>
          <br/> <br/> <br/>
      <button onClick={login}> Signup </button>

  </div>
  




    </div>
    <Footer/>
    </>
  );
}

export default LoginData;