
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleSolutions = () => {
    setSolutionsOpen(!solutionsOpen);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="font-outfit font-bold text-2xl text-insurance-blue">SecureHorizon</span>
            </Link>
          </div>
          
          {/* Desktop navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link to="/" className="text-insurance-gray hover:text-insurance-blue font-medium transition-colors duration-200">Home</Link>
            
            {/* Solutions dropdown */}
            <div className="relative group">
              <button 
                className="flex items-center text-insurance-gray hover:text-insurance-blue font-medium transition-colors duration-200"
                onClick={() => setSolutionsOpen(!solutionsOpen)}
              >
                Solutions <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 hidden group-hover:block">
                <div className="py-1">
                  <Link to="/solutions#auto" className="block px-4 py-2 text-sm text-insurance-gray hover:bg-insurance-lightGray hover:text-insurance-blue">Auto Insurance</Link>
                  <Link to="/solutions#home" className="block px-4 py-2 text-sm text-insurance-gray hover:bg-insurance-lightGray hover:text-insurance-blue">Home Insurance</Link>
                  <Link to="/solutions#life" className="block px-4 py-2 text-sm text-insurance-gray hover:bg-insurance-lightGray hover:text-insurance-blue">Life Insurance</Link>
                  <Link to="/solutions#health" className="block px-4 py-2 text-sm text-insurance-gray hover:bg-insurance-lightGray hover:text-insurance-blue">Health Insurance</Link>
                </div>
              </div>
            </div>
            
            <Link to="/policyholders" className="text-insurance-gray hover:text-insurance-blue font-medium transition-colors duration-200">Policyholders</Link>
            <Link to="/blog" className="text-insurance-gray hover:text-insurance-blue font-medium transition-colors duration-200">Blog</Link>
            <Link to="/contact" className="text-insurance-gray hover:text-insurance-blue font-medium transition-colors duration-200">Contact</Link>
          </div>
          
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Link to="/contact" className="btn-primary">Get a Quote</Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-insurance-gray hover:text-insurance-blue hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-insurance-blue"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-insurance-gray hover:text-insurance-blue hover:bg-gray-100">Home</Link>
            
            {/* Mobile Solutions dropdown */}
            <div>
              <button 
                onClick={toggleSolutions}
                className="flex items-center justify-between w-full px-3 py-2 rounded-md text-base font-medium text-insurance-gray hover:text-insurance-blue hover:bg-gray-100"
              >
                Solutions <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${solutionsOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {solutionsOpen && (
                <div className="pl-4 animate-fade-in">
                  <Link to="/solutions#auto" className="block px-3 py-2 rounded-md text-sm text-insurance-gray hover:text-insurance-blue hover:bg-gray-100">Auto Insurance</Link>
                  <Link to="/solutions#home" className="block px-3 py-2 rounded-md text-sm text-insurance-gray hover:text-insurance-blue hover:bg-gray-100">Home Insurance</Link>
                  <Link to="/solutions#life" className="block px-3 py-2 rounded-md text-sm text-insurance-gray hover:text-insurance-blue hover:bg-gray-100">Life Insurance</Link>
                  <Link to="/solutions#health" className="block px-3 py-2 rounded-md text-sm text-insurance-gray hover:text-insurance-blue hover:bg-gray-100">Health Insurance</Link>
                </div>
              )}
            </div>
            
            <Link to="/policyholders" className="block px-3 py-2 rounded-md text-base font-medium text-insurance-gray hover:text-insurance-blue hover:bg-gray-100">Policyholders</Link>
            <Link to="/blog" className="block px-3 py-2 rounded-md text-base font-medium text-insurance-gray hover:text-insurance-blue hover:bg-gray-100">Blog</Link>
            <Link to="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-insurance-gray hover:text-insurance-blue hover:bg-gray-100">Contact</Link>
            
            <Link to="/contact" className="block w-full text-center px-3 py-2 rounded-md btn-primary">Get a Quote</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
