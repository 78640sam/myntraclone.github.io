import './App.css';
//  import Headerslider from "./components/Headerslider";
// import Header from './components/Header';
// import {Product, Product1,Product2} from './components/Product';
  // import Footer from './components/Footer';
import {Route,Routes} from "react-router-dom";
import Data from './components/Data';
import AddtoCart from './components/Addtocart';
import Payment from './components/Payment';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';


function App() {
  return (
    <div className="App">
     
     {/* <Header/>
    <Headerslider/>
    <Product/>
    <Product1/>
    <Product2/>
    <Footer/> */}

    <Routes>
    <Route path="/" element={<Home/>}></Route>
    {/* <Route path="/" element={<Product/>}></Route>
    <Route path="/" element={<Product1/>}></Route>
    <Route path="/" element={<Product2/>}></Route> */}
      <Route path="/products" element={<Data/>}></Route>
    
    
      <Route path="/addtocart" element={<AddtoCart/>}></Route>
      <Route path="/payment" element={<Payment/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/signup" element={<Signup/>}></Route>
     
    
    </Routes>
    {/* <Payment/> */}
    {/* <Data/> */}
{/* <Signup/> */}

{/* <Login/> */}
    
    {/* <AddtoCart/> */}

    </div>
  );
}

export default App;
