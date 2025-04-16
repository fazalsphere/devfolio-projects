import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Shield, CheckCircle, Clock, HelpCircle, DollarSign, HeadphonesIcon } from 'lucide-react';
import { useMotionValue, useTransform, animate } from 'framer-motion';

const benefits = [
  {
    icon: <Shield className="h-6 w-6 text-insurance-blue" />,
    title: "Comprehensive Coverage",
    description: "Our policies provide complete protection against a wide range of risks."
  },
  {
    icon: <CheckCircle className="h-6 w-6 text-insurance-blue" />,
    title: "Personalized Solutions",
    description: "Tailored insurance solutions to meet your specific needs and budget."
  },
  {
    icon: <Clock className="h-6 w-6 text-insurance-blue" />,
    title: "Fast Claims Processing",
    description: "Quick resolution when you experience a loss with our streamlined process."
  },
  {
    icon: <HelpCircle className="h-6 w-6 text-insurance-blue" />,
    title: "Expert Guidance",
    description: "Our experienced agents provide expert advice for informed decisions."
  },
  {
    icon: <DollarSign className="h-6 w-6 text-insurance-blue" />,
    title: "Competitive Rates",
    description: "Best value for your insurance investment without compromising coverage."
  },
  {
    icon: <HeadphonesIcon className="h-6 w-6 text-insurance-blue" />,
    title: "24/7 Support",
    description: "Round-the-clock assistance for your questions and concerns."
  }
];

const WhyChooseUsCarousel = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const dragX = useMotionValue(0);

  const handleDragEnd = () => {
    const container = containerRef.current;
    if (!container) return;

    const containerWidth = container.offsetWidth;
    const contentWidth = container.scrollWidth;
    const maxScroll = -(contentWidth - containerWidth);
    
    let newX = dragX.get();
    newX = Math.max(maxScroll, Math.min(0, newX));
    
    animate(x, newX, {
      type: "spring",
      stiffness: 400,
      damping: 30
    });
  };

  return (
    <div className="relative overflow-hidden py-8" ref={containerRef}>
      {/* Left Gradient */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10" />
      
      <motion.div
        className="flex gap-6 cursor-grab active:cursor-grabbing px-8"
        drag="x"
        dragConstraints={containerRef}
        onDragEnd={handleDragEnd}
        style={{ x }}
      >
        {benefits.map((benefit, index) => (
          <motion.div
            key={index}
            className="flex-shrink-0 w-[300px] p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              {benefit.icon}
            </div>
            <h3 className="text-xl font-outfit font-semibold text-insurance-navy mb-3">
              {benefit.title}
            </h3>
            <p className="text-insurance-gray">
              {benefit.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
      
      {/* Right Gradient */}
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10" />
      
      {/* Scroll Indicator */}
      <div className="mt-6 flex justify-center gap-2">
        <motion.div
          className="text-sm text-insurance-gray flex items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <span>←</span>
          Drag to explore more benefits
          <span>→</span>
        </motion.div>
      </div>
    </div>
  );
};

export default WhyChooseUsCarousel; 