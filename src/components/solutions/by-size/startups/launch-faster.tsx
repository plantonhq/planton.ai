import { FC } from 'react';
import { Button, Link, Stack, Typography } from '@mui/material';
import { StyledTeamBtn } from '../growing-teams/styled';
import { TypoH2, TypoP1 } from '@/components/common';

export const LaunchFaster: FC = () => {
  return (
    <Stack className="relative overflow-hidden items-center py-16 bg-black">
      <img src="/images/solutions/by-size/startups/bg-1.svg" className="absolute bottom-0 scale-x-[-1]" />
      <Stack className="relative w-full max-w-[1440px]">
        <Stack className="flex-row items-center gap-36">
          <Stack className="gap-8 max-w-[774px]">
            <StyledTeamBtn>
              <Typography className="text-base font-medium bg-[linear-gradient(91.09deg,_#B72EDEED_0.42%,_#00AAE5ED_98.32%)] bg-clip-text text-transparent">
                Solution - Startups
              </Typography>
            </StyledTeamBtn>
            <TypoH2 className="max-w-[800px]">
              Launch Faster, Scale Smarter with Planton Cloud
            </TypoH2>
            <TypoP1 className="text-text-secondary">
              AI-powered DevOps solutions tailored for startups
            </TypoP1>
            <Stack className="flex-row items-center gap-2">
              <Button
                className="bg-[#0095FF] px-5 py-3 rounded-[10px] w-fit h-10"
                LinkComponent={Link}
                href="https://console.planton.ai"
                target="_self"
              >
                Get Started for Free
              </Button>
              <Button
                className="bg-transparent px-5 py-3 rounded-[10px] w-fit h-10"
                LinkComponent={Link}
                href="https://docs.google.com/forms/d/17tEVBbpIGl0AR4M75IOBYj4Ywap1RPCzZc4HMWA-67U"
                target="_self"
              >
                Book Demo
              </Button>
            </Stack>
          </Stack>
          <img src="/images/solutions/by-size/startups/chatbox.svg" className="w-[500px]" />
        </Stack>
      </Stack>
    </Stack>
  );
};
