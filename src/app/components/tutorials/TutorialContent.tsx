'use client';

import React from 'react';
import { MDXRenderer } from '@/lib/MDXRenderer';
import { MDXParserClient } from '@/lib/mdx-client';
import { useNextArticle } from '@/app/hooks/useNextArticle';

interface NextArticle {
  title: string;
  excerpt?: string;
  slug: string;
}

interface TutorialContentProps {
  slug: string;
  tutorialContent: string;
  allTutorials: any[];
  nextArticle?: NextArticle; // Fallback for static generation
}

export function TutorialContent({ slug, tutorialContent, allTutorials, nextArticle }: TutorialContentProps) {
  const mdxContent = MDXParserClient.reconstructMDX(tutorialContent);

  // Use the reusable hook to calculate next article
  const dynamicNextArticle = useNextArticle({
    slug,
    allItems: allTutorials,
    nextArticle,
    basePath: '/tutorials'
  });

  return (
    <div className="p-8">
      <MDXRenderer 
        mdxContent={mdxContent} 
        markdownContent={tutorialContent}
        nextArticle={dynamicNextArticle}
        path={slug}
      />
    </div>
  );
}
