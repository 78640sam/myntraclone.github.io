import "./style.css"
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { storeItem } from "../Redux/action";

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
      
        <div className="cont">{
          data.map((item) => {
            return (

              <div className="main-container-1-1" onClick={() => {
                setDetail(item);
                console.log(detail)
                setBool(true)

              }}>
               
                <div>
               
                  <img src={item.image} alt="img" className="product-image" />
                  <p>{item.title}</p>
                  <h1>{item.category}</h1>
                  <p>{item.price}</p>

                </div>
                </div>

              

            

            )
          })
        }</div>}

    </div>
  );
}
export default Data;