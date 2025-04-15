
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-insurance-navy text-white">
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-outfit font-semibold mb-4">SecureHorizon</h3>
            <p className="text-blue-200 mb-4">
              Providing peace of mind through reliable insurance coverage since 1995.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-200 hover:text-white transition-colors duration-200" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors duration-200" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors duration-200" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors duration-200" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-outfit font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-blue-200 hover:text-white transition-colors duration-200">Home</Link>
              </li>
              <li>
                <Link to="/solutions" className="text-blue-200 hover:text-white transition-colors duration-200">Solutions</Link>
              </li>
              <li>
                <Link to="/policyholders" className="text-blue-200 hover:text-white transition-colors duration-200">Policyholders</Link>
              </li>
              <li>
                <Link to="/blog" className="text-blue-200 hover:text-white transition-colors duration-200">Blog</Link>
              </li>
              <li>
                <Link to="/contact" className="text-blue-200 hover:text-white transition-colors duration-200">Contact</Link>
              </li>
            </ul>
          </div>
          
          {/* Insurance Products */}
          <div>
            <h3 className="text-xl font-outfit font-semibold mb-4">Insurance Products</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/solutions#auto" className="text-blue-200 hover:text-white transition-colors duration-200">Auto Insurance</Link>
              </li>
              <li>
                <Link to="/solutions#home" className="text-blue-200 hover:text-white transition-colors duration-200">Home Insurance</Link>
              </li>
              <li>
                <Link to="/solutions#life" className="text-blue-200 hover:text-white transition-colors duration-200">Life Insurance</Link>
              </li>
              <li>
                <Link to="/solutions#health" className="text-blue-200 hover:text-white transition-colors duration-200">Health Insurance</Link>
              </li>
              <li>
                <Link to="/solutions#business" className="text-blue-200 hover:text-white transition-colors duration-200">Business Insurance</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-xl font-outfit font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-blue-200 mr-2 mt-0.5" />
                <span className="text-blue-200">123 Insurance Ave, New York, NY 10001</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-blue-200 mr-2" />
                <a href="tel:+18001234567" className="text-blue-200 hover:text-white transition-colors duration-200">1-800-123-4567</a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-blue-200 mr-2" />
                <a href="mailto:info@securehorizon.com" className="text-blue-200 hover:text-white transition-colors duration-200">info@securehorizon.com</a>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="border-blue-800 mb-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-blue-200 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} SecureHorizon Insurance. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-blue-200 hover:text-white transition-colors duration-200">Privacy Policy</a>
            <a href="#" className="text-blue-200 hover:text-white transition-colors duration-200">Terms of Service</a>
            <a href="#" className="text-blue-200 hover:text-white transition-colors duration-200">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
