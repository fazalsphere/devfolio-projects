
import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import InsuranceCard from '../components/InsuranceCard';
import TestimonialCarousel from '../components/TestimonialCarousel';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Shield, Home, Car, Heart, Activity, Briefcase, ArrowRight, CheckCircle, Clock, HelpCircle } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <Hero />
        
        {/* Why Choose Us Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="section-title">Why Choose SecureHorizon</h2>
              <p className="section-subtitle">
                For over 25 years, we've been helping individuals and businesses protect what matters most with reliable coverage and exceptional service.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-6 rounded-lg border border-gray-100 bg-white shadow-card">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-insurance-blue" />
                </div>
                <h3 className="text-xl font-outfit font-semibold text-insurance-navy mb-3">Comprehensive Coverage</h3>
                <p className="text-insurance-gray">
                  Our policies are designed to provide comprehensive protection against a wide range of risks, giving you complete peace of mind.
                </p>
              </div>
              
              <div className="p-6 rounded-lg border border-gray-100 bg-white shadow-card">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-insurance-blue" />
                </div>
                <h3 className="text-xl font-outfit font-semibold text-insurance-navy mb-3">Personalized Solutions</h3>
                <p className="text-insurance-gray">
                  We tailor our insurance solutions to meet your specific needs, ensuring you have the right coverage at the best possible price.
                </p>
              </div>
              
              <div className="p-6 rounded-lg border border-gray-100 bg-white shadow-card">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-insurance-blue" />
                </div>
                <h3 className="text-xl font-outfit font-semibold text-insurance-navy mb-3">Fast Claims Processing</h3>
                <p className="text-insurance-gray">
                  When you need us most, we're there. Our streamlined claims process ensures quick resolution when you experience a loss.
                </p>
              </div>
              
              <div className="p-6 rounded-lg border border-gray-100 bg-white shadow-card">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <HelpCircle className="h-6 w-6 text-insurance-blue" />
                </div>
                <h3 className="text-xl font-outfit font-semibold text-insurance-navy mb-3">Expert Guidance</h3>
                <p className="text-insurance-gray">
                  Our experienced agents provide expert advice to help you make informed decisions about your insurance coverage.
                </p>
              </div>
              
              <div className="p-6 rounded-lg border border-gray-100 bg-white shadow-card">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="h-6 w-6 text-insurance-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-outfit font-semibold text-insurance-navy mb-3">Competitive Rates</h3>
                <p className="text-insurance-gray">
                  We offer competitive premiums without compromising on coverage, helping you get the best value for your insurance investment.
                </p>
              </div>
              
              <div className="p-6 rounded-lg border border-gray-100 bg-white shadow-card">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="h-6 w-6 text-insurance-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-outfit font-semibold text-insurance-navy mb-3">24/7 Support</h3>
                <p className="text-insurance-gray">
                  Our customer service team is available 24/7 to assist you with any questions or concerns about your policy or claims.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Insurance Products Section */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="container mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="section-title">Our Insurance Solutions</h2>
              <p className="section-subtitle">
                We offer a wide range of insurance products to protect you, your family, and your business from unexpected events.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <InsuranceCard
                title="Auto Insurance"
                description="Comprehensive protection for your vehicles against accidents, theft, and liability."
                icon={<Car className="h-6 w-6 text-insurance-blue" />}
                link="/solutions#auto"
                features={[
                  "Collision coverage",
                  "Comprehensive coverage",
                  "Liability protection",
                  "Uninsured motorist coverage"
                ]}
              />
              
              <InsuranceCard
                title="Home Insurance"
                description="Protect your home and personal belongings from damage, theft, and liability claims."
                icon={<Home className="h-6 w-6 text-insurance-blue" />}
                link="/solutions#home"
                features={[
                  "Dwelling coverage",
                  "Personal property protection",
                  "Liability coverage",
                  "Additional living expenses"
                ]}
              />
              
              <InsuranceCard
                title="Life Insurance"
                description="Financial security for your loved ones in the event of your unexpected passing."
                icon={<Heart className="h-6 w-6 text-insurance-blue" />}
                link="/solutions#life"
                features={[
                  "Term life insurance",
                  "Whole life insurance",
                  "Universal life insurance",
                  "Final expense coverage"
                ]}
              />
              
              <InsuranceCard
                title="Health Insurance"
                description="Coverage for medical expenses, prescriptions, and preventive care to keep you healthy."
                icon={<Activity className="h-6 w-6 text-insurance-blue" />}
                link="/solutions#health"
                features={[
                  "Preventive care",
                  "Hospital coverage",
                  "Prescription drug coverage",
                  "Emergency services"
                ]}
              />
              
              <InsuranceCard
                title="Business Insurance"
                description="Comprehensive protection for your business assets, employees, and operations."
                icon={<Briefcase className="h-6 w-6 text-insurance-blue" />}
                link="/solutions#business"
                features={[
                  "Property insurance",
                  "Liability coverage",
                  "Workers' compensation",
                  "Business interruption"
                ]}
              />
              
              <div className="bg-gradient-to-br from-insurance-blue to-blue-600 rounded-lg p-6 text-white flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-xl font-outfit font-semibold mb-3">Need a custom solution?</h3>
                  <p className="mb-8">
                    Our insurance experts can help you find the perfect coverage for your unique needs. Contact us today for a personalized consultation.
                  </p>
                </div>
                <Link 
                  to="/contact" 
                  className="inline-flex items-center bg-white text-insurance-blue font-medium px-4 py-2 rounded hover:bg-blue-50 transition-colors duration-200"
                >
                  Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <TestimonialCarousel />
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 px-4 bg-insurance-blue text-white">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-outfit font-bold mb-6">Ready to get protected?</h2>
              <p className="text-xl text-blue-100 mb-8">
                Contact us today for a free consultation and quote. Our experts are standing by to help you find the perfect coverage.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/contact" className="btn-primary bg-white text-insurance-blue hover:bg-blue-50">
                  Get a Quote
                </Link>
                <Link to="/solutions" className="btn-secondary bg-transparent text-white border-white hover:bg-white/10">
                  Explore Solutions
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

export default Index;
