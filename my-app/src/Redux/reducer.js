import {IS_ERROR,IS_LOADING,SEARCH_ITEM,STORE_ITEM,SUCCESS} from './actionTypes';

const initState ={
    item : [],
    searchString:"",
    isLoading:false,
    isError:false,
    succes:false,
}

const reducer = (state=initState,action) =>{
  
    // eslint-disable-next-line default-case
    switch(action.type){
     

        case STORE_ITEM :
            return{...state, isLoading :false,item: action.payload }
        case SEARCH_ITEM :
            return {...state,searchString:action.payload}
            case IS_LOADING:
                return {...state,isLoading:true}
    
                case IS_ERROR:
                    return {...state,isLoading :false, isError : true, succes:false}
    
                    case SUCCESS:
                        return {...state,isLoading :false, isError : false, succes:true}
            default :
            return state;
    }
}

export {reducer}