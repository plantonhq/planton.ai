'use client';

import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeHighlight from 'rehype-highlight';
import matter from 'gray-matter';
import { formatDate } from '@/lib/utils';
import { Author } from '@/lib/types-client';
import { DocsPageActions } from '@/app/docs/components/DocsPageActions';
import CloudflareVideo, { getEmbedInfoFromUrl } from '@/app/components/media/CloudflareVideo';
import { CodeBlock } from '@/app/components/common';

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
  nextArticle?: {
    title: string;
    excerpt?: string;
    slug: string;
  };
}

// NextArticle component for navigation
interface NextArticleProps {
  nextArticle?: {
    title: string;
    excerpt?: string;
    slug: string;
  };
}

const NextArticle: React.FC<NextArticleProps> = ({ nextArticle }) => {
  if (!nextArticle) return null;

  return (
    <div className="mt-12 p-6 rounded-lg bg-gray-800 border border-gray-700">
      <div className="max-w-none">
        <p className="text-lg text-gray-400 m-0 font-bold">Next article</p>
        <h3 className="text-xl font-bold text-white m-0 my-2">{nextArticle.title}</h3>
        {nextArticle.excerpt && (
          <div className="relative mb-4 min-h-24">
            <div className="text-gray-300 leading-6 excerpt-text">{nextArticle.excerpt}</div>
            <div className="excerpt-gradient" />
          </div>
        )}
        <a
          href={nextArticle.slug}
          className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition-colors duration-200 hover:translate-y-[-1px] active:translate-y-[1px]"
        >
          Read next article
        </a>
      </div>
    </div>
  );
};

export const MDXRenderer: React.FC<MDXRendererProps> = ({
  mdxContent,
  markdownContent,
  title,
  nextArticle,
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
              <CloudflareVideo url={metadata.featuredVideo} title={metadata.title} />
            </div>
          )}
        </header>

        {/* Content */}
        <div className="prose prose-lg max-w-none prose-invert">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw, rehypeHighlight]}
            components={{
              p: ({ children, node }: any) => {
                try {
                  const rawChildren = Array.isArray(node?.children) ? node.children : [];
                  const nonWhitespace = rawChildren.filter((c: any) => {
                    if (c.type === 'text') {
                      return (c.value || '').trim().length > 0;
                    }
                    return true;
                  });

                  if (nonWhitespace.length === 1) {
                    const only = nonWhitespace[0] as any;
                    // react-markdown provides HAST nodes here: links are type 'element', tagName 'a'
                    if (
                      (only.type === 'element' || only.type === 'elementData') &&
                      (only.tagName === 'a' || only.tagName === 'A') &&
                      typeof only.properties?.href === 'string'
                    ) {
                      const linkText = only.children?.[0]?.value as string | undefined;
                      const href = only.properties.href as string;
                      const shouldEmbed = !linkText || linkText.trim() === href.trim();
                      const embed = getEmbedInfoFromUrl(href);
                      if (shouldEmbed && embed) {
                        return <CloudflareVideo url={href} title={metadata.title} />;
                      }
                    }
                  }
                } catch {}
                return <p className="text-gray-300 mb-4 leading-relaxed">{children}</p>;
              },
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
                  <code className={`bg-gray-800 text-green-400 rounded text-sm ${className || ''}`}>
                    {children}
                  </code>
                );
              },
              pre: ({ children }) => <CodeBlock>{children}</CodeBlock>,
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

        {/* Next Article Section */}
        <NextArticle nextArticle={nextArticle} />
      </article>
    </div>
  );
};
