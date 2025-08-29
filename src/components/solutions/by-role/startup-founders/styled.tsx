'use client';

import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledPlanton = styled(Typography)(() => ({
  // background: 'linear-gradient(90deg, #ff0000, #0000ff)',
  background: 'transparent',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  WebkitTextStroke: '8px #800080',
  animation: 'loop 20s linear infinite',
  '@keyframes loop': {
    '0%': { transform: 'translateX(0%)' },
    '50%': { transform: 'translateX(-60%)' },
    '100%': { transform: 'translateX(0%)' },
  },
}));
