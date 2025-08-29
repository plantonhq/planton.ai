import { FC } from 'react';
import { Box, Stack } from '@mui/material';
import { TypoH2, TypoP1 } from '../../common';
import { SolutionGridBox } from './solutions-designed';

export const UniqueUseCases: FC = () => {
  return (
    <Stack className="relative items-center overflow-hidden py-28 bg-[linear-gradient(180.42deg,_#FF6D1F_-82.69%,_#000000_15.48%)]">
      <Stack className="gap-11 items-center max-w-[1550px]">
        <TypoH2 className="max-w-[1200px] text-center">Solutions for Your Unique Use Cases</TypoH2>
        <TypoP1 className="text-text-secondary text-center max-w-[1240px]">
          Address your specific challenges with our specialized solutions.
        </TypoP1>
        <Box className="relative grid grid-cols-2 gap-8">
          <SolutionGridBox
            imgSrc="/images/solutions/grid-icon-7.svg"
            title="ChatOps"
            subTitle="Revolutionize Operations with AI-Powered Chat"
            desc="Simplify DevOps tasks through conversational interfaces. Manage deployments and configurations directly via chat with our AI assistant, Plantora, enhancing collaboration and efficiency."
            url=""
            className=""
          />
          <SolutionGridBox
            imgSrc="/images/solutions/grid-icon-8.svg"
            title="Internal Developer Platform"
            subTitle="Empower Developers with Self-Service Tools"
            desc="Streamline your development workflow with an internal platform offering self-service capabilities, AI assistance, and multi-cloud deployments. Boost productivity and consistency."
            url=""
            className=""
          />
          <SolutionGridBox
            imgSrc="/images/solutions/grid-icon-9.svg"
            title="Simplify Your Multi-Cloud Strategy"
            subTitle="Enterprise-Grade Security and Compliance"
            desc="Deploy and manage applications across multiple cloud providers from one unified platform. Embrace the benefits of multi-cloud without the complexity and fragmentation."
            url=""
            className="col-span-2"
          />
        </Box>
      </Stack>
      <img
        src="/images/solutions/burger.svg"
        className="w-[700px] aspect-square absolute bottom-0 right-1/2 transform translate-x-[calc(50%+750px)]"
      />
    </Stack>
  );
};
