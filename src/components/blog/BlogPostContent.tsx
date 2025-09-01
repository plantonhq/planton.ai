'use client';

import React from 'react';
import { MDXRenderer } from '@/lib/MDXRenderer';
import { MDXParserClient } from '@/lib/mdx-client';
import { useNextArticle } from '@/hooks/useNextArticle';

interface NextArticle {
  title: string;
  excerpt?: string;
  slug: string;
}

interface BlogPostContentProps {
  slug: string;
  post: string;
  allPosts: any[];
  nextArticle?: NextArticle; // Fallback for static generation
}

export function BlogPostContent({ slug, post, allPosts, nextArticle }: BlogPostContentProps) {
  const mdxContent = MDXParserClient.reconstructMDX(post);

  // Use the reusable hook to calculate next article
  const dynamicNextArticle = useNextArticle({
    slug,
    allItems: allPosts,
    nextArticle,
    basePath: '/blog'
  });

  return (
    <div className="p-8">
      <MDXRenderer 
        mdxContent={mdxContent} 
        markdownContent={post}
        nextArticle={dynamicNextArticle}
        path={slug}
      />
    </div>
  );
}
