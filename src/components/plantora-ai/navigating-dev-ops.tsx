import { FC } from 'react';
import { Box, Stack } from '@mui/material';
import { FlipEffect, TypoH2, TypoP1 } from '../common';

export const NavigatingDevOps: FC = () => {
  return (
    <Stack className="relative overflow-hidden items-center bg-[#161A1F]">
      <Box className="mt-12" zIndex={1}>
        <Stack className="gap-8 items-center text-center max-w-[1200px]">
          <TypoH2>Config Managment</TypoH2>
          <TypoP1 className="text-text-secondary">
            Seamlessly manage and adjust resource configurations without leaving your chat
          </TypoP1>
          <Box className="max-h-[600px] overflow-hidden">
            <FlipEffect
              initialRotation={20}
              src="/videos/galaxy-square.mp4"
              width={1300}
              height={500}
              extraHeight={50}
              rotationOrigin="bottom center"
            />
          </Box>
        </Stack>
      </Box>
      <Box className="absolute w-[3872px] h-[1300px] bottom-[-1000px] bg-[radial-gradient(50%_50%_at_50%_50%,_#FF0509_0%,_rgba(0,_0,_0,_0)_100%)]" />
    </Stack>
  );
};
