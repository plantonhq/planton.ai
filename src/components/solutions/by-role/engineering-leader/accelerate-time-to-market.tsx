import { FC } from 'react';
import { Stack } from '@mui/material';
import { TypoH2, TypoP1 } from '@/components';

export const AccelerateTimeToMarket: FC = () => {
  return (
    <Stack className="relative overflow-hidden items-center bg-black">
      <img src="/images/solutions/by-role/engineering-leader/bg-3.svg" />
      <Stack className="w-full max-w-[1550px] absolute left-1/2 -top-30 transform -translate-x-1/2  items-center text-center gap-5 z-10">
        <TypoH2 className="max-w-[1350px]">
          Accelerate Time-to-Market with AI-Powered Deployments
        </TypoH2>
        <TypoP1 className={`max-w-[1450px] text-center text-text-secondary`}>
          Engineering leaders constantly seek ways to enable their teams to innovate faster and
          deliver high-quality products swiftly. Planton Cloud&apos;s AI-driven DevOps platform
          streamlines deployment processes, reducing deployment times from weeks to minutes. Empower
          your developers to focus on building features rather than managing infrastructure.
        </TypoP1>
        <video src="/videos/dots.mp4" className="w-[600px] opacity-10 -mt-20" autoPlay muted loop />
        <img src="/images/solutions/by-role/engineering-leader/yaml.svg" className="-mt-48" />
      </Stack>
    </Stack>
  );
};
