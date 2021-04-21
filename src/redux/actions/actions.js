import { ADD_TO_BASKET,REMOVE_FROM_BASKET,EMPTY_BASKET } from '../actionTypes';


export const addToBasket = () =>  (dispatch) => {
    dispatch({type:ADD_TO_BASKET})
}

export const removeFromBasket = (id) => (dispatch) => {
    dispatch({type:REMOVE_FROM_BASKET,payload:id})
};

export const emptyBasket = () => (dispatch) => {
    dispatch({type:EMPTY_BASKET})
}