import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

type Testimonial = {
  id: number;
  content: string;
  author: string;
  position: string;
  rating: number;
  avatar: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    content: "SecureHorizon made finding the right coverage easy. Their team was helpful throughout the entire process, and I'm saving over $500 annually!",
    author: "Daniel",
    position: "Homeowner",
    rating: 5,
    avatar: "https://img.freepik.com/free-photo/handsome-bearded-guy-posing-against-white-wall_273609-20597.jpg?t=st=1744819653~exp=1744823253~hmac=10fe5603d2e41faca66ec0ce281779cc0020fab3c2a31a3774605d366487c2a7&w=996"
  },
  {
    id: 2,
    content: "I've been with SecureHorizon for over 10 years. Their customer service is exceptional, and they were there for me when I needed them most after a car accident.",
    author: "Michael Rodriguez",
    position: "Business Owner",
    rating: 5,
    avatar: "https://img.freepik.com/free-photo/portrait-positive-confident-businessman_1262-17122.jpg?t=st=1744819717~exp=1744823317~hmac=3691529fd430ecfdeb4568a257dbd1ba1d2da717cc0a91f1725c59c9a309276d&w=996"
  },
  {
    id: 3,
    content: "The claims process was smooth and hassle-free. I was impressed by how quickly they responded and resolved my claim after a storm damaged my roof.",
    author: "Anatole",
    position: "Property Manager",
    rating: 4,
    avatar: "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?t=st=1744819606~exp=1744823206~hmac=cde298e2ae68fc75fe1c76c27485a37696c958ecad2a00e44f468051ad3b6180&w=996"
  }
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 5000); // Change slide every 5 seconds
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    const startX = touch.clientX;
    
    const handleTouchMove = (e: TouchEvent) => {
      const touch = e.touches[0];
      const diff = startX - touch.clientX;
      
      if (Math.abs(diff) > 50) { // Minimum swipe distance
        if (diff > 0) {
          nextTestimonial();
        } else {
          prevTestimonial();
        }
        document.removeEventListener('touchmove', handleTouchMove);
      }
    };
    
    document.addEventListener('touchmove', handleTouchMove, { once: true });
  };

  return (
    <div className="bg-blue-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-outfit font-bold text-insurance-navy mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-insurance-gray">
            Trusted by thousands of satisfied customers nationwide
          </p>
        </div>
        
        <div className="relative" onTouchStart={handleTouchStart}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-xl shadow-lg p-8 md:p-10"
            >
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">
                <div className="flex-shrink-0">
                  <img
                    src={testimonials[currentIndex].avatar}
                    alt={testimonials[currentIndex].author}
                    className="w-20 h-20 rounded-full object-cover shadow-md"
                  />
                </div>
                
                <div className="flex-1">
                  <div className="flex mb-4">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  
                  <blockquote className="text-xl text-insurance-gray italic mb-6">
                    "{testimonials[currentIndex].content}"
                  </blockquote>
                  
                  <div className="flex items-center">
                    <div>
                      <h4 className="font-semibold text-lg text-insurance-navy">
                        {testimonials[currentIndex].author}
                      </h4>
                      <p className="text-insurance-gray">
                        {testimonials[currentIndex].position}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          
          {/* Navigation */}
          <div className="flex justify-center items-center space-x-4 mt-8">
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
                  onClick={() => {
                    setIsAutoPlaying(false);
                    setCurrentIndex(index);
                  }}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
                    index === currentIndex
                      ? 'bg-insurance-blue w-6'
                      : 'bg-gray-300'
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
