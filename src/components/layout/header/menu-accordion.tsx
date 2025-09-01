'use client';
import { ReactNode, SyntheticEvent } from 'react';
import { Typography } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from '@/components/layout/header/styled';

interface IMenuAccordian {
  expanded: boolean;
  title: string;
  children: ReactNode;
  onChange: (event: SyntheticEvent, isExpanded: boolean) => void;
}

export function MenuAccordian({ expanded, title, children, onChange }: IMenuAccordian) {
  return (
    <Accordion expanded={expanded} onChange={onChange}>
      <AccordionSummary>
        <Typography className="summary-content">{title}</Typography>
        {expanded ? <ExpandLess fontSize="small" /> : <ExpandMore fontSize="small" />}
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </Accordion>
  );
}
