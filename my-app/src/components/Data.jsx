import "./style.css"
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { storeItem } from "../Redux/action";


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
    <>
      {detailBool ? <div>
        <h1>{detail.title}</h1>
        <button onClick={() => { addtoCart(detail) }}>ADD</button>

      </div> :
        <>{
          data.map((item) => {
            return (<div >

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

            </div>

            )
          })
        }</>}

    </>
  );
}
export default Data;