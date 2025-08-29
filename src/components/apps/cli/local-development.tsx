import { FC } from 'react';
import { Box, Stack } from '@mui/material';
import { TypoH2, TypoP1 } from '@/components/common';
import { InnovationBox } from '../../solutions';

export const LocalDevelopment: FC = () => {
  return (
    <Stack className="relative items-center pt-20 bg-[#010205]">
      <Stack className="max-w-[1280px] items-center gap-6 z-20">
        <TypoH2 className="text-center">Secure and Efficient Local Development</TypoH2>
        <TypoP1 className="text-center text-text-secondary">
          Use planton service dot-env --env dev to generate .env files populated with environment
          variables and secrets, securely fetched from PlantonCloud. planton ensures you have the
          right configurations for local development, mirroring remote environment settings while
          maintaining strict security protocols.
        </TypoP1>
        <Box className="w-full grid grid-cols-2 gap-6 mt-10">
          <InnovationBox
            title="Seamless Configuration"
            desc="Quickly set up local environments."
            className="bg-[url('/')] bg-[#2B2B2B3D]"
            borderBg="linear-gradient(180deg, #8A3391 0%, #03A587 100%)"
            borderSize="3px"
          />
          <InnovationBox
            title="Security Compliance"
            desc="Access secrets only if authorized, with full auditing"
            className="bg-[url('/')] bg-[#2B2B2B3D]"
            borderBg="linear-gradient(180deg, #8A3391 0%, #03A587 100%)"
            borderSize="3px"
          />
        </Box>
        <img src="/images/apps-cli/bg-5.svg" className="mt-14" />
      </Stack>
      <img src="/images/apps-cli/bg-9.svg" className="absolute bottom-0 z-10" />
    </Stack>
  );
};
