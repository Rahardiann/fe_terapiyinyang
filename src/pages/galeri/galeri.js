import React, { useState, useEffect } from "react";
import Navbar from "../navbar/navbar";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Footer from "../footer/footer";
const Gallery = () => {

    
  return (
    <div className="bg-white fixed w-full h-full overflow-auto">
      <Navbar />
      <h1 className="text-center text-4xl text-main font-bold mt-8 pt-24 mb-12">
        Product Kami
      </h1>

      <p className="text-center text-main  animate-fadeInUp">
            Kami juga menyediakan beberapa obat atau keperluan terapi
          </p>
      <div className="w-screen flex flex-wrap justify-center pb-40 mt-20">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full sm:w-1/3 p-4"
        >
          <div
            className="bg-gray-200 rounded-lg overflow-hidden relative transition-transform duration-300 transform hover:scale-110"
            style={{ height: "500px" }}
          >
            <img
              src="assets/produk1.jpg"
              alt="Gambar 1"
              className="w-full h-full object-cover transform hover:scale-90"
            />
            <div className="p-4 opacity-0 absolute top-0 left-0 right-0 bottom-0 bg-opacity-75 hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
          </div>
        </motion.div>
        {/* Gambar 2 */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="w-full sm:w-1/3 p-4"
        >
          <div
            className="bg-gray-200 rounded-lg overflow-hidden relative transition-transform duration-300 transform hover:scale-110"
            style={{ height: "500px" }}
          >
            <img
              src="assets/produk2.jpg"
              alt="Gambar 2"
              className="w-full h-full object-cover transform hover:scale-90"
            />
            <div className="p-4 opacity-0 absolute top-0 left-0 right-0 bottom-0 bg-opacity-75 hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
          </div>
        </motion.div>
        {/* Gambar 3 */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full sm:w-1/3 p-4"
        >
          <div
            className="bg-gray-200 rounded-lg overflow-hidden relative transition-transform duration-300 transform hover:scale-110"
            style={{ height: "500px" }}
          >
            <img
              src="assets/produk3.jpg"
              alt="Gambar 3"
              className="w-full h-full object-cover transform hover:scale-90"
            />
            <div className="p-4 opacity-0 absolute top-0 left-0 right-0 bottom-0 bg-opacity-75 hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
          </div>
        </motion.div>
        {/* Gambar 3 */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full sm:w-1/3 p-4"
        >
          <div
            className="bg-gray-200 rounded-lg overflow-hidden relative transition-transform duration-300 transform hover:scale-110"
            style={{ height: "500px" }}
          >
            <img
              src="assets/produk4.jpg"
              alt="Gambar 3"
              className="w-full h-full object-cover transform hover:scale-90"
            />
            <div className="p-4 opacity-0 absolute top-0 left-0 right-0 bottom-0 bg-opacity-75 hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
          </div>
        </motion.div>
        {/* Gambar 3 */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full sm:w-1/3 p-4"
        >
          <div
            className="bg-gray-200 rounded-lg overflow-hidden relative transition-transform duration-300 transform hover:scale-110"
            style={{ height: "500px" }}
          >
            <img
              src="assets/produk5.jpg"
              alt="Gambar 3"
              className="w-full h-full object-cover transform hover:scale-90"
            />
            <div className="p-4 opacity-0 absolute top-0 left-0 right-0 bottom-0 bg-opacity-75 hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
          </div>
        </motion.div>
        {/* Gambar 3 */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full sm:w-1/3 p-4"
        >
          <div
            className="bg-gray-200 rounded-lg overflow-hidden relative transition-transform duration-300 transform hover:scale-110"
            style={{ height: "500px" }}
          >
            <img
              src="assets/produk6.jpg"
              alt="Gambar 3"
              className="w-full h-full object-cover transform hover:scale-90"
            />
            <div className="p-4 opacity-0 absolute top-0 left-0 right-0 bottom-0 bg-opacity-75 hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
          </div>
        </motion.div>
      </div>
      <Footer/>
    </div>
  );
};

export default Gallery;
