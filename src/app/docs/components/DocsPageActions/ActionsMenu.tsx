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
}

export const ActionsMenu: React.FC<ActionsMenuProps> = ({
  anchorEl,
  open,
  onClose,
  onCopyAsMarkdown,
  onViewAsMarkdown,
}) => {
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
      <MenuItem onClick={onCopyAsMarkdown} className="text-gray-300 hover:!bg-blue-600/50">
        <ListItemIcon>
          <ContentCopy className="text-gray-400" />
        </ListItemIcon>
        <ListItemText primary="Copy as Markdown" />
      </MenuItem>
      <MenuItem onClick={onViewAsMarkdown} className="text-gray-300 hover:!bg-blue-600/50">
        <ListItemIcon>
          <ViewIcon className="text-gray-400" />
        </ListItemIcon>
        <ListItemText primary="View as Markdown" />
      </MenuItem>
    </Menu>
  );
};
