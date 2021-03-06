import './App.css';
import {Route,Routes} from "react-router-dom";
import Data from './Components/Data';
import AddtoCart from './Components/Addtocart';
import Payment from './Components/Payment';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Home from './Components/Home';


function App() {
  return (
    <div className="App">
     
   

    <Routes>
    <Route path="/" element={<Home/>}></Route>
      <Route path="/products" element={<Data/>}></Route>
      <Route path="/addtocart" element={<AddtoCart/>}></Route>
      <Route path="/payment" element={<Payment/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/signup" element={<Signup/>}></Route>
     
    
    </Routes>
    </div>
  );
}

export default App;
