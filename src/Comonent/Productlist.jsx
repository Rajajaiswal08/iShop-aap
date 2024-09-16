import React from 'react'

function Productlist(props) {
  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden h-[400px]">
      <div className="flex flex-col justify-between  items-center px-6 py-4">
        <img className="  object-cover mx-auto" src={props.img} alt="Product" />
        <div className="ml-6 flex-1">
          <p className="text-xl font-semibold">{props.name}</p>
        </div>
        <div>
          <span className="text-lg font-semibold text-gray-900">{props.rating}</span>
        </div>
      </div>
    </div>
  )
}

export default Productlist;
