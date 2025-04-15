
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Car, Home, Heart, Activity, Briefcase, Shield, Check } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Solutions = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(() => {
    const hash = location.hash.substring(1);
    return hash || 'auto';
  });
  
  const insuranceProducts = [
    {
      id: 'auto',
      title: 'Auto Insurance',
      description: 'Our auto insurance provides comprehensive coverage to protect you, your passengers, and your vehicle in case of accidents, theft, or damage.',
      icon: <Car className="h-6 w-6" />,
      coverageOptions: [
        'Liability Coverage',
        'Collision Coverage',
        'Comprehensive Coverage',
        'Personal Injury Protection',
        'Uninsured/Underinsured Motorist Coverage',
        'Roadside Assistance'
      ],
      benefits: [
        'Competitive rates and discounts',
        'Quick and easy claims process',
        'Multiple vehicle discounts',
        'Safe driver discounts',
        '24/7 customer support'
      ],
      image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'home',
      title: 'Home Insurance',
      description: 'Protect your home and personal belongings with our comprehensive home insurance policies, designed to give you peace of mind.',
      icon: <Home className="h-6 w-6" />,
      coverageOptions: [
        'Dwelling Coverage',
        'Personal Property Coverage',
        'Liability Protection',
        'Additional Living Expenses',
        'Medical Payments Coverage',
        'Flood Insurance (Optional)'
      ],
      benefits: [
        'Replacement cost coverage',
        'Bundle discounts with auto insurance',
        'Home security system discounts',
        'Flexible payment options',
        'Fast claims processing'
      ],
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'life',
      title: 'Life Insurance',
      description: 'Ensure financial security for your loved ones in case of your unexpected passing with our flexible life insurance solutions.',
      icon: <Heart className="h-6 w-6" />,
      coverageOptions: [
        'Term Life Insurance',
        'Whole Life Insurance',
        'Universal Life Insurance',
        'Variable Life Insurance',
        'Final Expense Insurance',
        'Group Life Insurance'
      ],
      benefits: [
        'Affordable premiums',
        'Tax-free death benefits',
        'Cash value accumulation (whole life)',
        'Flexible policy terms',
        'Optional riders for enhanced protection'
      ],
      image: 'https://images.unsplash.com/photo-1531983412531-1f49a365ffed?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'health',
      title: 'Health Insurance',
      description: 'Our health insurance plans provide comprehensive coverage for medical expenses, ensuring you have access to quality healthcare when you need it.',
      icon: <Activity className="h-6 w-6" />,
      coverageOptions: [
        'Preventive Care',
        'Hospital Services',
        'Emergency Care',
        'Prescription Drug Coverage',
        'Mental Health Services',
        'Maternity and Newborn Care'
      ],
      benefits: [
        'Large network of healthcare providers',
        'Low co-pays and deductibles',
        'Telehealth services',
        'Wellness programs and discounts',
        'Health savings account options'
      ],
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'business',
      title: 'Business Insurance',
      description: 'Protect your business from potential risks with our comprehensive business insurance solutions tailored to your industry and needs.',
      icon: <Briefcase className="h-6 w-6" />,
      coverageOptions: [
        'General Liability Insurance',
        'Property Insurance',
        'Professional Liability Insurance',
        'Workers\' Compensation',
        'Business Interruption Insurance',
        'Cyber Liability Insurance'
      ],
      benefits: [
        'Customized coverage for your industry',
        'Risk management services',
        'Quick claims resolution',
        'Multiple policy discounts',
        'Flexible payment options'
      ],
      image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    }
  ];
  
  const activeProduct = insuranceProducts.find(product => product.id === activeTab) || insuranceProducts[0];
  
  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    window.history.pushState(null, '', `#${tabId}`);
  };
  
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="bg-insurance-blue text-white py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-outfit font-bold mb-6">Insurance Solutions for Every Need</h1>
              <p className="text-xl text-blue-100 mb-8">
                We offer a wide range of insurance products designed to protect what matters most to you, your family, and your business.
              </p>
              <Link to="/contact" className="btn-primary bg-white text-insurance-blue hover:bg-blue-50">
                Get a Personalized Quote
              </Link>
            </div>
          </div>
        </section>
        
        {/* Insurance Products Tabs */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            {/* Tabs */}
            <div className="flex flex-wrap justify-center mb-12 border-b">
              {insuranceProducts.map(product => (
                <button
                  key={product.id}
                  className={`flex items-center px-6 py-4 font-medium transition-colors duration-200 ${
                    activeTab === product.id
                      ? 'text-insurance-blue border-b-2 border-insurance-blue'
                      : 'text-insurance-gray hover:text-insurance-blue'
                  }`}
                  onClick={() => handleTabChange(product.id)}
                >
                  <span className="mr-2">{product.icon}</span>
                  {product.title}
                </button>
              ))}
            </div>
            
            {/* Active Product Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-outfit font-bold text-insurance-navy mb-4">{activeProduct.title}</h2>
                <p className="text-insurance-gray mb-8">{activeProduct.description}</p>
                
                <div className="mb-8">
                  <h3 className="text-xl font-outfit font-semibold text-insurance-navy mb-4">Coverage Options</h3>
                  <ul className="space-y-2">
                    {activeProduct.coverageOptions.map((option, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{option}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-xl font-outfit font-semibold text-insurance-navy mb-4">Benefits</h3>
                  <ul className="space-y-2">
                    {activeProduct.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <Shield className="h-5 w-5 text-insurance-blue mr-2 mt-0.5 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link 
                  to="/contact" 
                  className="btn-primary inline-block"
                >
                  Get a Quote
                </Link>
              </div>
              
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={activeProduct.image} 
                  alt={activeProduct.title} 
                  className="w-full h-96 object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Why Choose Us */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="section-title">Why Choose SecureHorizon</h2>
              <p className="section-subtitle">
                We are committed to providing our customers with the best insurance coverage and service experience.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-card">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="h-6 w-6 text-insurance-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-outfit font-semibold text-insurance-navy mb-3">Expert Guidance</h3>
                <p className="text-insurance-gray">
                  Our experienced agents provide personalized guidance to help you find the right coverage for your specific needs.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-card">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="h-6 w-6 text-insurance-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-outfit font-semibold text-insurance-navy mb-3">Competitive Rates</h3>
                <p className="text-insurance-gray">
                  We work with multiple insurance carriers to ensure you get the best coverage at the most competitive rates.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-card">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="h-6 w-6 text-insurance-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-outfit font-semibold text-insurance-navy mb-3">Quick Claims Process</h3>
                <p className="text-insurance-gray">
                  Our streamlined claims process ensures you receive prompt assistance and fair settlements when you need them most.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="section-title">Frequently Asked Questions</h2>
              <p className="section-subtitle">
                Find answers to common questions about our insurance products and services.
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                  <h3 className="text-lg font-outfit font-semibold text-insurance-navy mb-2">How do I get a quote for insurance?</h3>
                  <p className="text-insurance-gray">
                    You can get a quote by contacting us through our website, calling our customer service line, or visiting one of our local offices. Our agents will guide you through the process and help you find the right coverage.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                  <h3 className="text-lg font-outfit font-semibold text-insurance-navy mb-2">What factors affect my insurance premium?</h3>
                  <p className="text-insurance-gray">
                    Several factors can affect your premium, including your age, location, claim history, coverage limits, deductibles, and the type of insurance you're purchasing. For auto insurance, your driving record and the type of vehicle you drive also play a role.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                  <h3 className="text-lg font-outfit font-semibold text-insurance-navy mb-2">How do I file a claim?</h3>
                  <p className="text-insurance-gray">
                    You can file a claim by calling our claims hotline, using our online portal, or contacting your agent directly. We recommend reporting claims as soon as possible after an incident occurs to ensure prompt processing.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                  <h3 className="text-lg font-outfit font-semibold text-insurance-navy mb-2">Are there discounts available?</h3>
                  <p className="text-insurance-gray">
                    Yes, we offer various discounts such as multi-policy discounts, safe driver discounts, home security system discounts, and more. Our agents can help identify which discounts you qualify for to maximize your savings.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                  <h3 className="text-lg font-outfit font-semibold text-insurance-navy mb-2">How often should I review my insurance coverage?</h3>
                  <p className="text-insurance-gray">
                    We recommend reviewing your insurance coverage annually or whenever you experience major life changes such as moving, purchasing a new vehicle, getting married, or having children. Regular reviews ensure your coverage remains adequate for your changing needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 px-4 bg-insurance-blue text-white">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-outfit font-bold mb-6">Ready to get started?</h2>
              <p className="text-xl text-blue-100 mb-8">
                Contact us today for a free consultation and personalized quote. Our experts are ready to help you find the perfect coverage for your needs.
              </p>
              <Link to="/contact" className="btn-primary bg-white text-insurance-blue hover:bg-blue-50">
                Contact Us Today
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Solutions;
