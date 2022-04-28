import {IS_ERROR,IS_LOADING,SEARCH_ITEM,STORE_ITEM,SUCCESS} from './actionTypes';
const storeItem=(items)=> ({
    type : STORE_ITEM,
    payload : items,
    
})
// console.log("action",storeItem);
// const selectItem=(items)=> ({
//     type : SELECT_ITEM,
//     payload : items,
// })


const searchItem=(items)=> ({
    type : SEARCH_ITEM,
    payload : items,
})
const handleLoading=()=> ({
    type : IS_LOADING,
  
})
const handleError=()=> ({
    type : IS_ERROR,
    
})
const handleSuccess=()=> ({
    type : SUCCESS,
    
})

export {storeItem,searchItem,handleSuccess,handleError,handleLoading}