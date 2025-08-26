'use client';

import React, { useEffect, useState } from 'react';

interface HeadingItem {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  content: string;
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ content }) => {
  const [headings, setHeadings] = useState<HeadingItem[]>([]);

  // Extract headings from the content
  useEffect(() => {
    if (content) {
      const lines = content.split('\n');
      const extractedHeadings: HeadingItem[] = [];
      let inCodeBlock = false;
      let inIndentedCodeBlock = false;
      let codeBlockDepth = 0;

      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        const trimmedLine = line.trim();

        // Skip empty lines
        if (trimmedLine === '') {
          continue;
        }

        // Handle fenced code blocks
        if (trimmedLine.startsWith('```')) {
          if (!inCodeBlock) {
            inCodeBlock = true;
            codeBlockDepth++;
          } else {
            codeBlockDepth--;
            if (codeBlockDepth === 0) {
              inCodeBlock = false;
            }
          }
          continue;
        }

        // Handle indented code blocks (4+ spaces or tabs)
        if (line.startsWith('    ') || line.startsWith('\t')) {
          inIndentedCodeBlock = true;
          continue;
        } else if (inIndentedCodeBlock && trimmedLine !== '') {
          // Exit indented code block if we hit a non-empty, non-indented line
          inIndentedCodeBlock = false;
        }

        // Skip if we're inside any type of code block
        if (inCodeBlock || inIndentedCodeBlock) {
          continue;
        }

        // Look for markdown headings
        const headingMatch = trimmedLine.match(/^(#{1,6})\s+(.+)$/);
        if (headingMatch) {
          const level = headingMatch[1].length;
          const text = headingMatch[2].trim();

          // Skip very short headings (likely code comments)
          if (text.length < 3) {
            continue;
          }

          // Skip single-word headings that are common in code
          if (text.split(' ').length === 1 && 
              ['Build', 'Production', 'Install', 'Copy', 'Create', 'User', 'Volume', 'Expose', 'Arg', 'Label', 'Cmd', 'Entrypoint', 'Workdir'].includes(text)) {
            continue;
          }

          // Skip if it looks like a code comment (starts with common code words)
          if (text.match(/^(Build|Production|Install|Copy|Create|User|Volume|Expose|Arg|Label|Cmd|Entrypoint|Workdir)\s+/)) {
            continue;
          }

          const id = text
            .toLowerCase()
            .replace(/[^a-z0-9\s-]/g, '')
            .replace(/\s+/g, '-');

          extractedHeadings.push({ id, text, level });
        }
      }

      setHeadings(extractedHeadings);
    }
  }, [content]);

  if (headings.length === 0) {
    return null;
  }

  // Handle smooth scrolling for navigation links
  const handleNavigationClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();

    // Update the URL hash
    window.history.pushState(null, '', `#${targetId}`);

    // Smooth scroll to the target element with offset for sticky header
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const targetPosition = targetElement.offsetTop - 70;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="flex-1 overflow-y-auto p-4">
      <h3 className="text-lg font-semibold text-white mb-4">On this page</h3>
      <nav className="space-y-2">
        {headings.map((heading) => (
          <a
            key={heading.id}
            href={`#${heading.id}`}
            onClick={(e) => handleNavigationClick(e, heading.id)}
            className={`block text-sm text-gray-400 hover:text-white transition-colors cursor-pointer ${
              heading.level === 1
                ? 'font-semibold'
                : heading.level === 2
                ? 'ml-0'
                : heading.level === 3
                ? 'ml-4'
                : 'ml-6'
            }`}
          >
            {heading.text}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default TableOfContents;
