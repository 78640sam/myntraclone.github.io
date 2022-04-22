import "./style.css";
import Headerslider from "./Headerslider";
import Header from './Header';
import { Product, Product1,Product2 } from './Product';
   import Footer from './Footer';
function Home() {

  return (
    <div className="">
    <Header/>
    <Headerslider/>
    <Product/>
    <Product1/>
    <Product2/>
    <Footer/>
    </div>
  );
}

export default Home;