import { useEffect, useState } from "react";
import './style.css';
import React from "react";



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

            {
                data.map((item) => {
                    return (<div key={item.id}>

                        <div className="main-container">

                            <h1>{item.title}</h1>
                            <img src={item.image} alt="img" className="product-image" />
                  <p>{item.title}</p>
                  <h1>{item.category}</h1>
                  <p>{item.price}</p>


                        </div>



                    </div>


                    )


                })

            }
        </>
    )
}

export default AddtoCart;