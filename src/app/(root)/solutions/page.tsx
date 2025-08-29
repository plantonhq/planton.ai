import { Metadata } from 'next';
import { Box } from '@mui/material';
import {
  AccelerateYourDevOps,
  EmpoweringEveryRole,
  ReadyToTransformSolution,
  SolutionsDesigned,
  UniqueUseCases,
} from '@/components';

export const metadata: Metadata = {
  title: 'All solutions',
  description: 'Accelerate Your DevOps Journey with AI-Powered Solutions',
};

export default function startupFoundersPage() {
  return (
    <Box>
      <AccelerateYourDevOps />
      <SolutionsDesigned />
      <EmpoweringEveryRole />
      <UniqueUseCases />
      <ReadyToTransformSolution />
    </Box>
  );
}
