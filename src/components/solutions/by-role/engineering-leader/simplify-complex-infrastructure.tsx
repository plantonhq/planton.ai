import { FC } from 'react';
import { Stack } from '@mui/material';
import { TypoH2, TypoP1 } from '@/components/common';

export const SimplifyComplexInfrastructure: FC = () => {
  return (
    <Stack className="py-32 relative overflow-hidden items-center bg-black ">
      <img
        src="/images/solutions/by-role/engineering-leader/bg-8.svg"
        className="absolute bottom-32 left-1/2 transform -translate-x-[65%]"
      />
      <Stack className="w-full max-w-[1920px] z-10">
        <Stack className="self-end justify-center flex-row gap-10">
          <Stack className="gap-4 max-w-[750px] h-fit mt-16 p-9 rounded-[48px] backdrop-blur-[90px] bg-[linear-gradient(301deg,_#351B74C4_36.21%,_#A772D1C4_181.28%)]">
            <TypoH2 className="max-w-[650px]">Simplify Complex Infrastructure Management</TypoH2>
            <TypoP1 className="text-text-secondary">
              Manage sophisticated applications with ease using Planton Cloud&apos;s integrated
              platform. Handle distributed architectures, microservices, and multi-cloud deployments
              without the complexity. Planton Cloud abstracts the underlying infrastructure,
              allowing your teams to focus on delivering value rather than wrestling with
              operational details.
            </TypoP1>
          </Stack>
          <img src="/images/solutions/by-role/engineering-leader/job-progress.svg" />
        </Stack>
      </Stack>
    </Stack>
  );
};
