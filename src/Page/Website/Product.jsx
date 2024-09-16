import React from 'react'
import { Link } from 'react-router-dom';

function Product({imges,title}) {



  return (
    <div>
       <div className="max-w-sm mx-auto bg-white border rounded-lg shadow-md p-4">
      <div className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full inline-block mb-2">HOT</div>
      
      <div className="flex justify-center mb-4">
        <Link to="/Cart">
          <img className="object-contain" src={imges} alt={title} />
        </Link>
      </div>

      <h2 className="text-lg font-semibold text-center mt-4">{title}</h2>

      <div className="flex justify-center items-center space-x-1 mt-2">
        <span className="text-yellow-400">★</span>
        <span className="text-yellow-400">★</span>
        <span className="text-yellow-400">★</span>
        <span className="text-yellow-400">★</span>
        <span className="text-gray-300">★</span>
      </div>

      <div className="flex justify-center items-center space-x-3 mt-4">
        <span className="text-red-500 text-xl font-bold">$499</span>
        <span className="text-gray-400 line-through">$599</span>
      </div>
    </div>
    </div>
  )
}

export default Product;
