import { Link, useLocation } from 'react-router-dom';
import { TrendingUp, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/services', label: 'Services' },
    { path: '/open-account', label: 'Open Account' },
    { path: '/education', label: 'Investor Education' },
    { path: '/contact', label: 'Contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <TrendingUp className="h-8 w-8 text-blue-900" />
            <div className="flex flex-col">
              <span className="text-xl font-bold text-blue-900">Nepal Securities</span>
              <span className="text-xs text-gray-600">SEBON Licensed Broker</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? 'bg-blue-900 text-white'
                    : 'text-gray-700 hover:bg-blue-50 hover:text-blue-900'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <button className="ml-4 px-6 py-2 bg-green-600 text-white rounded-md font-medium hover:bg-green-700 transition-colors">
              Client Login
            </button>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive(link.path)
                    ? 'bg-blue-900 text-white'
                    : 'text-gray-700 hover:bg-blue-50 hover:text-blue-900'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <button className="w-full mt-2 px-3 py-2 bg-green-600 text-white rounded-md font-medium hover:bg-green-700">
              Client Login
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
