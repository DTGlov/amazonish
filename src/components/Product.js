import React from 'react';
import { useDispatch } from 'react-redux';

function Product({ id, title, price, image, rating }) {
  const dispatch = useDispatch()

  const addItem = () => {
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating:rating
      }
    })
  }

    return (
      <div className="md:w-4/12 bg-white ml-4 mr-4 p-8 mb-4">
        <div key={id}>
          <h1 className="text-xs md:text-sm">{title}</h1>
          <p>
            <small>$</small>
            <strong className="text-md">{price}</strong>
          </p>
          <div>{"⭐".repeat(rating)}</div>
        </div>
        <div className="flex justify-center items-center">
          <img className="h-32 w-32 md:h-44 md:w-44  object-contain" src={image} alt="" />
        </div>
        <div className="w-full flex justify-center">
          <button
            onClick={addItem}
            className="bg-yellow-500 text-xs p-1 md:p-2 border border-black mt-4"
          >
            Add to Basket
          </button>
        </div>
      </div>
    );
}

export default Product
