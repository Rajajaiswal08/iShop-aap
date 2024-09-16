import React from 'react'

function Context() {
  return (
    <div>
        <div className="bg-blue-50 p-8 rounded-lg">
  <h2 className="text-lg font-bold text-black mb-6">
    We’d love to help you with your SEO, PPC and Paid Social campaigns. If you’ve got a challenge we’d love the chance to come up with a solution.
  </h2>
  <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div className="flex flex-col">
      <label className="text-gray-700 mb-2">Name</label>
      <input
        type="text"
        placeholder="Your Name*"
        className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-500"
      />
    </div>
    <div className="flex flex-col">
      <label className="text-gray-700 mb-2">E-Mail Address</label>
      <input
        type="email"
        placeholder="Your Mail*"
        className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-500"
      />
    </div>
    <div className="flex flex-col">
      <label className="text-gray-700 mb-2">Phone No.</label>
      <input
        type="tel"
        placeholder="Phone No."
        className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-500"
      />
    </div>
    <div className="flex flex-col">
      <label className="text-gray-700 mb-2">Service</label>
      <select className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-500">
        <option>Select Service</option>
      </select>
    </div>
    <div className="flex flex-col md:col-span-2">
      <label className="text-gray-700 mb-2">Your Message</label>
      <textarea
        placeholder="Message*"
        className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-500"
        rows="4"
      ></textarea>
    </div>
    <div className="md:col-span-2 flex justify-center">
      <button
        type="submit"
        className="bg-pink-500 text-white px-8 py-3 rounded-lg font-bold hover:bg-pink-600 transition duration-300"
      >
        SUBMIT NOW <span className="ml-2">✔</span>
      </button>
    </div>
  </form>

  <div className="mt-10 space-y-6">
    <div className="flex items-center">
      <span className="text-pink-500 text-xl mr-4">📞</span>
      <p className="text-black">+91-9351361306</p>
    </div>
    <div className="flex items-center">
      <span className="text-pink-500 text-xl mr-4">✉️</span>
      <p className="text-black">jaiswalraja871@gmail.com</p>
    </div>
    <div className="flex items-center">
      <span className="text-pink-500 text-xl mr-4">🏢</span>
      <p className="text-black">
         # 9A maruti nagar airport sanagner jaipur rajsthan 
      </p>
    </div>
  </div>
</div>

    </div>
  )
}

export default Context