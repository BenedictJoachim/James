import React from 'react';
import { useParams } from 'react-router-dom';

const posts = [
  {
    title: "From Junior Designer to Creative Director and beyond...",
    content: "<p>Here goes the content of the post...</p>",
    author: "John Doe",
    date: "7/20/24",
    image: "placeholder-image-url",
  },
  // Add more posts here
];

const Post: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = posts[parseInt(id)];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-600 mb-4">by {post.author} on {post.date}</p>
      <img src={post.image} alt={post.title} className="w-full h-64 object-cover mb-4" />
      <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: post.content }}></div>
    </div>
  );
}

export default Post;
