import { FC } from 'react';
import { Stack } from '@mui/material';
import { TypoH3, TypoP1 } from '../common';

export const StackJobsBundles: FC = () => {
  return (
    <Stack className="items-center overflow-hidden py-48 bg-[#010205]">
      <Stack className="flex-row items-center">
        <img src="/images/features/iac-workflows/stack-job-details.svg" className='relative z-10' />
        <Stack className="gap-4 max-w-[750px] -ml-5 px-8 pt-10 rounded-r-3xl bg-[linear-gradient(160deg,_#402B0E_0%,_#000000_100%)]">
          <TypoH3>Stack Jobs bundles Pulumi Operations</TypoH3>
          <TypoP1 component="span" className="text-text-secondary">
            <TypoP1 component="span" className='text-white'>Stack Jobs</TypoP1> automate complex deployment workflows by
            orchestrating sequences of Pulumi operations based on your configurations. Ensure
            consistency and reliability across all your deployments with minimal effort.
          </TypoP1>
        </Stack>
      </Stack>
    </Stack>
  );
};
