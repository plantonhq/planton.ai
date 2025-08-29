import { FC } from 'react';
import { Stack } from '@mui/material';
import { TypoH3, TypoP1 } from '../common';

export const BuiltInIaCWorkflows: FC = () => {
  return (
    <Stack className="items-center overflow-hidden pt-28 bg-[linear-gradient(180deg,_#010205_54.92%,_#152B6B_137.12%)]">
      <Stack className="flex-row items-center gap-16">
        <img src="/images/features/iac-workflows/details.svg" />
        <Stack className="gap-6 max-w-[750px]">
          <TypoH3>Built-In IaC Workflows. It Just Works!!</TypoH3>
          <TypoP1 className="text-text-secondary">
            Discover how Planton Cloud&apos;s integrated Infrastructure-as-Code Continuous
            Integration and Continuous Deployment transforms the way you manage and deploy
            applications. Our platform seamlessly integrates with your existing workflows, providing
            a unified solution for automated, consistent, and efficient multi-cloud deployments.{' '}
          </TypoP1>
        </Stack>
      </Stack>
    </Stack>
  );
};
