import "./style.css";
//import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
function Product() {
    var data=["https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/18/bdca38e1-6073-44e4-95a4-661ccb74a8e01650300879505-Polo-T-Shirts--1-.jpg",

 "https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/18/e2b52463-3ec4-4043-a3ee-9b89287a3e5a1650300879520-Sarees--1-.jpg",
 "https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/18/8b1905c6-e142-46d3-8c8c-67e5b521a8cf1650300984767-Luxe-Beauty.jpg",
 "https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/18/14fc06c3-301a-4a27-aa23-87b482eb4c101650300879536-Handbags--1-.jpg",
"https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/18/be62012c-581d-49a3-90a5-6f68cab0f6761650301062694-Formal-Shoes.jpg",
"https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/18/d5cd5ffb-6c64-4a63-b2bb-30eef5490e1e1650300879512-Shorts---Skirts.jpg",
"https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/18/41117fa4-7871-40ed-bed4-b482521d6d5d1650300879527-Activewear.jpg"
]

  return (
      
    <div className="Product-container-1">

{
         data.map(item=>{
           return(  
           <img
             className="product-img-1"
             src={item}
             alt=""
             
             
           />
         
         
           )
         })
       }
    </div>
  );
}

export default Product;