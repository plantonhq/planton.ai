import { FC, ImgHTMLAttributes } from 'react';
import { Box, Button, Link, Stack, Typography } from '@mui/material';
import { StyledAiBtn } from '../../plantora-ai/styled';
import { TypoH2, TypoP1 } from '../../common';

const SolutionImg: FC<ImgHTMLAttributes<HTMLImageElement>> = ({ ...props }) => (
  <img src="/images/solutions/solution.svg" {...props} />
);

export const AccelerateYourDevOps: FC = () => {
  return (
    <Stack className="items-center pt-20 pb-60 bg-black">
      <Stack className="items-center text-center gap-12 max-w-[1100px]">
        <StyledAiBtn>
          <Typography className="text-base font-medium bg-[linear-gradient(278.2deg,_#A6DDFF_2.25%,_#33C2FF_48.08%,_#0077FF_100%)] bg-clip-text text-transparent">
            All Solutions
          </Typography>
        </StyledAiBtn>
        <TypoH2>Accelerate Your DevOps Journey with AI-Powered Solutions</TypoH2>
        <Box className="max-w-[720px]">
          <TypoP1 className="text-text-secondary">
            Empower your team to innovate faster, deploy smarter, and scale effortlessly—all with
            the simplicity of AI-driven DevOps
          </TypoP1>
        </Box>
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
            className="px-5 py-3 rounded-[10px] w-fit h-10"
            LinkComponent={Link}
            href="https://2x31rcyg54d.typeform.com/planton-demo"
            target="_self"
          >
            Book Demo
          </Button>
        </Stack>
      </Stack>
      <Stack className="relative items-center mt-20">
        <SolutionImg className="z-10" />
        <SolutionImg className="absolute scale-150 rotate-[30deg] blur-3xl z-0" />
      </Stack>
    </Stack>
  );
};
