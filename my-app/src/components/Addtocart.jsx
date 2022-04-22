import { useEffect, useState } from "react";
import './style.css';
import React from "react";
import Header from "./Header";
import Footer from "./Footer";



function AddtoCart() {
    const [data, setData] = useState([]);


    useEffect(() => {
        const Cart  = async () => {
            const res = await fetch("http://localhost:3004/item")

            setData(await res.json());

            console.log(data);
        }


         Cart();
    }, [data]);




    return (
        <>
        <Header/>

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



                    </div>


                    )


                })

            }
            <Footer/>
        </>
    )
}

export default AddtoCart;