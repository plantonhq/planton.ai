import { FC } from 'react';
import { Box, Stack } from '@mui/material';
import { TypoH2, TypoP1 } from '@/components/common';
import { InnovationBox } from '../../solutions';

export const CicdConfiguration: FC = () => {
  return (
    <Stack className="relative items-center pt-36 bg-black">
      <Stack className="max-w-[1330px] items-center gap-8 z-20">
        <TypoH2 className="text-center">CI/CD Configuration Through Conversation</TypoH2>
        <TypoP1 className="text-center text-text-secondary">
          Soon, planton&apos;s capabilities will expand to include intelligent CI/CD setup. Imagine
          asking planton to add CI/CD configurations based on your project&apos;s structure, and it
          generates and integrates the necessary pipelines. This upcoming feature
          leverages planton&apos;s access to your local file system, analyzing your project to
          provide tailored solutions.
        </TypoP1>
        <Box className="w-full grid grid-cols-3 gap-6 mt-12">
          <InnovationBox
            title="Project Analysis"
            desc="Planton understands your codebase for accurate configurations."
            className="bg-[url('/')] bg-[#2B2B2B3D]"
            borderBg="linear-gradient(180deg, #8A3391 0%, #03A587 100%)"
            borderSize="3px"
          />
          <InnovationBox
            title="Automated Setup"
            desc="Streamline CI/CD integration without manual coding."
            className="bg-[url('/')] bg-[#2B2B2B3D]"
            borderBg="linear-gradient(180deg, #8A3391 0%, #03A587 100%)"
            borderSize="3px"
          />
          <InnovationBox
            title="Adaptive Learning"
            desc="AI improves suggestions over time based on usage."
            className="bg-[url('/')] bg-[#2B2B2B3D]"
            borderBg="linear-gradient(180deg, #8A3391 0%, #03A587 100%)"
            borderSize="3px"
          />
        </Box>
        <img src="/images/apps-cli/bg-5.svg" />
      </Stack>
      <img src="/images/apps-cli/bg-8.svg" className="absolute top-0 z-10 opacity-80" />
      <img
        src="/images/features/burger.svg"
        className="w-[700px] absolute bottom-0 left-1/2 transform translate-y-[25%] -translate-x-[120%] z-10  blur-[400px]"
      />
      <video src="/videos/dots.mp4" className="absolute top-96 z-0 w-[800px]" autoPlay muted loop />
    </Stack>
  );
};
