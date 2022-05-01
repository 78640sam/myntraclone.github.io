import "./style.css";
function Product3() {
    var data=["https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/21/96ae746e-e33d-4f99-9594-0cff65fde0521650542579795-W-_Biba.jpg",

 "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/21/b1692efc-4538-4e7a-a9d2-227f57e7e15d1650542578739-Anouk_-_Sangria.jpg",
 "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/21/d12be918-c845-43ad-a486-cf6e851696961650542579660-SugarGarnier.jpg",
"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/21/6aec2ae4-d985-44d1-acfa-05ec3a0d19571650542579528-Roadster-_M-H.jpg",
"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/21/8054ee00-2795-45d0-b137-6f9b4d71ff451650542578965-HL-_Roadster.jpg",
"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/21/636aa7d1-c8fd-4df4-bf57-737a2ae1eb771650542578826-Crocs.jpg"
]


  return (
      <>
      <h1 className="product-deal-heading">DEAL OF THE DAY
</h1>
    <div className="Product-container-1-p3">
        

{
         data.map(item=>{
           return(  
           <img
             className="product-img-3"
             src={item}
             alt="" 
           />
           )
         })
       }
    </div>
    </>
  );
}





export { Product3};