import React, { useState } from 'react';

function ColorSelector() {
  const [selectedColor, setSelectedColor] = useState('blue');

  const colors = ['blue', 'red', 'black', 'yellow', 'pink', 'white'];

  return (
    <div className="bg-gray-100 p-4 rounded-md shadow-md mt-4">
      <h3 className="text-lg font-semibold mb-2">COLOR</h3>
      <div className="flex space-x-2">
        {colors.map((color) => (
          <button
            key={color}
            onClick={() => setSelectedColor(color)}
            className={`w-8 h-8 rounded-full border-2 ${selectedColor === color ? 'border-blue-500' : 'border-transparent'}`}
            style={{ backgroundColor: color }}
          />
        ))}
      </div>
    </div>
  );
}

export default ColorSelector;
