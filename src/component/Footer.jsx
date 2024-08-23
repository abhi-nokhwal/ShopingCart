// Footer.js
import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterest } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="text-black py-8 font-thin mt-16" style={{backgroundColor:"pink"}}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Info */}
          <div>
            <h2 className="text-3xl font-thin mb-4">DressUp</h2>
            <p className="mb-4">
              Elevate your wardrobe with our exclusive collection of fashion-forward clothing.
              Crafted with quality and style in mind.
            </p>
      <p>&copy; {new Date().getFullYear()} DressUp. All rights reserved.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-thin  mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:underline">Home</a></li>
             <li><a href="/Clothing" className="hover:underline">Clothing</a></li>
             <li><a href="/Shoes" className="hover:underline">Shoes</a></li>
              <li><a href="/about" className="hover:underline">About Us</a></li>
              <li><a href="/contact" className="hover:underline">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-thin mb-4">Contact Us</h3>
            <p className="mb-2">123 Fashion Street, Suite 456</p>
            <p className="mb-2">Fashion City, FC 12345</p>
            <p className="mb-2">Email: <a href="mailto:info@dressup.com" className="hover:underline">info@styleandgrace.com</a></p>
            <p>Phone: <a href="tel:+1234567890" className="hover:underline">+1 (234) 567-890</a></p>
          </div>
        </div>

        {/* Social Media */}
        <div className="mt-8 text-center">
          <h3 className="text-xl font-thin">Follow Us</h3>
          <div className="flex justify-center space-x-6 mt-5">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-black">
              <FaFacebookF size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-black">
              <FaTwitter size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-black">
              <FaInstagram size={24} />
            </a>
            <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-black">
              <FaPinterest size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
