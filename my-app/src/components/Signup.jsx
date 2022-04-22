import "./style.css";
//import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
 import Header from './Header';
 import Footer from './Footer';
//  import axios from 'axios';
 import { useState } from "react";
 import Button from '@mui/material/Button';
 import TextField from '@mui/material/TextField';


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
  <TextField id="outlined-basic" label="Outlined" variant="outlined"  onChange={(e) => {
            setName(e.target.value);
           
          }}/><br/> <br/> <br/>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" onChange={(e) => {
            setEmail(e.target.value);
          
          }}/> <br/> <br/> <br/>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" onChange={(e) => {
            setPass(e.target.value);
           
          }}/>
          <br/> <br/> <br/>
      <Button  variant="contained" onClick={registerUser}> Signup </Button>

  </div>




    </div>
    <Footer/>
    </>
  );
}

export default Signup;