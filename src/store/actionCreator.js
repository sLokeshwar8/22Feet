import * as actionTypes from './actionTypes';

export const sendToStore = (res) => {
    return {
        type: actionTypes.GET_CARFT_DATA,
        data: res
    }
}


export const getCarftData = () => {
    return dispatch => {
        fetch('./data.json',{
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
             }
        })
        .then(function(response){
            return response.json();
        })
        .then(function(myJson) {
            dispatch(sendToStore(...myJson))
        });
    }
}