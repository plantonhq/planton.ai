import { FC } from 'react';
import { Stack } from '@mui/material';
import { BookDemoBtn, GetStartedBtn, TypoH2, TypoH3, TypoP1 } from '@/components/common';

export const ReadyToElevate2: FC = () => {
  return (
    <Stack className="w-full relative overflow-hidden items-center px-5 md:px-0 py-10 md:py-44 bg-[linear-gradient(132.98deg,_#0F0E97_-23.75%,_#310642_30.1%,_#010104_97.94%)]">
      <img
        src="/images/features/auditable-intelligence/bg-9-small.svg"
        className="md:hidden absolute top-16 left-0 transform "
      />
      <img
        src="/images/features/auditable-intelligence/bg-9.svg"
        className="hidden md:block absolute -top-10 left-1/2 transform -translate-x-[75%] "
      />
      <Stack className="max-w-[1350px] items-center gap-2 md:gap-8 z-10">
        <TypoH3 className="md:hidden text-center">Ready to Elevate Your DevOps Audits?</TypoH3>
        <TypoH2 className="hidden md:block text-center">
          Ready to Elevate Your DevOps Audits?
        </TypoH2>
        <TypoP1 className="text-center text-text-secondary leading-[2] max-w-[450px] md:max-w-[1230px]">
          With Auditable Intelligence, you gain complete transparency and traceability for every
          change—enabling faster collaboration, safer rollbacks, and full compliance.
        </TypoP1>
        <TypoP1 className="text-center text-text-secondary leading-[2] max-w-[450px] md:max-w-[1230px]">
          Start your journey today and see how easy it is to keep every environment consistent and
          secure.
        </TypoP1>
        <Stack className="flex-row items-center gap-1 md:gap-2 md:-mt-5">
          <GetStartedBtn>Get Started</GetStartedBtn>
          <BookDemoBtn>Book Demo</BookDemoBtn>
        </Stack>
      </Stack>
    </Stack>
  );
};
