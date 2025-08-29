'use client';

import React, { useEffect, useState } from 'react';
import AuthorSection from '@/components/blog/AuthorSection';
import TableOfContents from '@/components/blog/TableOfContents';
import { Author } from '@/lib/mdx';

// Custom type with only the properties actually used by the component
interface PostRecord {
  slug: string;
  title: string;
  date: string;
  author: Author[];
  content: string;
}

interface IMdxRightBar {
  author: Author[];
  content: string;
}

const MdxRightBar: React.FC<IMdxRightBar> = ({ author, content }) => {
  return (
    <div className="w-80 bg-black/95  h-full flex flex-col">
      {/* Author Section */}
      <AuthorSection author={author} />
      <div className="border-b border-gray-800" />
      {/* Table of Contents */}
      <TableOfContents content={content} />
    </div>
  );
};

export { MdxRightBar };
