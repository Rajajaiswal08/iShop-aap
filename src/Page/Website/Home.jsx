import React from 'react';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import Productdata from '../../Componet/WEbsite/Productdata';

function Home() {
  return (
    <div>
      <div className='w-full border border-red-700'>
      <div
          className="w-full md:h-[500px] h-[400px]"
          style={{
            background: 'linear-gradient(67deg, #E71D3A 0%, #ECC7C1 45%, #EFCAC4 58%, #E4BDB8 70%, #42A8FE 100%)',
          }}
        >
          <div className="text-white text-center  md:ml-[50%] ml-[20%]">
            <img src="images/22.png" width={"100%"} alt="" className='md:h-[500px] h-[400px]' />
          </div>
        </div>

        {/* Product section */}
<Productdata/>

        {/* Banner section */}
        <div className='w-full mx-auto bg-[#2E90E5]'>
          <div className="max-w-[1190px] mx-auto flex flex-col md:flex-row items-center">
            <div className="md:w-[50%] p-6 md:p-10 leading-8 md:leading-10 text-center md:text-left">
              <h1 className="text-3xl md:text-4xl text-white">iPhone 6 Plus</h1>
              <p className="text-white mt-6 md:mt-8 text-lg md:text-xl">
                Performance and design. Taken right to the edge.
              </p>
              <div className="text-white mt-4 md:mt-5 cursor-pointer">SHOP NOW</div>
            </div>
            <div className="md:w-[50%] mt-6 md:mt-0">
              <img src="images/22.png" alt="Phone" className="mx-auto" />
            </div>
          </div>
        </div>

        {/* Additional services */}
        <div className="max-w-[1190px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center py-10">
          {/* Free Shipping */}
          <div className="flex flex-col items-center">
            <img src="images/31.png" alt="Free Shipping" className="w-16 h-16 mb-4" />
            <h3 className="text-xl font-bold mb-2">FREE SHIPPING</h3>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor minim veniam, quis nostrud.
            </p>
          </div>

          {/* 100% Refund */}
          <div className="flex flex-col items-center">
            <img src="images/33.png" alt="100% Refund" className="w-16 h-16 mb-4" />
            <h3 className="text-xl font-bold mb-2">100% REFUND</h3>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor minim veniam, quis nostrud.
            </p>
          </div>

          {/* Support 24/7 */}
          <div className="flex flex-col items-center">
            <img src="images/32.png" alt="Support 24/7" className="w-16 h-16 mb-4" />
            <h3 className="text-xl font-bold mb-2">SUPPORT 24/7</h3>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor minim veniam, quis nostrud.
            </p>
          </div>
        </div>

     
      </div>
      <div className='w-full mx-auto'>
        <div className=' max-w-[1900px] m-auto mt-7 mb-7 '>
      <SimpleSlider />
      </div>
      </div>
    </div>
  );
}

export default Home;

function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay:true,

    responsive: [
      {
        breakpoint: 1024, // Screens less than 1024px
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768, // Screens less than 768px
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480, // Screens less than 480px
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };
  
  return (
    <Slider  {...settings}>
    <div className='flex justify-center items-center'>
    <div className="max-w-sm rounded-lg border shadow-lg p-4">
  <div className="flex justify-between">
    <img
      className="w-24 h-24 object-contain"
      src="images/01.png"
      alt="Beats Solo 2 On Ear Headphones - Black"
    />
    <div className="ml-4 flex flex-col justify-between">
      <div>
        <h3 className="text-lg font-semibold">
          Beats Solo 2 On Ear Headphones - Black
        </h3>
        <div className="flex items-center">
          <span className="text-yellow-400">★★★★☆</span>
        </div>
      </div>
      <div className="flex items-center">
        <span className="text-red-500 text-2xl font-bold mr-2">$499</span>
        <span className="text-gray-400 line-through">$199</span>
      </div>
    </div>
  </div>
</div>

    </div>
    <div className='flex justify-center items-center'>
    <div className="max-w-sm rounded-lg border shadow-lg p-4">
  <div className="flex">
    <img
      className="w-24 h-24 object-contain"
      src="images/02.png"
      alt="Beats Solo 2 On Ear Headphones - Black"
    />
    <div className="ml-4 flex flex-col justify-between">
      <div>
        <h3 className="text-lg font-semibold">
          Beats Solo 2 On Ear Headphones - Black
        </h3>
        <div className="flex items-center">
          <span className="text-yellow-400">★★★★☆</span>
        </div>
      </div>
      <div className="flex items-center">
        <span className="text-red-500 text-2xl font-bold mr-2">$299</span>
        <span className="text-gray-400 line-through">$399</span>
      </div>
    </div>
  </div>
</div>

    </div>
    <div className='flex justify-center items-center'>
    <div className="max-w-sm rounded-lg border shadow-lg p-4">
  <div className="flex">
    <img
      className="w-24 h-24 object-contain"
      src="images/04.png"
      alt="Beats Solo 2 On Ear Headphones - Black"
    />
    <div className="ml-4 flex flex-col justify-between">
      <div>
        <h3 className="text-lg font-semibold">
          Beats Solo 2 On Ear Headphones - Black
        </h3>
        <div className="flex items-center">
          <span className="text-yellow-400">★★★★☆</span>
        </div>
      </div>
      <div className="flex items-center">
        <span className="text-red-500 text-2xl font-bold mr-2">$429</span>
        <span className="text-gray-400 line-through">$499</span>
      </div>
    </div>
  </div>
</div>

    </div>
    <div className='flex justify-center items-center'>
    <div className="max-w-sm rounded-lg border shadow-lg p-4">
  <div className="flex">
    <img
      className="w-24 h-24 object-contain"
      src="images/03.png"
      alt="Beats Solo 2 On Ear Headphones - Black"
    />
    <div className="ml-4 flex flex-col justify-between">
      <div>
        <h3 className="text-lg font-semibold">
          Beats Solo 2 On Ear Headphones - Black
        </h3>
        <div className="flex items-center">
          <span className="text-yellow-400">★★★★☆</span>
        </div>
      </div>
      <div className="flex items-center">
        <span className="text-red-500 text-2xl font-bold mr-2">$459</span>
        <span className="text-gray-400 line-through">$559</span>
      </div>
    </div>
  </div>
</div>

    </div>
    <div className='flex justify-center items-center'>
    <div className="max-w-sm rounded-lg border shadow-lg p-4">
  <div className="flex">
    <img
      className="w-24 h-24 object-contain"
      src="images/15.png"
      alt="Beats Solo 2 On Ear Headphones - Black"
    />
    <div className="ml-4 flex flex-col justify-between">
      <div>
        <h3 className="text-lg font-semibold">
          Beats Solo 2 On Ear Headphones - Black
        </h3>
        <div className="flex items-center">
          <span className="text-yellow-400">★★★★☆</span>
        </div>
      </div>
      <div className="flex items-center">
        <span className="text-red-500 text-2xl font-bold mr-2">$499</span>
        <span className="text-gray-400 line-through">$599</span>
      </div>
    </div>
  </div>
</div>
    </div>
    <div className='flex justify-center items-center'>

    <div className="max-w-sm rounded-lg border shadow-lg p-4">
  <div className="flex">
    <img
      className="w-24 h-24 object-contain"
      src="images/2.png"
      alt="Beats Solo 2 On Ear Headphones - Black"
    />
    <div className="ml-4 flex flex-col justify-between">
      <div>
        <h3 className="text-lg font-semibold">
          Beats Solo 2 On Ear Headphones - Black
        </h3>
        <div className="flex items-center">
          <span className="text-yellow-400">★★★★☆</span>
        </div>
      </div>
      <div className="flex items-center">
        <span className="text-red-500 text-2xl font-bold mr-2">$399</span>
        <span className="text-gray-400 line-through">$499</span>
      </div>
    </div>
  </div>
</div>
    </div>
    
  </Slider> 
  );
}
