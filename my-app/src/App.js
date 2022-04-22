import './App.css';
import Headerslider from "./components/Headerslider";
import Header from './components/Header';
import {Product, Product1,Product2} from './components/Product';
 import Footer from './components/Footer';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Data from './components/Data';
import AddtoCart from './components/Addtocart';
import Payment from './components/Payment';
import Login from './components/Login';
import Signup from './components/Signup';


function App() {
  return (
    <div className="App">
     
     <Header/>
    <Headerslider/>
    <Product/>
    <Product1/>
    <Product2/>
    <Footer/>
    <BrowserRouter>
   
    
    <Routes>
    <Route path="/" element={Header}></Route>
    <Route path="/" element={Headerslider}></Route>
      <Route path="/products" element={Data}></Route>
    
    
      <Route path="/addtocart" element={AddtoCart}></Route>
      <Route path="/payment" element={Payment}></Route>
      <Route path="/login" element={Login}></Route>
      <Route path="/signup" element={Signup}></Route>
     
    
    </Routes>
    </BrowserRouter>
 

    {/* <Data/> */}
<Signup/>

<Login/>
    
  

    
   
    </div>
  );
}

export default App;
