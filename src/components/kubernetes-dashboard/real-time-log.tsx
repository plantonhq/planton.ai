import { FC } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { TypoH3, TypoP1 } from '../common';

export const RealTimeLog: FC = () => {
  return (
    <Stack className="relative overflow-hidden items-center bg-black">
      <Box className="absolute w-[1704.66px] aspect-square rounded-full left-[calc(50%-250px)] blur-[3.42px] rotate-[-90deg] bg-gradient-to-t from-[#1b1b51] to-[#060512] " />

      <Stack className="flex-row items-center gap-8 py-28 z-10">
        <Stack className="gap-4 max-w-[500px]">
          <Typography className="text-[40px] font-semibold leading-[48px]">
            Real-Time Log Streaming
          </Typography>
          <TypoP1 className="text-text-secondary">
            Stream live logs from your pods directly through the Planton Cloud console or CLI.
            Monitor application behavior in real-time, filter logs, and accelerate your debugging
            process.
          </TypoP1>
        </Stack>
        <img src="/images/features/kubernetes-dashboard/dashboard.svg" />
      </Stack>

      <Stack className="flex-row items-center gap-8 py-28 z-10">
        <Box className="relative">
          <img src="/images/features/kubernetes-dashboard/pulumi-module-registry.svg" className="w-[800px]" />
          <img
            src="/images/features/kubernetes-dashboard/inspect-element.svg"
            className="absolute -bottom-36 -left-20 w-[300px]"
          />
        </Box>
        <Stack className="gap-4 max-w-[500px]">
          <TypoH3>Execute Commands Inside Containers</TypoH3>
          <TypoP1 className="text-text-secondary">
            Description: Securely execute commands inside running containers to inspect the runtime
            environment. Run shell commands to check configurations and diagnose issues without ever
            leaving the Planton Cloud environment.
          </TypoP1>
        </Stack>
      </Stack>
    </Stack>
  );
};
