import { FC } from 'react';
import { Box, Stack } from '@mui/material';
import { TypoH2, TypoP1 } from '@/components/common';

interface IInnovateSection {
  title: string;
  subTitle: string;
}

export const InnovateSection: FC<IInnovateSection> = ({ title, subTitle }) => {
  return (
    <Stack className="relative w-full items-center pb-24 bg-[radial-gradient(55.42%_52.67%_at_50%_50%,_#000000_0%,_#000000_100%)]">
      <video
        src="/videos/dots.mp4"
        className="w-full absolute top-56 max-w-[1500px] opacity-5"
        autoPlay
        muted
        loop
      />
      <img src="/images/solutions/by-role/startup-founder/innovate.svg" />
      <Stack className="w-full -mt-[1000px] max-w-[1500px] items-center text-center gap-5 z-10">
        <TypoH2 className="max-w-[1200px]">{title}</TypoH2>
        <TypoP1 className="text-center text-text-secondary">{subTitle}</TypoP1>
        <Stack className="w-full max-w-[1600px] h-[800px] relative overflow-hidden items-center p-14 rounded-[60px] border border-[#3c3c3c] backdrop-blur-[12px] bg-[#161718] ">
          <Box className="w-full h-full relative">
            <img
              src="/images/solutions/by-role/startup-founder/yaml.svg"
              className="absolute left-1/2 transform -translate-x-1/2 -bottom-14"
            />
            <img
              src="/images/solutions/by-role/startup-founder/torus.svg"
              className="w-[760px] aspect-square absolute left-0 bottom-0 transform -translate-x-1/2 translate-y-1/2"
            />
          </Box>
        </Stack>
      </Stack>
    </Stack>
  );
};
