import { FC, ImgHTMLAttributes } from 'react';
import { Box, Button, Stack } from '@mui/material';
import { TypoH2, TypoP1 } from '@/components';
import Link from 'next/link';

const PlantonImg: FC<ImgHTMLAttributes<HTMLImageElement>> = ({ className, ...props }) => (
  <img
    src="/images/solutions/by-size/growing-teams/planton.svg"
    className={`w-[100px] absolute left-1/2 top-1/2 transform -translate-x-[calc(50%+60px)] -translate-y-[calc(50%-70px)] ${className}`}
    {...props}
  />
);

export const IntoTheFuture: FC = () => {
  return (
    <Stack className="items-center pt-24 relative bg-black">
      <Stack className="w-full max-w-[1530px] items-center text-center gap-8 z-10">
        <TypoH2 className="max-w-[1050px]">Ready to Launch Your Startup into the Future?</TypoH2>
        <TypoP1 className="text-text-secondary max-w-[1350px]">
          Transform your development process with Planton Cloud. Accelerate your time to market,
          reduce costs, and focus on what matters—building an amazing product.
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
      <Box className="relative -mt-96">
        <img src="/images/solutions/by-role/engineering-leader/bg-11.svg" className="" />
        <PlantonImg className="blur-3xl z-0" />
        <PlantonImg className=" z-10" />
      </Box>
    </Stack>
  );
};
