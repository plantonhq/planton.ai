import React from 'react';
import { Button } from '@mui/material';
import {
  ContentCopy,
  KeyboardArrowDown as ChevronDownIcon,
} from '@mui/icons-material';

interface CopyButtonProps {
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
}

export const CopyButton: React.FC<CopyButtonProps> = ({ onClick }) => {
  return (
    <Button
      onClick={onClick}
      variant="outlined"
      size="small"
      className="hover:!bg-gray-700 text-gray-600 hover:text-white border-gray-300 hover:border-gray-700 rounded-lg px-3 py-2 normal-case font-medium shadow-sm transition-all duration-200"
      startIcon={
        <ContentCopy className="text-gray-400 hover:text-gray-700 transition-colors duration-200" />
      }
      endIcon={
        <ChevronDownIcon className="text-gray-400 hover:text-gray-700 transition-colors duration-200" />
      }
    >
      Copy page
    </Button>
  );
};
