import {ADD_TO_BASKET, EMPTY_BASKET, REMOVE_FROM_BASKET} from '../actionTypes'

export const initialState = {
    basket:[]
};


const  reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_BASKET:
            return {
                ...state,
                basket: [...state.basket,action.item]
            };
        case REMOVE_FROM_BASKET:
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.payload);
            let newBasket = [...state.basket];
            if (index >= 0) {
                newBasket.splice(index, 1);
            } else {
                console.warn(`Can't remove product {id:${action.id}} as its not in the basket!`);
            }
            return {
                ...state,
                basket: newBasket
            };
        case EMPTY_BASKET:
            return {
                ...state,
                basket:[]
            }

            // return {
            //     ...state,
            //     basket:[...state.basket.filter((item)=>item.id !== action.id)]
            // }
        default:
            return state;

    }
}

export default reducer;
