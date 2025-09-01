'use client';

import { Box, Tab, Tabs, styled } from '@mui/material';

export const StyledTabs = styled(Tabs)(() => ({
  border: '1px solid #515151 !important',
  borderRadius: 91,
  padding: 8,
  backgroundColor: '#1E22283D',
}));

export const StyledTab = styled(Tab)(() => ({
  borderRadius: 84,
  padding: '8px 16px !important',
  [`&.Mui-selected`]: {
    background:
      'linear-gradient(251.86deg, rgba(138, 51, 145, 0.24) -18.83%, rgba(50, 38, 67, 0.24) 109.76%) !important',
    border: '1px solid #515151 !important',
  },
}));

export const StyledTabs2 = styled(Tabs)(() => ({
  borderRadius: 91,
  padding: 6,
  backgroundColor: '#0000004D',
}));

export const StyledTab2 = styled(Tab)(() => ({
  borderRadius: 84,
  padding: '8px 16px !important',
  [`&.Mui-selected`]: {
    background: 'linear-gradient(262deg, #8A3391 6.35%, #322643 110.73%) !important',
  },
}));

interface TabPanelProps {
  children?: React.ReactNode;
  index: number | string;
  value: number | string;
}

export const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
};
