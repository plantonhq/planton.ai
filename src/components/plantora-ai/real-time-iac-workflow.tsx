import { FC } from 'react';
import { Box, Stack } from '@mui/material';
import { TypoH2, TypoH3, TypoP1 } from '@/components/common';
import { InnovationBox } from '@/components/solutions';

export const RealTimeIaCWorkflow: FC = () => {
  return (
    <Stack className="items-center bg-black relative overflow-hidden p-5 md:py-28">
      <img
        src="/images/features/planton-copilot/torus.png"
        className="hidden md:block w-[2500px] absolute left-1/2 top-[15%] opacity-20 blur-[350px] transform -translate-x-[80%] -z-0"
      />
      <img
        src="/images/features/planton-copilot/torus.png"
        className="md:hidden w-[380px] absolute left-0 top-0 blur-[200px] transform -translate-x-[50%] translate-y-[40%] -z-0"
      />
      <Stack className="md:max-w-[1350px] items-center gap-3 md:gap-8 z-20">
        <Stack className="items-center gap-3 md:gap-8">
          <TypoH2 className="text-center md:max-w-[900px] md:mt-2">
            Real-Time IaC Workflow Visibility
          </TypoH2>
          <TypoP1 className="text-center text-text-secondary md:max-w-[1250px]">
            One of the biggest benefits? You never need to leave the chat to track deployment
            status. All IaC workflow logs appear right below Copilot’s confirmation messages,
            detailing each step (from plan to apply) and its success or failure.
          </TypoP1>
          <TypoH3 className="text-center md:mt-16">Why This Matters?</TypoH3>
          <Box className="w-full grid grid-cols-12 gap-3 md:gap-x-4 md:gap-y-8">
            <InnovationBox
              title="Increased Transparency"
              desc="See exactly what’s happening during provisioning or updates"
              descClassName="text-text-secondary"
              className="col-span-12 md:col-span-6 !bg-[linear-gradient(38deg,_rgba(36,_23,_65,_0.24)_-6%,_rgba(138,_51,_145,_0.24)_125.86%)]"
            />
            <InnovationBox
              title="Faster Troubleshooting"
              desc="Spot issues in real-time without switching tools."
              descClassName="text-text-secondary"
              className="col-span-12 md:col-span-6 !bg-[linear-gradient(38deg,_rgba(36,_23,_65,_0.24)_-6%,_rgba(138,_51,_145,_0.24)_125.86%)]"
            />
            <InnovationBox
              title="Single Pane of Glass"
              desc="Manage all your DevOps tasks from one interface."
              descClassName="text-text-secondary"
              className="col-span-12 !bg-[linear-gradient(38deg,_rgba(36,_23,_65,_0.24)_-6%,_rgba(138,_51,_145,_0.24)_125.86%)]"
            />
          </Box>
          <img src="/images/features/planton-copilot/bg-9.svg" className="md:mt-8" />
        </Stack>
      </Stack>
    </Stack>
  );
};
