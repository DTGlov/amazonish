import React from 'react'
import { CheckoutProduct } from '../components/checkout/checkoutProduct/CheckoutProduct';
import { useSelector,useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { emptyBasket } from '../redux/actions/actions';
import {motion} from 'framer-motion'

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


export const Payment = () => {
    const history = useHistory();
    const dispatch = useDispatch()
    const { basket } = useSelector((state) => state.reducer);
     const total = basket.reduce((acc, curr) => {
       return acc + curr.price;
     }, 0);
    const totalDecimal = total.toFixed(2);
    
    const makePurchase = () => {
        alert('Thanks for your purchase')
        dispatch(emptyBasket());
        history.push('/')

    }
    return (
      <motion.div
        className=" w-full bg-white"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="w-full h-16 flex justify-center items-center bg-gray-100">
          <h1 className="text-xl md:text-2xl">
            CHECKOUT({basket.length} items)
          </h1>
        </div>
        <div className="flex w-full justify-between p-4">
          <h1 className="md:w-2/12 font-bold text-sm md:text-xl">
            Delivery Address
          </h1>
          <div className="flex-col flex md:w-10/12 text-sm md:text-base">
            <span>122 Redux Avenue</span>
            <span>ReactVille</span>
          </div>
        </div>
        <hr className="border-5 border-gray-400" />
        <div className="flex w-full p-4">
          <h1 className="md:w-2/12 font-bold text-sm md:text-xl">
            Review Items
          </h1>
          <div className="w-8/12">
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
        <hr className="border-5 border-gray-400" />
        <div className="flex w-full p-4 justify-between">
          <h1 className="md:w-2/12 font-bold text-sm md:text-2xl">Payment</h1>
          <div className="flex flex-col  md:w-10/12 mr-8">
            <span className="font-bold text-sm md:text-xl">
              Order Total : ${totalDecimal}
            </span>
            <button
              onClick={makePurchase}
              className="bg-yellow-500 text-xs md:text-sm border mt-2 md:w-2/12 border-black"
            >
              BUY NOW
            </button>
          </div>
        </div>
      </motion.div>
    );
}
