
import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="bg-insurance-blue text-white py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-outfit font-bold mb-6">Contact Us</h1>
              <p className="text-xl text-blue-100 mb-8">
                Our team is here to help. Reach out with questions, for quote requests, or assistance with your policy.
              </p>
            </div>
          </div>
        </section>
        
        {/* Contact Form Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <ContactForm />
          </div>
        </section>
        
        {/* Map Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="section-title">Our Location</h2>
              <p className="text-xl text-insurance-gray max-w-2xl mx-auto mb-4">
                Visit our main office or one of our branch locations for in-person assistance.
              </p>
              <div className="flex items-center justify-center text-insurance-blue">
                <MapPin className="h-5 w-5 mr-2" />
                <span>123 Insurance Ave, New York, NY 10001</span>
              </div>
            </div>
            
            <div className="rounded-lg overflow-hidden shadow-lg h-[500px]">
              {/* Replace with actual map implementation */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.11976397304605!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1651172163681!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="SecureHorizon Office Location"
              ></iframe>
            </div>
          </div>
        </section>
        
        {/* Branches Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="section-title">Our Branch Offices</h2>
              <p className="section-subtitle">
                We have multiple locations across the country to serve you better.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg overflow-hidden shadow-card">
                <div className="h-48 bg-blue-100 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <MapPin className="h-10 w-10 text-insurance-blue" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-outfit font-semibold text-insurance-navy mb-2">New York Office</h3>
                  <p className="text-insurance-gray mb-4">
                    123 Insurance Ave<br />
                    New York, NY 10001
                  </p>
                  <p className="mb-4">
                    <span className="block text-sm text-insurance-gray">Phone:</span>
                    <a href="tel:+12125551234" className="text-insurance-blue hover:text-blue-700 transition-colors duration-200">
                      (212) 555-1234
                    </a>
                  </p>
                  <p>
                    <span className="block text-sm text-insurance-gray">Email:</span>
                    <a href="mailto:newyork@securehorizon.com" className="text-insurance-blue hover:text-blue-700 transition-colors duration-200">
                      newyork@securehorizon.com
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg overflow-hidden shadow-card">
                <div className="h-48 bg-blue-100 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <MapPin className="h-10 w-10 text-insurance-blue" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-outfit font-semibold text-insurance-navy mb-2">Los Angeles Office</h3>
                  <p className="text-insurance-gray mb-4">
                    456 Security Blvd<br />
                    Los Angeles, CA 90001
                  </p>
                  <p className="mb-4">
                    <span className="block text-sm text-insurance-gray">Phone:</span>
                    <a href="tel:+13105557890" className="text-insurance-blue hover:text-blue-700 transition-colors duration-200">
                      (310) 555-7890
                    </a>
                  </p>
                  <p>
                    <span className="block text-sm text-insurance-gray">Email:</span>
                    <a href="mailto:losangeles@securehorizon.com" className="text-insurance-blue hover:text-blue-700 transition-colors duration-200">
                      losangeles@securehorizon.com
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg overflow-hidden shadow-card">
                <div className="h-48 bg-blue-100 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <MapPin className="h-10 w-10 text-insurance-blue" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-outfit font-semibold text-insurance-navy mb-2">Chicago Office</h3>
                  <p className="text-insurance-gray mb-4">
                    789 Coverage Street<br />
                    Chicago, IL 60601
                  </p>
                  <p className="mb-4">
                    <span className="block text-sm text-insurance-gray">Phone:</span>
                    <a href="tel:+13125554567" className="text-insurance-blue hover:text-blue-700 transition-colors duration-200">
                      (312) 555-4567
                    </a>
                  </p>
                  <p>
                    <span className="block text-sm text-insurance-gray">Email:</span>
                    <a href="mailto:chicago@securehorizon.com" className="text-insurance-blue hover:text-blue-700 transition-colors duration-200">
                      chicago@securehorizon.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 px-4 bg-insurance-blue text-white">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-outfit font-bold mb-6">Ready to get started?</h2>
              <p className="text-xl text-blue-100 mb-8">
                Contact us today for a free consultation and personalized quote. Our experts are ready to help you find the perfect coverage for your needs.
              </p>
              <Link to="/contact" className="btn-primary bg-white text-insurance-blue hover:bg-blue-50">
                Get a Quote
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
