import { ActionTypes } from "./actionTypes"
const storeItem=(items)=> ({
    type : ActionTypes.STORE_ITEM,
    payload : items,
})

const selectItem=(items)=> ({
    type : ActionTypes.SELECT_ITEM,
    payload : items,
})


const searchItem=(items)=> ({
    type : ActionTypes.SEARCH_ITEM,
    payload : items,
})




export{storeItem,selectItem,searchItem}