import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BlogCard from '../components/BlogCard';
import { blogPosts } from '../lib/mockData';

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
    // Implement search functionality
  };
  
  // Filter posts based on active category
  const filteredPosts = activeCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category.toLowerCase() === activeCategory.toLowerCase());
  
  // Get unique categories
  const categories = ['all', ...new Set(blogPosts.map(post => post.category.toLowerCase()))];
  
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="bg-insurance-blue text-white py-20 px-4">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-outfit font-bold mb-6">Insurance Insights & Resources</h1>
              <p className="text-xl text-blue-100 mb-8">
                Stay informed with the latest insurance trends, tips, and expert advice to make better coverage decisions.
              </p>
              
              <form onSubmit={handleSearch} className="max-w-2xl mx-auto flex">
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-grow py-3 px-4 border border-transparent rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-300 bg-white/10 text-white placeholder-blue-100"
                />
                <button
                  type="submit"
                  className="bg-white text-insurance-blue px-6 py-3 rounded-r-lg hover:bg-blue-50 transition-colors duration-200"
                >
                  <Search className="h-5 w-5" />
                </button>
              </form>
            </div>
          </div>
        </section>
        
        {/* Blog Content */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            {/* Categories */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full transition-colors duration-200 ${
                    activeCategory === category 
                      ? 'bg-insurance-blue text-white' 
                      : 'bg-gray-100 text-insurance-gray hover:bg-gray-200'
                  }`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
            
            {/* Featured Article */}
            <div className="mb-16">
              <div className="relative rounded-xl overflow-hidden shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" 
                  alt="Featured Article" 
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 z-20">
                  <span className="inline-block bg-insurance-blue text-white text-xs px-2 py-1 rounded mb-4">
                    Featured
                  </span>
                  <h2 className="text-2xl md:text-4xl font-outfit font-bold text-white mb-4">
                    How to Choose the Right Insurance Coverage for Your Family
                  </h2>
                  <p className="text-blue-100 mb-6 max-w-3xl">
                    A comprehensive guide to evaluating your family's insurance needs and selecting the optimal coverage to protect your loved ones.
                  </p>
                  <div className="flex items-center text-xs text-white mb-6">
                    <span className="mr-4">By Thomas Anderson</span>
                    <span className="mr-4">April 14, 2025</span>
                    <span>10 min read</span>
                  </div>
                  <Link 
                    to="/blog/featured" 
                    className="inline-block bg-white text-insurance-blue font-medium px-6 py-3 rounded hover:bg-blue-50 transition-colors duration-200"
                  >
                    Read Article
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Blog Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <BlogCard
                  key={post.id}
                  id={post.id}
                  title={post.title}
                  excerpt={post.excerpt}
                  date={post.date}
                  readTime={post.readTime}
                  author={post.author}
                  category={post.category}
                  imageUrl={post.imageUrl}
                />
              ))}
            </div>
            
            {/* Pagination */}
            <div className="flex justify-center mt-12">
              <div className="flex space-x-2">
                <button className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 text-insurance-gray hover:bg-gray-200 transition-colors duration-200">
                  &laquo;
                </button>
                <button className="w-10 h-10 rounded-full flex items-center justify-center bg-insurance-blue text-white">
                  1
                </button>
                <button className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 text-insurance-gray hover:bg-gray-200 transition-colors duration-200">
                  2
                </button>
                <button className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 text-insurance-gray hover:bg-gray-200 transition-colors duration-200">
                  3
                </button>
                <button className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 text-insurance-gray hover:bg-gray-200 transition-colors duration-200">
                  &raquo;
                </button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Newsletter Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-outfit font-bold text-insurance-navy mb-4">Subscribe to Our Newsletter</h2>
              <p className="text-insurance-gray mb-8">
                Stay updated with the latest insurance insights, tips, and news delivered straight to your inbox.
              </p>
              
              <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-grow py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-insurance-blue"
                  required
                />
                <button
                  type="submit"
                  className="btn-primary whitespace-nowrap"
                >
                  Subscribe Now
                </button>
              </form>
              <p className="text-sm text-insurance-gray mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
