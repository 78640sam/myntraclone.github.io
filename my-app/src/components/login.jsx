import "./style.css";
//import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
 import Header from './Header';
 import Footer from './Footer';
 import { useState } from "react";
function Login() {
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();

  const login = (data) => {
    fetch("http://localhost:3004/user").then(response => response.json())
    .then(data => console.log(data));
    let mailCheck = false;
    
    let passCheck = false;

    data.map((e) => {
      if (e.email === email && e.password === pass) {
        mailCheck = true;
        passCheck = true;
      }
      else if (e.email === email && e.password !== pass) {
        mailCheck = true;
        passCheck = false;
      } else {
        mailCheck = false;
        passCheck = false;
      }
    });
    

    if (mailCheck === true && passCheck === true) {
      
      alert("Login Success");
    
     
    } else if (mailCheck === true && passCheck === false) {
      alert("Wrong Password");
    } else {
      alert("User does not exist");
    }
   
  
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

export default Login;