import { FC, ImgHTMLAttributes } from 'react';
import Link from 'next/link';
import { Box, Stack } from '@mui/material';
import { TypoH2, TypoH3, TypoP1 } from '@/components/common';

interface ISourceBox {
  title: string;
  subTitle: string;
  url: string;
}

export const SourceBox: FC<ISourceBox> = ({ title, subTitle, url }) => {
  return (
    <Stack
      className={
        'p-8 gap-5 rounded-xl shadow-[0px_33px_17.100000381469727px_0px_rgba(0,0,0,0.43)] border border-[#454545] bg-[linear-gradient(241.28deg,_#0A0A0A_-1.64%,_#6C00FF_442.91%)]'
      }
    >
      <TypoH3>{title}</TypoH3>
      <TypoP1>{subTitle}</TypoP1>
      <Link href={url} className="text-xl font-medium text-[#0099FF]">
        Learn More
      </Link>
    </Stack>
  );
};

const BurgerImg: FC<ImgHTMLAttributes<HTMLImageElement>> = ({ className, ...props }) => (
  <img
    src="/images/features/burger.svg"
    className={`w-[700px] absolute left-1/2 top-0 transform -translate-x-[175%] -translate-y-[45%] ${className}`}
    {...props}
  />
);

export const DeployOpenSource: FC = () => {
  return (
    <Box>
      <Stack className="relative overflow-hidden items-center pt-20 bg-black">
        <Stack className="relative w-[1800px]">
          <TypoH2 className="text-center self-center z-10">Deploy Open Source</TypoH2>
          <img src="/images/features/stack-job-details-3.svg" className="mt-44 self-end z-10" />
          <Stack className="absolute left-32 top-44 z-10">
            <Box className="grid grid-cols-1 gap-8 max-w-[850px] z-10">
              <SourceBox
                title="Streamlined Deployment of Open Source Software"
                subTitle="Planton Cloud simplifies deploying open source software on Kubernetes with Project Planterm, offering a unified API, a deployment component store, and centralized documentation for easy browsing and setup."
                url=""
              />
              <SourceBox
                title="Accelerate Development with Conversational Deployment"
                subTitle="With Plantora, the AI-powered Planton Copilot, deploying open source software is as simple as a conversation. Just request services like 'a Redis database,' and deployments are completed in minutes, boosting productivity and innovation."
                url=""
              />
            </Box>
          </Stack>
        </Stack>
        <Box className="w-[1700px] aspect-[0.97] absolute top-0 right-1/2 transform translate-x-[90%] -translate-y-[35%] -z-0 rounded-full opacity-50 blur-[3px] bg-[linear-gradient(45deg,_#8A3391_10.55%,_#060512_74.21%)]" />
      </Stack>
      <Box className="w-full relative z-20">
        <BurgerImg className="blur-[200px] z-0" />
        <BurgerImg className="z-10" />
      </Box>
      <Stack className="relative overflow-hidden items-center pt-20 bg-black">
        <Stack className="w-[1600px]">
          <TypoH2 className="text-center self-center z-10">Provision Cloud Infrastructure</TypoH2>
          <Stack className="flex-row items-center gap-12 z-10">
            <img src="/images/features/dashboard.svg" className="mt-24 self-end z-10" />
            <Stack className="gap-4">
              <TypoH3>Consistent Deployment for Applications and Infrastructure</TypoH3>
              <TypoP1 className="text-text-secondary">
                Planton Cloud extends its deployment framework to include cloud resources such as
                compute instances, storage buckets, and network services. This unified approach
                provides a consistent and streamlined experience, reducing cognitive load and
                enhancing productivity for developers working in cloud-native environments.
              </TypoP1>
              <Link href="" className="text-xl font-medium text-[#0099FF]">
                Learn More
              </Link>
            </Stack>
          </Stack>
        </Stack>
        <Box className="w-[1700px] aspect-[0.97] absolute top-1/2 right-1/2 transform translate-x-[100%] -translate-y-1/2 -z-0 rounded-full opacity-50 blur-[3px] bg-[linear-gradient(311.94deg,_#FE7AB5_-32.21%,_#000000_101.8%)]" />
      </Stack>
    </Box>
  );
};
