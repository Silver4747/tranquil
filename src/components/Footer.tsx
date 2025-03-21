
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-transparent to-tranquil-50 py-16">
      <div className="container px-4 sm:px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-tranquil-400 to-tranquil-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">T</span>
              </div>
              <span className="font-display font-medium text-lg">Tranquil</span>
            </Link>
            <p className="text-muted-foreground mb-4 max-w-md">
              Tranquil is dedicated to providing support, resources, and community for those experiencing depression and other mental health challenges.
            </p>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Tranquil. All rights reserved.
            </p>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-tranquil-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/#about" className="text-muted-foreground hover:text-tranquil-600 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/#resources" className="text-muted-foreground hover:text-tranquil-600 transition-colors">
                  Resources
                </Link>
              </li>
              <li>
                <Link to="/#contact" className="text-muted-foreground hover:text-tranquil-600 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/login" className="text-muted-foreground hover:text-tranquil-600 transition-colors">
                  Login
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-muted-foreground hover:text-tranquil-600 transition-colors">
                  Self-Help Tools
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-tranquil-600 transition-colors">
                  Crisis Support
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-tranquil-600 transition-colors">
                  Find a Therapist
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-tranquil-600 transition-colors">
                  Blog & Articles
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-tranquil-600 transition-colors">
                  Community Forums
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground mb-4 md:mb-0">
              If you're in crisis, please call the National Suicide Prevention Lifeline at 988 or text HOME to 741741.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-tranquil-600 transition-colors">
                Privacy
              </a>
              <a href="#" className="text-muted-foreground hover:text-tranquil-600 transition-colors">
                Terms
              </a>
              <a href="#" className="text-muted-foreground hover:text-tranquil-600 transition-colors">
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
