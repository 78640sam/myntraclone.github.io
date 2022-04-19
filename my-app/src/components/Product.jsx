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
      <>
      <h1 className="product-deal-heading">DEAL OF THE DAY
</h1>
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
    </>
  );
}



function Product1() {
    var data1=["https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/062cea23-9a6a-44b9-bdd4-87cae6a462311645602543339-Kurta-sets.jpg",
    "https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/8d65d400-decd-4f42-902c-a40350a16ed11645602543346-Kurtas.jpg",
    "https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/398ee53b-5899-4a9a-9d0b-b35d60c01cb41645602543325-Dresses.jpg",
    "https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/2f410d81-7fae-400e-9ecc-b4a8b6df72b91645602543430-Women-Jeans.jpg",
    "https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/82a9be01-3032-4725-9500-bcc94366b7931645602543399-Mens-Shirts.jpg",
    "https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/c6b09c0f-5c57-472c-a3fc-854ec506a90e1645602543387-Men-T-shirt.jpg",
    "https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/f08e2bac-9bed-4f87-b022-0dce8defeded1645602543380-Men-Trousers.jpg"


]

  return (
      <>
      <h1 className="product-deal-heading-2">BEST OF MYNTRA EXCLUSIVE BRANDS
</h1>
    <div className="Product-container-2">
        

{
         data1.map(item=>{
           return(  
           <img
             className="product-img-2"
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



export { Product,Product1};