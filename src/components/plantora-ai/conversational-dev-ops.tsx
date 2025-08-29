import { FC } from 'react';
import { Box, Stack } from '@mui/material';
import { TypoH2, TypoP1 } from '../common';

export const ConversationalDevOps: FC = () => {
  return (
    <Stack className="items-center bg-[#161A1F]">
      <Box className="my-28">
        <Stack className="flex-row gap-6 max-w-[1225px] items-center">
          <Box className="relative">
            <img src={'/images/features/planton-copilot/chatbox-1.svg'} alt="" />
            <img
              className="absolute bottom-0 right-0 w-[185px] h-[160px]"
              src={'/images/features/planton-copilot/face-1.gif'}
            />
          </Box>
          <Stack className="gap-6 max-w-[700px]">
            <TypoH2>Plantora - Your Conversational Planton Copilot</TypoH2>
            <TypoP1 className="text-text-secondary">
              Meet Plantora, the AI-powered Planton Copilot that transforms complex operations into
              simple, intuitive conversations. Powered by advanced large language models and
              multi-agent workflows, Plantora brings the expertise of a seasoned DevOps engineer
              right into your chat window.
            </TypoP1>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  );
};
