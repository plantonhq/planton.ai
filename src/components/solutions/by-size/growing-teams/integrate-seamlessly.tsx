import { FC } from 'react';
import { Stack } from '@mui/material';
import { TypoH2, TypoP1 } from '@/components';

export const IntegrateSeamlessly: FC = () => {
  return (
    <Stack className="items-center relative bg-black pt-20">
      <img src="/images/solutions/by-size/growing-teams/grid-icons.svg" className="w-full max-w-[2000px]" />
      <Stack className="absolute top-52 gap-8 text-center max-w-[1300px] z-10">
        <TypoH2 className="">Integrate Seamlessly with Your Existing Toolchain</TypoH2>
        <TypoP1 className="text-text-secondary">
          Planton Cloud fits into your current workflow by integrating with popular tools and
          systems. Connect effortlessly with source code management, monitoring, and alerting tools.
          We continuously expand our integrations to simplify day-two operations and empower your
          developers to use the tools they prefer.
        </TypoP1>
      </Stack>
    </Stack>
  );
};
