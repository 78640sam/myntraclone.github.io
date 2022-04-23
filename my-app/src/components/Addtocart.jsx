import { useEffect, useState } from "react";
import './style.css';
import React from "react";
import Header from "./Header";
import Footer from "./Footer";

import { useSelector } from "react-redux";

function AddtoCart({cardDetails}) {
    const [data, setData] = useState([]);
    let [refresh,setRefresh]=useState(false);
    console.log("cardDetails",cardDetails)
    const [additem,setAdditem]=useState([]);
    setAdditem(useSelector((state) => state.carditems));
    // const cart  =  () => {
    //     fetch("http://localhost:3004/item").then(res=>res.json()).then(res=>{
    //         setData(res);
    //         console.log("data",data)
    // })
        
    // }

    useEffect(() => {
        //  cart();
    }, [refresh]);

    const deleting=(el)=>{
       fetch(`http://localhost:3004/item/${el.id}`,{method:"DELETE"});
       fetch("http://localhost:3004/item").then(res=>res.json()).then(res=>setData(res))
    }

console.log(additem)
    return (
        <>
        <Header/>
<hr/>
<div className="add-to-cart-main-div">
    <div> 
            {
               additem.map((item) => {
                    return (<div key={item.id}>

                        <div className="main-container-addtocart">
                             <div className="main-container-addtocart-1">
                            <div>
                        <img src={item.image} alt="img" className="product-image-addtocart" />
                        </div>
                        <div>
               
              
                 
                  <h1>{item.category}</h1>
                  <p>{item.title}</p>
                  {/* <p>Rating :5/{item.rating.rate}</p> */}
                  <h4>&#8360;. {(item.price)*100}</h4>

                  </div>
                       


                       <div className="btn-add-t"  onClick={()=>{
                          deleting(item)
                       }}> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" class="itemContainer-base-closeIcon"><path fill="#000" fill-rule="evenodd" d="M9.031 8l6.756-6.756a.731.731 0 0 0 0-1.031.732.732 0 0 0-1.031 0L8 6.969 1.244.213a.732.732 0 0 0-1.031 0 .731.731 0 0 0 0 1.03L6.969 8 .213 14.756a.731.731 0 0 0 0 1.031.732.732 0 0 0 1.031 0L8 9.031l6.756 6.756a.732.732 0 0 0 1.031 0 .731.731 0 0 0 0-1.03L9.031 8z"></path></svg></div>
                    </div>
                   
                   
                     </div>
                    </div>
                 

                    )


                })

            }
           </div>
            <div className="second-add-sec">
                {
                  
                 
                  
                }
                <h1>Total Price :4500</h1>
              <a href="/payment"><button className="btn">PAYMENT</button></a>  
            </div>
            </div>
            <hr/>
            <Footer/>
        </>
    )
}

export default AddtoCart;