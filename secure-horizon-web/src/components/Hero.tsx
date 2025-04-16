import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="relative min-h-[90vh] overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&q=80"
          alt="Happy family"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-insurance-blue/90 to-blue-900/90" />
      </div>
      
      <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left column - Hero content */}
          <motion.div 
            className="lg:w-1/2 lg:pr-12 mb-12 lg:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-outfit font-bold text-white leading-tight mb-6">
              Protection for what matters most
            </h1>
            <p className="text-xl text-blue-100 mb-4 max-w-lg">
              Tailored insurance solutions that provide peace of mind for you, your family, and your business.
            </p>
            <p className="text-lg text-blue-200 mb-8">
              Trusted by over 10,000 families and businesses for peace of mind.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link 
                  to="/contact" 
                  className="btn-primary bg-white text-insurance-blue hover:bg-blue-50 hover:shadow-lg transform transition-all duration-300 hover:ring-4 hover:ring-white/30"
                >
                  Get a Quote
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link 
                  to="/solutions" 
                  className="btn-secondary bg-transparent text-white border-2 border-white hover:bg-white/10 transform transition-all duration-300"
                >
                  Explore Solutions
                </Link>
              </motion.div>
            </div>

            {/* Trusted by section */}
            <div className="border-t border-white/10 pt-8">
              <p className="text-sm text-blue-200 uppercase tracking-wider mb-6">Trusted By Industry Leaders</p>
              <motion.div 
                className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                {[
                  {
                    name: 'Stripe',
                    logo: 'https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg'
                  },
                  {
                    name: 'HubSpot',
                    logo: 'https://www.vectorlogo.zone/logos/hubspot/hubspot-ar21.svg'
                  },
                  {
                    name: 'Amazon',
                    logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg'
                  },
                  {
                    name: 'Google',
                    logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg'
                  }
                ].map((company, index) => (
                  <motion.div
                    key={company.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center justify-center"
                  >
                    <img 
                      src={company.logo}
                      alt={company.name}
                      className="h-8 object-contain filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity duration-300"
                    />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
          
          {/* Right column - Coverage finder */}
          <motion.div 
            className="lg:w-1/2 relative"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white rounded-xl p-8 shadow-2xl backdrop-blur-lg bg-white/90">
              <h2 className="text-2xl font-outfit font-semibold text-insurance-navy mb-6">Find the right coverage</h2>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                {[
                  { title: 'Auto', path: '/solutions#auto', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
                  { title: 'Home', path: '/solutions#home', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
                  { title: 'Life', path: '/solutions#life', icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z' },
                  { title: 'Health', path: '/solutions#health', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link 
                      to={item.path} 
                      className="flex flex-col items-center p-4 rounded-lg bg-blue-50 hover:bg-blue-100 transition-all duration-200 hover:shadow-md"
                    >
                      <div className="w-12 h-12 bg-insurance-blue rounded-full flex items-center justify-center mb-2 shadow-lg">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                        </svg>
                      </div>
                      <span className="font-medium">{item.title}</span>
                    </Link>
                  </motion.div>
                ))}
              </div>
              
              <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <Link 
                  to="/solutions" 
                  className="flex items-center justify-center text-insurance-blue font-medium hover:text-blue-700 transition-colors duration-200"
                >
                  View all insurance products <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
