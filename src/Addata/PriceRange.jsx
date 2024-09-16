import React, { useState } from 'react';

function PriceRange() {
  const [priceRange, setPriceRange] = useState([13.99, 25.99]);

  const handlePriceChange = (e) => {
    const newPrice = Number(e.target.value);
    setPriceRange([13.99, newPrice]);
  };

  return (
    <div className="bg-gray-100 p-4 rounded-md shadow-md">
      <h3 className="text-lg font-semibold mb-2">PRICES</h3>
      <p>Ranger: ${priceRange[0].toFixed(2)} - ${priceRange[1].toFixed(2)}</p>
      <input
        type="range"
        min="13.99"
        max="25.99"
        value={priceRange[1]}
        onChange={handlePriceChange}
        className="w-full mt-2"
      />
    </div>
  );
}

export default PriceRange;
