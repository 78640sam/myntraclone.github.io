import React from "react";
import {useState} from "react";
// import { useSelector, useDispatch } from 'react-redux';
import "./style.css"
function Search() {

  const data=[
    {
      "id": 1,
      "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      "price": 109.95,
      "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      "category": "men's clothing",
      "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      "rating": {
        "rate": 3.9,
        "count": 122
      }
    }, {
      "id": 2,
      "title": "Foldsack No. 1 Backpack, Fits 15 Laptops",
      "price": 109.95,
      "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      "category": "men's clothing",
      "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      "rating": {
        "rate": 4.9,
        "count": 120
      }
    }
  ]
    const[search,setSearch]=useState("");
    
    console.log(search)
    // const dispatch = useDispatch()
    // useEffect(() => {

    //     fetch('https://fakestoreapi.com/products')
    //       .then((res) => res.json())
    //       .then((data) => setsData(data))
    //       .catch((error) => console.log(error))
   
    //   }, []);
     
      // const item = useSelector((state) => state.item);
      // console.log(sdata)
    return (
      <div className="">
<input type="text" placeholder="Search item" onChange={(e)=> setSearch(e.target.value)}/>
{
    data.filter((item)=>{
        if(search===""){
          return <>
          
<img src={item.image} alt="img" className="product-image" />
<h2>{item.category}</h2>
<p className="para">{item.title}</p>


<h3 className="heading">&#8360;. {(item.price) * 100}</h3>
          </>
        }else {
        return item.title.toLowerCase().includes(search.toLowerCase());
    }
    })
    .map((item,index)=>{
        return <div key={index}>


<div>

<img src={item.image} alt="img" className="product-image" />
<h2>{item.category}</h2>
<p className="para">{item.title}</p>


<h3 className="heading">&#8360;. {(item.price) * 100}</h3>

</div>
        </div>
    })

}
      </div>
    );
  }
  
  export default Search;