import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Home, Car, Heart, Activity, Briefcase, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const insuranceTypes = [
  {
    title: "Auto Insurance",
    description: "Drive with confidence knowing you're protected. Our comprehensive auto insurance covers everything from accidents to theft, ensuring you're never left stranded.",
    icon: Car,
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    features: [
      "Collision & comprehensive coverage",
      "24/7 roadside assistance",
      "Personal injury protection",
      "Flexible deductible options"
    ],
    link: "/solutions/auto"
  },
  {
    title: "Home Insurance",
    description: "Protect your most valuable asset. Our home insurance provides complete coverage for your property, belongings, and liability concerns.",
    icon: Home,
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    features: [
      "Property damage protection",
      "Personal liability coverage",
      "Natural disaster protection",
      "Additional living expenses"
    ],
    link: "/solutions/home"
  },
  {
    title: "Life Insurance",
    description: "Secure your family's future. Our life insurance plans provide financial security and peace of mind for your loved ones.",
    icon: Heart,
    image: "https://images.unsplash.com/photo-1609220136736-443140cffec6?auto=format&fit=crop&w=800&q=80",
    features: [
      "Term & whole life options",
      "Living benefits",
      "Flexible premium payments",
      "Cash value accumulation"
    ],
    link: "/solutions/life"
  },
  {
    title: "Health Insurance",
    description: "Your health is your wealth. Get access to quality healthcare with our comprehensive health insurance plans.",
    icon: Activity,
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    features: [
      "Preventive care coverage",
      "Prescription drug benefits",
      "Specialist consultations",
      "Mental health support"
    ],
    link: "/solutions/health"
  }
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const featureVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5
    }
  }
};

const InsuranceSolutions: React.FC = () => {
  console.log('InsuranceSolutions component rendering');
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-outfit font-bold text-insurance-navy mb-6">
            Insurance Solutions for Every Need
          </h2>
          <p className="text-xl text-insurance-gray">
            Discover our comprehensive range of insurance products designed to protect what matters most to you.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-24"
        >
          {insuranceTypes.map((insurance, index) => (
            <motion.div
              key={insurance.title}
              variants={itemVariants}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-20`}
            >
              <div className="w-full lg:w-1/2">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={insurance.image}
                    alt={insurance.title}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>

              <div className="w-full lg:w-1/2">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-full bg-insurance-blue/10">
                    <insurance.icon className="w-6 h-6 text-insurance-blue" />
                  </div>
                  <h3 className="text-3xl font-outfit font-bold text-insurance-navy">
                    {insurance.title}
                  </h3>
                </div>

                <p className="text-xl text-insurance-gray mb-8">
                  {insurance.description}
                </p>

                <motion.ul
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="space-y-4 mb-8"
                >
                  {insurance.features.map((feature, i) => (
                    <motion.li
                      key={i}
                      variants={featureVariants}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle className="w-5 h-5 text-insurance-blue flex-shrink-0" />
                      <span className="text-lg text-insurance-gray">{feature}</span>
                    </motion.li>
                  ))}
                </motion.ul>

                <Link
                  to={insurance.link}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-insurance-blue text-white rounded-lg hover:bg-insurance-blue/90 transition-colors duration-200 font-medium"
                >
                  Learn More
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default InsuranceSolutions;