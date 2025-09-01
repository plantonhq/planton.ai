import { FC } from 'react';
import { Box, Stack } from '@mui/material';
import { TypoH2, TypoP1 } from '@/components/common';

export const AIPoweredDevOpsAssistant: FC = () => {
  return (
    <Stack className="pt-36 bg-black items-center ">
      <Stack className="w-full relative max-w-[1600px] flex-row justify-center gap-12">
        <Box className="relative">
          <Box className="relative w-[650px] h-[750px] overflow-y-hidden">
            <img src="/images/solutions/by-size/startups/chatbox-2.svg" />
          </Box>
          <Box className="absolute bottom-0 left-0 transform -translate-x-[30%]">
            <Box className="relative w-[330px] h-[200px] overflow-y-hidden">
              <img src={'/images/startups/robot.svg'} />
            </Box>
          </Box>
        </Box>
        <Stack className="gap-4 max-w-[800px] pt-36">
          <TypoH2>AI-Powered DevOps Assistant: Meet Plantora</TypoH2>
          <TypoP1 className="text-text-secondary">
            Introducing Plantora, your AI-enabled Planton Copilot. Interact via chat to manage
            deployments, configure environments, and receive real-time updates—all without
            navigating complex tools or learning new interfaces.
          </TypoP1>
        </Stack>
        <Box className="w-[647px] aspect-square absolute left-0 transform -translate-x-1/2  bg-[#ed5300]/50 rounded-full blur-[300px] z-0" />
      </Stack>
    </Stack>
  );
};
