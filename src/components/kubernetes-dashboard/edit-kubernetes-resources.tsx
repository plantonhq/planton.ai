import { FC } from 'react';
import { Box, BoxProps, Button, Stack, Typography } from '@mui/material';
import { TypoB2Medium, TypoH2, TypoH3, TypoP1 } from '../common';
import Link from 'next/link';

interface IGridBox {
  imgSrc: string;
  title: string;
  description: string;
}

export const ShadowBox: FC<BoxProps> = ({ className, ...props }) => {
  return (
    <Box
      {...props}
      className={`absolute w-[1800px] aspect-[0.9] transform -translate-x-1/2 opacity-40 mix-blend-screen -rotate-[106deg] rounded-full blur-[11px] ${className}`}
    />
  );
};

export const GridBox: FC<IGridBox> = ({ imgSrc, title, description }) => {
  return (
    <Stack className="p-8 gap-6 bg-neutral-900/25 rounded-2xl border border-[#414141] backdrop-blur-[41px] ">
      <img src={imgSrc} className="w-[130px]" />
      <TypoH3>{title}</TypoH3>
      <TypoP1 className="text-text-secondary">{description}</TypoP1>
    </Stack>
  );
};

export const EditKubernetesResources: FC = () => {
  return (
    <Stack className="relative overflow-hidden items-center bg-black">
      <Box>
        <ShadowBox className="top-20 left-[calc(50%-800px)]   bg-[linear-gradient(360deg,#9747FFB5_21.26%,#03A58700_57.53%)]" />
        <ShadowBox className="top-40 left-[calc(50%-1000px)]  bg-[linear-gradient(0.7deg,#9747FF3F_33.92%,#03A5872B_99.65%)]" />
        <ShadowBox className="top-60 left-[calc(50%-1200px)]  bg-[linear-gradient(0deg,#9747FF3D_9.78%,#03A58700_47.65%)]" />
      </Box>
      <Box className="absolute w-[1750px] aspect-[0.98] top-1/3 right-[calc(50%-600px)] transform translate-x-1/2 ">
        <Box className="w-full h-full bg-black bg-opacity-90 absolute" />
        <video className="w-full h-full" src="/videos/disc-video.mp4" autoPlay loop muted />
      </Box>
      <Box className="absolute left-[calc(50%-700px)] transform -translate-x-1/2 bottom-[calc(25%)] w-[500px] aspect-square origin-top-left bg-[#ff3f00] rounded-full blur-[1200px]" />
      <Stack className="gap-6 pt-48 max-w-[1250px] z-10">
        <Typography className="text-[50px] font-semibold leading-[71px]">
          Edit Kubernetes Resources On-the-Fly
        </Typography>
        <TypoP1 className="text-text-secondary">
          Modify Kubernetes resource definitions directly through Planton Cloud. Apply changes
          immediately to live resources, enabling rapid iterations and effective troubleshooting.{' '}
        </TypoP1>
        <img
          src="/images/features/kubernetes-dashboard/stack-job-details-full.svg"
          className="pt-2"
        />
      </Stack>
      <Stack className="flex-row items-center gap-8 py-28 z-10">
        <img
          src="/images/features/kubernetes-dashboard/pulumi-module-registry.svg"
          className="w-[800px]"
        />
        <Stack className="gap-4 max-w-[700px]">
          <TypoH3>Enhanced Permission Management and Security</TypoH3>
          <TypoP1 className="text-text-secondary">
            Leverage Planton Cloud&apos;s robust permission model to ensure developers access only
            what they&apos;re authorized to. Simplify your IAM management by centralizing
            permissions within our platform, enhancing security across your operations.
          </TypoP1>
        </Stack>
      </Stack>
      <Stack className="items-center max-w-[1250px] gap-14 py-24 z-10">
        <Stack className="gap-8 text-center">
          <TypoH2>Real-World Scenarios and Use Cases</TypoH2>
          <TypoP1 className="text-text-secondary">
            See how Planton Cloud makes everyday tasks easier:
          </TypoP1>
        </Stack>
        <Stack className="w-full h-[500px] relative overflow-hidden items-center p-8 bg-neutral-900/25 rounded-2xl border border-[#414141] backdrop-blur-[41.12px]">
          <img
            src="/images/features/kubernetes-dashboard/pulumi-module-registry.svg"
            className="absolute left-1/2 transform -translate-x-1/2 -bottom-20"
          />
        </Stack>
        <Box className="w-full grid grid-cols-3 gap-11">
          <GridBox
            imgSrc="/images/features/kubernetes-dashboard/debugging.svg"
            title="Debugging Made Simple"
            description="See how Planton Cloud makes everyday tasks easier:"
          />
          <GridBox
            imgSrc="/images/features/kubernetes-dashboard/debugging-2.svg"
            title="Environment Vars Check"
            description="Adjust allocations on the fly for optimal performance."
          />
          <GridBox
            imgSrc="/images/features/kubernetes-dashboard/debugging-3.svg"
            title="Resource Monitoring"
            description="Adjust allocations on the fly for optimal performance."
          />
        </Box>
      </Stack>
      <Stack className="w-full py-8 items-center bg-gradient-to-br from-[#0f0e97] via-[#310642] to-[#010104]">
        <Stack className="gap-8 pt-8 items-center text-center max-w-[1250px]">
          <TypoH3>Experience secure, hassle-free Kubernetes management</TypoH3>
          <Button
            className="h-10 px-5 py-3 bg-white rounded-[10px] w-fit"
            LinkComponent={Link}
            href="https://console.planton.ai"
            target="_self"
          >
            <TypoB2Medium className="text-black">Try Planton Cloud Now</TypoB2Medium>
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};
