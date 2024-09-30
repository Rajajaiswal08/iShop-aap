import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../../../Componet/Admin/breadcrumb';
import { Context } from '../../../MainContext';

export default function View() {
  const {fatchCategory,cotegory} =useContext(Context) ;

  useEffect(
    ()=>{
      fatchCategory();
    },[]
  )

  return (
    <div className='m-4 border border-red-300 h-[500px]'>
      <div className='flex justify-between p-2'>
        <Breadcrumb items={["Category", "View"]} />
        <Link to="/admin/category/add">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Back to Add
          </button>
        </Link>
      </div>
      <div className='p-3 shadow mt-5'>
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3"> name</th>
                <th scope="col" className="px-6 py-3"> slug</th>
                <th scope="col" className="px-6 py-3">images</th>
                <th scope="col" className="px-6 py-3">Price</th>
              </tr>
            </thead>
            <tbody>
               {
                cotegory.map(
                  (cate,index)=>{
                      return(
                        <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                               {cate?.name}
                        </th>
                        <td className="px-6 py-4">{cate?.slug}</td>
                        <td className="px-6 py-4">{cate?.image_name}</td>
                        <td className="px-6 py-4">$2999</td>
                      </tr>
                      )
                  }
                )
               }
               
        
             
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
