'use client';

import React from 'react';
import { ContentCopy } from '@mui/icons-material';

interface CodeBlockProps {
  children: React.ReactNode;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ children }) => {
  const preRef = React.useRef<HTMLPreElement>(null);
  const [copied, setCopied] = React.useState(false);
  
  const handleCopy = async () => {
    try {
      if (preRef.current) {
        const codeElement = preRef.current.querySelector('code');
        if (codeElement && codeElement.textContent) {
          await navigator.clipboard.writeText(codeElement.textContent);
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        }
      }
    } catch (err) {
      console.error('Failed to copy code: ', err);
    }
  };

  return (
    <div className="relative group">
      <pre ref={preRef} className="bg-gray-800 p-4 rounded-lg overflow-x-auto mb-4">
        {children}
      </pre>
      <button
        onClick={handleCopy}
        className={`absolute top-2 right-2 p-2 rounded transition-all duration-200 opacity-0 group-hover:opacity-100 ${
          copied 
            ? 'text-green-400 bg-green-700 hover:bg-green-600' 
            : 'text-gray-400 hover:text-white bg-gray-700 hover:bg-gray-600'
        }`}
        title={copied ? "Copied!" : "Copy code"}
      >
        {copied ? (
          <div className="h-4 w-4 flex items-center justify-center">
            <span className="text-xs">✓</span>
          </div>
        ) : (
          <ContentCopy className="h-4 w-4" />
        )}
      </button>
    </div>
  );
};
