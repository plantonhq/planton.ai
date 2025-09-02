import { useMemo } from 'react';
import { useSortContext } from '@/components/common';
import { generateExcerptFromContent } from '@/lib/utils';

interface NextArticle {
  title: string;
  excerpt?: string;
  slug: string;
}

interface UseNextArticleProps {
  slug: string;
  allItems: any[];
  nextArticle?: NextArticle;
  basePath: string; // e.g., '/blog' or '/tutorials'
}

export function useNextArticle({ slug, allItems, nextArticle, basePath }: UseNextArticleProps) {
  const currentSort = useSortContext();

  return useMemo(() => {
    if (!allItems || allItems.length === 0) return nextArticle;

    // Apply the same sorting logic as the sidebar
    const sortedItems = [...allItems];
    switch (currentSort) {
      case 'date-desc':
        sortedItems.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        break;
      case 'date-asc':
        sortedItems.sort((a, _b) => new Date(a.date).getTime() - new Date(a.date).getTime());
        break;
      case 'title-asc':
        sortedItems.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'title-desc':
        sortedItems.sort((a, b) => b.title.localeCompare(a.title));
        break;
    }

    const currentIndex = sortedItems.findIndex(item => item.slug === slug);
    if (currentIndex === -1 || currentIndex === sortedItems.length - 1) {
      return undefined;
    }

    const nextItem = sortedItems[currentIndex + 1];
    return {
      title: nextItem.title,
      excerpt: generateExcerptFromContent(nextItem.content || ''),
      slug: `${basePath}/${nextItem.slug}`
    };
  }, [currentSort, allItems, slug, nextArticle, basePath]);
}
