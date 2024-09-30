import React, { useRef } from 'react';
import { titleslug } from '../../../Helper';
import Breadcrumb from '../../../Componet/Admin/breadcrumb';
import { Link } from 'react-router-dom';

function Add() {
  const nameref = useRef();
  const slugref = useRef();
  const orignal_price = useRef();
  const discount_percentage = useRef();
  const Final_price = useRef();

  const getchange = () => {
    const discountValue = discount_percentage.current.value;

    if (orignal_price.current.value !== "" && discountValue >= 0) {
      const Final = orignal_price.current.value - ((discountValue / 100) * orignal_price.current.value);
      Final_price.current.value = Final;
    } else if (discountValue < 0) {
      discount_percentage.current.value = 0; // 0 से कम डिस्काउंट नहीं होने देगा
      alert("Discount price cannot be less than 0");
    }
  };

  const submitHandler = () => {
    
  };

  return (
    <div>
      <div className="m-4 border border-red-300">
        <div className="flex justify-between p-2">
          <Breadcrumb items={["product", "Add"]} />
          <Link to="/admin/product">
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Back to View
            </button>
          </Link>
        </div>

        <div className="mt-5 shadow p-5">
          <div className="w-full mx-auto">
            <form onSubmit={submitHandler}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
                    NAME
                  </label>
                  <input
                    className="w-full border border-gray-300 p-2 rounded-md placeholder-gray-400"
                    type="text"
                    ref={nameref}
                    onChange={() => titleslug(nameref.current, slugref.current)}
                    id="name"
                    name="Category_name"
                    placeholder="Eg (Mobile, Tablet etc)"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2" htmlFor="slug">
                    SLUG
                  </label>
                  <input
                    className="w-full border border-gray-300 p-2 rounded-md placeholder-gray-400"
                    type="text"
                    ref={slugref}
                    id="slug"
                    name="Category_slug"
                    placeholder="Eg (mobile, tablet etc)"
                  />
                </div>

                <div className="md:col-span-2 flex gap-4">
                  <div className="flex-1">
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="orignal_price">
                      Orignal price
                    </label>
                    <input
                      className="w-full border border-gray-300 p-2 rounded-md placeholder-gray-400"
                      type="number"
                      id="orignal_price"
                      onChange={getchange}
                      name="orignal_price"
                      ref={orignal_price}
                      placeholder="Eg (Mobile, Tablet etc)"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="discount_percentage">
                      Discount price
                    </label>
                    <input
                      className="w-full border border-gray-300 p-2 rounded-md placeholder-gray-400"
                      type="number"
                      id="discount_percentage"
                      ref={discount_percentage}
                      onChange={getchange}
                      name="discount_percentage"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="Final_price">
                      Final price
                    </label>
                    <input
                      className="w-full border border-gray-300 p-2 rounded-md placeholder-gray-400"
                      type="number"
                      id="Final_price"
                      ref={Final_price}
                      name="Final_price"
                      readOnly
                    />
                  </div>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-gray-700 font-medium mb-2" htmlFor="Category_image">
                    IMAGE
                  </label>
                  <input
                    className="w-full border border-gray-300 p-2 rounded-md"
                    type="file"
                    name="Category_image"
                    id="Category_image"
                  />
                </div>

                <div className="md:col-span-2">
                  <button className="bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-gray-900">
                    Button
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Add;
