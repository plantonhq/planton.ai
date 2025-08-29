import { FC } from 'react';
import { Box, Stack } from '@mui/material';
import { FrameImage, TypoH2, TypoH3, TypoP1 } from '@/components/common';
import { OlBox } from '@/components/plantora-ai';

export const SeamlesslyModify: FC = () => {
  return (
    <Stack className="items-center bg-black relative overflow-hidden p-5 md:pt-28 md:pb-14">
      <img
        src="/images/features/planton-copilot/torus.png"
        className="md:hidden w-[400px] absolute left-0 bottom-0 blur-[300px] transform translate-y-[50%] -translate-x-[50%] -z-0"
      />
      <Stack className="md:max-w-[1250px] items-center gap-3 md:gap-8">
        <TypoH2 className="text-center md:max-w-[1000px] md:mt-2">
          Seamlessly Modify Existing Configurations
        </TypoH2>
        <TypoP1 className="text-center text-text-secondary md:max-w-[1200px]">
          Stop wading through labyrinthine configuration files. With Copilot, adjusting existing
          cloud resources is as easy as describing what you want to change.
        </TypoP1>
        <TypoH3 className="text-center">How It Works ? </TypoH3>
        <Box className="relative w-full grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-x-4 md:gap-y-8">
          <img
            src="/images/features/planton-copilot/burger.svg"
            className="w-[150px] md:w-auto absolute right-0 bottom-24 md:-bottom-10 -z-0 transform md:translate-x-1/2 translate-y-1/2"
          />
          <img
            src="/images/features/planton-copilot/torus.png"
            className="w-[333px] md:w-[1000px] blur-[150px] md:blur-[300px] absolute right-0 bottom-24 md:-bottom-10 -z-0 transform translate-x-1/2 translate-y-1/2"
          />
          <Box
            sx={{ borderRadius: '50%' }}
            className="hidden md:block w-[900px] aspect-[1.5] absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-[80%] blur-[350px] bg-[linear-gradient(180deg,_rgba(185,_53,_56,_0.9)_0%,_rgba(98,_57,_158,_0.9)_100%)]"
          />
          <OlBox
            count={1}
            title="Identify the Resource"
            desc={
              <TypoP1 component="span" className="text-text-secondary">
                Provide Copilot with the{' '}
                <TypoP1 component="span" color="text.primary">
                  resource ID or name.
                </TypoP1>
              </TypoP1>
            }
            className="!bg-[linear-gradient(38deg,_rgba(36,_23,_65,_0.24)_-6%,_rgba(138,_51,_145,_0.24)_125.86%)] md:!bg-[linear-gradient(38deg,_rgba(36,_23,_65,_0.6)_-6%,_rgba(138,_51,_145,_0.6)_125.86%)]"
          />
          <OlBox
            count={2}
            title="Specify Updates"
            desc={
              <>
                <TypoP1 component="span" className="text-text-secondary">
                  For example,{' '}
                  <TypoP1 component="span" color="text.primary">
                    “Add attribute email_ID of type S, and create a secondary index.”
                  </TypoP1>
                </TypoP1>
              </>
            }
            className="!bg-[linear-gradient(38deg,_rgba(36,_23,_65,_0.24)_-6%,_rgba(138,_51,_145,_0.24)_125.86%)] md:!bg-[linear-gradient(38deg,_rgba(36,_23,_65,_0.6)_-6%,_rgba(138,_51,_145,_0.6)_125.86%)]"
          />
          <OlBox
            count={3}
            title="Review the Proposed Changes"
            desc={
              <TypoP1 component="span" className="text-text-secondary">
                Copilot returns a unified diff or updated YAML for your review.
              </TypoP1>
            }
            className="!bg-[linear-gradient(38deg,_rgba(36,_23,_65,_0.24)_-6%,_rgba(138,_51,_145,_0.24)_125.86%)] md:!bg-[linear-gradient(38deg,_rgba(36,_23,_65,_0.6)_-6%,_rgba(138,_51,_145,_0.6)_125.86%)]"
          />
          <OlBox
            count={4}
            title="Approve & Apply"
            desc={
              <TypoP1 component="span" className="text-text-secondary">
                Confirm the change. Copilot executes the IaC workflow and displays real-time status.
              </TypoP1>
            }
            className="!bg-[linear-gradient(38deg,_rgba(36,_23,_65,_0.24)_-6%,_rgba(138,_51,_145,_0.24)_125.86%)] md:!bg-[linear-gradient(38deg,_rgba(36,_23,_65,_0.6)_-6%,_rgba(138,_51,_145,_0.6)_125.86%)]"
          />
        </Box>
        <FrameImage src="/images/features/planton-copilot/bg-2.gif" className="z-10" />
      </Stack>
    </Stack>
  );
};
