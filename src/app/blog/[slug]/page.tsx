import React from 'react';
import { notFound } from 'next/navigation';
import { getBlogPostContentBySlug, getAllBlogPosts, getNextBlogPost, Author } from '@/lib/mdx';
import { hasMarkdownExtension, cleanSlug } from '@/lib/utils';
import { MdxContentLayout } from '@/app/components/common';
import { BlogPostContent } from '@/app/components/blog/BlogPostContent';
import matter from 'gray-matter';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  const params = posts.map((post) => ({
    slug: post.slug,
  }));
  
  // Also add .md and .mdx extension routes for static export compatibility
  // This handles cases where someone visits /blog/post-title.md or .mdx
  const extensionParams = posts.map((post) => [
    { slug: `${post.slug}.md` },
    { slug: `${post.slug}.mdx` }
  ]).flat();
  
  return [...params, ...extensionParams];
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  
  // Check if the route contains .md or .mdx extension
  const hasMarkdownExt = hasMarkdownExtension(slug);
  
  // Strip .md extensions from slug to handle both clean routes and .md routes
  const cleanSlugValue = cleanSlug(slug);
  
  const content = getBlogPostContentBySlug(cleanSlugValue);
  const { data } = matter(content);

  if (!content) {
    notFound();
  }

  const allPosts = getAllBlogPosts();

  // Get next post data on the server side
  const nextPost = getNextBlogPost(cleanSlugValue, allPosts, 'date-desc'); // Default sort for static generation

  // If route contains .md or .mdx extension, return only the raw content
  if (hasMarkdownExt) {
    return (
      <pre className="whitespace-pre-wrap p-6 overflow-auto">
        {content}
      </pre>
    );
  }

  return (
    <MdxContentLayout author={data?.author as unknown as Author[]} content={content} records={allPosts} currentSlug={cleanSlugValue} basePath="/blog">
      <BlogPostContent
        slug={cleanSlugValue}
        post={content}
        allPosts={allPosts}
        nextArticle={
          nextPost
            ? {
                title: nextPost.title,
                excerpt: nextPost.excerpt,
                slug: `/blog/${nextPost.slug}`,
              }
            : undefined
        }
      />
    </MdxContentLayout>
  );
}
