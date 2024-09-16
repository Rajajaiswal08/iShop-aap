import React from 'react'

function TottleData() {
  return (
    <div>

<div className="  max-w-sm mx-auto bg-white p-6 rounded-lg shadow-md">
  <div className="space-y-2">
    <div className="flex justify-between">
      <span className="text-gray-600">Subtotal</span>
      <span className="font-medium">$998</span>
    </div>
    <div className="flex justify-between">
      <span className="text-gray-600">Shipping fee</span>
      <span className="font-medium">$20</span>
    </div>
    <div className="flex justify-between">
      <span className="text-gray-600">Coupon</span>
      <span className="font-medium">No</span>
    </div>
  </div>

  <div className="border-t mt-4 pt-4">
    <div className="flex justify-between">
      <span className="font-bold text-lg">TOTAL</span>
      <span className="font-bold text-lg">$1018</span>
    </div>
  </div>

  <button className="w-full mt-6 bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600">
    Check out
  </button>
</div>

    </div>
  )
}

export default TottleData