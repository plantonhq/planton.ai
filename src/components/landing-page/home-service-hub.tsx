import { Box, Stack } from '@mui/material';
import Image from 'next/image';
import { FC, ReactNode } from 'react';
import { TypoH2, TypoH3, TypoP1 } from '../common';

interface IServiceBox {
  title: string;
  desc?: ReactNode;
  className?: string;
}

export const ServiceBox: FC<IServiceBox> = ({ title, desc = '', className }) => {
  return (
    <Stack
      className={`gap-4 p-[32px] rounded-[42px] bg-[#1e2228]/50 border border-[#3c3c3c] backdrop-blur-[28px] grow ${className}`}
    >
      <TypoH3>{title}</TypoH3>
      {desc}
    </Stack>
  );
};

export const HomeServiceHub: FC = () => {
  return (
    <section className="bg-black pt-32 relative overflow-hidden">
      <Box
        sx={{ borderRadius: '50%' }}
        className="w-[870px] aspect-square absolute top-0 left-1/2 transform -translate-x-[10%] -translate-y-[40%] bg-[#623a9e] blur-[600px] z-10"
      />
      <video
        src="/videos/earth-effect.mp4"
        autoPlay
        muted
        loop
        className="w-[1280px] opacity-25 absolute bottom-0 left-1/2 transform -translate-x-[110%] translate-y-[30%]"
      />
      <Box className="w-[956px] aspect-square absolute bottom-0 left-1/2 transform -translate-x-[100%] translate-y-[20%] bg-[#7c5ed8] rounded-full blur-[660px] " />
      <Stack gap={5} className="max-w-7xl mx-auto z-[1] relative">
        <Stack className="gap-6 text-center">
          <TypoH2>
            Service Hub: Centralizing <br /> Microservices Development
          </TypoH2>
          <TypoP1 className="text-text-secondary">
            Streamline Your Microservices with Service Hub
          </TypoP1>
        </Stack>

        <Stack gap={5} className="flex-row mx-10">
          <ServiceBox
            title="Unified Registry"
            desc={
              <TypoP1 component="span">
                Complete visibility{' '}
                <TypoP1 component="span" className="text-text-secondary">
                  into every microservice within the organization.
                </TypoP1>
              </TypoP1>
            }
          />
          <ServiceBox
            title="Instant Templates"
            desc={
              <TypoP1 component="span">
                Bootstrap{' '}
                <TypoP1 component="span" className="text-text-secondary">
                  new services in minutes using pre-built templates.
                </TypoP1>
              </TypoP1>
            }
          />
          <ServiceBox
            title="Simplified Onboarding"
            desc={
              <TypoP1 component="span">
                New developers{' '}
                <TypoP1 component="span" className="text-text-secondary">
                  access the full landscape of services effortlessly.
                </TypoP1>
              </TypoP1>
            }
          />
        </Stack>

        <Stack className="flex-row mt-20 ml-[-68px] mr-[-68px] overflow-hidden">
          <Stack flex={1} className="relative h-[500px]">
            <Image
              src="/images/resource-explorer.png"
              alt="Planton Cloud Platform"
              className="w-full h-full"
              fill
              style={{ objectFit: 'cover', objectPosition: 'top' }}
            />
          </Stack>
        </Stack>
      </Stack>
    </section>
  );
};
