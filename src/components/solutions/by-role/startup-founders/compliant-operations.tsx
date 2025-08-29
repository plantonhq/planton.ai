import { FC } from 'react';
import { Stack } from '@mui/material';
import { TypoH2, TypoP1 } from '@/components/common';

export const CompliantOperations: FC = () => {
  return (
    <Stack className="w-full relative items-center pb-24 bg-[radial-gradient(26.4%_326.4%_at_50%_50%,_#000000_0%,_#000000_100%)]">
      <img
        src="/images/solutions/by-role/startup-founder/galaxy-2.svg"
        className="absolute w-full max-w-[1500px] left-1/2  top-0 transform -translate-x-1/2"
      />
      <Stack className="w-full max-w-[1500px] items-center text-center gap-12 z-10">
        <TypoH2 className="max-w-[1100px]">Secure, Auditable, and Compliant Operations</TypoH2>
        <TypoP1 className="text-text-secondary max-w-[1450px]">
          Maintain robust security and compliance with Planton Cloud&apos;s advanced access controls
          and auditing features. Ensure that automation is used appropriately and all changes are
          tracked across interfaces, providing peace of mind and meeting regulatory requirements.
        </TypoP1>
        <Stack className="w-full mt-10 px-16 pt-16 bg-[#101010]/40 rounded-[37px] backdrop-blur-[23px] ">
          <img src="/images/solutions/by-role/startup-founder/stack-job-details.svg" />
        </Stack>
      </Stack>
    </Stack>
  );
};
