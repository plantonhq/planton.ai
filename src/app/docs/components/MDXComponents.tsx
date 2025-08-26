'use client';

import { MDXComponents } from 'mdx/types';
import { Box, Paper, Tabs as MuiTabs, Tab as MuiTab, Typography, Divider } from '@mui/material';
import React, { ReactNode, useState } from 'react';
import CloudflareVideo from '@/app/components/media/CloudflareVideo';

export function Callout({ type = 'note', title, children }: { type?: 'note' | 'tip' | 'warning'; title?: string; children: ReactNode }) {
  const border = type === 'warning' ? 'border-red-500' : type === 'tip' ? 'border-green-500' : 'border-blue-500';
  return (
    <Paper className={`border-l-4 ${border} bg-gray-800 p-4 mb-4`}>
      {title && (
        <Typography className="text-white font-semibold mb-1">
          {title}
        </Typography>
      )}
      {/* Preserve rich children (lists, code, headings) instead of forcing Typography */}
      <Box className="text-gray-300 leading-relaxed">{children}</Box>
    </Paper>
  );
}

export function Card({ title, children }: { title?: string; children: ReactNode }) {
  return (
    <Paper className="bg-gray-800 p-4 mb-4 border border-gray-700">
      {title && <Typography className="text-white font-semibold mb-2">{title}</Typography>}
      {/* Preserve rich children (lists, code, headings) instead of forcing Typography */}
      <Box className="text-gray-300">{children}</Box>
    </Paper>
  );
}

export function Cards({ columns = 2, children }: { columns?: 1 | 2 | 3 | 4; children: ReactNode }) {
  const gridCols = columns === 4 ? 'grid-cols-4' : columns === 3 ? 'grid-cols-3' : columns === 1 ? 'grid-cols-1' : 'grid-cols-2';
  return <Box className={`grid ${gridCols} gap-4 mb-4`}>{children}</Box>;
}

export function Tabs({ defaultValue = 0, children }: { defaultValue?: number; children: ReactNode }) {
  const [value, setValue] = useState(defaultValue);
  const tabs: ReactNode[] = [];
  const panels: ReactNode[] = [];

  React.Children.forEach(children, child => {
    const element = child as React.ReactElement<{ label: string; children: ReactNode }>;
    if (!element || element.type !== Tab) return;
    tabs.push(element.props.label);
    panels.push(element.props.children);
  });

  return (
    <Box className="mb-4">
      <MuiTabs value={value} onChange={(_, v) => setValue(v)} variant="scrollable" scrollButtons allowScrollButtonsMobile>
        {tabs.map((label, idx) => (
          <MuiTab key={idx} label={label as string} />
        ))}
      </MuiTabs>
      <Box className="mt-4">
        {panels.map((panel, idx) => (
          <div key={idx} style={{ display: value === idx ? 'block' : 'none' }}>{panel}</div>
        ))}
      </Box>
    </Box>
  );
}

export function Tab({ label: _label, children }: { label: string; children: ReactNode }) {
  return <>{children}</>;
}

export const mdxComponents: MDXComponents = {
  // Base typography and elements
  h1: ({ children }) => (
    <Typography variant="h3" className="text-white mb-6 mt-8 first:mt-0">{children}</Typography>
  ),
  h2: ({ children }) => (
    <Typography variant="h4" className="text-white mb-4 mt-8">{children}</Typography>
  ),
  h3: ({ children }) => (
    <Typography variant="h5" className="text-white mb-3 mt-6">{children}</Typography>
  ),
  h4: ({ children }) => (
    <Typography variant="h6" className="text-white mb-2 mt-4">{children}</Typography>
  ),
  h5: ({ children }) => (
    <Typography variant="subtitle1" className="text-white mb-2 mt-4 font-semibold">{children}</Typography>
  ),
  h6: ({ children }) => (
    <Typography variant="subtitle2" className="text-white mb-2 mt-4 font-semibold">{children}</Typography>
  ),
  p: ({ children }) => (
    <Typography className="text-gray-300 mb-4 leading-relaxed">{children}</Typography>
  ),
  ul: ({ children }) => (
    <Box component="ul" className="list-disc list-inside mb-4 space-y-2">{children}</Box>
  ),
  ol: ({ children }) => (
    <Box component="ol" className="list-decimal list-inside mb-4 space-y-2">{children}</Box>
  ),
  li: ({ children }) => (
    <Typography component="li" className="text-gray-300">{children}</Typography>
  ),
  blockquote: ({ children }) => (
    <Paper className="border-l-4 border-blue-500 bg-gray-800 p-4 mb-4">
      <Typography className="text-gray-300 italic">{children}</Typography>
    </Paper>
  ),
  code: ({ children, className }: { children?: ReactNode; className?: string }) => {
    const isInline = !className;
    if (isInline) {
      return (
        <code className="bg-gray-800 text-blue-400 px-1 py-0.5 rounded text-sm font-mono">{children}</code>
      );
    }
    return (
      <Box component="code" className={className}>{children}</Box>
    );
  },
  pre: ({ children }) => (
    <Paper className="bg-gray-800 p-4 mb-4 overflow-x-auto">
      <pre className="text-sm text-gray-300">{children}</pre>
    </Paper>
  ),
  table: ({ children }) => (
    <Box className="overflow-x-auto mb-4">
      <table className="min-w-full border-collapse border border-gray-600">{children}</table>
    </Box>
  ),
  thead: ({ children }) => <thead className="bg-gray-800">{children}</thead>,
  tbody: ({ children }) => <tbody className="bg-gray-900">{children}</tbody>,
  tr: ({ children }) => <tr className="border-b border-gray-600">{children}</tr>,
  th: ({ children }) => (
    <th className="border border-gray-600 px-4 py-2 text-left text-white font-semibold">{children}</th>
  ),
  td: ({ children }) => (
    <td className="border border-gray-600 px-4 py-2 text-gray-300">{children}</td>
  ),
  hr: () => <Divider className="my-8 border-gray-600" />,
  a: ({ href, children }: { href?: string; children?: ReactNode }) => (
    <a
      href={href}
      className="text-blue-400 hover:text-blue-300 underline"
      target={href?.startsWith('http') ? '_blank' : undefined}
      rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
    >
      {children}
    </a>
  ),
  strong: ({ children }) => (
    <Typography component="span" className="font-semibold text-white">{children}</Typography>
  ),
  em: ({ children }) => (
    <Typography component="span" className="italic text-gray-300">{children}</Typography>
  ),

  Callout,
  Cards,
  Card,
  Tabs,
  Tab,
  // Allow direct component usage in MDX, e.g. <CloudflareVideo url="..." />
  CloudflareVideo,
};


