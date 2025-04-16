import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Clock } from 'lucide-react';

const TrustProof = () => {
  const stats = [
    {
      icon: <Users className="h-8 w-8" />,
      value: "15,000+",
      label: "Happy Clients",
      suffix: ""
    },
    {
      icon: <Award className="h-8 w-8" />,
      value: "25+",
      label: "Years Experience",
      suffix: ""
    },
    {
      icon: <Clock className="h-8 w-8" />,
      value: "24/7",
      label: "Support Available",
      suffix: ""
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-outfit font-bold text-insurance-navy mb-4">
            Trusted by thousands across the nation
          </h2>
          <p className="text-xl text-insurance-gray max-w-2xl mx-auto">
            Join our growing community of satisfied clients who trust us with their insurance needs
          </p>
        </motion.div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-6 bg-white rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center text-insurance-blue">
                {stat.icon}
              </div>
              <h3 className="text-3xl font-bold text-insurance-navy mb-2">
                {stat.value}{stat.suffix}
              </h3>
              <p className="text-insurance-gray font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustProof; 