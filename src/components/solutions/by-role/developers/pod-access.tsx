import { FC } from 'react';
import { Stack } from '@mui/material';
import { TypoH2, TypoP1 } from '@/components/common';

export const PodAccess: FC = () => {
  return (
    <Stack className="pt-32 relative overflow-hidden items-center bg-black ">
      <img
        src="/images/solutions/developers/bg-7.svg"
        className="absolute bottom-0 right-1/2 transform translate-x-[54%]"
      />
      <Stack className="w-full max-w-[1920px] z-10">
        <Stack className="self-start justify-center flex-row gap-8">
          <img src="/images/solutions/developers/edit-3.svg" />
          <Stack className="gap-4 max-w-[750px] h-fit mt-16 p-9 rounded-[48px] backdrop-blur-[90px] bg-[linear-gradient(301deg,_#351B74C4_36.21%,_#A772D1C4_181.28%)]">
            <TypoH2 className="max-w-[650px]">Real-Time Log Streaming and Pod Access</TypoH2>
            <TypoP1 className="text-text-secondary">
              Stream live logs and execute commands inside running containers without complex
              setups. Planton Cloud&apos;s Kubernetes integrations enable real-time interaction with
              your applications, making debugging and monitoring straightforward and efficient.
            </TypoP1>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};
