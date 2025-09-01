import { FC, ImgHTMLAttributes } from 'react';
import { Box, Stack } from '@mui/material';
import {
  BookDemoBtn,
  GetStartedBtn,
  SquareBoxes,
  TypoH2,
  TypoH3,
  TypoP1,
} from '@/components/common';
import { InnovationBox } from '@/components/solutions';

const WorldMapImg: FC<ImgHTMLAttributes<HTMLImageElement>> = ({ className, ...props }) => (
  <img
    src="/images/features/iac-workflows/world-map.svg"
    className={`absolute top-0 right-1/2 transform translate-x-[50%] ${className}`}
    {...props}
  />
);

const WorldMapImgSmall: FC<ImgHTMLAttributes<HTMLImageElement>> = ({ className, ...props }) => (
  <img
    src="/images/features/iac-workflows/world-map-small.svg"
    className={`absolute top-0 right-0 transform ${className}`}
    {...props}
  />
);

export const EfficiencyAndControl: FC = () => {
  return (
    <Stack className="relative overflow-hidden items-center bg-[#010205]">
      <Stack className="w-full relative overflow-hidden items-center px-5 md:px-0 pt-8 md:pt-28 pb-8">
        <Box className="absolute w-full max-w-[2000px] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0">
          <SquareBoxes columns={6} rows={10} className="md:hidden" />
          <SquareBoxes columns={13} rows={8} className="hidden md:flex" />
        </Box>
        <WorldMapImg className="hidden md:block" />
        <WorldMapImg className="hidden md:block mix-blend-lighten blur-[160px]" />
        <WorldMapImgSmall className="md:hidden" />
        <Box
          sx={{ borderRadius: '50%' }}
          className="hidden md:block w-[1440px] aspect-[1.24] absolute left-1/2 top-24 transform -translate-y-[30%] -translate-x-[78%] blur-[150px] bg-[linear-gradient(91.52deg,_#000000_58.27%,_#646464_229.43%,_#666666_233.56%)]"
        />
        <Stack className="w-full md:max-w-[1800px] items-center relative gap-4 z-10">
          <TypoH2 className="md:max-w-[1350px] text-center">
            The Business Value: Efficiency & Control
          </TypoH2>
          <TypoP1 className="md:max-w-[850px] text-center text-text-secondary">
            PlantonCloud’s IAC Workflows are more than a convenience—they’re a game-changer for
            teams seeking:
          </TypoP1>
          <Box className="w-full md:max-w-[1300px] grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6 md:mt-2">
            <InnovationBox
              title="Speed & Reliability"
              desc="Automated provisioning means fewer manual steps, minimizing errors and accelerating deployments."
              descClassName="text-text-secondary"
              className="!bg-[linear-gradient(38deg,_rgba(36,_23,_65,_0.24)_-6%,_rgba(138,_51,_145,_0.24)_125.86%)]"
            />
            <InnovationBox
              title="Governance & Auditing"
              desc="Each change is logged and versioned for easy traceability—ideal for compliance or organizational oversight."
              descClassName="text-text-secondary"
              className="!bg-[linear-gradient(38deg,_rgba(36,_23,_65,_0.24)_-6%,_rgba(138,_51,_145,_0.24)_125.86%)]"
            />
            <InnovationBox
              title="Reduced Risk via Previews"
              desc="Know exactly what’s changing before it happens with an itemized preview."
              descClassName="text-text-secondary"
              className="!bg-[linear-gradient(38deg,_rgba(36,_23,_65,_0.24)_-6%,_rgba(138,_51,_145,_0.24)_125.86%)]"
            />
            <InnovationBox
              title="Collaboration & Clarity"
              desc="Transparent commit messages and real-time statuses keep everyone in sync."
              descClassName="text-text-secondary"
              className="!bg-[linear-gradient(38deg,_rgba(36,_23,_65,_0.24)_-6%,_rgba(138,_51,_145,_0.24)_125.86%)]"
            />
          </Box>
        </Stack>
      </Stack>

      <Stack className="w-full items-center px-5 md:px-0 py-8 md:py-14 gap-2 md:gap-6 bg-[linear-gradient(132.98deg,_#0F0E97_-23.75%,_#310642_30.1%,_#010104_97.94%)]">
        <TypoH3 className="max-w-[1100px] text-center">Ready to See it in Action?</TypoH3>
        <TypoP1 className="max-w-[850px] leading-[1.8] text-center text-text-secondary">
          Experience how IaC Workflows empower you to provision, update, and retire infrastructure
          with absolute confidence:
        </TypoP1>
        <Stack className="flex-row items-center mt-2 md:mt-0 gap-2">
          <GetStartedBtn>Get Started</GetStartedBtn>
          <BookDemoBtn>Book Demo</BookDemoBtn>
        </Stack>
      </Stack>
    </Stack>
  );
};
