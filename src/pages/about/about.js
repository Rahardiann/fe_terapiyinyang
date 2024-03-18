import React from "react";
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";
import { motion } from "framer-motion";
import { FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa";

const About = () => {
  return (
    <div name="aboutus" className="bg-white min-h-screen relative">
      <Navbar />

      <div className="flex flex-col items-center justify-center px-4 pb-52 pt-32 -mt-4">
    
       
        <motion.div
          initial={{ opacity: 0, y: 20 }} // Atur posisi awal dan opacity
          animate={{ opacity: 1, y: 0 }} // Animasikan posisi dan opacity
          transition={{ duration: 1, delay: 0.4, ease: "easeInOut" }} // Atur durasi, delay, dan jenis transisi
          className={`text-center sm:text-left`}
        >
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-center text-black mb-8 animate-fadeInUp">
            About us
          </h1>

          <p className="text-center text-abu  animate-fadeInUp">
            terapis tradisional Yinyang menggunakan berbagai metode seperti
          </p>
          <p className="text-center text-abu mb-12 animate-fadeInUp">
            akupunktur, akupresur, pengobatan herbal, pijat refleksi, terapi
            makanan, meditasi, dan olahraga seperti Tai Chi atau Qi Gong.
          </p>

          <div class="flex flex-col md:flex-row md:justify-center md:items-start pb-8">
            <img
              src="assets/about.jpg"
              alt="Deskripsi Gambar"
              class="w-full max-w-lg animate-fadeInUp mr-20 rounded-lg"
            />
            <div class="md:flex md:flex-col md:justify-start md:items-start mt-20  md:mt-8">
              <p class="text-3xl mx-auto text-center  md:text-left md:mx-0 mb-4 md:max-w-none md:w-80 text-black font-bold ">
                Penyehat Tradisional
              </p>
              <p class="text-2xl mx-auto text-center md:text-left md:mx-0 mb-4 md:max-w-none text-abu md:w-80 mt-auto">
                Nama    : Andry Wicaksono
              </p>
              <p class="text-2xl mx-auto text-center md:text-left md:mx-0 mb-4 md:max-w-none text-abu md:w-80 mt-auto">
                Buka    : Senin-Sabtu
              </p>
              <p class="text-2xl  mx-auto text-center md:text-left md:mx-0 mb-4 md:max-w-none text-abu md:w-80 mt-auto">
                Jam     : 09.00-19.00
              </p>
              <p class="text-xl  mx-auto text-center md:text-left md:mx-0 mb-4 md:max-w-none text-abu md:w-80 mt-auto">
                Nomor STPT : 440.29/0004/35.73.406/2021
              </p>
              <p class="text-xl mx-auto text-center md:text-left md:mx-0 mb-4 md:max-w-none text-abu md:w-80 mt-auto">
                cara perawatan    : Akupuntur/Refleksi
              </p>

              <div className="social-links flex justify-center sm:text-center text-black">
                <a href="#" className="twitter mr-8">
                  <FaWhatsapp size={32} />
                </a>
                <a href="#" className="facebook mr-8">
                  <FaFacebook size={32} />
                </a>
                <a href="#" className="instagram">
                  <FaInstagram size={32} />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
