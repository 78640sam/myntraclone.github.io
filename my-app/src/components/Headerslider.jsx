import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 

function Headerslider() {
  return (
    <div className="">
    
      <Carousel>
          <div>
              <img src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/9/d88bf465-8b71-489b-99f6-311c832b89ad1649528433105-Kurtas---Sets_Dk.jpg" 
              alt='' />
          </div>
          <div>
              <img src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/9/7ccd40bf-d173-4f8c-a0b0-21672ebd8a671649528732325-Sports---Casual-Shoes_Dk.jpg" 
              alt='' />
          </div>
          <div>
              <img src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/9/d88bf465-8b71-489b-99f6-311c832b89ad1649528433105-Kurtas---Sets_Dk.jpg" 
              alt='' />
          </div>
          <div>
              <img src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/9/d88bf465-8b71-489b-99f6-311c832b89ad1649528433105-Kurtas---Sets_Dk.jpg" 
              alt='' />
          </div>
      </Carousel>
     
    </div>
  );
}

export default Headerslider;