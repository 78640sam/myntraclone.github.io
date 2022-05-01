import "./style.css";
function Product3() {
    var data=["https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/21/96ae746e-e33d-4f99-9594-0cff65fde0521650542579795-W-_Biba.jpg",

 "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/21/b1692efc-4538-4e7a-a9d2-227f57e7e15d1650542578739-Anouk_-_Sangria.jpg",
 "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/21/d12be918-c845-43ad-a486-cf6e851696961650542579660-SugarGarnier.jpg",
 "https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/18/14fc06c3-301a-4a27-aa23-87b482eb4c101650300879536-Handbags--1-.jpg",
"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/21/6aec2ae4-d985-44d1-acfa-05ec3a0d19571650542579528-Roadster-_M-H.jpg",
"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/21/8054ee00-2795-45d0-b137-6f9b4d71ff451650542578965-HL-_Roadster.jpg",
"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/21/636aa7d1-c8fd-4df4-bf57-737a2ae1eb771650542578826-Crocs.jpg"
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



function Product4() {
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



function Product5() {
  var data2=["https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/aa4658b5-d723-4652-9ea1-00456b355c3a1645602467046-Kurta-Sets.jpg",
  "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/aae4be67-e611-47f4-b94e-92a16a36df731645602467007-Hangbags.jpg",
  "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/0f0be09e-4155-47bf-82e1-51044e7e7fd11645602467052-Kurtas.jpg",
  "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/dd4414f8-4e1b-4a22-997e-8e06c0a5ff861645602467167-T-Shirts.jpg",
  "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/f9ca5609-b634-42d4-8c08-a8eaebb818b71645602467085-Sarees.jpg",
  "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/0b7869d4-f825-4625-b1db-58ad10a45f301645602467093-Shirts.jpg",
  "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/b34a30a6-504b-4c94-b7e1-61391d536bc51645602467038-Jewellery.jpg",
  "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/b156f76a-26e7-4bce-9941-8a67d3c16f331645602467120-Teens-Wear.jpg",
  "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/fb091b07-c275-4578-b08d-b4f93dfe9e841645602466976-Beauty.jpg",
  "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/b827f900-ed61-4467-84fa-a6e357787e761645602467079-Plus-Size-Styles_W.jpg",
  "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/cd083042-3bb2-4231-8b96-0234fc0ed23f1645602467032-Jeans.jpg",
  "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/736f3951-e67b-414f-bfb1-56e2794d441d1645602467114-Sports-Shoes.jpg",
  "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/d13255df-c846-4dbd-8458-77ccaba4f9eb1645602467142-Trousers.jpg",
  "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/7a774194-94e6-49b5-b8bb-64bf9901bc671645602466989-Casual-Shoes.jpg",
  "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/5860c3c2-a639-4625-ac1d-4d55406f128a1645602467134-Track-Pants.jpg",
  "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/07e5c29a-2eab-4b2d-b617-6565ffe1f4701645602467025-Innerwear.jpg",
  "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/09b3164c-241a-4134-baa1-49b12c56c3901645602466968-Bath-Essentials.jpg",
  "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/171a820e-96f0-4b11-a138-03953a7e05481645602467153-Trousers_W.jpg",
  "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/054a056f-33e8-4b6c-b747-9b88d7fce0a11645602467174-Watches.jpg",
  "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/d3c5cd23-392f-40be-8080-99ffb79c27261645602467128-Tops.jpg",
  "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/355b9499-3345-4457-8b3b-2eeceaecf4561645602467020-Infant-Essentials.jpg",
  "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/7f814546-b705-4d9b-9ab5-1ddfeca786391645602467001-Flip-Flops.jpg",
  "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/12c3b4aa-8160-442f-b93e-e896eafb1b0a1645602467160-T-Shirts-_-Shorts_Kids.jpg",
  "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/67783047-7fcc-4530-9368-9be75a713e411645602466995-Dresses.jpg",
  



]

return (
    <>
    <h1 className="product-deal-heading-2">CATEGORIES TO BAG
</h1>
  <div className="Product-container-3">
      

{
       data2.map(item=>{
         return(  
         <img
           className="product-img-3"
           src={item}
           alt="Imges"
           
           
         />
       
       
         )
       })
     }
  </div>
  </>
);
}


export { Product3,Product4,Product5};