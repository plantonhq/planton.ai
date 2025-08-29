import { Metadata } from 'next';
import { Box } from '@mui/material';
import { Calculation, PlansForEveryStage, ReadyToCrunch, ReadyToTry } from '@/components';

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Plans for Every Stage of Your Journey',
};

export default function PricingPage() {
  return (
    <Box>
      <PlansForEveryStage />
      <ReadyToCrunch />
      <Calculation />
      <ReadyToTry />
    </Box>
  );
}
