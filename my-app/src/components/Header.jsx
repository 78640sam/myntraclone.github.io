import "./style.css";
//import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
function Header() {

  return (
    <div className="Header-container">
     <div>
         <img className="header-img" src="https://imgs.search.brave.com/8Qby7hAAAQPG9uBC4ziL7oxSEUDIPETL06LmAU7OnQs/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC44/Tkd4am9hbUZQb21T/VERGREYxTGVRSGFI/YSZwaWQ9QXBp" alt=""/>
     </div>
     <div className="header-name">
         <h3>MEN</h3>
         <h3>WOMEN</h3>
         <h3>KIDS</h3>
         <h3>HOME & LIVING</h3>
         <h3>BEAUTY</h3>
         <h3>STUDIO</h3>
     </div>
     <div>
         <input className="header-input" type="search" placeholder="Search for products and Brand "/>
     </div>
     <div>
         {/* <FavoriteBorderIcon/> */}
     </div>
  
    </div>
  );
}

export default Header;