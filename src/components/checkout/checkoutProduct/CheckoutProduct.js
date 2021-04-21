import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromBasket } from '../../../redux/actions/actions';


export const CheckoutProduct = ({ id, image, title, price, rating }) => {
  const dispatch = useDispatch()

  const removeItem = () => {
  dispatch(removeFromBasket(id))
}

  // const removeFromBasket = () => {
  //   dispatch({
  //     type: 'REMOVE_FROM_BASKET',
  //     id:id
  //   })
  // }
    return (
      <div className="flex space-x-3 mt-3 w-full items-center">
        <div className="w-6/12">
          <img
            src={image}
            alt=""
            className="h-44 w-44 md:h-32 object-contain"
          />
        </div>

        <div className="w-6/12">
          <div>
            <p className=" text-xs md:text-sm font-bold">{title}</p>
            <p>
              <small>$</small>
              <strong className="text-sm">{price}</strong>
            </p>
            <div>
              <p className="text-xs md:text-md">{"⭐".repeat(rating)}</p>
            </div>
            <button
              onClick={removeItem}
              className="bg-yellow-500 border border-black p-1 md:p-2 mt-3 text-xs"
            >
              Remove from basket
            </button>
          </div>
        </div>
      </div>
    );
}
