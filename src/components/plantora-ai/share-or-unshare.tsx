import { FC } from 'react';
import { Box, Stack } from '@mui/material';
import { TypoH2, TypoP1 } from '@/components/common';

export const ShareOrUnshare: FC = () => {
  return (
    <Stack className="items-center bg-black relative overflow-hidden p-5 md:py-40">
      <Box
        sx={{ borderRadius: '50%' }}
        className="hidden md:block w-[2100px] aspect-square absolute left-1/2 top-1/2 transform -translate-x-[110%] -translate-y-[50%] blur-2xl z-0 bg-[linear-gradient(337deg,_rgba(254,_154,_199,_0.248)_-25.13%,_rgba(6,_5,_18,_0.4)_56.9%)]"
      />
      <img
        src="/images/features/planton-copilot/torus.png"
        className="md:hidden w-[380px] absolute left-0 top-0 blur-[200px] transform -translate-x-[50%] -translate-y-[50%] -z-0"
      />
      <Stack className="w-full md:max-w-[1550px] flex-col-reverse md:flex-row gap-5 md:gap-14 items-center z-10">
        <Stack className="gap-5 md:gap-12">
          <img src="/images/features/planton-copilot/share.svg" className="" />
          <img src="/images/features/planton-copilot/unshare.svg" className="" />
        </Stack>
        <Stack className="md:max-w-[730px] gap-3 md:gap-6">
          <TypoH2 className="text-center md:text-start">Share or Unshare Credentials</TypoH2>
          <Stack className="gap-4 md:gap-8">
            <TypoP1 component="span">
              Real Use Case:{' '}
              <TypoP1 component="span" className="text-text-secondary">
                Share AWS credentials with a dev environment so your teammate can deploy or test
                seamlessly.
              </TypoP1>
            </TypoP1>
            <TypoP1 component="span">
              User Prompt:{' '}
              <TypoP1 component="span" className="text-text-secondary">
                “Share credential with ID to dev environment.”
              </TypoP1>
            </TypoP1>
            <TypoP1 component="span">
              Copilot Confirmation:{' '}
              <TypoP1 component="span" className="text-text-secondary">
                Summarizes the credential ID and environment for final check.
              </TypoP1>
            </TypoP1>
            <TypoP1 component="span">
              Outcome:{' '}
              <TypoP1 component="span" className="text-text-secondary">
                Credential is instantly shared, with logs displayed.
              </TypoP1>
            </TypoP1>
            <TypoP1 component="span">
              Unshare Just as Easily:{' '}
              <TypoP1 component="span" className="text-text-secondary">
                Revoke environment access whenever needed.
              </TypoP1>
            </TypoP1>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};
