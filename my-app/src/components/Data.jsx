import "./style.css"
import React,{ useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { storeItem } from "../Redux/action";


function Data() {


   
  const dispatch = useDispatch()
    useEffect(() => {
        
        fetch('https://fakestoreapi.com/products')
        .then((res) => res.json())
        .then((res) => dispatch(storeItem(res)))
        .catch((error)=> console.log(error))
   
      }, []);

      const data=useSelector((state)=>state.item)
      console.log(data)


  return (
      <>
    {
        data.map((item)=>{
            return (<div >
         
            <div className="main-container-1-1">
              <div>
     
                <img src={item.image} alt="img" className="product-image" />
                <p>{item.title}</p>
                <h1>{item.category}</h1>
                <p>{item.price}</p>
         
                </div>
                <div></div>
          
              </div>
            

     
              </div>


            )

            
        })
  }
    <div className="App">

    </div>
    </>
  );
}

export default Data;