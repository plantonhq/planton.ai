import { FC } from 'react';
import { Box, Button, Link, Stack } from '@mui/material';
import { TypoH2, TypoP1 } from '../../common';

export const ReadyToTransformFeature: FC = () => {
  return (
    <Stack className="items-center relative overflow-hidden gap-12 py-28 bg-[#010101]">
      <Box className="w-[3000px] aspect-square absolute left-1/2 top-20 transform -translate-x-1/2  rounded-full opacity-55 blur-[48px] bg-[linear-gradient(240deg,_#FE9AC7_-25.13%,_#060512_56.9%)] z-0" />
      <img
        src="/images/features/donut-2.svg"
        className="absolute left-1/2 top-20 transform -translate-x-[430%]"
      />
      <img
        src="/images/features/donut-3.svg"
        className="absolute left-1/2 top-1/3 transform -translate-x-[250%] -translate-y-[20%]"
      />
      <img
        src="/images/features/donut-4.svg"
        className="w-[400px] absolute left-1/2 bottom-0 transform -translate-x-[250%] -translate-y-[30%]"
      />
      <img
        src="/images/features/donut-5.svg"
        className="w-[250px] absolute left-1/2 bottom-0 transform -translate-x-[90%] -translate-y-[30%] z-20"
      />
      <img
        src="/images/features/donut-6.svg"
        className="absolute right-1/2 bottom-0 transform translate-x-[130%]"
      />
      <img
        src="/images/features/rectangle-2.svg"
        className="absolute right-1/2 bottom-1/2 transform translate-x-[300%] translate-y-[100%]"
      />
      <img
        src="/images/features/donut-9.svg"
        className="absolute right-1/2 bottom-1/2 transform translate-x-[280%] translate-y-[110%]"
      />
      <img
        src="/images/features/donut-7.svg"
        className="absolute right-1/2 top-40 transform translate-x-[320%]"
      />
      <img
        src="/images/features/donut-8.svg"
        className="absolute left-1/2 bottom-0 transform -translate-x-[260%] -translate-y-[80%]"
      />
      <Stack className="gap-11 items-center text-center max-w-[1250px] z-10">
        <TypoH2>Ready to Transform Your DevOps Workflow?</TypoH2>
        <TypoP1 className={`text-text-secondary`}>
          Experience the efficiency and simplicity of Planton Cloud for yourself. Sign up today and
          accelerate your cloud-native deployments.
        </TypoP1>
        <Button
          className="px-5 py-2 w-fit h-10 bg-primary-50 text-white rounded-[10px] hover:bg-[#1976D2] transition-colors"
          LinkComponent={Link}
          href="https://console.planton.cloud"
          target="_self"
        >
          Get Started with Auditable Intelligence
        </Button>
        <img src="/images/solutions/by-size/chat-ops/meeting.svg" />
      </Stack>
    </Stack>
  );
};
