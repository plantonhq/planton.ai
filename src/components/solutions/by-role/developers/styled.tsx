'use client';

import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledGradientBorderBox = styled(Box)(() => ({
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(226.92deg, #6665D2 -10.13%, #F26E7E 111.37%)',
    borderRadius: 'inherit',
    padding: '4px',
    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
    WebkitMaskComposite: 'destination-out',
    maskComposite: 'exclude',
    pointerEvents: 'none',
  },
}));
