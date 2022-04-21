import {ActionTypes} from './actionTypes';

const initState ={
    item : []
}

const reducer = (state=initState,action) =>{
  
    // eslint-disable-next-line default-case
    switch(action.type){
        case ActionTypes.STORE_ITEM :
            return{...state, item: action.payload }

            default :
            return state;
    }
}

export {reducer}