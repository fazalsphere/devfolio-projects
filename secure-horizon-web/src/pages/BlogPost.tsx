import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BlogContent from '../components/BlogContent';
import { getBlogPost } from '../lib/mockData';
import ReactMarkdown from 'react-markdown';

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const post = getBlogPost(id || '');

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-outfit font-bold text-insurance-navy mb-6">
              Blog Post Not Found
            </h1>
            <p className="text-insurance-gray mb-8">
              The blog post you're looking for doesn't exist or has been removed.
            </p>
            <Link
              to="/blog"
              className="inline-flex items-center text-insurance-blue hover:text-insurance-navy transition-colors duration-200"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-16">
        <div className="mb-8">
          <Link
            to="/blog"
            className="inline-flex items-center text-insurance-blue hover:text-insurance-navy transition-colors duration-200"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Link>
        </div>
        
        <BlogContent
          title={post.title}
          content={<ReactMarkdown>{post.content}</ReactMarkdown>}
          date={post.date}
          readTime={post.readTime}
          author={post.author}
          category={post.category}
          imageUrl={post.imageUrl}
        />
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost; 