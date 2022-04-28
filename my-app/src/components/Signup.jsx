import "./style.css";
import Header from './Header';
import Footer from './Footer';
import { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';




function Signup() {
  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [pass, setPass] = useState();




  const registerUser = (data) => {

    fetch("https://myntajsonserver.herokuapp.com/user",
      {
        method: "POST",
        headers:
          { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email,
          name: name,
          password: pass,
        })
      });

    alert("login succesfull")
    window.location.href = "/login";

  }

  return (
    <>
      <Header />
      <hr />
      <div className="Signup-container">
        <h1 className="span-tag">Sign up</h1>
        <div>
          <TextField id="outlined-basic" className="input-ui" label="Name" variant="outlined" onChange={(e) => {
            setName(e.target.value);

          }} /><br /> <br /> <br />
          <TextField id="outlined-basic" label="Email" className="input-ui" variant="outlined" onChange={(e) => {
            setEmail(e.target.value);

          }} /> <br /> <br /> <br />
          <TextField id="outlined-basic" label="PassWord" className="input-ui" variant="outlined" onChange={(e) => {
            setPass(e.target.value);

          }} />
          <br /> <br /> <br />
          <Button variant="contained" className="login-btn-1" style={{ backgroundColor: "#ff3f6c" }} onClick={registerUser}> Signup </Button>
          <br /> <br /> <span>Go to </span> <a className="link" href="/login">
            <span className="span-tag">login</span></a>

        </div>




      </div>
      <hr />
      <Footer />
    </>
  );
}

export default Signup;
