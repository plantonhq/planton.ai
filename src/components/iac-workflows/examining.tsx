import { FC } from 'react';
import { Box, Stack } from '@mui/material';
import { TypoH2, TypoH3, TypoP1 } from '@/components/common';
import { OlBox } from '@/components/plantora-ai';

export const Examining: FC = () => {
  return (
    <Stack className="items-center overflow-hidden p-5 md:pt-10 md:pb-32 bg-black">
      <Stack className="md:max-w-[1300px] items-center gap-3 md:gap-8">
        <TypoH2 className="max-w-[800px] text-center">
          Examining a<br /> Stack Job’s Details
        </TypoH2>
        <TypoH3 className="md:hidden text-center">Click on a Stack Job to dive deeper</TypoH3>
        <TypoP1 className="hidden md:block mt-3 text-center">
          Click on a Stack Job to dive deeper
        </TypoP1>
        <Box className="relative w-full mt-2 md:mt-0 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-x-4 md:gap-y-8">
          <OlBox
            count={1}
            title="Three Step Process"
            desc={
              <TypoP1 component="span">
                Refresh{' '}
                <TypoP1 component="span" className="text-text-secondary">
                  (syncs current resource state),
                </TypoP1>{' '}
                Preview{' '}
                <TypoP1 component="span" className="text-text-secondary">
                  (shows proposed changes), and
                </TypoP1>{' '}
                Apply/Destroy{' '}
                <TypoP1 component="span" className="text-text-secondary">
                  (rolls out final updates)
                </TypoP1>
              </TypoP1>
            }
            className="!bg-[linear-gradient(38deg,_rgba(36,_23,_65,_0.24)_-6%,_rgba(138,_51,_145,_0.24)_125.86%)] md:!bg-[linear-gradient(38deg,_rgba(36,_23,_65,_0.6)_-6%,_rgba(138,_51,_145,_0.6)_125.86%)]"
          />
          <OlBox
            count={2}
            title="Detailed Resource Summary"
            desc={
              <TypoP1 component="span" className="text-text-secondary">
                See which items will be added, modified, or removed.
              </TypoP1>
            }
            className="!bg-[linear-gradient(38deg,_rgba(36,_23,_65,_0.24)_-6%,_rgba(138,_51,_145,_0.24)_125.86%)] md:!bg-[linear-gradient(38deg,_rgba(36,_23,_65,_0.6)_-6%,_rgba(138,_51,_145,_0.6)_125.86%)]"
          />
          <OlBox
            count={3}
            title="Differences (Diff)"
            desc={
              <>
                <TypoP1 component="span" className="">
                  Compare before-and-after{' '}
                  <TypoP1 component="span" className="text-text-secondary">
                    values for configurations (e.g., memory from 50Mi to 100Mi).
                  </TypoP1>
                </TypoP1>
              </>
            }
            className="!bg-[linear-gradient(38deg,_rgba(36,_23,_65,_0.24)_-6%,_rgba(138,_51,_145,_0.24)_125.86%)] md:!bg-[linear-gradient(38deg,_rgba(36,_23,_65,_0.6)_-6%,_rgba(138,_51,_145,_0.6)_125.86%)]"
          />
          <OlBox
            count={4}
            title="Outputs"
            desc={
              <TypoP1 component="span" className="text-text-secondary">
                Any final output variables (like credentials, service endpoints) defined in the IAC
                module.
              </TypoP1>
            }
            className="!bg-[linear-gradient(38deg,_rgba(36,_23,_65,_0.24)_-6%,_rgba(138,_51,_145,_0.24)_125.86%)] md:!bg-[linear-gradient(38deg,_rgba(36,_23,_65,_0.6)_-6%,_rgba(138,_51,_145,_0.6)_125.86%)]"
          />
        </Box>
        <img src="/images/features/iac-workflows/bg-2.svg" className="mt-2 md:mt-16" />
        <TypoH2 className="text-center mt-10 md:mt-28">
          Tracking
          <br /> Diffs & Outputs
        </TypoH2>
        <TypoP1 className="text-center text-text-secondary">
          PlantonCloud’s IAC Workflows present a clean side-by-side diff for every parameter that’s
          added or changed. You’ll also see generated outputs immediately after they’re provisioned.
        </TypoP1>
        <img src="/images/features/iac-workflows/bg-3.svg" className="md:mt-5" />
        <img src="/images/features/iac-workflows/bg-4.svg" className="md:mt-5" />
      </Stack>
    </Stack>
  );
};
