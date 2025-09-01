import { FC, ImgHTMLAttributes } from 'react';
import Link from 'next/link';
import { Box, Stack } from '@mui/material';
import { TypoH2, TypoH3, TypoP1 } from '@/components/common';

interface ISecretBox {
  title: string;
  subTitle: string;
  url: string;
}

export const SecretBox: FC<ISecretBox> = ({ title, subTitle, url }) => {
  return (
    <Stack
      className={
        'p-12 gap-5 rounded-xl shadow-[0px_33px_17.100000381469727px_0px_rgba(0,0,0,0.43)] border border-[#454545] bg-[linear-gradient(241.28deg,_#0A0A0A_-1.64%,_#6C00FF_442.91%)]'
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

const TorusImg: FC<ImgHTMLAttributes<HTMLImageElement>> = ({ className, ...props }) => (
  <img
    src="/images/features/torus-2.svg"
    className={`absolute left-1/2 top-0 transform -translate-x-[280%] translate-y-[30%] ${className}`}
    {...props}
  />
);

export const SecretsManagement: FC = () => {
  return (
    <Stack className="relative overflow-hidden items-center pt-20 bg-black">
      <Stack className="w-full items-center max-w-[1800px] z-10">
        <TypoH2 className="text-center">Secrets Management</TypoH2>
        <Box className="grid grid-cols-2 gap-8 max-w-[1540px] mt-44 z-10">
          <SecretBox
            title="Effortless Secrets Management with Planton Cloud"
            subTitle="Planton Cloud integrates with AWS, GCP, and Kubernetes to securely manage secrets, while Planton Aura lets developers manage them through simple chat commands."
            url=""
          />
          <SecretBox
            title="Overcome Challenges of Traditional Secrets Handling"
            subTitle="Planton Cloud automates secrets management in deployment workflows, boosting security and simplifying cloud-native pipelines."
            url=""
          />
        </Box>
        <img src="/images/features/stack-job-details-2.svg" className="-mt-10" />
      </Stack>
      <Box className="w-[1700px] aspect-[0.97] absolute top-0 right-1/2 transform translate-x-[90%] -translate-y-[35%] -z-0 rounded-full opacity-50 blur-[3px] bg-[linear-gradient(45deg,_#8A3391_10.55%,_#060512_74.21%)]" />
      <TorusImg className="z-0 scale-150 blur-[200px] " />
      <TorusImg className="z-10" />
      <TorusImg className="z-0 !top-auto !bottom-0 scale-150 blur-[200px] " />
    </Stack>
  );
};
