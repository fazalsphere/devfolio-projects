import { CalendarIcon, Clock, User } from 'lucide-react';

type BlogContentProps = {
  title: string;
  content: string;
  date: string;
  readTime: string;
  author: string;
  category: string;
  imageUrl: string;
};

const BlogContent: React.FC<BlogContentProps> = ({
  title,
  content,
  date,
  readTime,
  author,
  category,
  imageUrl,
}) => {
  return (
    <article className="max-w-4xl mx-auto">
      <div className="mb-8">
        <span className="inline-block bg-blue-100 text-insurance-blue text-sm px-3 py-1 rounded mb-4">
          {category}
        </span>
        <h1 className="text-4xl md:text-5xl font-outfit font-bold text-insurance-navy mb-6">
          {title}
        </h1>
        <div className="flex items-center text-sm text-insurance-gray mb-8">
          <div className="flex items-center mr-6">
            <User className="h-4 w-4 mr-2" />
            <span>{author}</span>
          </div>
          <div className="flex items-center mr-6">
            <CalendarIcon className="h-4 w-4 mr-2" />
            <span>{date}</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-2" />
            <span>{readTime}</span>
          </div>
        </div>
      </div>

      <div className="rounded-xl overflow-hidden mb-10">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-[400px] object-cover"
        />
      </div>

      <div className="prose prose-lg max-w-none">
        {content}
      </div>
    </article>
  );
};

export default BlogContent; 