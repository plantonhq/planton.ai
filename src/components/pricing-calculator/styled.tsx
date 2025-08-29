'use client';

import { Input, Slider, Stack, styled, Tab, Tabs } from '@mui/material';

export const StyledUl = styled('ul')(() => ({
  listStyle: 'inherit !important',
  '& li, li::marker': {
    color: '#ABABAB',
  },
}));

export const StyledPriceCard = styled(Stack, {
  shouldForwardProp: (prop) => prop !== '$isMostPopular',
})<{ $isMostPopular?: boolean }>(({ $isMostPopular }) => ({
  border: !$isMostPopular ? '3px solid #282828 !important' : 'none',
  '&::before': $isMostPopular
    ? {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(101.33deg, #C58123 -7.23%, #603801 85.32%)',
        borderRadius: 'inherit',
        padding: '3px',
        WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
        WebkitMaskComposite: 'destination-out',
        maskComposite: 'exclude',
        pointerEvents: 'none',
      }
    : '',
}));

export const StyledSlider = styled(Slider)(() => ({
  color: '#0099FF',
  height: 4,
  '& .MuiSlider-thumb': {
    width: 10,
    height: 10,
    backgroundColor: '#E2E2E2',
    border: '2px solid #E2E2E2',
  },
  '& .MuiSlider-track': {
    backgroundColor: '#FFFFFF',
  },
  '& .MuiSlider-rail': {
    backgroundColor: '#0D0D0D',
  },
}));

export const StyledInput = styled(Input)(() => ({
  width: '110px',
  height: '30px',
  backgroundColor: '#262629',
  border: '0.7px solid #2B2B2D',
  borderRadius: '8px',
  padding: '8px',
  color: 'white',
}));

export const CardTabs = styled(Tabs)(({ theme }) => ({
  borderRadius: 91,
  padding: theme.spacing(1),
  backgroundColor: '#5050503D',
  '& .MuiTabs-flexContainer': {
    width: '100%',
    '& .MuiTab-root': {
      flexGrow: 1,
    },
  },
}));

export const CardTab = styled(Tab)(({ theme }) => ({
  borderRadius: 84,
  padding: `${theme.spacing(1)} !important`,
  [`&.Mui-selected`]: {
    background:
      'linear-gradient(270deg, rgba(253, 169, 53, 0.24) -121.1%, rgba(8, 7, 10, 0.24) 85.7%) !important',
    border: '1px solid #2B2B2B !important',
  },
}));
