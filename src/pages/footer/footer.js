import React from "react";
import { FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa";


const Footer = () => {
  return (
    <footer id="footer" className="bg-black text-white">
      <div className="footer-top py-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="footer-contact">
            <h4 className="text-xl font-bold text-emas mb-4">Terapis YinYang</h4>
              <p>
                Leading company in turning information and managing information
                into fortune and profit.
              
              </p>
            </div>
            <div className="footer-links">
              <h4 className="text-xl text-emas font-bold mb-4">Useful Links</h4>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Terms of service</a>
                </li>
                <li>
                  <a href="#">Privacy policy</a>
                </li>
              </ul>
            </div>
            <div className="footer-links">
              <h4 className="text-xl text-emas font-bold mb-4">Our Services</h4>
              <ul>
                <li>
                  <a href="#">Web Design</a>
                </li>
                <li>
                  <a href="#">Web Development</a>
                </li>
                <li>
                  <a href="#">Product Management</a>
                </li>
                <li>
                  <a href="#">Marketing</a>
                </li>
                <li>
                  <a href="#">Graphic Design</a>
                </li>
              </ul>
            </div>
            <div className="footer-newsletter">
              <h4 className="text-xl font-bold text-emas mb-4">Join Our Newsletter</h4>
              <p>
                Tamen quem nulla quae legam multos aute sint culpa legam noster
                magna
              </p>
            </div>
          </div>
        </div>
      </div>

      <hr className="border-t-2 border-emas mb-4 mx-auto" />

      <div className="container mx-auto py-4 flex justify-between items-center">
        <div className="md:text-left">
          <div className="mb-2">
            &copy;{" "}
            <strong>
              <span className="text-emas">Raek</span>
            </strong>
            . All Rights Reserved
          </div>
        </div>
        <div className="social-links flex justify-end text-center text-emas text-md-right">
          <a href="#" className="twitter mr-4">
            <FaWhatsapp size={32} />
          </a>
          <a href="#" className="facebook mr-4">
            <FaFacebook size={32} />
          </a>
          <a href="#" className="instagram">
            <FaInstagram size={32} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
