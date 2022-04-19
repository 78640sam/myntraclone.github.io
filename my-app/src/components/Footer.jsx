import "./style.css";
//import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
function Footer() {
var List1=["MEN","Women","Kids","Home & Living","Beauty","Gift Crd","Myntra Insider"];
var List2=["Contact US","FAQ","T&c","Terms of Use","Track Orders","Shipping","Cancellation","Return","Whitehat","Blog","Careers","SiteMap","Privacy Policy","Coporate information"];
  return (
    <div className="footer-container">
    
    <div>
      <h5>ONINE SHOPPING</h5>
    <ul>
        {List1.map((e) => <li className="footer-list-1">{e}</li>  )}
      </ul>
    </div>
    <div>
      <h5>USEFUL LINKS</h5>
    <ul>
        {List2.map((e) => <li className="footer-list-1">{e}</li>  )}
      </ul>
    </div>
    <div>
      <h5>EXPERIENCE MYNTRA APP ON MOBILE</h5>
    
      <img className="footer-icon-playstore" src="https://imgs.search.brave.com/fEmfRCBeBpgGzzTDR1CBrhwB0K-2ttCLQ9x_9nuBKpQ/rs:fit:3077:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5w/X18tVDM2T1AxTXJw/MFAtUEJVSWpRSGFC/SiZwaWQ9QXBp" alt=""/>
    </div>
  <div>
  
    <div className="footer-last-list" >
    <img  className="footer-icon-1" src="https://constant.myntassets.com/web/assets/img/6c3306ca-1efa-4a27-8769-3b69d16948741574602902452-original.png" alt=""/><p><span className="footer-span">100% ORIGINAL </span>guarantee<br/> for all products at myntra.com</p>
    </div>
    <div className="footer-last-list">
    <img  className="footer-icon-1" src="https://constant.myntassets.com/web/assets/img/ef05d6ec-950a-4d01-bbfa-e8e5af80ffe31574602902427-30days.png" alt=""/><p> <span className="footer-span">Return within 30days</span> of<br/> receiving your order</p>
  </div>
  </div>
    </div>
  );
}

export default Footer;