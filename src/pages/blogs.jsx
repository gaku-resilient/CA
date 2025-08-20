import React, { useState, useEffect } from 'react';
import { 
  Calendar, 
  Clock, 
  User, 
  Eye, 
  Heart, 
  Share2, 
  Search, 
  Filter, 
  ChevronRight,
  BookOpen,
  TrendingUp,
  ArrowRight,
  Tag
} from 'lucide-react';

const BlogFrontend = () => {
  // Sample blog data - in real app, this would come from an API
  const [blogs, setBlogs] = useState([
    
    {
      id: 1,
      title: "Understanding Tax Implications of Remote Work",
      excerpt: "Navigate the complex world of tax obligations when working from multiple states or countries. Learn about residency rules, state tax nexus, and how to properly document your work locations.",
      content: "Remote work has revolutionized how we approach our careers, but it has also introduced complex tax considerations that many professionals overlook. When you work from different states or countries, you may be subject to multiple tax jurisdictions...",
      author: "Sarah Johnson",
      authorRole: "Senior Tax Consultant",
      date: "2025-01-15",
      readTime: "8 min read",
      category: "Tax Planning",
      tags: ["Remote Work", "Tax Law", "Digital Nomads"],
      views: 2847,
      likes: 156,
      featured: false,
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=400&fit=crop"
    },
    {
      id: 2,
      title: "Understanding Tax Implications of Remote Work",
      excerpt: "Navigate the complex world of tax obligations when working from multiple states or countries. Learn about residency rules, state tax nexus, and how to properly document your work locations.",
      content: "Remote work has revolutionized how we approach our careers, but it has also introduced complex tax considerations that many professionals overlook. When you work from different states or countries, you may be subject to multiple tax jurisdictions...",
      author: "Sarah Johnson",
      authorRole: "Senior Tax Consultant",
      date: "2025-01-15",
      readTime: "8 min read",
      category: "Tax Planning",
      tags: ["Remote Work", "Tax Law", "Digital Nomads"],
      views: 2847,
      likes: 156,
      featured: false,
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=400&fit=crop"
    },
  ]);

  const [selectedBlog, setSelectedBlog] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredBlogs, setFilteredBlogs] = useState(blogs);

  // Get unique categories
  const categories = ['All', ...new Set(blogs.map(blog => blog.category))];

  // Filter blogs based on search and category
  useEffect(() => {
    let filtered = blogs;
    
    if (searchTerm) {
      filtered = filtered.filter(blog => 
        blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
    
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(blog => blog.category === selectedCategory);
    }
    
    setFilteredBlogs(filtered);
  }, [searchTerm, selectedCategory, blogs]);

  const featuredBlogs = blogs.filter(blog => blog.featured);
  const regularBlogs = filteredBlogs.filter(blog => !blog.featured);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const handleLike = (blogId) => {
    setBlogs(blogs.map(blog => 
      blog.id === blogId 
        ? { ...blog, likes: blog.likes + 1 }
        : blog
    ));
  };

  if (selectedBlog) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#f8fafc] to-[#e2e8f0]">
        {/* Blog Article View */}
        <div className="container mx-auto px-4 py-8">
          <button
            onClick={() => setSelectedBlog(null)}
            className="mb-8 flex items-center space-x-2 text-[#2b6777] hover:text-[#52ab98] transition-colors"
          >
            <ChevronRight className="w-4 h-4 rotate-180" />
            <span className="font-medium">Back to Blog</span>
          </button>

          <article className="max-w-4xl mx-auto">
            {/* Article Header */}
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-8 mt-50">
              <div className="relative h-80 md:h-96">
                <img 
                  src={selectedBlog.image} 
                  alt={selectedBlog.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="inline-block bg-[#52ab98] px-4 py-2 rounded-full text-sm font-bold mb-4">
                    {selectedBlog.category}
                  </div>
                  <h1 className="text-3xl md:text-4xl font-black mb-4">{selectedBlog.title}</h1>
                </div>
              </div>

              <div className="p-8">
                {/* Article Meta */}
                <div className="flex flex-wrap items-center gap-6 mb-8 text-neutral-600">
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4" />
                    <span className="font-medium">{selectedBlog.author}</span>
                    <span className="text-sm">• {selectedBlog.authorRole}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{formatDate(selectedBlog.date)}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>{selectedBlog.readTime}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Eye className="w-4 h-4" />
                    <span>{selectedBlog.views.toLocaleString()} views</span>
                  </div>
                </div>

                {/* Article Content */}
                <div className="prose prose-lg max-w-none">
                  <p className="text-xl text-neutral-700 leading-relaxed mb-8 font-medium">
                    {selectedBlog.excerpt}
                  </p>
                  <div className="text-neutral-700 leading-relaxed space-y-6">
                    {selectedBlog.content.split('\n\n').map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                </div>

                {/* Article Footer */}
                <div className="mt-12 pt-8 border-t border-neutral-200">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-2">
                      {selectedBlog.tags.map((tag, index) => (
                        <span key={index} className="bg-[#f1f5f9] text-[#2b6777] px-3 py-1 rounded-full text-sm font-medium">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8fafc] to-[#e2e8f0] mt-40">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-[#2b6777] to-[#52ab98] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-black mb-6">
              Insights & <span className="text-[#c8d8e4]">Articles</span>
            </h1>
            <p className="text-xl md:text-2xl font-medium opacity-90 mb-8">
              Expert insights on tax planning, business finance, and financial strategies
            </p>
            
            {/* Search and Filter */}
            <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/95 backdrop-blur-sm text-neutral-800 font-medium border border-white/30 shadow-lg focus:outline-none focus:ring-4 focus:ring-white/50 focus:bg-white transition-all duration-300"
                />
              </div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-6 py-4 rounded-2xl bg-white/95 backdrop-blur-sm text-neutral-800 font-medium border border-white/30 shadow-lg focus:outline-none focus:ring-4 focus:ring-white/50 focus:bg-white transition-all duration-300 appearance-none cursor-pointer"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
                  backgroundPosition: 'right 12px center',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: '16px'
                }}
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Featured Articles */}
        {featuredBlogs.length > 0 && (
          <div className="mb-16">
            <div className="flex items-center space-x-3 mb-8">
              <TrendingUp className="w-6 h-6 text-[#2b6777]" />
              <h2 className="text-3xl font-black text-[#2b6777]">Featured Articles</h2>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredBlogs.map((blog) => (
                <div
                  key={blog.id}
                  className="bg-white rounded-3xl shadow-2xl overflow-hidden hover:scale-[1.02] transition-all duration-500 cursor-pointer group"
                  onClick={() => setSelectedBlog(blog)}
                >
                  <div className="relative h-64">
                    <img 
                      src={blog.image} 
                      alt={blog.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-[#52ab98] text-white px-4 py-2 rounded-full text-sm font-bold">
                        Featured
                      </span>
                    </div>
                    <div className="absolute bottom-4 right-4">
                      <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                        {blog.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <h3 className="text-2xl font-black text-[#2b6777] mb-4 group-hover:text-[#52ab98] transition-colors">
                      {blog.title}
                    </h3>
                    <p className="text-neutral-700 leading-relaxed mb-6 font-medium">
                      {blog.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-neutral-600 mb-6">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <User className="w-4 h-4" />
                          <span>{blog.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{formatDate(blog.date)}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{blog.readTime}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {blog.tags.slice(0, 2).map((tag, index) => (
                          <span key={index} className="bg-[#f1f5f9] text-[#2b6777] px-3 py-1 rounded-full text-xs font-medium">
                            #{tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center space-x-4 text-neutral-500">
                        <div className="flex items-center space-x-1">
                          <Eye className="w-4 h-4" />
                          <span>{blog.views.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Heart className="w-4 h-4" />
                          <span>{blog.likes}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Regular Articles */}
        <div className="mb-16 ">
          <div className="flex items-center space-x-3 mb-8">
            <BookOpen className="w-6 h-6 text-[#2b6777]" />
            <h2 className="text-3xl font-black text-[#2b6777]">Latest Articles</h2>
            {searchTerm && (
              <span className="text-neutral-600 font-medium">
                ({filteredBlogs.length} results for "{searchTerm}")
              </span>
            )}
          </div>
          
          {filteredBlogs.length === 0 ? (
            <div className="text-center py-16">
              <BookOpen className="w-16 h-16 text-neutral-400 mx-auto mb-4 " />
              <h3 className="text-2xl font-bold text-neutral-600 mb-2">No articles found</h3>
              <p className="text-neutral-500">Try adjusting your search terms or filters</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularBlogs.map((blog) => (
                <div
                  key={blog.id}
                  className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer group"
                  onClick={() => setSelectedBlog(blog)}
                >
                  <div className="relative h-48">
                    <img 
                      src={blog.image} 
                      alt={blog.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-[#2b6777] text-white px-3 py-1 rounded-full text-xs font-bold">
                        {blog.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#2b6777] mb-3 group-hover:text-[#52ab98] transition-colors line-clamp-2">
                      {blog.title}
                    </h3>
                    <p className="text-neutral-700 text-sm leading-relaxed mb-4 line-clamp-3">
                      {blog.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs text-neutral-600 mb-4">
                      <div className="flex items-center space-x-1">
                        <User className="w-3 h-3" />
                        <span>{blog.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-3 h-3" />
                        <span>{formatDate(blog.date)}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-3 h-3" />
                        <span>{blog.readTime}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3 text-xs text-neutral-500">
                        <div className="flex items-center space-x-1">
                          <Eye className="w-3 h-3" />
                          <span>{blog.views.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Heart className="w-3 h-3" />
                          <span>{blog.likes}</span>
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-[#2b6777] group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogFrontend;

























