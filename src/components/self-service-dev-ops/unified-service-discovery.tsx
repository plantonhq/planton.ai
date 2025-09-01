import { FC } from 'react';
import { Box, Stack } from '@mui/material';
import { TypoH3, TypoP1 } from '../common';

export const UnifiedServiceDiscovery: FC = () => {
  return (
    <Stack className="relative overflow-hidden items-center h-[760px] bg-[#161A1F]">
      <Box className="w-full absolute max-w-[1500px] left-1/2 transform -translate-x-1/2">
        <img src="/images/features/planton-copilot/chatbox-2.svg" className="w-full" />
      </Box>
      <Box className="w-full h-full absolute left-[calc(50%-29px)] max-w-[1290px] transform -translate-x-1/2 top-[52px] rounded-[30px]  mix-blend-darken bg-black/80 shadow-[12px_22px_32px_12px_rgba(0,0,0,0.38)]" />
      <Stack className="w-full h-full absolute items-center justify-center left-[calc(50%-29px)] max-w-[1290px] transform -translate-x-1/2 top-[45px]  ">
        <Stack className={`max-w-[1200px] items-center text-center gap-8 z-20`}>
          <TypoH3>Unified Service Discovery with Service Hub</TypoH3>
          <TypoP1 className={`text-center text-text-secondary`}>
            Gain full visibility into your services with our Service Hub. Access metadata, ownership
            information, and health status all in one place. Collaborate effectively and keep your
            team aligned and informed.
          </TypoP1>
        </Stack>
      </Stack>
      <Box className="absolute -bottom-36 w-full h-[300px] bg-black blur-[150px]" />
    </Stack>
  );
};
