import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Box,
  Typography,
  IconButton,
  Button,
  Stack,
} from '@mui/material';
import { ContentCopy, OpenInNew } from '@mui/icons-material';

interface MarkdownViewDialogProps {
  open: boolean;
  onClose: () => void;
  markdownContent: string;
  title: string;
  onCopyAsMarkdown: () => void;
  onOpenSource: () => void;
}

export const MarkdownViewDialog: React.FC<MarkdownViewDialogProps> = ({
  open,
  onClose,
  markdownContent,
  title,
  onCopyAsMarkdown,
  onOpenSource,
}) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      slotProps={{
        paper: {
          className: 'bg-gray-900 border border-gray-700',
        },
      }}
    >
      <DialogTitle className="text-white border-b border-gray-700">
        <Box className="flex items-center justify-between">
          <Typography variant="h6">{title} - Markdown Source</Typography>
          <Stack direction="row" className="gap-2">
            <IconButton
              onClick={onCopyAsMarkdown}
              className="text-gray-400 hover:text-white transition-colors duration-200"
              size="small"
            >
              <ContentCopy />
            </IconButton>
            <IconButton
              onClick={onOpenSource}
              className="text-gray-400 hover:text-white transition-colors duration-200"
              size="small"
            >
              <OpenInNew />
            </IconButton>
          </Stack>
        </Box>
      </DialogTitle>
      <DialogContent className="p-0">
        <Box className="p-4">
          <pre className="text-sm text-gray-300 bg-gray-800 p-4 rounded-lg overflow-x-auto max-h-96">
            <code>{markdownContent}</code>
          </pre>
        </Box>
      </DialogContent>
      <DialogActions className="border-t border-gray-700 p-4">
        <Button
          onClick={onClose}
          className="text-gray-300 hover:text-white transition-colors duration-200"
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};
