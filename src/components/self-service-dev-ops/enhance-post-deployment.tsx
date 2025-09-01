import { FC } from 'react';
import { Box, Stack } from '@mui/material';
import { TypoH3, TypoP1 } from '../common';
import { DevOpsHomeBanner } from './developer-autonomy';

export const EnhancePostDeployment: FC = () => {
  return (
    <Stack className="relative overflow-hidden items-center bg-[#161A1F] pt-24 gap-8">
      <Stack className={`max-w-[1225px] items-center text-center gap-8`}>
        <TypoH3>Enhance Post-Deployment Operations</TypoH3>
        <TypoP1 className={`text-center text-text-secondary`}>
          Traditional ticket-based systems slow down progress and frustrate your team. Every minute
          spent waiting on approvals is a minute not spent innovating. Planton Cloud removes these
          obstacles, transforming weeks of waiting into instant action.
        </TypoP1>
      </Stack>
      <DevOpsHomeBanner />
      <Box className="absolute w-full h-[300px] -bottom-40 bg-black rounded-[500px] blur-3xl" />
    </Stack>
  );
};
