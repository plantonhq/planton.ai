import { FC, ImgHTMLAttributes } from 'react';
import { Box, Button, Link, Stack } from '@mui/material';
import { TypoH2, TypoP1 } from '@/components';

const EarthImg: FC<ImgHTMLAttributes<HTMLImageElement>> = ({ className, ...props }) => (
  <img
    src="/images/solutions/by-size/startups/earth.svg"
    className={`absolute top-0 left-1/2 transform -translate-y-1/2 -translate-x-[170%] ${className}`}
    {...props}
  />
);

export const BuiltByStartups: FC = () => {
  return (
    <Box className="">
      <Stack className="relative items-center bg-black pt-24">
        <EarthImg className="blur-[200px] scale-150 z-0" />
        <EarthImg className="z-10" />
        <Stack className="gap-8 items-center text-center max-w-[1500px]">
          <TypoH2 className="max-w-[750px]">Built by Startups, for Startups</TypoH2>
          <TypoP1 className="text-text-secondary max-w-[1350px]">
            Discover how Planton Cloud&apos;s own five-member team built and scaled their platform
            without a dedicated DevOps engineer. Learn from our success and see how startups like
            yours can achieve more with less.
          </TypoP1>
          <img src="/images/solutions/by-size/startups/dashboard.svg" className="mt-4" />
        </Stack>
      </Stack>
      <Stack className="relative items-center bg-black pt-24">
        <Stack className="gap-8 items-center text-center max-w-[1400px]">
          <TypoH2 className="max-w-[1010px]">
            Ready to Accelerate Your Startup&apos;s Success?
          </TypoH2>
          <TypoP1 className="text-text-secondary max-w-[1350px]">
            Unlock your startup&apos;s full potential with Planton Cloud&apos;s AI-powered DevOps
            platform. Save time, reduce costs, and keep your focus on innovating great products.
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
              href="https://docs.google.com/forms/d/e/1FAIpQLSd8aETwOMXD0Q3WFNV7XsOG68jr2-FyAg_mVRJdWEMUmEF22w/viewform"
              target="_self"
            >
              Book Demo
            </Button>
          </Stack>
          <Box className="h-[345px] relative overflow-hidden">
            <img src="/images/solutions/by-size/startups/sun.svg" />
            <img src="/images/solutions/by-size/startups/sun.svg" className="absolute top-0 blur-[150px]" />
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
};
