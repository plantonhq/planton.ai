import { FC, ImgHTMLAttributes } from 'react';
import { Box, Stack } from '@mui/material';
import { TypoH2, TypoP1 } from '@/components';

const AzureImg: FC<ImgHTMLAttributes<HTMLImageElement>> = ({ className, ...props }) => (
  <img
    src="/images/solutions/by-size/startups/azure.svg"
    className={`absolute top-0 left-1/2 transform -translate-y-[30%] -translate-x-[160%] ${className}`}
    {...props}
  />
);

const GcpImg: FC<ImgHTMLAttributes<HTMLImageElement>> = ({ className, ...props }) => (
  <img
    src="/images/solutions/by-size/startups/gcp.svg"
    className={`absolute bottom-0 left-0 transform -translate-y-[140%] translate-x-[90%] ${className}`}
    {...props}
  />
);

const Joiner1Img: FC<ImgHTMLAttributes<HTMLImageElement>> = ({ className, ...props }) => (
  <img
    src="/images/solutions/by-size/startups/joiner-1.svg"
    className={`absolute bottom-0 right-0 transform -translate-y-[160%] -translate-x-[55%] ${className}`}
    {...props}
  />
);

const Joiner2Img: FC<ImgHTMLAttributes<HTMLImageElement>> = ({ className, ...props }) => (
  <img
    src="/images/solutions/by-size/startups/joiner-2.svg"
    className={`absolute top-0 left-0 transform translate-y-[10%] -translate-x-[0%] ${className}`}
    {...props}
  />
);

export const SimplifyMultiCloud: FC = () => {
  return (
    <Stack className="items-center overflow-hidden bg-black pb-36 pt-48">
      <Stack className="relative w-full max-w-[2000px] items-center flex-row justify-end gap-12">
        <Stack className="relative gap-8 max-w-[850px]">
          <TypoH2 className="">Simplify Multi-Cloud Deployments</TypoH2>
          <TypoP1 className="text-text-secondary">
            Deploy your applications across multiple cloud platforms with zero configuration hassle.
            Whether it&apos;s Kubernetes clusters or virtual machines, Planton Cloud simplifies
            multi-cloud management for you.
          </TypoP1>
        </Stack>
        <Box className="relative">
          <video src="/videos/earth.mp4" className="w-[855px]" autoPlay loop muted />
          <AzureImg className="blur-3xl z-0" />
          <AzureImg className="z-10" />
          <Joiner1Img className="blur-sm z-0" />
          <Joiner1Img className="z-10" />
          <img
            src="/images/solutions/by-size/startups/aws.svg"
            className="absolute top-1/2 left-1/2 transform -translate-y-[65%] translate-x-[100%]"
          />
          <GcpImg className="blur-3xl z-0" />
          <GcpImg className="z-10" />
          <Joiner2Img className="blur-sm z-0" />
          <Joiner2Img className="z-10" />
        </Box>
      </Stack>
    </Stack>
  );
};
