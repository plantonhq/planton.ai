import { FC } from 'react';
import { Box, Button, Stack } from '@mui/material';
import { TypoH3, TypoP1 } from '../common';

export const Collaboration: FC = () => {
  return (
    <Box>
      <Stack className="relative overflow-hidden items-center pt-32 pb-8 bg-[#010205]">
        <Box className="absolute w-[2500px] h-[2500px] bottom-0 left-1/2 transform -translate-x-[50%] translate-y-[50%] z-0">
          <Box className="relative w-full h-full">
            <Box className="w-[2350px] aspect-[1.12] absolute left-1/2 bottom-0 transform -translate-x-1/2 -translate-y-[95%] opacity-10 rounded-full blur-[10px] bg-[linear-gradient(0deg,_#9747FF_9.78%,_#03A587_47.65%)] z-30" />
            <Box className="w-[2350px] aspect-[1.12] absolute left-1/2 bottom-0 transform -translate-x-1/2 -translate-y-[70%] opacity-10 rounded-full blur-[10px] bg-[linear-gradient(0deg,_#9747FF_33.92%,_#03A587_99.65%)] z-20" />
            <Box className="w-[2350px] aspect-[1.12] absolute left-1/2 bottom-0 transform -translate-x-1/2 -translate-y-[55%] opacity-10 rounded-full blur-[10px] bg-[linear-gradient(0deg,_#9747FF_21.26%,_#03A587_57.53%)] z-10" />
          </Box>
        </Box>
        <Stack className="relative gap-4 max-w-[1300px] bg-[#0000006B] p-[60px] pb-0 rounded-[20px] border-2 border-[#424242] shadow-[0px_4.18558406829834px_4.18558406829834px_0px_rgba(0,0,0,0.25)] z-10">
          <TypoH3>Collaboration and Transparency Across Teams</TypoH3>
          <TypoP1 className="text-text-secondary">
            Promote collaboration with comprehensive deployment histories and shared insights.
            Whether initiated via forms or our AI assistant, all Stack Jobs are logged and
            accessible, enhancing transparency and teamwork.
          </TypoP1>
          <img src="/images/features/iac-workflows/stack-job-details-2.svg" className="z-10" />
          <img src="/images/features/iac-workflows/grid-icon-5.svg" className="absolute -top-36 right-0" />
        </Stack>
        <Box className="w-[3400px] aspect-[3] absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-[70%] opacity-40 bg-[radial-gradient(50%_50%_at_50%_50%,_#055DFF_0%,_#010205_100%)] z-20" />
      </Stack>
      <Stack className="items-center pt-16 pb-8 gap-8 bg-[linear-gradient(132.98deg,_#0F0E97_-23.75%,_#310642_30.1%,_#010104_97.94%)]">
        <TypoH3 className='max-w-[1100px] text-center'>Accelerate Your Multi-Cloud Deployments with Intelligent Automation</TypoH3>
        <Button className="bg-white text-black px-5 py-3 text-base font-medium rounded-[10px] w-fit">Try Planton Cloud</Button>
      </Stack>
    </Box>
  );
};
