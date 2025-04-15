
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

type InsuranceCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  features?: string[];
};

const InsuranceCard: React.FC<InsuranceCardProps> = ({ title, description, icon, link, features }) => {
  return (
    <div className="bg-white rounded-lg shadow-card p-6 card-hover">
      <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-outfit font-semibold text-insurance-navy mb-3">{title}</h3>
      <p className="text-insurance-gray mb-4">{description}</p>
      
      {features && features.length > 0 && (
        <ul className="mb-6 space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      )}
      
      <Link 
        to={link} 
        className="inline-flex items-center text-insurance-blue font-medium hover:text-blue-700 transition-colors duration-200 mt-2"
      >
        Learn more <ArrowRight className="ml-2 h-4 w-4" />
      </Link>
    </div>
  );
};

export default InsuranceCard;
