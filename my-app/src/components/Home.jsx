import "./style.css";
import Headerslider from "./Headerslider";
import Header from './Header';
import { Product, Product1,Product2 } from './Product';
import { Product3 } from "./Product1";
   import Footer from './Footer';
function Home() {

  return (
    <div className="">
    <Header/>
    <Headerslider/>
    <Product/>
    <Product3/>
    <Product1/>
    <Product2/>
    <Footer/>
    </div>
  );
}

export default Home;