import { FC, ImgHTMLAttributes } from 'react';
import Link from 'next/link';
import { Box, Stack } from '@mui/material';
import { TypoH2, TypoH3, TypoP1 } from '@/components/common';
import { StyledGradientBorderBox } from './styled';

interface IDeployBox {
  title: string;
  subTitle: string;
  url: string;
}

export const DeployBox: FC<IDeployBox> = ({ title, subTitle, url }) => {
  return (
    <StyledGradientBorderBox
      className={
        'flex flex-col p-12 gap-4 rounded-[42px] border-2 border-[#8a3391] backdrop-blur-[8.60px] bg-[#2b2b2b]/25'
      }
    >
      <TypoH3>{title}</TypoH3>
      <TypoP1>{subTitle}</TypoP1>
      <Link href={url} className="text-xl font-medium text-[#0099FF]">
        Learn More
      </Link>
    </StyledGradientBorderBox>
  );
};

const TorusImg: FC<ImgHTMLAttributes<HTMLImageElement>> = ({ className, ...props }) => (
  <img
    src="/images/features/torus.svg"
    className={`absolute top-0 right-1/2 transform translate-x-[140%] -translate-y-[50%] ${className}`}
    {...props}
  />
);

export const DeployServices: FC = () => {
  return (
    <Box className="w-full overflow-hidden">
      <Stack className="items-center py-24 bg-[linear-gradient(180.42deg,_#1CAB98_-82.69%,_#000000_15.48%)]">
        <Stack className="w-full max-w-[1300px] gap-12">
          <TypoH2 className="text-center">Deploy Services</TypoH2>
          <Stack className="items-center p-8 pb-0 bg-neutral-900/25 rounded-2xl border border-[#414141] backdrop-blur-[41.12px] ">
            <img src="/images/features/pulumi-module-registry-2.svg" />
          </Stack>
          <Box className="grid grid-cols-2 gap-6">
            <DeployBox
              title="Simplify Application Deployments with Kind-to-Provider API Resources"
              subTitle="Configuration changes captured using git diff; infrastructure changes documented with Pulumi diffs."
              url=""
            />
            <DeployBox
              title="Consistent Configuration Management with Kustomize"
              subTitle="Configuration changes captured using git diff; infrastructure changes documented with Pulumi diffs."
              url=""
            />
          </Box>
        </Stack>
      </Stack>
      <Stack className="relative items-center pt-16 mb-8 bg-black border-b border-[#3D3D3D]">
        <Stack className="w-full max-w-[1300px] gap-16 ">
          <TypoH2 className="text-center z-10">Shared Variables</TypoH2>
          <Box className="rounded-t-[42px] border border-b-0 border-[#3c3c3c]">
            <Stack className="relative items-center rounded-t-[42px] border-b border-[#3c3c3c] px-[65px] pt-[98px] bg-[#1e2228]/50 backdrop-blur-[29px]">
              <Box className="relative">
                <img src="/images/features/stack-job-details.svg" className="relative z-10" />
              </Box>
              <Box className="w-[900px] aspect-[1.47] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full blur-[200px] bg-[linear-gradient(337.46deg,_#FE9AC7_-25.13%,_#060512_56.9%)] -z-0" />
              <Box className="w-[1012px] aspect-square absolute top-0 left-1/2 transform -translate-x-1/2 translate-y-[10%] rounded-full blur-[400px] bg-[linear-gradient(216.93deg,_#46AAA5_-1.74%,_#6B56A2_53.46%,_#230DA6_117.61%)]" />
            </Stack>
            <Box className="grid grid-cols-2 gap-1">
              <Stack className="gap-6 px-8 pt-10 pb-20 border-r border-[#3D3D3D]">
                <TypoH3>Reduce Configuration Duplication with Centralized ConfigMaps</TypoH3>
                <TypoP1 className="text-text-secondary">
                  Planton Cloud introduces ConfigMaps—a centralized resource for managing shared
                  environment variables across multiple services. ConfigMaps store non-sensitive
                  configuration data as key-value pairs, allowing services to reference them without
                  embedding the actual values in their codebases. During deployment, Planton Cloud
                  replaces these.
                </TypoP1>
                <TypoP1 className="text-[#0099FF]">Learn More</TypoP1>
              </Stack>
              <Stack className="gap-6 px-8 pt-10 pb-20">
                <TypoH3>Simplify Maintenance and Enhance Scalability</TypoH3>
                <TypoP1 className="text-text-secondary">
                  By centralizing configuration data with ConfigMaps, updating configuration values
                  becomes more efficient. A change made to a ConfigMap automatically applies to all
                  dependent services upon redeployment, without the need to modify individual
                  codebases. This approach streamlines maintenance tasks and scales effectively as
                  the number of services and team members grows.
                </TypoP1>
                <TypoP1 className="text-[#0099FF]">Learn More</TypoP1>
              </Stack>
            </Box>
          </Box>
        </Stack>
        <TorusImg className="!translate-x-[140%] !-translate-y-[30%] blur-[200px] z-0" />
        <TorusImg className="z-20" />
      </Stack>
    </Box>
  );
};
