
import { CalendarIcon, Clock, User } from 'lucide-react';
import { Link } from 'react-router-dom';

type BlogCardProps = {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  author: string;
  category: string;
  imageUrl: string;
};

const BlogCard: React.FC<BlogCardProps> = ({
  id,
  title,
  excerpt,
  date,
  readTime,
  author,
  category,
  imageUrl,
}) => {
  return (
    <article className="bg-white rounded-lg overflow-hidden shadow-card card-hover">
      <Link to={`/blog/${id}`} className="block">
        <div className="h-48 overflow-hidden">
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      </Link>
      
      <div className="p-6">
        <div className="flex items-center mb-3">
          <span className="inline-block bg-blue-100 text-insurance-blue text-xs px-2 py-1 rounded">
            {category}
          </span>
        </div>
        
        <Link to={`/blog/${id}`} className="block">
          <h3 className="text-xl font-outfit font-semibold text-insurance-navy mb-2 hover:text-insurance-blue transition-colors duration-200">
            {title}
          </h3>
        </Link>
        
        <p className="text-insurance-gray mb-4 line-clamp-3">
          {excerpt}
        </p>
        
        <div className="flex items-center text-xs text-insurance-gray">
          <div className="flex items-center mr-4">
            <User className="h-3 w-3 mr-1" />
            <span>{author}</span>
          </div>
          <div className="flex items-center mr-4">
            <CalendarIcon className="h-3 w-3 mr-1" />
            <span>{date}</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-3 w-3 mr-1" />
            <span>{readTime}</span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
