
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type Testimonial = {
  id: number;
  content: string;
  author: string;
  position: string;
  rating: number;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    content: "SecureHorizon made finding the right coverage easy. Their team was helpful throughout the entire process, and I'm saving over $500 annually!",
    author: "Sarah Johnson",
    position: "Homeowner",
    rating: 5
  },
  {
    id: 2,
    content: "I've been with SecureHorizon for over 10 years. Their customer service is exceptional, and they were there for me when I needed them most after a car accident.",
    author: "Michael Rodriguez",
    position: "Business Owner",
    rating: 5
  },
  {
    id: 3,
    content: "The claims process was smooth and hassle-free. I was impressed by how quickly they responded and resolved my claim after a storm damaged my roof.",
    author: "Emily Chen",
    position: "Property Manager",
    rating: 4
  }
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="bg-blue-50 rounded-lg py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="section-title">What Our Customers Say</h2>
        </div>
        
        <div className="relative">
          {/* Testimonial */}
          <div className="bg-white rounded-lg shadow-sm p-8 mb-6">
            <div className="flex mb-4">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-lg text-insurance-gray italic mb-6">"{testimonials[currentIndex].content}"</p>
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-insurance-blue text-white flex items-center justify-center mr-4">
                {testimonials[currentIndex].author.charAt(0)}
              </div>
              <div>
                <h4 className="font-semibold text-insurance-navy">{testimonials[currentIndex].author}</h4>
                <p className="text-sm text-insurance-gray">{testimonials[currentIndex].position}</p>
              </div>
            </div>
          </div>
          
          {/* Navigation */}
          <div className="flex justify-center items-center space-x-4">
            <button 
              onClick={prevTestimonial}
              className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-insurance-gray hover:text-insurance-blue transition-colors duration-200"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full ${
                    index === currentIndex ? 'bg-insurance-blue' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextTestimonial}
              className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-insurance-gray hover:text-insurance-blue transition-colors duration-200"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
