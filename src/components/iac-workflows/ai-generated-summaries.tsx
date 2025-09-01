import { FC } from 'react';
import { Box, Stack } from '@mui/material';
import { TypoH2, TypoH3, TypoP1 } from '../common';

export const AIGeneratedSummaries: FC = () => {
  return (
    <Box>
      <Stack className="items-center pt-28 bg-black">
        <Stack className="gap-8 items-center text-center max-w-[1300px]">
          <TypoH2 className="max-w-[1100px]">
            Real-Time Monitoring and AI-Generated Summaries
          </TypoH2>
          <TypoP1 className="text-text-secondary">
            Stay informed with real-time monitoring of your deployments. Our terminal-like interface
            provides live updates, while * AI-generated summaries* distill complex logs into
            understandable insights, reducing cognitive load and speeding up decision-making.
          </TypoP1>
          <Box className="relative h-[720px]">
            <img src="/images/features/iac-workflows/details-2.svg" />
            <img
              src="/images/features/planton-copilot/face-1.gif"
              className="w-[150px] absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2"
            />
          </Box>
        </Stack>
      </Stack>
      <Stack className="relative items-center py-48 bg-[linear-gradient(121.04deg,_#000000_54.74%,_#5FED83_244.29%)]">
        <Stack className="flex-row max-w-[1300px] items-center pt-8 pl-8 rounded-xl bg-[linear-gradient(269.33deg,_#000000_-5.42%,_#2E2E2E_97.61%)] z-10">
          <Stack className="gap-8 items-center max-w-[700px]">
            <TypoH3>Jumpstart Development with Ready-to-Use Templates</TypoH3>
            <TypoP1 className="text-text-secondary">
              Bootstrap new services in minutes using our Template Library. Choose from a variety of
              pre-built cookiecutter templates that incorporate industry best practices. Whether
              it&apos;s a Next.js app or a Java microservice, get a head start without reinventing
              the wheel.
            </TypoP1>
          </Stack>
          <img src="/images/features/iac-workflows/pulumi-module-registry.svg" />
        </Stack>
        <Box className="w-[1281px] aspect-[1.10] absolute left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-[100%] rounded-full blur-3xl bg-[linear-gradient(91.52deg,_#000000_58.27%,_#646464_229.43%,_#666666_233.56%)]" />
      </Stack>
    </Box>
  );
};
