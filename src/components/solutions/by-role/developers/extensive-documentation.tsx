import { FC } from 'react';
import { Stack } from '@mui/material';
import { TypoH2, TypoP1 } from '@/components/common';

export const ExtensiveDocumentation: FC = () => {
  return (
    <Stack className="pt-32 relative overflow-hidden items-center bg-black ">
      <img
        src="/images/solutions/developers/bg-9.svg"
        className="absolute top-0 left-1/2 transform -translate-x-[85%]"
      />
      <img
        src="/images/solutions/developers/bg-10.svg"
        className="absolute top-36 left-1/2 transform -translate-x-[15%]"
      />
      <Stack className="w-full max-w-[1920px] z-10">
        <Stack className="self-end justify-center flex-row gap-8">
          <Stack className="gap-4 max-w-[750px] h-fit mt-16 p-9 rounded-[48px] backdrop-blur-[90px] bg-[linear-gradient(301deg,_#351B74C4_36.21%,_#A772D1C4_181.28%)]">
            <TypoH2 className="max-w-[650px]">
              API-First Platform with Extensive Documentation
            </TypoH2>
            <TypoP1 className="text-text-secondary">
              Integrate Planton Cloud seamlessly into your tools and workflows with our
              comprehensive, well-documented APIs. Built on industry standards, our APIs empower you
              to automate and extend functionalities, giving you full control over your development
              environment.
            </TypoP1>
          </Stack>
          <img src="/images/solutions/developers/edit-4.svg" />
        </Stack>
      </Stack>
    </Stack>
  );
};
