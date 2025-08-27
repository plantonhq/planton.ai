'use client';

import { FC } from 'react';
import { MDXProvider } from '@mdx-js/react';
import { mdxComponents } from './MDXComponents';
import { Box, Typography, Paper, Divider } from '@mui/material';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import CloudflareVideo, { getEmbedInfoFromUrl } from '@/app/components/media/CloudflareVideo';

interface MDXRendererProps {
  content: string;
}

// We keep compatibility: .md pages can use MDX components.
export const MDXRenderer: FC<MDXRendererProps> = ({ content }) => {
  return (
    <MDXProvider components={mdxComponents}>
      <Box className="prose prose-invert max-w-none">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
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
                      return <CloudflareVideo url={href} />;
                    }
                  }
                }
              } catch {}
              return (
                <Typography className="text-gray-300 mb-4 leading-relaxed">{children}</Typography>
              );
            },
            h1: ({ children }) => (
              <Typography variant="h3" className="text-white mb-6 mt-8 first:mt-0">
                {children}
              </Typography>
            ),
            h2: ({ children }) => (
              <Typography variant="h4" className="text-white mb-4 mt-8">
                {children}
              </Typography>
            ),
            h3: ({ children }) => (
              <Typography variant="h5" className="text-white mb-3 mt-6">
                {children}
              </Typography>
            ),
            h4: ({ children }) => (
              <Typography variant="h6" className="text-white mb-2 mt-4">
                {children}
              </Typography>
            ),
            h5: ({ children }) => (
              <Typography variant="subtitle1" className="text-white mb-2 mt-4 font-semibold">
                {children}
              </Typography>
            ),
            h6: ({ children }) => (
              <Typography variant="subtitle2" className="text-white mb-2 mt-4 font-semibold">
                {children}
              </Typography>
            ),
            ul: ({ children }) => (
              <Box component="ul" className="list-disc list-inside mb-4 space-y-2">
                {children}
              </Box>
            ),
            ol: ({ children }) => (
              <Box component="ol" className="list-decimal list-inside mb-4 space-y-2">
                {children}
              </Box>
            ),
            li: ({ children }) => (
              <Typography component="li" className="text-gray-300">
                {children}
              </Typography>
            ),
            blockquote: ({ children }) => (
              <Paper className="border-l-4 border-blue-500 bg-gray-800 p-4 mb-4">
                <Box className="text-gray-300 italic">{children}</Box>
              </Paper>
            ),
            code: ({ children, className }) => {
              const isInline = !className;
              if (isInline) {
                return (
                  <code className="bg-gray-800 text-blue-400 px-1 py-0.5 rounded text-sm font-mono">{children}</code>
                );
              }
              return (
                <Box component="code" className={className}>
                  {children}
                </Box>
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
            a: ({ href, children }) => (
              <a
                href={href as string}
                className="text-blue-400 hover:text-blue-300 underline"
                target={(href as string)?.startsWith('http') ? '_blank' : undefined}
                rel={(href as string)?.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                {children}
              </a>
            ),
            strong: ({ children }) => (
              <Typography component="span" className="font-semibold text-white">
                {children}
              </Typography>
            ),
            em: ({ children }) => (
              <Typography component="span" className="italic text-gray-300">
                {children}
              </Typography>
            ),
          }}
        >
          {content}
        </ReactMarkdown>
      </Box>
    </MDXProvider>
  );
};


