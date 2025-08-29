import { FC, ImgHTMLAttributes } from 'react';
import { Box, Stack } from '@mui/material';
import { TypoH2, TypoP1 } from '@/components';

const PlanetImg: FC<ImgHTMLAttributes<HTMLImageElement>> = ({ className, ...props }) => (
  <img
    src="/images/solutions/by-size/startups/saturn-planet.svg"
    className={`absolute top-0 right-1/2 transform -translate-y-[52%] translate-x-[170%] ${className}`}
    {...props}
  />
);

export const DeploymentInsights: FC = () => {
  return (
    <Box className="overflow-hidden">
      <Stack className="items-center overflow-hidden bg-black pt-24 pb-6">
        <Stack className="relative w-full max-w-[2000px] items-center flex-row justify-start gap-12">
          <Box className="relative">
            <img src="/images/solutions/by-size/startups/dashboard-2.svg" className="" />
          </Box>
          <Stack className="relative gap-8 max-w-[850px]">
            <TypoH2 className="">Real-Time Deployment Insights</TypoH2>
            <TypoP1 className="text-text-secondary">
              Monitor your deployments with real-time stack job logs and progress updates. Quickly
              iterate on your code with immediate feedback, enhancing development speed and reducing
              downtime.
            </TypoP1>
          </Stack>
        </Stack>
      </Stack>
      <Stack className="relative items-center bg-black pt-24">
        <PlanetImg className="blur-[200px] z-0" />
        <PlanetImg className="z-10" />
        <Stack className="gap-8 text-center max-w-[1380px]">
          <TypoH2 className="">Secure and Scalable Infrastructure</TypoH2>
          <TypoP1 className="text-text-secondary">
            Build and scale sophisticated applications confidently. Planton Cloud ensures your
            infrastructure is secure, scalable, and managed efficiently, adapting to your
            startup&apos;s growth without added complexity.
          </TypoP1>
          <Box className="w-full h-[780px] relative pt-3">
            <img src="/images/solutions/by-size/startups/dashboard.svg" />
            <img
              src="/images/solutions/by-size/startups/lock-1.svg"
              className="absolute bottom-0 left-0 transofm -translate-x-[40%] translate-y-[10%]"
            />
            <img
              src="/images/solutions/by-size/startups/graph.svg"
              className="absolute bottom-0 right-0 transform translate-x-[25%] translate-y-[10%]"
            />
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
};
