import "./style.css";
//import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
 import Header from './Header';
 import Footer from './Footer';
function Payment() {

 

  return (
      <>
        <Header/>
    <div className="Header-container">
     
    <div>
  <input type="text" placeholder="Enter Your Name"/>
      <input type="text" placeholder="Enter Your Email"/>
      <input type="text" placeholder="Enter Your Address"/>
      <input type="text" placeholder="Enter Your Address2"/>
      <input type="text" placeholder="Enter Your Card Number"/>
      <input type="text" placeholder="CVV"/>
      <input type="text" placeholder="YY/MM"/>
      <input type="text" placeholder="Pin"/>
      <button> Signup </button>

  </div>




    </div>
    <Footer/>
    </>
  );
}

export default Payment;