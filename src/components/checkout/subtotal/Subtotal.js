import React from 'react';
import { Link } from 'react-router-dom';
//import CurrencyFormat from 'react-currency-format';
import { useSelector } from 'react-redux';

export const Subtotal = () => {
    const { basket } = useSelector((state) => state.reducer)
    const total = basket.reduce((acc, curr) => {
        return acc + curr.price 
    }, 0)
    const totalDecimal = total.toFixed(2)
    return (
      <div className="m-4">
        <div className="bg-gray-100 border rounded-lg flex p-4 flex-col h-32">
          <div className>
            <span className="text-xs md:text-md">Subtotal ({basket.length} items)</span> :
            <span className="font-bold text-md md:text-md"> ${totalDecimal}</span>
          </div>
          <Link to='/payment'>
            <button className="bg-yellow-500 border border-black mt-4 text-sm p-2 w-full">
              Proceed to Checkout
            </button>
          </Link>
        </div>
      </div>
    );
}
