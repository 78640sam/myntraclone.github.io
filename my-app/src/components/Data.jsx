import "./style.css"
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { storeItem } from "../Redux/action";
import Header from "./Header";
import Footer from "./Footer"

//import { useNavigate } from "react-router-dom"



function Data() {


  const [detailBool, setBool] = useState(false);
  const [detail, setDetail] = useState({});
  const dispatch = useDispatch()
  useEffect(() => {

    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((res) => dispatch(storeItem(res)))
      .catch((error) => console.log(error))

  }, [dispatch]);

  const data = useSelector((state) => state.item)
  console.log(data)
  const addtoCart = (data) => {
    fetch("http://localhost:3004/item", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
    
  }

  return (
    <div>
      {detailBool ? <div>
       
        <h1>{detail.title}</h1>
        <img src={detail.image} alt="img" className="product-image" />
                  <p>{detail.title}</p>
                  <h1>{detail.category}</h1>
                  <p>{detail.price}</p>

        <button onClick={() => { addtoCart(detail)  }}>ADD</button>

      </div> :
      <>
      <Header/>
       <div className="main">
        <div className="left">
        <div className="product-details"><span class="header-title"><b>FILTERS</b></span><span class="header-clearAllBtn">CLEAR ALL</span></div>
        <div className="product-radio">
        <form >
          
         
          <label> 
            <input
              type="radio"
              value="male"
            
            /><b>Men</b>
          </label><br/>
          <label> 
            <input
              type="radio"
              value="female"
            
            /><b>women</b>
          </label><br/>
          <label> 
            <input
              type="radio"
              value="male"
            
            /><b>Boys</b>
          </label><br/>
          <label> 
            <input
              type="radio"
              value="male"
            
            /><b>Girls</b>
          </label><br/>
          
        </form>
        </div>
        </div>
        <div className="cont">{
          data.map((item) => {
            return (

              <div className="main-container-1-1" onClick={() => {
                setDetail(item);
                console.log(detail)
                setBool(true)

              }}>
               
                <div>
               
                  <img src={item.image} alt="img" className="product-image"/>
                  <h2>{item.category}</h2>
                  <p className="para">{item.title}</p>
                 
                  
                  <h3 className="heading">&#8360;. {item.price}</h3>

                </div>
                </div>

              

            

            )
          })
        }</div></div>
        <Footer/></>}

    </div>
    
  );
}
export default Data;