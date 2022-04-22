import "./style.css";

import PersonIcon from '@mui/icons-material/Person';
import FavoriteBorderSharpIcon from '@mui/icons-material/FavoriteBorderSharp';
import LocalMallSharpIcon from '@mui/icons-material/LocalMallSharp';
import { useSelector, useDispatch } from 'react-redux';
import { searchItem } from "../Redux/action";

// import SearchSharpIcon from '@mui/icons-material/SearchSharp';

function Header() {
  const dispatch =useDispatch();
  const changeHandler=(event)=>{
    dispatch(searchItem(event.target.value))
  }

  return (
    <div className="Header-container">
      <div>
        <img className="header-img" src="https://imgs.search.brave.com/8Qby7hAAAQPG9uBC4ziL7oxSEUDIPETL06LmAU7OnQs/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC44/Tkd4am9hbUZQb21T/VERGREYxTGVRSGFI/YSZwaWQ9QXBp" alt="" />
      </div>
      <div className="header-name">

        <a href="/products" className="link"> <h3>MEN</h3></a>
        <a href="/products" className="link"> <h3>WOMEN</h3></a>
        <a href="/products" className="link">    <h3>KIDS</h3></a>
        <a href="/products" className="link"> <h3>HOME & LIVING</h3></a>
        <a href="/products" className="link">   <h3>BEAUTY</h3></a>
        <a href="/products" className="link">  <h3>STUDIO</h3></a>
      </div>
      <div className="Search-header">
        {/* <SearchSharpIcon/> */}
        <input className="header-input" type="search" placeholder="Search for products and Brand " onChange={changeHandler}/>
      </div>
      <div className="header-icon-1">

        <PersonIcon fontSize="large" />
        <FavoriteBorderSharpIcon fontSize="large" />
        <LocalMallSharpIcon fontSize="large" />
      </div>

    </div>
  );
}

export default Header;