import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit form logic
    console.log("Name:", name, "Email:", email, "Message:", message);
  };

  return (
    <div className="h-1/2 py-10 flex justify-center items-center bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white rounded-xl shadow-xl p-4 max-w-lg w-full"
      >
        <h1 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mb-6">
          Contact Us
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <label htmlFor="name" className="block text-gray-700 font-semibold">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your name"
              required
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <label htmlFor="email" className="block text-gray-700 font-semibold">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your email"
              required
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <label
              htmlFor="message"
              className="block text-gray-700 font-semibold"
            >
              Message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your message"
              rows="4"
              required
            ></textarea>
          </motion.div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            type="submit"
            className="w-full py-2 px-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-semibold transition-colors hover:from-indigo-700 hover:to-purple-700"
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default Contact;
