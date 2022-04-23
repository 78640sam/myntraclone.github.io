import './App.css';
//  import Headerslider from "./components/Headerslider";
// import Header from './components/Header';
// import {Product, Product1,Product2} from './components/Product';
  // import Footer from './components/Footer';
import {Route,Routes} from "react-router-dom";
import Data from './Components/Data';
import AddtoCart from './Components/Addtocart';
import Payment from './Components/Payment';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Home from './Components/Home';
import { useState } from 'react';


function App() {
  //add to card data
 const [cardDetails,setCardDetails]=useState([]);

  return (
    <div className="App">
     
   

    <Routes>
    <Route path="/" element={<Home/>}></Route>
      <Route path="/products" element={<Data setCardDetails={setCardDetails} cardDetails={cardDetails}/>}></Route>
      <Route path="/addtocart" element={<AddtoCart cardDetails={cardDetails}/>}></Route>
      <Route path="/payment" element={<Payment/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/signup" element={<Signup/>}></Route>
     
    
    </Routes>


    </div>
  );
}

export default App;
