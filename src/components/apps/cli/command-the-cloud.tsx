import { FC } from 'react';
import { Button, Link, Stack, Typography } from '@mui/material';
import { TypoH2, TypoP1 } from '@/components';
import { StyledAiBtn } from '../../plantora-ai/styled';

export const CommandTheCloud: FC = () => {
  return (
    <Stack className="relative overflow-hidden items-center bg-black">
      <img src="/images/apps-cli/bg-1.svg" className="min-w-[1920px] z-10 opacity-80" />
      <video
        src="/videos/dots.mp4"
        className="absolute bottom-10 w-[650px] z-0"
        autoPlay
        muted
        loop
      />
      <Stack className="w-full max-w-[1550px] items-center text-center gap-8 absolute left-1/2 top-[20%] transform -translate-x-1/2 z-10">
        <StyledAiBtn>
          <Typography className="text-base font-medium bg-[linear-gradient(278.2deg,_#A6DDFF_2.25%,_#33C2FF_48.08%,_#0077FF_100%)] bg-clip-text text-transparent">
            CLI
          </Typography>
        </StyledAiBtn>
        <TypoH2 className="max-w-[1350px]">Command the Cloud with AI-Powered CLI </TypoH2>
        <TypoP1 className={`max-w-[1450px] text-center text-text-secondary`}>
          Meet Planton CLI: Unleash the Power of AI Chat and Command-Line Efficiency in One Tool{' '}
        </TypoP1>
        <Stack className="flex-row items-center gap-2">
          <Button
            className="bg-[#0095FF] px-5 py-3 rounded-[10px] w-fit h-10"
            LinkComponent={Link}
            href="https://console.planton.ai"
            target="_self"
          >
            Try Planton Cloud Now
          </Button>
          <Button
            className="px-5 py-3"
            LinkComponent={Link}
            href="https://docs.google.com/forms/d/e/1FAIpQLSd8aETwOMXD0Q3WFNV7XsOG68jr2-FyAg_mVRJdWEMUmEF22w/viewform"
            target="_self"
          >
            Book Demo
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};
