import React from 'react';
import { notFound } from 'next/navigation';
import { getTutorialContentBySlug, getAllTutorials, getNextTutorial, Author } from '@/lib/mdx';
import { hasMarkdownExtension, cleanSlug } from '@/lib/utils';
import { MdxContentLayout } from '@/app/components/common';
import { TutorialContent } from '@/app/components/tutorials/TutorialContent';
import matter from 'gray-matter';

interface TutorialPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const tutorials = getAllTutorials();
  const params = tutorials.map((tutorial) => ({
    slug: tutorial.slug,
  }));

  // Also add .md and .mdx extension routes for static export compatibility
  // This handles cases where someone visits /tutorials/tutorial-title.md or .mdx
  const extensionParams = tutorials
    .map((tutorial) => [{ slug: `${tutorial.slug}.md` }, { slug: `${tutorial.slug}.mdx` }])
    .flat();

  return [...params, ...extensionParams];
}

export default async function TutorialPage({ params }: TutorialPageProps) {
  const { slug } = await params;

  // Check if the route contains .md or .mdx extension
  const hasMarkdownExt = hasMarkdownExtension(slug);

  // Strip .md extensions from slug to handle both clean routes and .md routes
  const cleanSlugValue = cleanSlug(slug);

  const tutorialContent = getTutorialContentBySlug(cleanSlugValue);
  const { data } = matter(tutorialContent);

  if (!tutorialContent) {
    notFound();
  }

  const allTutorials = getAllTutorials();

  // Get next tutorial data on the server side
  const nextTutorial = getNextTutorial(cleanSlugValue, 'date-desc', allTutorials); // Pass allTutorials to avoid duplicate calls

  // If route contains .md or .mdx extension, return only the raw content
  if (hasMarkdownExt) {
    return <pre className="whitespace-pre-wrap p-6 overflow-auto">{tutorialContent}</pre>;
  }

  return (
    <MdxContentLayout
      author={data?.author as unknown as Author[]}
      content={tutorialContent}
      records={allTutorials}
      currentSlug={cleanSlugValue}
      sectionTitle="Tutorials"
      basePath="/tutorials"
    >
      <TutorialContent
        slug={cleanSlugValue}
        tutorialContent={tutorialContent}
        allTutorials={allTutorials}
        nextArticle={
          nextTutorial
            ? {
                title: nextTutorial.title,
                excerpt: nextTutorial.excerpt,
                slug: `/tutorials/${nextTutorial.slug}`,
              }
            : undefined
        }
      />
    </MdxContentLayout>
  );
}
