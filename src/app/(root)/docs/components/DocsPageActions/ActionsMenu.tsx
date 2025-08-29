import React from 'react';
import {
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import {
  ContentCopy,
  Visibility as ViewIcon,
} from '@mui/icons-material';

interface ActionsMenuProps {
  anchorEl: HTMLElement | null;
  open: boolean;
  onClose: () => void;
  onCopyAsMarkdown: () => void;
  onViewAsMarkdown: () => void;
  hideCopyMarkdown?: boolean;
  hideViewMarkdown?: boolean;
}

export const ActionsMenu: React.FC<ActionsMenuProps> = ({
  anchorEl,
  open,
  onClose,
  onCopyAsMarkdown,
  onViewAsMarkdown,
  hideCopyMarkdown = false,
  hideViewMarkdown = false,
}) => {
  // If both options are hidden, don't render the menu
  if (hideCopyMarkdown && hideViewMarkdown) {
    return null;
  }

  return (
    <Menu
      anchorEl={anchorEl}
      open={open}
      onClose={onClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      slotProps={{
        paper: {
          className: 'bg-gray-800 border border-gray-700',
        },
      }}
    >
      {!hideCopyMarkdown && (
        <MenuItem onClick={onCopyAsMarkdown} className="text-gray-300 hover:!bg-blue-600/50">
          <ListItemIcon>
            <ContentCopy className="text-gray-400" />
          </ListItemIcon>
          <ListItemText primary="Copy as Markdown" />
        </MenuItem>
      )}
      {!hideViewMarkdown && (
        <MenuItem onClick={onViewAsMarkdown} className="text-gray-300 hover:!bg-blue-600/50">
          <ListItemIcon>
            <ViewIcon className="text-gray-400" />
          </ListItemIcon>
          <ListItemText primary="View as Markdown" />
        </MenuItem>
      )}
    </Menu>
  );
};
