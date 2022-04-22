import { useEffect, useState } from "react";
import './style.css';
import React from "react";
import Header from "./Header";
import Footer from "./Footer";



function AddtoCart() {
    const [data, setData] = useState([]);
    let [refresh,setRefresh]=useState(false)
    const cart  =  () => {
        fetch("http://localhost:3004/item").then(res=>res.json()).then(res=>setData(res))
    }

    useEffect(() => {
         cart();
    }, [refresh]);

    const deleting=(el)=>{
       fetch(`http://localhost:3004/item/${el.id}`,{method:"DELETE"});
       fetch("http://localhost:3004/item").then(res=>res.json()).then(res=>setData(res))
    }


    return (
        <>
        <Header/>
<hr/>
            {
                data.map((item) => {
                    return (<div key={item.id}>

                        <div className="main-container-addtocart">

                <h1>{item.title}</h1>
                <img src={item.image} alt="img" className="product-image-addtocart" />
                  <p>{item.title}</p>
                  <h1>{item.category}</h1>
                  <p>{item.price}</p>


                        </div>


                       <div style={{"width":"40px","height":"40px"}} onClick={()=>{
                          deleting(item)
                       }}> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" class="itemContainer-base-closeIcon"><path fill="#000" fill-rule="evenodd" d="M9.031 8l6.756-6.756a.731.731 0 0 0 0-1.031.732.732 0 0 0-1.031 0L8 6.969 1.244.213a.732.732 0 0 0-1.031 0 .731.731 0 0 0 0 1.03L6.969 8 .213 14.756a.731.731 0 0 0 0 1.031.732.732 0 0 0 1.031 0L8 9.031l6.756 6.756a.732.732 0 0 0 1.031 0 .731.731 0 0 0 0-1.03L9.031 8z"></path></svg></div>
                    </div>


                    )


                })

            }
            <hr/>
            <Footer/>
        </>
    )
}

export default AddtoCart;