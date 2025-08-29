import { FC } from 'react';
import { Box, BoxProps, Stack } from '@mui/material';
import { TypoH2, TypoP1 } from '../common';

const BlackBox: FC<BoxProps> = ({ children, className }) => {
  return (
    <Box className={`p-10 rounded-xl border border-[#676767] bg-[#090909] ${className}`}>
      {children}
    </Box>
  );
};

export const ExperienceUnprecedented: FC = () => {
  return (
    <Stack className="relative items-center bg-[#161A1F] pt-36 pb-36 gap-12">
      <Stack className={`max-w-[1225px] items-center text-center gap-8`}>
        <TypoH2>Experience Unprecedented Efficiency</TypoH2>
        <TypoP1 className={`text-center text-text-secondary`}>
          Planton Cloud isn&apos;t just a tool—it&apos;s a transformation
        </TypoP1>
      </Stack>
      <Box className="grid grid-cols-12 gap-x-4">
        <Stack className="col-span-8 gap-4 grow">
          <BlackBox className="grow">
            <img src={'/images/features/planton-copilot/history.svg'} className="w-[75px] aspect-square" />
            <TypoP1>Developers can build.</TypoP1>
          </BlackBox>
          <BlackBox className="grow">
            <img src={'/images/features/planton-copilot/history.svg'} className="w-[75px] aspect-square" />
            <TypoP1>Developers can build.</TypoP1>
          </BlackBox>
        </Stack>
        <BlackBox className="col-span-4 grow min-h-[900px]">
          <img src={'/images/features/planton-copilot/track.svg'} className="w-[75px] aspect-square" />
          <TypoP1>Developers can Deploy.</TypoP1>
        </BlackBox>
      </Box>
      <Box className="absolute w-full h-[274px] bottom-0 bg-[linear-gradient(172.09deg,#00000000_16.52%,#000000_372.01%)] backdrop-blur-[14.70px]" />
    </Stack>
  );
};
