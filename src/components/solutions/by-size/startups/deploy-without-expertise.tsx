import { FC, ImgHTMLAttributes } from 'react';
import { Box, Stack } from '@mui/material';
import { TypoH2, TypoP1 } from '@/components';

const SpaceSatelliteImg: FC<ImgHTMLAttributes<HTMLImageElement>> = ({ className, ...props }) => (
  <img
    src="/images/solutions/by-size/startups/space-satellite.svg"
    className={`w-[400px] aspect-square absolute -top-40 right-0 transform ${className}`}
    {...props}
  />
);

export const DeployWithoutDevOpsExpertise: FC = () => {
  return (
    <Stack className="items-center relative overflow-hidden bg-black pt-36 pb-24">
      <Stack className="w-full max-w-[2000px] flex-row justify-end items-center gap-24">
        <Stack className="gap-8">
          <TypoH2 className="max-w-[900px]">Deploy Without DevOps Expertise</TypoH2>
          <TypoP1 className="text-text-secondary max-w-[750px]">
            Planton Cloud empowers your developers to deploy applications effortlessly, eliminating
            the need for specialized DevOps staff. Automate your CI/CD pipelines and ensure every
            code commit is built and deployed seamlessly.
          </TypoP1>
        </Stack>
        <Box className="relative">
          <img src="/images/solutions/by-size/startups/resource-explorer.svg" className="" />
          <img src="/images/solutions/by-size/startups/details.svg" className="absolute top-24 -left-16" />
          <SpaceSatelliteImg className="z-10" />
        </Box>
      </Stack>
    </Stack>
  );
};
