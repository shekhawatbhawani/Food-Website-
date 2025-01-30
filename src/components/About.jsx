import React from "react";

const About = () => {
  return (
    <div className="bg-gray-100 mt-8 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Page Title */}
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          About Us
        </h1>

        {/* About Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Image Section */}
          <div className="flex justify-center items-center">
            <img
              src="https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=400&q=80" // Replace with your image URL
              alt="About Us"
              className="rounded-lg shadow-lg w-full max-w-md"
            />
          </div>

          {/* Text Section */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800">
              Welcome to Our Food Website
            </h2>
            <p className="text-gray-600">
              At our food website, we are passionate about bringing you the best
              culinary experiences. Whether you're looking for delicious recipes,
              restaurant recommendations, or food delivery options, we've got you
              covered. Our mission is to make food exploration easy, fun, and
              accessible for everyone.
            </p>
            <p className="text-gray-600">
              Our team of food enthusiasts works tirelessly to curate the finest
              content, from mouth-watering dishes to expert cooking tips. We
              believe that food is more than just sustenance—it's a way to connect,
              celebrate, and create memories.
            </p>
            <p className="text-gray-600">
              Join us on this delicious journey and discover the world of flavors
              waiting for you!
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-800 text-center mb-8">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Team Member 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <img
                src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" // Replace with team member image
                alt="Team Member 1"
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">John Doe</h3>
              <p className="text-gray-600">Head Chef</p>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <img
                src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" // Replace with team member image
                alt="Team Member 2"
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">Jane Smith</h3>
              <p className="text-gray-600">Food Blogger</p>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <img
                src="https://images.pexels.com/photos/8636600/pexels-photo-8636600.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" // Replace with team member image
                alt="Team Member 3"
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">Mike Johnson</h3>
              <p className="text-gray-600">Nutritionist</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;