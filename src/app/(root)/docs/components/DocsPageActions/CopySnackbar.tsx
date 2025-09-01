import React from 'react';
import { Snackbar, Alert } from '@mui/material';

interface CopySnackbarProps {
  open: boolean;
  message: string;
  onClose: () => void;
}

export const CopySnackbar: React.FC<CopySnackbarProps> = ({
  open,
  message,
  onClose,
}) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={3000}
      onClose={onClose}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
    >
      <Alert onClose={onClose} severity="success" className="bg-green-600 text-white">
        {message}
      </Alert>
    </Snackbar>
  );
};
