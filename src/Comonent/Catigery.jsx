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
        <li className="px-6 py-4 hover:bg-gray-100 cursor-pointer">
          <p className="text-lg font-medium">
            <Link to="/store">All</Link>
          </p>
        </li>
        {categories.map((cat, i) => (
          <li key={i} className="px-6 py-4 hover:bg-gray-100 cursor-pointer">
            <p className="text-lg font-medium">
              <Link to={`/store/${cat.slug}`}>{cat.name}</Link>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Category;
