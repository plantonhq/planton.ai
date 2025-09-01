import React from 'react';
import Link from 'next/link';
import { BlogPost } from '@/lib/mdx';
import { formatShortDate } from '@/lib/utils';

interface BlogPostCardProps {
  post: BlogPost;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ post }) => {
  return (
    <article className="bg-gray-800 border border-gray-700 rounded-lg shadow-lg overflow-hidden hover:shadow-xl hover:border-gray-600 transition-all duration-300">
      {post.featuredImage && (
        <div className="aspect-video overflow-hidden">
          <img
            src={post.featuredImage}
            alt={post.title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          {post.tags.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-blue-900 text-blue-200 text-xs font-medium rounded-full border border-blue-700"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <h2 className="text-xl font-bold text-white mb-2 line-clamp-2">
          {post.title}
        </h2>
        
        {post.excerpt && (
          <p className="text-gray-300 mb-4 line-clamp-3">
            {post.excerpt}
          </p>
        )}
        
        <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
          <div className="flex items-center gap-2">
            {post.author.map((author, index) => (
              <span key={index} className="font-medium text-gray-300">
                {author.name}
              </span>
            ))}
          </div>
          <time dateTime={post.date}>
            {formatShortDate(post.date)}
          </time>
        </div>
        
        <Link
          href={`/blog/${post.slug}`}
          className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium transition-colors"
        >
          Read more
          <svg
            className="ml-2 w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </div>
    </article>
  );
};

export default BlogPostCard; 