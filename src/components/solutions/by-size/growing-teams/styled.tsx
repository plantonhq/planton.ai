'use client';

import { Box, Button, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledTeamBtn = styled(Button)(({ theme }) => ({
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
    background: 'linear-gradient(91.76deg, #8A3391 -10.53%, #4259A1 69.59%, #1CAB98 128.51%)',
    borderRadius: 'inherit',
    padding: '2px',
    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
    WebkitMaskComposite: 'destination-out',
    maskComposite: 'exclude',
    pointerEvents: 'none',
  },
}));

export const StyledGradientBorderBox = styled(Stack, {
  shouldForwardProp: (prop) => prop !== '$borderBg',
})<{ $borderBg?: string; $borderSize?: string }>(({ $borderBg, $borderSize = '4px' }) => ({
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: $borderBg ?? 'linear-gradient(226.92deg, #6665D2 -10.13%, #F26E7E 111.37%)',
    borderRadius: 'inherit',
    padding: $borderSize,
    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
    WebkitMaskComposite: 'destination-out',
    maskComposite: 'exclude',
    pointerEvents: 'none',
  },
}));

export const StyledBorderBox = styled(Box, {
  shouldForwardProp: (prop) => prop !== '$borderBg' && prop !== '$borderSize',
})<{ $borderBg?: string; $borderSize?: string }>(({ $borderBg, $borderSize = '4px' }) => ({
  ...(!!$borderBg && {
    position: 'relative',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: $borderBg ?? '',
      borderRadius: 'inherit',
      padding: $borderSize,
      WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
      WebkitMaskComposite: 'destination-out',
      maskComposite: 'exclude',
      pointerEvents: 'none',
    },
  }),
}));
