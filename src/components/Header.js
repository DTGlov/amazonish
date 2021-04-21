import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { useSelector } from "react-redux";

function Header() {
  const { basket } = useSelector((state) => state.reducer);
  console.log(basket.length);
  return (
    <div className="h-16  flex items-center justify-between w-full bg-black sticky top-0">
      <Link to="/">
        <img
          className="h-12 object-contain m-2"
          src="https://www.bizmonthly.com/wp-content/uploads/2020/04/Amazon-logo-black-template.png"
          alt=""
        />
      </Link>
      <div className="md:flex flex-1 m-2 hidden">
        <input className="w-full h-8" type="text" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-black bg-yellow-600 p-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
      <div className="md:flex hidden md:justify-around">
        <div className="flex flex-col text-white m-2 text-xs">
          <span>Hello Guest</span>
          <span className="font-bold text-sm">Sign In</span>
        </div>
        <div className="flex flex-col text-white m-2 text-xs">
          <span>Returns</span>
          <span className="font-bold text-sm">&Orders</span>
        </div>
        <div className="flex flex-col text-white m-2 text-xs">
          <span>Your</span>
          <span className="font-bold text-sm">Prime</span>
        </div>
      </div>
      <div>
        <div className="m-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white relative"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          <Link to="/checkout">
            <span className="text-white h-6 w-5 bg-yellow-600 absolute  rounded-full m-2 text-center font-bold top-0 right-3">
              {basket.length}
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
