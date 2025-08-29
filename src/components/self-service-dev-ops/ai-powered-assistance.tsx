import { FC } from 'react';
import { Stack } from '@mui/material';
import { FlipBox } from '../common';

export const AIPoweredAssistance: FC = () => {
  return (
    <Stack className="relative w-full h-[800px] items-center justify-center bg-[#161A1F]">
      <FlipBox
        title="AI-Powered Assistance for Developers"
        subTitle="Imagine having an expert DevOps engineer available 24/7. Plantora, our AI assistant, turns that vision into reality. Use natural language commands to bootstrap services, configure pipelines, and deploy applications—all through an intuitive chat interface."
        bgImgSrc="/images/features/planton-copilot/gradient-card-1.svg"
        topImgSrc="/images/features/planton-copilot/chatbox-2.svg"
        gap={'56px'}
        reverse
        showPlantoraFace
      />
    </Stack>
  );
};
