
import { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
      // Reset submission message after 5 seconds
      setTimeout(() => {
        setFormSubmitted(false);
      }, 5000);
    }, 1500);
  };
  
  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
      {/* Contact Information */}
      <div className="lg:col-span-2 bg-insurance-blue text-white rounded-lg p-8">
        <h3 className="text-2xl font-outfit font-semibold mb-6">Contact Information</h3>
        <p className="text-blue-200 mb-8">
          Have questions or need assistance? Our team is here to help. Reach out to us using any of the contact methods below.
        </p>
        
        <div className="space-y-6">
          <div className="flex items-start">
            <div className="w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center mr-4 flex-shrink-0">
              <MapPin className="h-5 w-5" />
            </div>
            <div>
              <h4 className="font-medium mb-1">Our Location</h4>
              <p className="text-blue-200">123 Insurance Ave, New York, NY 10001</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center mr-4 flex-shrink-0">
              <Phone className="h-5 w-5" />
            </div>
            <div>
              <h4 className="font-medium mb-1">Phone Number</h4>
              <p className="text-blue-200">1-800-123-4567</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center mr-4 flex-shrink-0">
              <Mail className="h-5 w-5" />
            </div>
            <div>
              <h4 className="font-medium mb-1">Email Address</h4>
              <p className="text-blue-200">info@securehorizon.com</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center mr-4 flex-shrink-0">
              <Clock className="h-5 w-5" />
            </div>
            <div>
              <h4 className="font-medium mb-1">Business Hours</h4>
              <p className="text-blue-200">Monday - Friday: 9am - 6pm</p>
              <p className="text-blue-200">Saturday: 10am - 2pm</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Contact Form */}
      <div className="lg:col-span-3 bg-white rounded-lg shadow-card p-8">
        <h3 className="text-2xl font-outfit font-semibold text-insurance-navy mb-6">Send Us a Message</h3>
        
        {formSubmitted ? (
          <div className="bg-green-50 text-green-700 p-4 rounded-lg mb-6">
            Thank you for your message! We'll get back to you as soon as possible.
          </div>
        ) : null}
        
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-insurance-gray mb-1">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-insurance-blue"
                placeholder="John Doe"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-insurance-gray mb-1">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-insurance-blue"
                placeholder="john@example.com"
                required
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-insurance-gray mb-1">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-insurance-blue"
                placeholder="(123) 456-7890"
              />
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-insurance-gray mb-1">Subject</label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-insurance-blue"
                required
              >
                <option value="">Select a subject</option>
                <option value="Quote Request">Quote Request</option>
                <option value="Policy Question">Policy Question</option>
                <option value="Claims Inquiry">Claims Inquiry</option>
                <option value="Billing Inquiry">Billing Inquiry</option>
                <option value="General Inquiry">General Inquiry</option>
              </select>
            </div>
          </div>
          
          <div className="mb-5">
            <label htmlFor="message" className="block text-sm font-medium text-insurance-gray mb-1">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-insurance-blue"
              placeholder="How can we help you?"
              required
            ></textarea>
          </div>
          
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-primary py-3 px-6 w-full sm:w-auto flex items-center justify-center"
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </>
            ) : (
              'Send Message'
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
