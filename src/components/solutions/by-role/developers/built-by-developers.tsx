import { FC } from 'react';
import { Stack } from '@mui/material';
import { TypoH2, TypoP1 } from '@/components';

export const BuiltByDevelopers: FC = () => {
  return (
    <Stack className="items-center py-24 relative bg-black">
      <img
        src="/images/solutions/developers/bg-11.svg"
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      />
      <Stack className="w-full max-w-[1400px] gap-12 z-10">
        <Stack className="gap-5 relative overflow-hidden w-full mt-6 px-14 pt-14 rounded-[20px] bg-black/40 shadow-[0px_4.18558406829834px_4.18558406829834px_0px_rgba(0,0,0,0.25)] border-2 border-[#424242] backdrop-blur-[36px] ">
          <TypoH2 className="max-w-[1000px]">Built by Developers, for Developers</TypoH2>
          <TypoP1 className="text-text-secondary max-w-[1130px]">
            Promote collaboration with comprehensive deployment histories and shared insights.
            Whether initiated via forms or our AI assistant, all Stack Jobs are logged and
            accessible, enhancing transparency and teamwork.
          </TypoP1>
          <img src="/images/solutions/developers/stack-job-details-2.svg" className="w-full" />
        </Stack>
      </Stack>
    </Stack>
  );
};
