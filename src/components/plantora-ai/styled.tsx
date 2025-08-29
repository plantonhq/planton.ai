'use client';

import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledAiBtn = styled(Button)(({ theme }) => ({
  position: 'relative',
  backgroundColor: '#1589FE21 !important',
  padding: `${theme.spacing(1.25)} !important`,
  border: 'none',
  width: 'fit-content',
  borderRadius: '300px',
  color: 'black',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(91.76deg, #0E8BFF -10.53%, #31BEFF 69.59%, #6995AF 128.51%)',
    borderRadius: 'inherit',
    padding: '2px',
    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
    WebkitMaskComposite: 'destination-out',
    maskComposite: 'exclude',
    pointerEvents: 'none',
  },
}));

export const StyledChalBtn = styled(Button)(({ theme }) => ({
  position: 'relative',
  backgroundColor: 'transparent !important',
  padding: `${theme.spacing(1.25)} !important`,
  border: 'none',
  width: 'fit-content',
  borderRadius: '300px',
  color: 'black',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(91.76deg, #FF0E0E -10.53%, #FF3134 69.59%, #FFFFFF 128.51%)',
    borderRadius: 'inherit',
    padding: '2px',
    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
    WebkitMaskComposite: 'destination-out',
    maskComposite: 'exclude',
    pointerEvents: 'none',
  },
}));
