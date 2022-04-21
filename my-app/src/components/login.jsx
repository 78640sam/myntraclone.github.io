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
 
      <input type="text" placeholder="Enter Your Email"/>
      <input type="text" placeholder="Enter Your Password"/>
      <button> Login </button>

  </div>
  




    </div>
    <Footer/>
    </>
  );
}

export default Payment;