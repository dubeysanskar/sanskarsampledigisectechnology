import React, { useState, useEffect } from 'react';
import { Menu, X, Search, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Digisec
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <NavLinks />
            <SearchBar />
            <button className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all">
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4">
            <div className="flex flex-col space-y-4 px-4">
              <NavLinks mobile />
              <SearchBar mobile />
              <button className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-2 rounded-full">
                Contact Us
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

const NavLinks = ({ mobile }: { mobile?: boolean }) => {
  const links = [
    { name: 'Home', path: '/' },
    { 
      name: 'Solutions & Services',
      path: '/services',
      submenu: [
        { name: 'Cyber Security', path: '/services/cyber-security' },
        { name: 'Digital Transformation', path: '/services/digital-transformation' },
        { name: 'Security Consulting', path: '/services/security-consulting' },
      ]
    },
    { name: 'Courses', path: '/courses' },
    { name: 'Development', path: '/development' },
    { name: 'About', path: '/about' },
    { name: 'Blog', path: '/blog' },
  ];

  return (
    <div className={`${mobile ? 'flex flex-col space-y-4' : 'flex items-center space-x-6'}`}>
      {links.map((link) => (
        <div key={link.name} className="relative group">
          <Link
            to={link.path}
            className="text-gray-700 hover:text-blue-600 flex items-center space-x-1"
          >
            <span>{link.name}</span>
            {link.submenu && <ChevronDown size={16} />}
          </Link>
          {link.submenu && (
            <div className={`${
              mobile ? 'pl-4 mt-2 space-y-2' :
              'absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 hidden group-hover:block'
            }`}>
              {link.submenu.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const SearchBar = ({ mobile }: { mobile?: boolean }) => (
  <div className={`relative ${mobile ? 'w-full' : 'w-64'}`}>
    <input
      type="text"
      placeholder="Search..."
      className="w-full px-4 py-2 pl-10 pr-4 rounded-full border border-gray-300 focus:outline-none focus:border-blue-500"
    />
    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
  </div>
);