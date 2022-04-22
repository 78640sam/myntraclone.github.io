import "./style.css";
//import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
 import Header from './Header';
 import Footer from './Footer';
//  import axios from 'axios';
 import { useState } from "react";


function Signup() {
  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [pass, setPass] = useState();

 
  
   
    const registerUser = (data) => {
      fetch("http://localhost:3004/user", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify( {
        email: email,
        name: name,
        password: pass,
      }) });
     

    }

  return (
      <>
        <Header/>
    <div className="Signup-container">
     
  <div>
  <input type="text" placeholder="Enter Your Name"  onChange={(e) => {
            setName(e.target.value);
           
          }}/><br/> <br/> <br/>
      <input type="text" placeholder="Enter Your Email" onChange={(e) => {
            setEmail(e.target.value);
          
          }}/> <br/> <br/> <br/>
      <input type="text" placeholder="Enter Your Password"onChange={(e) => {
            setPass(e.target.value);
           
          }}/>
          <br/> <br/> <br/>
      <button onClick={registerUser}> Signup </button>

  </div>




    </div>
    <Footer/>
    </>
  );
}

export default Signup;