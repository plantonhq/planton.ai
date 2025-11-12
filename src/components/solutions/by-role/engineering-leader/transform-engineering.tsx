import { FC } from 'react';
import { Button, Stack, Typography } from '@mui/material';
import { TypoH2, TypoP1 } from '@/components';
import { StyledTeamBtn } from '../../by-size/growing-teams/styled';
import Link from 'next/link';

export const TransformEngineering: FC = () => {
  return (
    <Stack className="relative overflow-hidden items-center bg-black">
      <video src="/videos/galaxy-square.mp4" autoPlay muted loop className="mt-20 scale-125" />
      <video
        src="/videos/dots.mp4"
        className="w-full absolute top-0 left-1/2 transform -translate-x-1/2 opacity-50"
        autoPlay
        muted
        loop
      />
      <img
        src="/images/solutions/by-role/engineering-leader/bg-2.svg"
        className="w-full rotate-180 absolute top-28 scale-150 left-1/2 transform -translate-x-1/2 z-0"
      />
      <Stack className="w-full max-w-[1550px] absolute left-1/2 top-44 transform -translate-x-1/2  items-center text-center gap-5 z-10">
        <StyledTeamBtn>
          <Typography className="text-base font-medium bg-[linear-gradient(91.09deg,_#B72EDEED_0.42%,_#00AAE5ED_98.32%)] bg-clip-text text-transparent">
            Engineering Leaders
          </Typography>
        </StyledTeamBtn>
        <TypoH2 className="max-w-[1150px]">
          Transform Engineering Leadership with AI-Enabled Efficiency
        </TypoH2>
        <TypoP1 className={`max-w-[750px] text-center text-text-secondary`}>
          Enhance team performance, streamline operations, and drive growth with Planton Cloud.
        </TypoP1>
        <Stack className="flex-row items-center gap-2">
          <Button
            className="bg-[#0095FF] px-5 py-3 rounded-[10px] w-fit h-[40px]"
            LinkComponent={Link}
            href="https://console.planton.ai"
            target="_self"
          >
            Get Started Free
          </Button>
          <Button
            className="bg-transparent px-5 py-3 rounded-[10px] w-fit"
            LinkComponent={Link}
            href="https://2x31rcyg54d.typeform.com/planton-demo"
            target="_self"
          >
            Book a Demo
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};
