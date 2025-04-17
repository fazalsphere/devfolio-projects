import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import InsuranceCard from '../components/InsuranceCard';
import TestimonialCarousel from '../components/TestimonialCarousel';
import WhyChooseUsCarousel from '../components/WhyChooseUsCarousel';
import TrustProof from '../components/TrustProof';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Car, Home, Heart, Activity, Briefcase } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <Hero />
        
        {/* Why Choose Us Section */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="container mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-outfit font-bold text-insurance-navy mb-4">
                Why Choose SecureHorizon
              </h2>
              <p className="text-xl text-insurance-gray">
                For over 25 years, we've been helping individuals and businesses protect what matters most with reliable coverage and exceptional service.
              </p>
            </div>
            
            <WhyChooseUsCarousel />
          </div>
        </section>

        {/* Trust Proof Section */}
        <TrustProof />
        
        {/* Insurance Products Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-outfit font-bold text-insurance-navy mb-4">
                Our Insurance Solutions
              </h2>
              <p className="text-xl text-insurance-gray">
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
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <TestimonialCarousel />
        
        {/* CTA Section */}
        <section className="py-20 px-4 bg-insurance-blue text-white">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-outfit font-bold mb-6">Ready to get started?</h2>
              <p className="text-xl text-blue-100 mb-8">
                Contact us today for a free consultation and personalized quote. Our experts are ready to help you find the perfect coverage for your needs.
              </p>
              <Link to="/contact" className="btn-primary bg-white text-insurance-blue hover:bg-blue-50">
                Get Your Free Quote
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
