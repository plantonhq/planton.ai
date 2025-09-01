import { FC } from 'react';
import { Stack } from '@mui/material';
import { TypoH2, TypoP1 } from '@/components/common';

export const FocusOnInnovation: FC = () => {
  return (
    <Stack className="w-full items-center py-24 bg-black">
      <Stack className="relative items-center gap-12 text-center max-w-[1500px]">
        <TypoH2 className="max-w-[1100px]">Focus on Innovation, Leave Operations to Us</TypoH2>
        <TypoP1 className="text-text-secondary max-w-[1500px]">
          Your time is best spent innovating, not managing servers and deployments. Planton Cloud
          automates operational tasks, so your team can dedicate their energy to building the next
          big thing.{' '}
        </TypoP1>
        <Stack className="w-full relative p-14 rounded-[59px] bg-[linear-gradient(179.28deg,_#000000_39.75%,_#44309e5e_82.96%,_#8b5cda5e_94.19%,_#e2cbf75e_101.53%)]">
          <img src="/images/solutions/by-role/startup-founder/yaml-2.svg" />
          <img src="/images/solutions/by-role/startup-founder/bottom-layer.svg" className="absolute bottom-0" />
        </Stack>
      </Stack>
    </Stack>
  );
};
