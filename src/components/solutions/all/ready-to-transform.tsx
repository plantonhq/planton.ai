import { FC } from 'react';
import { Button, Link, Stack } from '@mui/material';
import { TypoH2, TypoP1 } from '../../common';

export const ReadyToTransformSolution: FC = () => {
  return (
    <Stack className="relative items-center overflow-hidden py-28 bg-[linear-gradient(180.42deg,_#FF6D1F_-82.69%,_#000000_15.48%)]">
      <Stack className="gap-11 items-center max-w-[1550px]">
        <TypoH2 className="max-w-[1200px] text-center">
          Ready to Transform Your DevOps Experience? 
        </TypoH2>
        <TypoP1 className="text-text-secondary text-center max-w-[1240px]">
          Unlock your team&apos;s potential with Planton Cloud&apos;s AI-powered DevOps solutions.
          Start your journey towards faster innovation, seamless collaboration, and effortless
          scaling today. 
        </TypoP1>
        <Stack className="flex-row gap-3 items-center">
          <Button
            className="px-5 py-3 bg-[#0095FF] font-medium h-[40px] rounded-[10px]"
            LinkComponent={Link}
            href="https://console.planton.ai"
            target="_self"
          >
            Get Started
          </Button>
          <Button
            variant="text"
            className="px-5 py-3 font-medium h-[40px]"
            LinkComponent={Link}
            href="https://2x31rcyg54d.typeform.com/planton-demo"
            target="_self"
          >
            Book Demo
          </Button>
        </Stack>
      </Stack>
      <img
        src="/images/solutions/burger.svg"
        className="w-[800px] aspect-square absolute bottom-0 left-1/2 transform -translate-x-[calc(50%+850px)] translate-y-[calc(20%)] opacity-60 blur-[200px]"
      />
    </Stack>
  );
};
