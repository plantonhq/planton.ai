import { FC, ImgHTMLAttributes } from 'react';
import { Box, Button, Link, Stack, Typography } from '@mui/material';
import { TypoH2, TypoP1 } from '@/components/common';
import { StyledTeamBtn } from '../../by-size/growing-teams/styled';
import { InnovationBox } from '../../by-size';

const BgImg: FC<ImgHTMLAttributes<HTMLImageElement>> = ({ className, ...props }) => (
  <img
    src="/images/solutions/by-use-case/internal-developer-platform/bg-1.svg"
    className={`absolute -top-36 left-1/2 transform -translate-x-1/2  ${className}`}
    {...props}
  />
);

export const EmpowerYourDevelopers: FC = () => {
  return (
    <Stack className="relative items-center pt-14 pb-[168px] bg-black">
      <Stack className="max-w-[1330px] items-center gap-8 z-10">
        <StyledTeamBtn>
          <Typography className="text-base font-medium bg-[linear-gradient(91.09deg,_#B72EDEED_0.42%,_#00AAE5ED_98.32%)] bg-clip-text text-transparent">
            Solutions - IDP
          </Typography>
        </StyledTeamBtn>
        <TypoH2 className="text-center">
          Empower Your Developers with PlantonCloud&apos;s Internal Developer Platform
        </TypoH2>
        <TypoP1 className="text-center text-text-secondary">
          Transform your development workflow with
        </TypoP1>
        <Box className="w-full grid grid-cols-3 gap-10 ">
          <InnovationBox
            title="Self-Service capabilities"
            iconSrc="/images/solutions/by-use-case/internal-developer-platform/self-service.svg"
          />
          <InnovationBox
            title="AI Assistance"
            iconSrc="/images/solutions/by-use-case/internal-developer-platform/ai-robot.svg"
          />
          <InnovationBox
            title="Multi-Cloud Deployments"
            iconSrc="/images/solutions/by-use-case/internal-developer-platform/multi-cloud.svg"
          />
        </Box>
        <Button
          className="bg-[#0095FF] px-5 py-3 rounded-[10px] w-fit h-[40px]"
          LinkComponent={Link}
          href="https://console.planton.cloud"
          target="_self"
        >
          Get Started Today & Discover How
        </Button>
      </Stack>
      <BgImg />
      <BgImg className="blur-[730px]" />
    </Stack>
  );
};
