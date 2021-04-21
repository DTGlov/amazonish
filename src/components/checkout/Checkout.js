import React from 'react';
import { useSelector } from 'react-redux';
import { CheckoutProduct } from './checkoutProduct/CheckoutProduct';
import { Subtotal } from './subtotal/Subtotal';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 0.5, duration: 1 },
  },
  exit: {
    x: "-100vw",
    transition: { ease: "easeInOut" },
  },
};

export const Checkout = () => {
    const {basket} = useSelector((state)=>state.reducer)
    return (
      <motion.div
        className="w-full flex-col md:flex-row flex space-x-3 bg-white"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className=" w-full md:w-9/12 p-4">
          <img
            src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
            alt=""
          />
          <div>
            <h3 className="font-bold text-md md:text-lg">Hello,</h3>
            <h2 className="mb-3 font-bold text-md md:text-2xl ">
              Your Shopping Basket
            </h2>
            <div className="border-b-2 border-gray-400 mb-4"></div>
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        <div className="mr-3 md:w-3/12">
          <Subtotal />
        </div>
      </motion.div>
    );
}
