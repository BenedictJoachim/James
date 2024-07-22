import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    title: "The 2024 State of Marketing & Trends Report: Data from 1400+ Global Marketers",
    author: "Maxwell Iskiev",
    date: "6/26/24",
    image: "https://via.placeholder.com/300",
    excerpt: "Discover the digital marketing industry trends, winning opportunities and challenges brands face this...",
  },
  // Add more blog posts here
];

const Blog: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-8">
        <div className="col-span-2">
          <h1 className="text-4xl font-bold mb-4">Recent Blog Posts</h1>
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              className="mb-4 p-4 bg-white rounded shadow-md"
              whileHover={{ scale: 1.05 }}
            >
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover mb-4 rounded" />
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p className="text-gray-600 mb-2">by {post.author} on {post.date}</p>
              <p className="text-gray-800">{post.excerpt}</p>
              <Link to={`/blog/${index}`} className="text-blue-500 hover:underline mt-2 block">Read more</Link>
            </motion.div>
          ))}
        </div>
        <div className="col-span-1">
          <h2 className="text-2xl font-bold mb-4">Top Blog Posts</h2>
          <ul>
            {blogPosts.map((post, index) => (
              <li key={index} className="mb-2">
                <Link to={`/blog/${index}`} className="flex items-center">
                  <img src={post.image} alt={post.title} className="w-16 h-16 object-cover rounded mr-2" />
                  <div>
                    <p className="text-lg font-semibold">{post.title}</p>
                    <p className="text-gray-600 text-sm">{post.date}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">More Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              className="p-4 bg-white rounded shadow-md"
              whileHover={{ scale: 1.05 }}
            >
              <img src={post.image} alt={post.title} className="w-full h-32 object-cover mb-4 rounded" />
              <h3 className="text-lg font-semibold">{post.title}</h3>
              <p className="text-gray-600 mb-2">{post.date}</p>
              <Link to={`/blog/${index}`} className="text-blue-500 hover:underline mt-2 block">Read more</Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Blog;
