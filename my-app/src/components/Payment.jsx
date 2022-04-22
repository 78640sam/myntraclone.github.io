import "./style.css";
//import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
 import Header from './Header';
 import Footer from './Footer';
 import Button from '@mui/material/Button';
 import TextField from '@mui/material/TextField';
function Payment() {

 

  return (
      <>
        <Header/>
    <div className="Header-container">
     
    <div>

      <TextField id="outlined-basic" label="Outlined" variant="outlined"/>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <Button  variant="contained"> Signup </Button>

  </div>




    </div>
    <Footer/>
    </>
  );
}

export default Payment;