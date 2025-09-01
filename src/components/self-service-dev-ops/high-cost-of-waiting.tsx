import { FC } from 'react';
import { Box, Stack } from '@mui/material';
import { TypoH2, TypoH3, TypoP1 } from '../common';

export const HighCostOfWaiting: FC = () => {
  return (
    <Stack className="items-center bg-[#161A1F] pt-36 pb-4 gap-12">
      <Stack className={`max-w-[1225px] items-center text-center gap-8`}>
        <TypoH2>The High Cost of Waiting</TypoH2>
        <TypoP1 className={`text-center text-text-secondary`}>
          Traditional ticket-based systems slow down progress and frustrate your team. Every minute
          spent waiting on approvals is a minute not spent innovating. Planton Cloud removes these
          obstacles, transforming weeks of waiting into instant action.
        </TypoP1>
        <img src="/images/features/planton-copilot/chatbox-2.svg" className="" />
      </Stack>
      <Stack className={`max-w-[1225px] gap-8`}>
        <TypoH3>Unleash the Power of Self-Service DevOps</TypoH3>
        <TypoP1 className={` text-text-secondary`}>
          Say goodbye to delays and dependencies. Planton Cloud empowers your developers with
          instant access to the tools and resources they need to innovate without boundaries.
          Accelerate your development cycles and outpace the competition with our AI-driven
          platform.
        </TypoP1>
      </Stack>
      <Stack className="relative items-center overflow-hidden w-full pt-8 pb-16">
        <img src="/images/features/planton-copilot/gradient-card-3.svg" className="max-w-[1200px] z-10" />
        <Box
          className="absolute bottom-0 left-1/2 top-1/2 transform -translate-x-1/2
          w-[3872px] h-[1300px] bg-[radial-gradient(50%_50%_at_50%_50%,_#055DFF_0%,_rgba(0,_0,_0,_0)_100%)]"
        />
      </Stack>
    </Stack>
  );
};
