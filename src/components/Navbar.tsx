
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'py-3 bg-white/80 shadow-md' : 'py-5'
      }`}
      style={{
        backdropFilter: isScrolled ? 'blur(10px)' : 'none'
      }}
    >
      <div className={`mx-4 sm:mx-8 md:mx-auto max-w-7xl flex items-center justify-between ${
        isScrolled ? 'py-2 px-4' : 'py-3 px-5'
      }`}>
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
            <span className="text-white font-bold text-sm">T</span>
          </div>
          <span className="font-medium text-lg">Tranquil</span>
        </Link>
        
        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-sm font-medium text-gray-800 hover:text-black transition-colors">
            Home
          </Link>
          <Link to="/#about" className="text-sm font-medium text-gray-800 hover:text-black transition-colors">
            About
          </Link>
          <Link to="/#resources" className="text-sm font-medium text-gray-800 hover:text-black transition-colors">
            Resources
          </Link>
          <Link to="/#contact" className="text-sm font-medium text-gray-800 hover:text-black transition-colors">
            Contact
          </Link>
        </nav>
        
        <div className="hidden md:flex items-center gap-4">
          <Link to="/login">
            <Button variant="ghost" size="sm" className="rounded-full px-5">
              Log in
            </Button>
          </Link>
          <Link to="/login">
            <Button 
              size="sm" 
              className="rounded-full px-5 bg-blue-500 hover:bg-blue-600"
            >
              Sign up
            </Button>
          </Link>
        </div>
        
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800 p-2 rounded-full hover:bg-gray-100 transition-colors"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 bg-white/90 z-40 md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{
          backdropFilter: 'blur(8px)'
        }}
      >
        <div className={`h-full w-full max-w-sm bg-white p-6 shadow-lg transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}>
          <div className="flex items-center justify-between mb-8">
            <Link to="/" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">T</span>
              </div>
              <span className="font-medium text-lg">Tranquil</span>
            </Link>
            <button
              className="text-gray-800 p-2 rounded-full hover:bg-gray-100 transition-colors"
              onClick={toggleMobileMenu}
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>
          
          <nav className="flex flex-col gap-4">
            <Link 
              to="/" 
              className="text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/#about" 
              className="text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/#resources" 
              className="text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Resources
            </Link>
            <Link 
              to="/#contact" 
              className="text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
          
          <div className="mt-8 flex flex-col gap-3">
            <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>
              <Button variant="outline" className="w-full justify-center rounded-full">
                Log in
              </Button>
            </Link>
            <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>
              <Button className="w-full justify-center rounded-full bg-blue-500 hover:bg-blue-600">
                Sign up
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
