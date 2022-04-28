import "./style.css"
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { storeItem, handleLoading, handleError, handleSuccess } from "../Redux/action";
import Header from "./Header";
import Footer from "./Footer"
import LocalMallSharpIcon from '@mui/icons-material/LocalMallSharp';
import { Navigate } from "react-router-dom";
import Rating from '@mui/material/Rating'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange } from '@mui/material/colors';
import StarIcon from '@mui/icons-material/Star';



function Data() {


  const [detailBool, setBool] = useState(false);
  const [navigate, setNavigate] = useState(false);
  const [detail, setDetail] = useState({});
  const [data, setData] = useState([]);
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(handleLoading())
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((res) => {dispatch(storeItem(res)); dispatch(handleSuccess())})
      .catch((error) =>  dispatch(handleError()))

  }, [dispatch]);
  const loading=useSelector((state)=> state.isLoading);
  const item = useSelector((state) => state.item);
  const search = useSelector((state) => state.searchString);
  useEffect(() => {
    setData(item)
  }, [item])
  useEffect(() => {
    // if (search.length >= 3) {
      setData(item.filter(el => el.title.includes(search)))
    // }

  }, [search, item])
  console.log(data)
  const addtoCart = (data) => {
    fetch("https://myntajsonserver.herokuapp.com/item", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });

  }
  if (navigate) {
    return <Navigate to="/addtocart"></Navigate>
  }

  return (
    <div>
      {detailBool ? <><Header /><hr />
        <div className="individual-page-item">
          <div className="individual-page-item-left">

            <img src={detail.image} alt="img" className="product-image-1" />
            <img src={detail.image} alt="img" className="product-image-1" />
            <img src={detail.image} alt="img" className="product-image-1" />
            <img src={detail.image} alt="img" className="product-image-1" />
          </div><div className="individual-page-item-right">
          <h1>{detail.category}</h1>
            <p>{detail.title}</p>
          
            <p>{detail.description}</p>
            <h4>Ratting :5/{detail.rating.rate}</h4>
            <Rating
              name="text-feedback"
              value={4}
              readOnly
              precision={0.5}
              emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
            />
            <br /><br />
            <p>SELECT SIZE   <span className="span-tag">  SIZE CHART</span></p>
            <Stack direction="row" spacing={3}>

              <Avatar sx={{ bgcolor: deepOrange[300] }}>S</Avatar>
              <Avatar sx={{ bgcolor: deepOrange[300] }}>M</Avatar>
              <Avatar sx={{ bgcolor: deepOrange[300] }}>L</Avatar>
              <Avatar sx={{ bgcolor: deepOrange[300] }}>XL</Avatar>
              <Avatar sx={{ bgcolor: deepOrange[300] }}>XXL</Avatar>
              <Avatar sx={{ bgcolor: deepOrange[300] }}>3XL</Avatar>
            </Stack>
            <h3>Best Price: &#8360;.{(detail.price) * 100}</h3>

            <button onClick={() => { addtoCart(detail); setNavigate(true) }} className="btn"><LocalMallSharpIcon />  ADD TO BAG</button>
 <h2 className="sig-prod-page-1">DELIVERY OPTIONS </h2>
 <p className="sig-prod-page">&#9679; Pay on delivery might be available</p>
 <p className="sig-prod-page">&#9679; Easy 30 days returns and exchanges</p>
 <p className="sig-prod-page">&#9679;Try & Buy might be available</p>
 <p className="sig-prod-page" >&#9679; Coupon Discount: Rs. 320 off (check cart for final savings)</p>
 <p className="sig-prod-page">&#9679; Applicable on: Orders above Rs. 2499 (only on first purchase)</p>
 <p className="sig-prod-page">Coupon code: MYNTRA400</p>
 <h4 className="sig-prod-page-1">Get additional offer</h4>
 <p className="sig-prod-page">&#9679;Buy this style and unlock additional 10% off upto ₹100 on a selected catalogue</p>
 <h4 className="sig-prod-page-1">View Products</h4>
 <h3 className="sig-prod-page-1">EMI option available</h3>
 <p className="sig-prod-page">&#9679;EMI starting from Rs.94/month</p>
          </div>

        </div><hr /><Footer /> </> :
        <>

          <Header />
          <hr />
          <div className="Data-main-cointer">
            <div className="left">
              <div className="product-details"><span className="header-title"><b>FILTERS</b></span><span className="header-clearAllBtn">CLEAR ALL</span></div>
              <div className="product-radio">
                <form >


                  <label>
                    <input
                      type="radio"
                      value="male"

                    /><b>Men</b>
                  </label><br />
                  <label>
                    <input
                      type="radio"
                      value="female"

                    /><b>women</b>
                  </label><br />
                  <label>
                    <input
                      type="radio"
                      value="male"

                    /><b>Boys</b>
                  </label><br />
                  <label>
                    <input
                      type="radio"
                      value="male"

                    /><b>Girls</b>
                  </label><br />

                </form>
              </div>
              <br />
              <div className="product-details"><span className="header-title"><b>CATEGORIES</b></span></div>
              <div className="product-radio">
                <form >


                  <label>
                    <input
                      type="checkbox"
                      value="male"

                    />Jeans(159)
                  </label><br />
                  <label>
                    <input
                      type="checkbox"
                      value="female"

                    />Tshirts(62)
                  </label><br />
                  <label>
                    <input
                      type="checkbox"
                      value="male"

                    />Dresses(11)
                  </label><br />
                  <label>
                    <input
                      type="checkbox"
                      value="male"

                    />Tops(45)
                  </label><br />

                </form>
              </div>
              <br />
              <div className="product-details"><span className="header-title"><b>PRICE</b></span></div>
              <div className="product-radio">
                <form >


                  <label>
                    <input
                      type="checkbox"
                      value="male"

                    />Rs. 449 to Rs. 1987(245)
                  </label><br />
                  <label>
                    <input
                      type="checkbox"
                      value="female"

                    />Rs. 1987 to Rs. 3525(93)
                  </label><br />
                  <label>
                    <input
                      type="checkbox"
                      value="male"

                    />Rs. 3525 to Rs. 5063(2)
                  </label><br />
                  <label>
                    <input
                      type="checkbox"
                      value="male"

                    /> Rs. 5063(2)+
                  </label><br />

                </form>
              </div>
            </div>
            {loading?<div> Loading..</div> : <div>

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
                      <h2>{item.category}</h2>
                      <p className="para">{item.title}</p>


                      <h3 className="heading">&#8360;. {(item.price) * 100}</h3>

                    </div>
                  </div>





                )
              })
            }</div>

            </div>
            }
            {/* <div className="cont">{
              data.map((item) => {
                return (

                  <div className="main-container-1-1" onClick={() => {
                    setDetail(item);
                    console.log(detail)
                    setBool(true)

                  }}>

                    <div>

                      <img src={item.image} alt="img" className="product-image" />
                      <h2>{item.category}</h2>
                      <p className="para">{item.title}</p>


                      <h3 className="heading">&#8360;. {(item.price) * 100}</h3>

                    </div>
                  </div>





                )
              })
            }</div> */}
            
            </div><hr />
          <Footer /></>}

    </div>

  );
}
export default Data;