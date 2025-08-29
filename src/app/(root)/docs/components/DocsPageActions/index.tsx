'use client';

import React, { useState } from 'react';
import { CopyButton } from '@/app/(root)/docs/components/DocsPageActions/CopyButton';
import { ActionsMenu } from '@/app/(root)/docs/components/DocsPageActions/ActionsMenu';
import { CopySnackbar } from '@/app/(root)/docs/components/DocsPageActions/CopySnackbar';
import { MarkdownViewDialog } from '@/app/(root)/docs/components/DocsPageActions/MarkdownViewDialog';

interface DocsPageActionsProps {
  markdownContent: string;
  title?: string;
  path: string;
  hideCopyMarkdown?: boolean;
  hideViewMarkdown?: boolean;
}

export const DocsPageActions: React.FC<DocsPageActionsProps> = ({
  markdownContent,
  title = 'Documentation',
  path,
  hideCopyMarkdown = false,
  hideViewMarkdown = false,
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [showCopied, setShowCopied] = useState(false);
  const [showViewDialog, setShowViewDialog] = useState(false);
  const [copiedText, setCopiedText] = useState('');

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleCopyAsMarkdown = async () => {
    try {
      await navigator.clipboard.writeText(markdownContent);
      setCopiedText('Markdown copied to clipboard!');
      setShowCopied(true);
    } catch {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = markdownContent;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopiedText('Markdown copied to clipboard!');
      setShowCopied(true);
    }
    handleMenuClose();
  };

  const handleOpenSourceContent = () => {
    window.open(`${path}.md`, '_blank');
  };

  const handleViewAsMarkdown = () => {
    setShowViewDialog(true);
    handleMenuClose();
  };

  const handleCloseViewDialog = () => {
    setShowViewDialog(false);
  };

  const handleCloseSnackbar = () => {
    setShowCopied(false);
  };

  if (hideCopyMarkdown && hideViewMarkdown) {
    return <></>;
  }

  return (
    <>
      <CopyButton onClick={handleMenuOpen} />

      <ActionsMenu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        onCopyAsMarkdown={handleCopyAsMarkdown}
        onViewAsMarkdown={handleViewAsMarkdown}
        hideCopyMarkdown={hideCopyMarkdown}
        hideViewMarkdown={hideViewMarkdown}
      />

      <CopySnackbar open={showCopied} message={copiedText} onClose={handleCloseSnackbar} />

      <MarkdownViewDialog
        open={showViewDialog}
        onClose={handleCloseViewDialog}
        markdownContent={markdownContent}
        title={title}
        onCopyAsMarkdown={handleCopyAsMarkdown}
        onOpenSource={handleOpenSourceContent}
      />
    </>
  );
};
