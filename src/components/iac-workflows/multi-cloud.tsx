import { FC, ImgHTMLAttributes } from 'react';
import { Box, Stack } from '@mui/material';
import { TypoH3, TypoP1 } from '../common';

const WorldMapImg: FC<ImgHTMLAttributes<HTMLImageElement>> = ({ ...props }) => (
  <img src="/images/features/iac-workflows/world-map.svg" {...props} />
);

export const MultiCloudMadeEasy: FC = () => {
  return (
    <Stack className="relative overflow-hidden items-center py-10 bg-[#010205]">
      <Stack className="w-[1800px] relative items-end">
        <WorldMapImg />
        <WorldMapImg className="absolute mix-blend-lighten blur-[160.40px]" />
        <Stack className="absolute left-0 transform translate-x-[30%] translate-y-[70%] gap-4 max-w-[700px] z-10">
          <TypoH3>Multi-Cloud Made Easy</TypoH3>
          <TypoP1 className="text-text-secondary">
            Deploy applications across any cloud environment—be it Kubernetes, AWS Fargate, AWS
            Lambda, and more. Planton Cloud&apos;s built-in IaC Workflows provides the flexibility
            to choose the best platform for your needs, ensuring seamless multi-cloud operations.
          </TypoP1>
        </Stack>
        <Box className="w-[1281px] aspect-[1.10] absolute left-1/2 top-0 transform -translate-y-[30%] -translate-x-[90%] rounded-full blur-[150px] bg-[linear-gradient(91.52deg,_#000000_58.27%,_#646464_229.43%,_#666666_233.56%)]" />
        <img
          src="/images/features/iac-workflows/map-icon-1.svg"
          className="w-[58px] absolute top-[calc(0%+80px)] right-[calc(0%+80px)]"
        />
        <img
          src="/images/features/iac-workflows/map-icon-1.svg"
          className="w-[110px] absolute top-[calc(50%-100px)] right-[calc(0%+250px)]"
        />
        <img
          src="/images/features/iac-workflows/map-icon-2.svg"
          className="w-[110px] absolute top-[calc(25%-100px)] right-[calc(25%)]"
        />
        <img
          src="/images/features/iac-workflows/map-icon-2.svg"
          className="w-[70px] absolute bottom-[calc(20%)] right-[calc(28%)]"
        />
        <img
          src="/images/features/iac-workflows/map-icon-3.svg"
          className="w-[130px] absolute bottom-[calc(50%)] right-[calc(50%)]"
        />
        <img
          src="/images/features/iac-workflows/map-icon-4.svg"
          className="w-[100px] absolute bottom-[calc(15%)] left-[calc(30%)]"
        />
      </Stack>
    </Stack>
  );
};
