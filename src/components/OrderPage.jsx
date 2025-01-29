import React from "react";

const OrderPage = () => {
  return (
    <div className="p-6 md:p-10">
      <h1 className="text-3xl font-bold text-center my-16">Order Now</h1>
      <div className="md:flex justify-center items-center gap-10">
        {/* Image Section */}
        <div className="md:w-1/2">
          <img
            src="https://komalhasija.github.io/Food_Restuarant/images/order-img.jpg"
            alt="Order Now"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
        
        {/* Form Section */}
        <div className="md:w-1/2 mt-8 md:mt-0">
          <div className="space-y-4">
           <div className="flex justify-between">
           <div>
              <label htmlFor="name" className="block font-medium mb-1">Name</label>
              <input
                type="text"
                id="name"
                placeholder="Enter Your Name"
                className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-300 focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="email" className="block font-medium mb-1">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter Email"
                className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-300 focus:outline-none"
              />
            </div>
           </div>

        <div className="flex justify-between">
        <div>
              <label htmlFor="number" className="block font-medium mb-1">Number</label>
              <input
                type="number"
                id="number"
                placeholder="Enter Your Phone"
                className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-300 focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="food-name" className="block font-medium mb-1">Food Name</label>
              <input
                type="text"
                id="food-name"
                placeholder="Enter Food Name"
                className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-300 focus:outline-none"
              />
            </div>
        </div>

            <div>
              <label htmlFor="quantity" className="block font-medium mb-1">Quantity</label>
              <input
                type="number"
                id="quantity"
                placeholder="Enter Quantity"
                className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-300 focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="address" className="block font-medium mb-1">Address</label>
              <input
                type="text"
                id="address"
                placeholder="Enter Your Address "
                className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-300 focus:outline-none"
              />
            </div>

            <button className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-500 transition duration-200 focus:ring focus:ring-indigo-300 focus:outline-none">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
