
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-16">
      <div className="container px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">T</span>
              </div>
              <span className="font-medium text-lg">Tranquil</span>
            </Link>
            <p className="text-gray-600 mb-4 max-w-md">
              Tranquil is dedicated to providing support, resources, and community for those experiencing depression and other mental health challenges.
            </p>
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Tranquil. All rights reserved.
            </p>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200 max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500 mb-4 md:mb-0">
              If you're in crisis, please call the National Suicide Prevention Lifeline at 988 or text HOME to 741741.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                Privacy
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                Terms
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

