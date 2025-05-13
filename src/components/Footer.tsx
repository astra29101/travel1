
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-travel-blue text-white">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Wanderlust</h3>
            <p className="text-gray-300 mb-4">
              Discover the world with Wanderlust - your perfect travel companion for unforgettable adventures.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-travel-sand transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-travel-sand transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-travel-sand transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-travel-sand transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/destinations" className="text-gray-300 hover:text-travel-sand transition-colors">Destinations</Link>
              </li>
              <li>
                <Link to="/login" className="text-gray-300 hover:text-travel-sand transition-colors">Login / Signup</Link>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-travel-sand transition-colors">Terms & Conditions</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-travel-sand transition-colors">Privacy Policy</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Phone size={18} className="mr-2" />
                <span className="text-gray-300">+91 9876543210</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2" />
                <span className="text-gray-300">info@wanderlust.com</span>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1" />
                <span className="text-gray-300">123 Travel Street, Tourism City, 560001</span>
              </li>
            </ul>
          </div>

          {/* FAQ Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">FAQ</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-travel-sand transition-colors">How to book?</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-travel-sand transition-colors">Payment Methods</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-travel-sand transition-colors">Cancellation Policy</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-travel-sand transition-colors">Travel Insurance</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-travel-sand transition-colors">COVID-19 Guidelines</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-gray-300">© {new Date().getFullYear()} Wanderlust. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
