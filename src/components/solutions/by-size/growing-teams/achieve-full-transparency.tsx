import { FC, ImgHTMLAttributes } from 'react';
import { Box, Stack } from '@mui/material';
import { TypoH2, TypoP1 } from '@/components';

const Planet2Img: FC<ImgHTMLAttributes<HTMLImageElement>> = ({ className, ...props }) => (
  <img
    src="/images/solutions/by-size/growing-teams/saturn-planet-2.svg"
    className={`w-[470px] aspect-square absolute -top-80 right-0 transform ${className}`}
    {...props}
  />
);

export const AchieveFullTransparency: FC = () => {
  return (
    <Stack className="items-center bg-black pt-36 pb-24">
      <Stack className="w-full max-w-[2000px] flex-row justify-end items-center gap-24">
        <Stack className="gap-8">
          <TypoH2 className="max-w-[900px]">
            Achieve Full Transparency with Auditable Intelligence
          </TypoH2>
          <TypoP1 className="text-text-secondary max-w-[750px]">
            Maintain complete visibility over every change in your infrastructure. Planton Cloud&apos;s
            Auditable Intelligence captures all configuration changes in familiar git diff format,
            regardless of whether they&apos;re made via CLI, web interface, or Plantora—the DevOps
            Copilot. Easily track who made changes, what was altered, and the impact on your
            applications.
          </TypoP1>
        </Stack>
        <Box className="relative">
          <img src="/images/solutions/by-size/growing-teams/resource-explorer-2.svg" className="" />
          <img src="/images/solutions/by-size/growing-teams/edit-resource.svg" className="absolute top-24 -left-24" />
          <Planet2Img />
          <Planet2Img className="blur-3xl" />
        </Box>
      </Stack>
    </Stack>
  );
};
