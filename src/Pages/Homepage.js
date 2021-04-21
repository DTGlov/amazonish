import React from 'react';
import CarouselContainer from '../components/Carousel';
import Footer from '../components/Footer';
import Product from '../components/Product';
import './Homepage.css';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition:{delay:0.5,duration:1}
  },
  exit: {
    x: '-100vw',
    transition:{ease:'easeInOut'}
  }
}

function Homepage() {
    return (
      <motion.div className="h-screen"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <CarouselContainer />
        <div className="w-full flex flex-col md:flex-row ">
          <Product
            id="1"
            title="Acer Aspire 5 Slim Laptop, 15.6 inches Full HD IPS Display, AMD Ryzen 3 3200U, Vega 3 Graphics"
            price={364.94}
            image="https://images-na.ssl-images-amazon.com/images/I/41vMYgD92xL.jpg"
            rating={5}
          />
          <Product
            id="2"
            title="HP 24mh FHD Monitor - Computer Monitor with 23.8-Inch IPS Display (1080p)"
            price={169.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51IIMW6-TbL.jpg"
            rating={4}
          />
          <Product
            id="3"
            title="MSI Creator 15 Professional Laptop: 15.6 4K UHD Ultra-Thin Bezel Display, Intel Core"
            price={1629.99}
            image="https://m.media-amazon.com/images/I/81cu55Vg0bL._AC_UY218_.jpg"
            rating={5}
          />
        </div>
        <div className="w-full flex flex-col md:flex-row">
          <Product
            id="4"
            title="Playstation DualSense Wireless Controller"
            price={69.98}
            image="https://m.media-amazon.com/images/I/61o7ai+YDoL._AC_UY218_.jpg"
            rating={4}
          />
          <Product
            id="5"
            title="Tom Ford Black Orchid By Tom Ford For Women."
            price={143.5}
            image="https://m.media-amazon.com/images/I/51p-HVY3A+L._AC_UL320_.jpg"
            rating={5}
          />
          <Product
            id="6"
            title="PHILIPS Stereo CD Cassette Player, Portable."
            price={29.99}
            image="https://m.media-amazon.com/images/I/618ikq2iGoL._AC_UY218_.jpg"
            rating={4}
          />
        </div>
        <Footer />
      </motion.div>
    );
}

export default Homepage
