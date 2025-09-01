import { FC } from 'react';
import { Box, Stack } from '@mui/material';
import { TypoH2, TypoP1 } from '@/components/common';

export const ExperienceWithPlantora: FC = () => {
  return (
    <Stack className="w-full relative overflow-hidden items-center gap-28 py-24 bg-[radial-gradient(22.96%_34.96%_at_40.33%_50%,_#000000_0%,_#000000_100%)]">
      <img
        src="/images/solutions/by-role/startup-founder/galaxy-3.svg"
        className="absolute -top-56 left-1/2 transform -translate-x-1/2 -z-0"
      />
      <Stack className="w-full max-w-[1500px] flex-row items-center gap-16">
        <Stack className="w-full h-[550px] items-center relative overflow-hidden pt-12 pr-10 rounded-tr-[68px] bg-[#151617]/5 border border-l-0 border-[#3c3c3c] backdrop-blur-[43px] z-10">
          <Box className="w-full h-full relative">
            <img src="/images/solutions/by-role/startup-founder/chatbox-3.svg" className="absolute right-0 top-0 " />
          </Box>
        </Stack>
        <Stack className="gap-8 max-w-[800px] z-10">
          <TypoH2>Enhance Developer Experience with Plantora</TypoH2>
          <TypoP1 className="text-text-secondary">
            Plantora, your AI Planton Copilot, guides developers through using your automation via
            conversational AI. It assists in discovering modules, understanding configurations, and
            executing deployments, making the developer experience seamless and reducing the support
            load on your team.
          </TypoP1>
        </Stack>
      </Stack>
      <Stack className="w-full max-w-[1500px] flex-row items-center gap-16 z-10">
        <Stack className="gap-8 max-w-[800px] z-10">
          <TypoH2>Flexible Infrastructure Tailored to Your Needs</TypoH2>
          <TypoP1 className="text-text-secondary max-w-[700px]">
            Deploy across various platforms—Kubernetes, AWS Fargate, and more—without complexity.
            Planton Cloud adapts to your infrastructure needs, providing the flexibility to grow and
            evolve your applications.
          </TypoP1>
        </Stack>
        <Stack className="w-full items-center p-10 pr-1 pb-0 rounded-[68px] bg-[#151617]/5 border border-[#3c3c3c] backdrop-blur-[43px] z-10">
          <img src="/images/solutions/by-role/startup-founder/chatbox-3.svg" />
        </Stack>
      </Stack>
    </Stack>
  );
};
