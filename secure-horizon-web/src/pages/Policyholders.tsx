
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FileText, Phone, Mail, Shield, AlertCircle, Download, ArrowRight, Clock, Search } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Policyholders = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
    // Implement search functionality
  };
  
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="bg-insurance-blue text-white py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-outfit font-bold mb-6">Policyholder Resources</h1>
              <p className="text-xl text-blue-100 mb-8">
                Access important information and tools to manage your insurance policies and claims.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="#file-claim" className="btn-primary bg-white text-insurance-blue hover:bg-blue-50">
                  File a Claim
                </Link>
                <Link to="#manage-policy" className="btn-secondary bg-transparent text-white border-white hover:bg-white/10">
                  Manage Your Policy
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* Quick Links */}
        <section className="py-12 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-card flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <FileText className="h-8 w-8 text-insurance-blue" />
                </div>
                <h3 className="text-xl font-outfit font-semibold text-insurance-navy mb-2">File a Claim</h3>
                <p className="text-insurance-gray mb-4">
                  Report a new claim or check the status of an existing claim.
                </p>
                <Link 
                  to="#file-claim" 
                  className="mt-auto text-insurance-blue font-medium hover:text-blue-700 transition-colors duration-200"
                >
                  Start a Claim
                </Link>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-card flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Shield className="h-8 w-8 text-insurance-blue" />
                </div>
                <h3 className="text-xl font-outfit font-semibold text-insurance-navy mb-2">Manage Policy</h3>
                <p className="text-insurance-gray mb-4">
                  View, update, or make changes to your policy information.
                </p>
                <Link 
                  to="#manage-policy" 
                  className="mt-auto text-insurance-blue font-medium hover:text-blue-700 transition-colors duration-200"
                >
                  Access Policy
                </Link>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-card flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Search className="h-8 w-8 text-insurance-blue" />
                </div>
                <h3 className="text-xl font-outfit font-semibold text-insurance-navy mb-2">Find Documents</h3>
                <p className="text-insurance-gray mb-4">
                  Access policy documents, ID cards, and other important information.
                </p>
                <Link 
                  to="#documents" 
                  className="mt-auto text-insurance-blue font-medium hover:text-blue-700 transition-colors duration-200"
                >
                  View Documents
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* File a Claim Section */}
        <section id="file-claim" className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="section-title">File a Claim</h2>
              <p className="text-xl text-insurance-gray max-w-2xl mx-auto mb-8">
                We're here to help you through the claims process. Follow these steps to report a claim quickly and efficiently.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-6">
                  <div className="flex">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-10 h-10 rounded-full bg-insurance-blue text-white flex items-center justify-center font-medium">1</div>
                    </div>
                    <div>
                      <h3 className="text-xl font-outfit font-semibold text-insurance-navy mb-2">Report Your Claim</h3>
                      <p className="text-insurance-gray">
                        Contact us as soon as possible to report your claim. You can file a claim online, by phone, or through our mobile app.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-10 h-10 rounded-full bg-insurance-blue text-white flex items-center justify-center font-medium">2</div>
                    </div>
                    <div>
                      <h3 className="text-xl font-outfit font-semibold text-insurance-navy mb-2">Claims Assessment</h3>
                      <p className="text-insurance-gray">
                        A claims adjuster will be assigned to your case and will contact you to gather additional information and assess the damage.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-10 h-10 rounded-full bg-insurance-blue text-white flex items-center justify-center font-medium">3</div>
                    </div>
                    <div>
                      <h3 className="text-xl font-outfit font-semibold text-insurance-navy mb-2">Claim Resolution</h3>
                      <p className="text-insurance-gray">
                        Once the assessment is complete, we will work with you to resolve your claim as quickly and fairly as possible.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 space-y-4">
                  <h3 className="text-xl font-outfit font-semibold text-insurance-navy">Report a Claim</h3>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a 
                      href="tel:+18001234567" 
                      className="flex items-center justify-center bg-white border border-insurance-blue text-insurance-blue rounded-lg px-6 py-3 font-medium hover:bg-blue-50 transition-colors duration-200"
                    >
                      <Phone className="h-5 w-5 mr-2" /> 1-800-123-4567
                    </a>
                    
                    <Link 
                      to="/contact" 
                      className="flex items-center justify-center bg-insurance-blue text-white rounded-lg px-6 py-3 font-medium hover:bg-blue-800 transition-colors duration-200"
                    >
                      <FileText className="h-5 w-5 mr-2" /> Online Claim Form
                    </Link>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-card">
                <h3 className="text-xl font-outfit font-semibold text-insurance-navy mb-6">Emergency Claims Assistance</h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-start">
                    <AlertCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                    <p>
                      <span className="font-medium">For emergencies</span>: If you're experiencing an emergency situation, please call our 24/7 claims hotline immediately at <a href="tel:+18001234567" className="text-insurance-blue font-medium">1-800-123-4567</a>.
                    </p>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-insurance-blue mr-2 mt-0.5 flex-shrink-0" />
                    <p>
                      <span className="font-medium">Claims hours</span>: Our regular claims department is available Monday-Friday from 8:00 AM to 8:00 PM EST and Saturday from 9:00 AM to 5:00 PM EST.
                    </p>
                  </div>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg mb-6">
                  <h4 className="font-medium text-insurance-navy mb-2">What information do I need to file a claim?</h4>
                  <ul className="space-y-2 text-insurance-gray">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Your policy number</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Date and time of the incident</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Brief description of what happened</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Photos of damage (if available)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Police report number (if applicable)</span>
                    </li>
                  </ul>
                </div>
                
                <Link 
                  to="/faq" 
                  className="flex items-center text-insurance-blue font-medium hover:text-blue-700 transition-colors duration-200"
                >
                  View Claims FAQ <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* Manage Policy Section */}
        <section id="manage-policy" className="py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="section-title">Manage Your Policy</h2>
              <p className="text-xl text-insurance-gray max-w-2xl mx-auto mb-8">
                Access your policy information, make payments, and update your account details through our secure policyholder portal.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-card overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-8">
                  <h3 className="text-2xl font-outfit font-semibold text-insurance-navy mb-4">Policyholder Portal</h3>
                  <p className="text-insurance-gray mb-6">
                    Our secure online portal gives you 24/7 access to your policy information and account management tools.
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start">
                      <span className="text-green-500 mr-2 flex-shrink-0">✓</span>
                      <span>View and download policy documents</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-green-500 mr-2 flex-shrink-0">✓</span>
                      <span>Make payments and set up automatic billing</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-green-500 mr-2 flex-shrink-0">✓</span>
                      <span>Update contact information and preferences</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-green-500 mr-2 flex-shrink-0">✓</span>
                      <span>Request policy changes and endorsements</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-green-500 mr-2 flex-shrink-0">✓</span>
                      <span>View claim status and history</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <button className="btn-primary w-full">
                      Log in to Policyholder Portal
                    </button>
                    <div className="text-center">
                      <a href="#" className="text-insurance-blue font-medium hover:text-blue-700 transition-colors duration-200">
                        Register for Account Access
                      </a>
                      <span className="text-gray-300 mx-2">|</span>
                      <a href="#" className="text-insurance-blue font-medium hover:text-blue-700 transition-colors duration-200">
                        Forgot Password?
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-insurance-blue to-blue-600 text-white p-8 flex items-center">
                  <div>
                    <h3 className="text-2xl font-outfit font-semibold mb-4">Need assistance?</h3>
                    <p className="mb-6">
                      Our customer service team is available to help you with any questions or issues regarding your policy.
                    </p>
                    
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <Phone className="h-5 w-5 mr-3" />
                        <span>1-800-123-4567</span>
                      </div>
                      <div className="flex items-center">
                        <Mail className="h-5 w-5 mr-3" />
                        <span>support@securehorizon.com</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-5 w-5 mr-3" />
                        <span>Monday-Friday: 8AM-8PM</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Documents Section */}
        <section id="documents" className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="section-title">Documents & Resources</h2>
              <p className="text-xl text-insurance-gray max-w-2xl mx-auto mb-8">
                Access important documents, forms, and educational resources to help you manage your insurance coverage.
              </p>
            </div>
            
            <div className="mb-8">
              <form onSubmit={handleSearch} className="max-w-2xl mx-auto flex">
                <input
                  type="text"
                  placeholder="Search for documents, forms, or resources..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-grow py-3 px-4 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-insurance-blue"
                />
                <button
                  type="submit"
                  className="bg-insurance-blue text-white px-6 py-3 rounded-r-lg hover:bg-blue-800 transition-colors duration-200"
                >
                  <Search className="h-5 w-5" />
                </button>
              </form>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-card">
                <h3 className="text-xl font-outfit font-semibold text-insurance-navy mb-4">Policy Documents</h3>
                <ul className="space-y-4">
                  <li>
                    <a href="#" className="flex items-center text-insurance-gray hover:text-insurance-blue transition-colors duration-200">
                      <Download className="h-4 w-4 mr-2 text-insurance-blue" />
                      <span>Auto Insurance Policy Sample</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center text-insurance-gray hover:text-insurance-blue transition-colors duration-200">
                      <Download className="h-4 w-4 mr-2 text-insurance-blue" />
                      <span>Home Insurance Policy Sample</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center text-insurance-gray hover:text-insurance-blue transition-colors duration-200">
                      <Download className="h-4 w-4 mr-2 text-insurance-blue" />
                      <span>Life Insurance Policy Sample</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center text-insurance-gray hover:text-insurance-blue transition-colors duration-200">
                      <Download className="h-4 w-4 mr-2 text-insurance-blue" />
                      <span>Insurance ID Card Request</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center text-insurance-gray hover:text-insurance-blue transition-colors duration-200">
                      <Download className="h-4 w-4 mr-2 text-insurance-blue" />
                      <span>Proof of Insurance Form</span>
                    </a>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-card">
                <h3 className="text-xl font-outfit font-semibold text-insurance-navy mb-4">Claims Forms</h3>
                <ul className="space-y-4">
                  <li>
                    <a href="#" className="flex items-center text-insurance-gray hover:text-insurance-blue transition-colors duration-200">
                      <Download className="h-4 w-4 mr-2 text-insurance-blue" />
                      <span>Auto Claim Form</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center text-insurance-gray hover:text-insurance-blue transition-colors duration-200">
                      <Download className="h-4 w-4 mr-2 text-insurance-blue" />
                      <span>Property Damage Claim Form</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center text-insurance-gray hover:text-insurance-blue transition-colors duration-200">
                      <Download className="h-4 w-4 mr-2 text-insurance-blue" />
                      <span>Medical Claim Form</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center text-insurance-gray hover:text-insurance-blue transition-colors duration-200">
                      <Download className="h-4 w-4 mr-2 text-insurance-blue" />
                      <span>Claims Status Inquiry Form</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center text-insurance-gray hover:text-insurance-blue transition-colors duration-200">
                      <Download className="h-4 w-4 mr-2 text-insurance-blue" />
                      <span>Accident Report Worksheet</span>
                    </a>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-card">
                <h3 className="text-xl font-outfit font-semibold text-insurance-navy mb-4">Account Management</h3>
                <ul className="space-y-4">
                  <li>
                    <a href="#" className="flex items-center text-insurance-gray hover:text-insurance-blue transition-colors duration-200">
                      <Download className="h-4 w-4 mr-2 text-insurance-blue" />
                      <span>Change of Address Form</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center text-insurance-gray hover:text-insurance-blue transition-colors duration-200">
                      <Download className="h-4 w-4 mr-2 text-insurance-blue" />
                      <span>Policy Change Request Form</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center text-insurance-gray hover:text-insurance-blue transition-colors duration-200">
                      <Download className="h-4 w-4 mr-2 text-insurance-blue" />
                      <span>Automatic Payment Authorization</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center text-insurance-gray hover:text-insurance-blue transition-colors duration-200">
                      <Download className="h-4 w-4 mr-2 text-insurance-blue" />
                      <span>Beneficiary Change Form</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center text-insurance-gray hover:text-insurance-blue transition-colors duration-200">
                      <Download className="h-4 w-4 mr-2 text-insurance-blue" />
                      <span>Cancel Policy Request</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 px-4 bg-insurance-blue text-white">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-outfit font-bold mb-6">Need help with your policy?</h2>
              <p className="text-xl text-blue-100 mb-8">
                Our customer service representatives are available to assist you with any questions or concerns about your policy.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a 
                  href="tel:+18001234567" 
                  className="btn-primary bg-white text-insurance-blue hover:bg-blue-50"
                >
                  Call Us: 1-800-123-4567
                </a>
                <Link 
                  to="/contact" 
                  className="btn-secondary bg-transparent text-white border-white hover:bg-white/10"
                >
                  Contact Online
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Policyholders;
