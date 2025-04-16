import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const solutionsRef = useRef<HTMLDivElement>(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Handle clicks outside the dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (solutionsRef.current && 
          !solutionsRef.current.contains(event.target as Node) && 
          !isHovering) {
        setSolutionsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isHovering]);

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-md shadow-md' 
          : 'bg-white'
      }`}
    >
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
            <div 
              ref={solutionsRef}
              className="relative"
            >
              <button 
                onClick={() => setSolutionsOpen(!solutionsOpen)}
                onMouseEnter={() => {
                  setIsHovering(true);
                  setSolutionsOpen(true);
                }}
                onMouseLeave={() => setIsHovering(false)}
                className="flex items-center text-insurance-gray hover:text-insurance-blue font-medium transition-colors duration-200"
                aria-expanded={solutionsOpen}
              >
                Solutions <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-300 ${solutionsOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Animated dropdown menu */}
              {solutionsOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => {
                    setIsHovering(false);
                    setSolutionsOpen(false);
                  }}
                  className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50"
                >
                  <div className="py-1">
                    <Link 
                      to="/solutions#auto"
                      className="block px-4 py-2 text-sm text-insurance-gray hover:bg-blue-50 hover:text-insurance-blue transition-colors duration-150"
                    >
                      Auto Insurance
                    </Link>
                    <Link 
                      to="/solutions#home" 
                      className="block px-4 py-2 text-sm text-insurance-gray hover:bg-blue-50 hover:text-insurance-blue transition-colors duration-150"
                    >
                      Home Insurance
                    </Link>
                    <Link 
                      to="/solutions#life" 
                      className="block px-4 py-2 text-sm text-insurance-gray hover:bg-blue-50 hover:text-insurance-blue transition-colors duration-150"
                    >
                      Life Insurance
                    </Link>
                    <Link 
                      to="/solutions#health" 
                      className="block px-4 py-2 text-sm text-insurance-gray hover:bg-blue-50 hover:text-insurance-blue transition-colors duration-150"
                    >
                      Health Insurance
                    </Link>
                  </div>
                </motion.div>
              )}
            </div>

            <Link to="/policyholders" className="text-insurance-gray hover:text-insurance-blue font-medium transition-colors duration-200">Policyholders</Link>
            <Link to="/contact" className="text-insurance-gray hover:text-insurance-blue font-medium transition-colors duration-200">Contact</Link>
          </div>
          
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Link 
              to="/contact" 
              className="btn-primary bg-insurance-blue text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all duration-300 hover:shadow-md"
            >
              Get a Quote
            </Link>
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

      {/* Animated mobile menu */}
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white shadow-lg overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-insurance-gray hover:text-insurance-blue hover:bg-gray-100">Home</Link>
              
              {/* Mobile Solutions dropdown */}
              <div>
                <button 
                  onClick={() => setSolutionsOpen(!solutionsOpen)}
                  className="flex items-center justify-between w-full px-3 py-2 rounded-md text-base font-medium text-insurance-gray hover:text-insurance-blue hover:bg-gray-100"
                >
                  Solutions <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-300 ${solutionsOpen ? 'rotate-180' : ''}`} />
                </button>
                
                <AnimatePresence>
                  {solutionsOpen && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="pl-4"
                    >
                      <Link to="/solutions#auto" className="block px-3 py-2 rounded-md text-sm text-insurance-gray hover:text-insurance-blue hover:bg-gray-100">Auto Insurance</Link>
                      <Link to="/solutions#home" className="block px-3 py-2 rounded-md text-sm text-insurance-gray hover:text-insurance-blue hover:bg-gray-100">Home Insurance</Link>
                      <Link to="/solutions#life" className="block px-3 py-2 rounded-md text-sm text-insurance-gray hover:text-insurance-blue hover:bg-gray-100">Life Insurance</Link>
                      <Link to="/solutions#health" className="block px-3 py-2 rounded-md text-sm text-insurance-gray hover:text-insurance-blue hover:bg-gray-100">Health Insurance</Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              
              <Link to="/policyholders" className="block px-3 py-2 rounded-md text-base font-medium text-insurance-gray hover:text-insurance-blue hover:bg-gray-100">Policyholders</Link>
              <Link to="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-insurance-gray hover:text-insurance-blue hover:bg-gray-100">Contact</Link>
              <Link to="/contact" className="block w-full text-center px-3 py-2 rounded-md bg-insurance-blue text-white hover:bg-blue-700 transition-colors duration-200">Get a Quote</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
