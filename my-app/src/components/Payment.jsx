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
        <hr/>
    <div className="Header-container">
   
    <div>
<div className="payment-page-1">
<h1 className="span-tag" >Payment</h1>
      <TextField id="outlined-basic" className="input-ui"  label="Address Line 1" variant="outlined"/>
      <br/><br/>
      <TextField id="outlined-basic" className="input-ui"  label="Address Line 2" variant="outlined" />
      <br/><br/>
     
      <TextField id="outlined-basic" className="input-ui"  label="Zipcode" variant="outlined" />
      <br/><br/>
      <TextField id="outlined-basic" className="input-ui"  label="State" variant="outlined" />
      <br/><br/>
      <TextField id="outlined-basic" className="input-ui"  label="card-Number" variant="outlined" />
      <br/><br/>
      <TextField id="outlined-basic" className="input-ui"  label=" CVV" variant="outlined" />
      <br/><br/>
      <TextField id="outlined-basic" className="input-ui"  label="DD/YY" variant="outlined" />
      <br/><br/>
      <TextField id="outlined-basic"  className="input-ui"  label=" Pin" variant="outlined" />
      <br/><br/>
     <a href="/" className="link"> <Button className="input-ui" style={{backgroundColor: "#ff3f6c"}} variant="contained" onClick={()=>{alert("CONGRATULATIONS! YOUR ORDER PLACED SUCCESFULLY..")
    }}> Payment </Button></a>
 </div>
  </div>




    </div>
    <hr/>
    <Footer/>
    </>
  );
}

export default Payment;