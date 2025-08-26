'use client';

import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeHighlight from 'rehype-highlight';
import matter from 'gray-matter';
import { formatDate } from '@/lib/utils';
import { Author } from '@/lib/mdx';
import { DocsPageActions } from '@/app/docs/components/DocsPageActions';

interface MdxMetadata {
  title: string;
  date: string;
  author: Author[];
  featuredImage?: string;
  featuredImageType?: string;
  featuredVideo?: string;
  tags: string[];
  content: string;
}

interface MDXRendererProps {
  mdxContent: string;
  markdownContent?: string;
  title?: string;
}

export const MDXRenderer: React.FC<MDXRendererProps> = ({
  mdxContent,
  markdownContent,
  title,
}) => {
  const { data, content } = matter(mdxContent);
  const metadata: MdxMetadata = data as MdxMetadata;

  return (
    <div className="w-full">
      <article>
        {/* Header */}
        <header className="mb-8">
          {metadata.title && (
            <h1 className="text-4xl font-bold text-white mb-4">{metadata.title}</h1>
          )}

          {/* Date and Author */}
          {(metadata.date || metadata.author || markdownContent) && (
            <div className="flex items-center gap-4 text-gray-300 mb-6">
              {metadata.date && <time dateTime={metadata.date}>{formatDate(metadata.date)}</time>}
              {metadata.author && (
                <>
                  {metadata.date && <span>•</span>}
                  <div className="flex gap-2">
                    {metadata.author.map((author, index) => (
                      <span key={index} className="font-medium">
                        {author.name}
                      </span>
                    ))}
                  </div>
                </>
              )}
              {markdownContent && (
                <DocsPageActions
                  markdownContent={markdownContent}
                  title={title || metadata.title}
                />
              )}
            </div>
          )}

          {/* Tags */}
          {metadata.tags && (
            <div className="flex gap-2 mb-6">
              {metadata.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-blue-900 text-blue-200 text-sm font-medium rounded-full border border-blue-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Featured Image */}
          {metadata.featuredImage && (
            <div className="mb-6">
              <img
                src={metadata.featuredImage}
                alt={metadata.title}
                className={`w-full rounded-lg shadow-lg ${
                  metadata.featuredImageType === 'full'
                    ? 'h-96 object-cover'
                    : 'max-h-96 object-contain'
                }`}
              />
            </div>
          )}

          {/* Featured Video */}
          {metadata.featuredVideo && (
            <div className="mb-6">
              <div className="relative w-full h-0 pb-[56.25%] rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src={metadata.featuredVideo}
                  title={metadata.title}
                  className="absolute top-0 left-0 w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          )}
        </header>

        {/* Content */}
        <div className="prose prose-lg max-w-none prose-invert">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw, rehypeHighlight]}
            components={{
              h1: ({ children }) => {
                const id = children
                  ?.toString()
                  .toLowerCase()
                  .replace(/[^a-z0-9\s-]/g, '')
                  .replace(/\s+/g, '-');

                return (
                  <h1 id={id} className="text-3xl font-bold text-white mt-8 mb-4">
                    {children}
                  </h1>
                );
              },
              h2: ({ children }) => {
                const id = children
                  ?.toString()
                  .toLowerCase()
                  .replace(/[^a-z0-9\s-]/g, '')
                  .replace(/\s+/g, '-');

                return (
                  <h2 id={id} className="text-2xl font-bold text-white mt-6 mb-3">
                    {children}
                  </h2>
                );
              },
              h3: ({ children }) => {
                const id = children
                  ?.toString()
                  .toLowerCase()
                  .replace(/[^a-z0-9\s-]/g, '')
                  .replace(/\s+/g, '-');

                return (
                  <h3 id={id} className="text-xl font-bold text-white mt-5 mb-2">
                    {children}
                  </h3>
                );
              },
              h4: ({ children }) => {
                const id = children
                  ?.toString()
                  .toLowerCase()
                  .replace(/[^a-z0-9\s-]/g, '')
                  .replace(/\s+/g, '-');

                return (
                  <h4 id={id} className="text-lg font-bold text-white mt-4 mb-2">
                    {children}
                  </h4>
                );
              },
              h5: ({ children }) => {
                const id = children
                  ?.toString()
                  .toLowerCase()
                  .replace(/[^a-z0-9\s-]/g, '')
                  .replace(/\s+/g, '-');

                return (
                  <h5 id={id} className="text-base font-bold text-white mt-3 mb-2">
                    {children}
                  </h5>
                );
              },
              h6: ({ children }) => {
                const id = children
                  ?.toString()
                  .toLowerCase()
                  .replace(/[^a-z0-9\s-]/g, '')
                  .replace(/\s+/g, '-');

                return (
                  <h6 id={id} className="text-sm font-bold text-white mt-2 mb-1">
                    {children}
                  </h6>
                );
              },
              p: ({ children }) => <p className="text-gray-300 mb-4 leading-relaxed">{children}</p>,
              ul: ({ children }) => (
                <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">{children}</ul>
              ),
              ol: ({ children }) => (
                <ol className="list-decimal list-inside text-gray-300 mb-4 space-y-2">
                  {children}
                </ol>
              ),
              li: ({ children }) => <li className="text-gray-300">{children}</li>,
              blockquote: ({ children }) => (
                <blockquote className="border-l-4 border-blue-500 pl-4 py-2 my-4 bg-gray-800 rounded-r text-gray-300 italic">
                  {children}
                </blockquote>
              ),
              code: ({ children, className }) => {
                return (
                  <code
                    className={`px-2 py-1 bg-gray-800 text-green-400 rounded text-sm ${
                      className || ''
                    }`}
                  >
                    {children}
                  </code>
                );
              },
              pre: ({ children }) => (
                <pre className="bg-gray-800 p-4 rounded-lg overflow-x-auto mb-4">{children}</pre>
              ),
              a: ({ href, children }) => (
                <a
                  href={href}
                  className="text-blue-400 hover:text-blue-300 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {children}
                </a>
              ),
              img: ({ src, alt }) => {
                if (!src) return null;
                // Avoid wrapping with a div to prevent <div> inside <p> which breaks hydration
                return (
                  <img
                    src={src}
                    alt={alt || ''}
                    className="max-w-full h-auto rounded-lg shadow-lg my-6 block"
                  />
                );
              },
              table: ({ children }) => (
                <div className="overflow-x-auto my-6">
                  <table className="min-w-full bg-gray-800 border border-gray-700 rounded-lg">
                    {children}
                  </table>
                </div>
              ),
              thead: ({ children }) => <thead className="bg-gray-700">{children}</thead>,
              tbody: ({ children }) => <tbody>{children}</tbody>,
              tr: ({ children }) => <tr className="border-b border-gray-700">{children}</tr>,
              th: ({ children }) => (
                <th className="px-4 py-3 text-left text-white font-semibold">{children}</th>
              ),
              td: ({ children }) => <td className="px-4 py-3 text-gray-300">{children}</td>,
              hr: () => <hr className="my-8 border-gray-700" />,
            }}
          >
            {content}
          </ReactMarkdown>
        </div>
      </article>
    </div>
  );
};
