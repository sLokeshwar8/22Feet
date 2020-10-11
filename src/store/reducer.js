import * as actionTypes from './actionTypes';

const intialize = {
    CraftForms : null,
}   

const reducer = (state = intialize, action) =>{
    switch(action.type) {
        case actionTypes.GET_CARFT_DATA : 
            return {
                ...state,
                CraftForms: action.data,
            }
        default :
            return {
                ...state
            }
    }
}


export default reducer