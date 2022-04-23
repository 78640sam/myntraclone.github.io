import {ActionTypes} from './actionTypes';

const initState ={
    item : [],
    searchString:""
}

const reducer = (state=initState,action) =>{
  
    // eslint-disable-next-line default-case
    switch(action.type){
        case ActionTypes.STORE_ITEM :
            return{...state, item: action.payload }
        case ActionTypes.SEARCH_ITEM :
            return {...state,searchString:action.payload}
            default :
            return state;
    }
}

export {reducer}