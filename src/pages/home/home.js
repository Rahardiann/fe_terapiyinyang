import React, { useState, useEffect } from "react";
import Navbar from "../navbar/navbar";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer"; // Mengimpor useInView dari react-intersection-observer
import { FaStethoscope, FaSyringe } from "react-icons/fa";
import { BiSolidHeartSquare } from "react-icons/bi";
import { RiMentalHealthFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import Footer from "../footer/footer";

const Home = () => {
  const [showAnimation, setShowAnimation] = useState(false);
  const { ref, inView } = useInView();

  useEffect(() => {
    document.title = "Yinyang Terapis";
    if (inView) {
      setShowAnimation(true);
    }
  }, [inView]);

  const Card = ({ icon, title }) => (
    <div className="flex items-center items-center sm:mx-auto p-4 ">
      <div className="text-3xl text-main mr-4">{icon}</div>
      <h2 className="font-bold">{title}</h2>
    </div>
  );

  return (
    <div className="bg-white min-h-screen relative">
      <Navbar />
      <div
        className="flex flex-col px-4 pb-64 pt-52 bg-cover relative"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url('/assets/bgmain.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "80vh",
          backgroundAttachment: "fixed",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeInOut" }}
          className={`text-center sm:text-left`}
        >
          <h1 className="text-4xl md:text-6xl lg:text-5xl font-bold text-black mb-8 animate-fadeInUp">
            Ying <span className="text-abucustom">Yang </span><span className="text-black">terapis</span> 
          </h1>
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-8 animate-fadeInUp"></h1>
          <p className="text-black mb-12 animate-fadeInUp">
            Manfaat Terapi Pijat dan Alternatif Lainnya untuk Kesejahteraan
            Fisik dan Mental
          </p>
          <div className="ml-auto">
            <a href="https://wa.me/6281414313144" className="bg-emas hover:bg-abu text-white font-bold py-2 px-8 md:px-16 rounded-3xl shadow-xl animate-fadeInUp">
            Contact 
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={showAnimation ? { opacity: 1, y: 0 } : {}}
        transition={{
          duration: 0.8,
          delay: 0.3,
          ease: "easeInOut",
          staggerChildren: 0.2,
        }}
        className="text-center sm:text-left"
      >
        <div className="flex flex-col md:flex-row sm:justify-center md:items-start pt-40 pb-40">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={showAnimation ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeInOut" }}
            className="max-w-xs mx-auto bg-third rounded-lg p-4 shadow-md"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={showAnimation ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
              className="flex flex-col space-y-4"
            >
              <Card icon={<FaStethoscope />} title="pengobatan tradisional" />
              <Card icon={<RiMentalHealthFill />} title="Advanced Facilities" />
              <Card icon={<BiSolidHeartSquare />} title="Emergency Services" />
              <Card icon={<FaSyringe />} title="Professional Staff" />
            </motion.div>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            animate={showAnimation ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeInOut" }}
            className="text-xl md:mt-0 mt-4 mx-auto text-center text-emas md:text-left font-poppins"
            style={{ maxWidth: "350px" }}
          >
            <h1 className="font-bold tex-4xl text-emascustom">
              {" "}
              Pijat Terapi
            </h1>
            Pijat terapi dapat disesuaikan dengan kebutuhan individu, termasuk
            pijat relaksasi, pijat terapi jaringan dalam untuk mengatasi
            ketegangan otot yang dalam, pijat refleksi yang memanipulasi
            titik-titik pada kaki, tangan, atau telinga yang terhubung dengan
            organ-organ tubuh tertentu, dan masih banyak lagi.
          </motion.p>
        </div>
      </motion.div>

      <div
        className="flex flex-col px-4 pb-64 pt-24 bg-cover relative"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.5)), url('/assets/bgmain2.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          height: "50vh",
          backgroundAttachment: "fixed",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeInOut" }}
          className={`text-center sm:text-left`}
        >
          <h1 className="text-4xl md:text-6xl text-center lg:text-5xl font-bold text-black mb-8 animate-fadeInUp">
            Ying Yang Terapis
          </h1>
          <h1 className="text-4xl md:text-6xl text-center lg:text-8xl font-bold mb-8 animate-fadeInUp"></h1>
          <p className="text-white text-xl mb-12 text-center animate-fadeInUp">
            Manfaat Terapi Pijat dan Alternatif Lainnya untuk Kesejahteraan
            Fisik dan Mental
          </p>
        </motion.div>
      </div>

      <h1 className="text-center text-4xl text-emascustom font-bold mt-8 mb-12">
        Gallery
      </h1>
      <div className="w-screen flex flex-wrap justify-center pb-40 mt-20">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full sm:w-1/3 p-4"
        >
          <div
            className="bg-gray-200 rounded-lg overflow-hidden relative transition-transform duration-300 transform hover:scale-110"
            style={{ height: "700px" }}
          >
            <img
              src="assets/galeri1.jpg"
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
            style={{ height: "700px" }}
          >
            <img
              src="assets/galeri2.jpg"
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
            style={{ height: "700px" }}
          >
            <img
              src="assets/galeri3.jpg"
              alt="Gambar 3"
              className="w-full h-full object-cover transform hover:scale-90"
            />
            <div className="p-4 opacity-0 absolute top-0 left-0 right-0 bottom-0 bg-opacity-75 hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
          </div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
