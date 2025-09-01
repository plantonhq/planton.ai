import { FC } from 'react';
import { Box, Stack } from '@mui/material';
import { TypoH2, TypoP1 } from '../../common';
import { SolutionGridBox } from './solutions-designed';

export const EmpoweringEveryRole: FC = () => {
  return (
    <Stack className="relative items-center overflow-hidden py-28 bg-[linear-gradient(180.42deg,_#FF6D1F_-82.69%,_#000000_15.48%)]">
      <Stack className="gap-11 items-center max-w-[1550px]">
        <TypoH2 className="max-w-[1300px] text-center">
          Empowering Every Role in Your Organization
        </TypoH2>
        <TypoP1 className="text-text-secondary text-center max-w-[1240px]">
          Tailored solutions to enhance productivity and collaboration across all roles.
        </TypoP1>
        <Box className="relative grid grid-cols-2 gap-8">
          <SolutionGridBox
            imgSrc="/images/solutions/grid-icon-4.svg"
            title="Developers"
            subTitle="Build Faster, Deploy Smarter"
            desc="Focus on coding, not infrastructure. Let Planton Cloud handle the DevOps complexities so you can innovate without barriers and bring your ideas to life quickly."
            url=""
            className=""
          />
          <SolutionGridBox
            imgSrc="/images/solutions/grid-icon-5.svg"
            title="Startup Founders"
            subTitle="From Idea to Market at Lightning Speed"
            desc="Accelerate your startup's growth without the DevOps overhead. Empower your team to innovate rapidly and get your product to market faster than the competition."
            url=""
            className=""
          />
          <SolutionGridBox
            imgSrc="/images/solutions/grid-icon-6.svg"
            title="Engineering Leaders"
            subTitle="Drive Efficiency and Innovation"
            desc="Enhance team performance, streamline operations, and reduce costs with AI-enabled DevOps solutions. Make informed decisions with real-time insights and analytics."
            url=""
            className=""
          />
          <SolutionGridBox
            imgSrc="/images/solutions/grid-icon-5.svg"
            title="Ops Engineers"
            subTitle="Unleash Your Automation Skills"
            desc="Focus on building impactful automation without the burden of extensive documentation. Provide self-service capabilities to your developers and streamline operations."
            url=""
            className=""
          />
        </Box>
      </Stack>
      <img
        src="/images/solutions/torus.svg"
        className="w-[800px] aspect-square absolute bottom-0 left-1/2 transform -translate-x-[calc(50%+850px)] blur-[200px]"
      />
    </Stack>
  );
};
