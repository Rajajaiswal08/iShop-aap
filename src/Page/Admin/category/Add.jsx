import React, { useContext, useRef } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'; 
import Breadcrumb from '../../../Componet/Admin/breadcrumb';
import { titleslug } from '../../../Helper';
import { Context } from '../../../MainContext';

export default function Add() {
  const { API_BASE_URL, Cate_base_url, showToast } = useContext(Context);

  const submitHandler = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", e.target.Category_name.value);
    formData.append("slug", e.target.Category_slug.value);
    formData.append("image", e.target.Category_image.files[0]);

    axios.post(API_BASE_URL + Cate_base_url + "/create", formData)
      .then((response) => {
        showToast(response.data.msg, response.data.flag);
        if (response.data.flag === 1) {
          e.target.reset();
        }
      })
      .catch((error) => {
        if (error.response) {
          console.log("Server responded with an error:", error.response.data);
        } else if (error.request) {
          console.log("No response received:", error.request);
        } else {
          console.log("Error setting up request:", error.message);
        }
      });
  }

  const nameref = useRef();
  const slugref = useRef();

  return (
    <div>
      <div className='m-4 border border-red-300 h-[500px]'>
        <div className='flex justify-between p-2'>
          <Breadcrumb items={["Category", "Add"]} />
          <Link to="/admin/category">
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Back to View
            </button>
          </Link>
        </div>

        <div className='mt-5 shadow p-5'>
          <div className="w-full mx-auto">
            <form onSubmit={submitHandler}>
              <div className="grid grid-cols-1 md:grid-cols-2 h-[300px] gap-4">
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
                    name='Category_name'
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
                    name='Category_slug'
                    placeholder="Eg (mobile, tablet etc)"
                  />
                </div>
                <div className="col-span-2">
                  <label className="block text-gray-700 font-medium mb-2" htmlFor="Category_image">
                    IMAGE
                  </label>
                  <input
                    className="w-full border border-gray-300 p-2 rounded-md"
                    type="file"
                    name='Category_image'
                    id="Category_image"
                  />
                </div>
                <div className="col-span-2">
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
