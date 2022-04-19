import './App.css';
import Headerslider from "./components/Headerslider";
import Header from './components/Header';
import {Product, Product1} from './components/Product';
function App() {
  return (
    <div className="App">
     <Header/>
    <Headerslider/>
    <Product/>
    <Product1/>
    </div>
  );
}

export default App;
