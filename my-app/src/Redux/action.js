import { ActionTypes } from "./actionTypes"
const storeItem=(items)=> ({
    type : ActionTypes.STORE_ITEM,
    payload : items,
})

const selectItem=(items)=> ({
    type : ActionTypes.SELECT_ITEM,
    payload : items,
})





export{storeItem,selectItem}