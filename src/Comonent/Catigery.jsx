import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Category() {
  const [categories, setCategories] = useState([]);


  const getCategories = async () => {
    const response = await fetch('https://dummyjson.com/products/categories');
    const data = await response.json();
    setCategories(data);
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <ul className="list-none divide-y divide-gray-200">
      <Link to="/store">
        <li className="px-6 py-4 hover:bg-gray-100 cursor-pointer">
          <p className="text-lg font-medium">
            All
          </p>
        </li>
        </Link> 
        {categories.map((cat, i) => (
          
          <li key={i} className="px-6 py-4 hover:bg-gray-100 cursor-pointer">
            <Link to={`/store/${cat.slug}`}>
            <p className="text-lg font-medium">
              {cat.name}
            </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Category;
