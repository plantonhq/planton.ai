import { FC } from 'react';
import { Box, Button, Stack } from '@mui/material';
import { TypoH2 } from '@/components';

export const StartLeveraging: FC = () => {
  return (
    <Stack className="relative overflow-hidden items-center bg-black">
      <Box className="overflow-hidden h-[650px]">
        <video src="/videos/galaxy-square.mp4" autoPlay muted loop className="max-w-[2000px]" />
      </Box>
      <Stack className="w-full max-w-[1550px] absolute left-1/2 top-44 transform -translate-x-1/2  items-center text-center gap-5 z-10">
        <TypoH2 className="max-w-[1350px]">
          Start leveraging AI-enhanced command-line capabilities today
        </TypoH2>
        <Button className="bg-[#0095FF] px-5 py-3 rounded-[10px] w-fit h-[40px]">
          Get Involved
        </Button>
      </Stack>
    </Stack>
  );
};
