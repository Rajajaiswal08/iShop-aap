import React from 'react';
import { IoQrCodeSharp } from "react-icons/io5";
import { CiCircleList } from "react-icons/ci";
import { IoBagAdd } from "react-icons/io5";
import { IoIosColorPalette } from "react-icons/io";
import { TbRulerMeasure } from "react-icons/tb";
import { FaChartBar } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { FaBox } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { IoMdReorder } from "react-icons/io";
import { Link } from 'react-router-dom';

function Sidebar() {

   const menu = [
    {
      group: "Overview",
      children: [
        {
            name: "Dashboard",
            url: "/admin/dashboard",
            icon: <IoQrCodeSharp />
        },
        {
          name: "Analysis",
          url: "/admin/analysis",
          icon: <FaChartBar />
      }

      ]
    },
    {
      group: "Ecommerce",
      children: [
        {
          name: "Category",
          url: "/admin/category",
          icon: <CiCircleList />
        },
        {
          name: "Product",
          url: "/admin/product",
          icon: <IoBagAdd /> 
        },
        {
          name: "Color",
          url: "/admin/color",
          icon: <IoIosColorPalette />
        },
        {
          name: "Accessory",
          url: "/admin/accessory",
          icon: <FaBox /> 
        },
        {
          name: "Size",
          url: "/admin/size",
          icon: <TbRulerMeasure />
        }
      ]
     },
     {
      group: "Order Management",
      children: [
        {
          name: "Orders",
          url: "/admin/order",
          icon: <IoMdReorder />
        },
        {
          name: "Transactions",
          url: "/admin/transaction",
          icon: <FaBox /> 
        }
      ]
     },
     {
      group: "Users",
      children: [
        {
          name: "Website user",
          url: "/admin/website-user",
          icon: <FaRegUser />
        },
        {
          name: "Admin user",
          url: "/admin/admin-user",
          icon: <FaRegUserCircle />
        }
      ]
     }
   ];

  return (
    <div className='h-[100vh] overflow-y-scroll bg-[#f9fafb] px-4 shadow-lg'>
    <div className='text-center text-3xl mt-6 font-bold text-gray-800'>
      ISHOP Admin
    </div>
    <hr className='my-6 border-gray-300'/>
    <ul>
      {
        menu.map((m, i) => (
          <li key={i}>
            {m.group && (
              <div className='uppercase text-[14px] font-semibold text-gray-500 ps-3 mt-10 mb-5'>
                {m.group}
              </div>
            )}
            <ul>
              {m.children.map((child, index) => (
                <li key={index} className='flex items-center gap-4 p-3 text-gray-700 rounded-lg hover:bg-blue-100 hover:text-blue-700 transition duration-200 ease-in-out cursor-pointer'>
                  {child.icon}
                  <Link to={child.url} className='text-lg font-medium'>
                    {child.name}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))
      }
    </ul>
  </div>
  
  );
}

export default Sidebar;
