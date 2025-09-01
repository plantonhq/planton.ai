'use client';

import { Accordion, styled } from '@mui/material';

export const StyledAccordion = styled(Accordion)(({ theme }) => ({
  padding: '18px 0px',
  background: 'none',
  borderTop: '1px solid #3D3D3D !important',
  margin: '0 !important',
  '& .MuiAccordionSummary-root': {
    padding: 0,
    paddingRight: theme.spacing(1),
  },
  '& .MuiAccordionSummary-content': {
    margin: 0,
    fontSize: theme.spacing(3),
    fontWeight: 500,
  },
  '& .MuiAccordionDetails-root': {
    fontSize: theme.spacing(2),
    fontWeight: 400,
    color: '#999999',
    padding: 0,
  },
  '&.Mui-expanded .MuiAccordionSummary-expandIconWrapper': {
    transform: 'rotate(45deg)',
  },
  '&:last-child': {
    borderBottom: '1px solid #3D3D3D !important',
  },
}));
