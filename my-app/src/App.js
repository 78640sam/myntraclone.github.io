import './App.css';
// import Headerslider from "./components/Headerslider";
// import Header from './components/Header';
// import {Product, Product1,Product2} from './components/Product';
// import Footer from './components/Footer';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Data from './components/Data';
// import { Link } from "react-router-dom";
// import ProductComponents from "./components/ProductComponents"
function App() {
  return (
    <div className="App">
     
     {/* <Header/>
    <Headerslider/>
    <Product/>
    <Product1/>
    <Product2/>
    <Footer/> */}
    <BrowserRouter>
   
    
    <Routes>
      <Route path="/products" element={Data}></Route>
      
    
    </Routes>
    </BrowserRouter>
 

  <Data/>


    
  

    
   
    </div>
  );
}

export default App;
