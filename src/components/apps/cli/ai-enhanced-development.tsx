import { FC } from 'react';
import { Stack } from '@mui/material';
import { TypoH2, TypoP1 } from '@/components/common';

export const AIEnhancedDevelopment: FC = () => {
  return (
    <Stack className="pt-24 relative overflow-hidden items-center bg-black ">
      <img
        src="/images/apps-cli/bg-10.svg"
        className="absolute bottom-0 right-1/2 transform translate-x-[54%]"
      />
      <Stack className="w-full max-w-[1920px] z-10">
        <Stack className="self-start justify-center flex-row gap-8">
          <img src="/images/solutions/developers/edit-3.svg" />
          <Stack className="gap-4 max-w-[750px] h-fit mt-16 p-9 rounded-[48px] backdrop-blur-[90px] bg-[linear-gradient(301deg,_#351B74C4_36.21%,_#A772D1C4_181.28%)]">
            <TypoH2 className="max-w-[650px]">AI-Enhanced Development Starts Here</TypoH2>
            <TypoP1 className="text-text-secondary">
              Planton is more than a tool — it&apos;s a transformative experience that elevates your
              development workflow. By combining the power of the command line with the intelligence
              of AI chat, Planton CLI positions you at the forefront of innovation. Join the growing
              community of developers who are embracing this new paradigm and unlock your full
              potential.
            </TypoP1>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};
