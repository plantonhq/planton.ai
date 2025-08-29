import { FC, ImgHTMLAttributes } from 'react';
import { Box, Stack } from '@mui/material';
import { TypoH3, TypoP1 } from '../../../common';

const CubeImg: FC<ImgHTMLAttributes<HTMLImageElement>> = ({ className, ...props }) => (
  <img
    src="/images/solutions/by-size/chat-ops/cube.svg"
    className={`absolute left-0 bottom-0 transform -translate-x-[80%] -z-0 ${className}`}
    {...props}
  />
);

// common section used in chat ops, internal developer platform pages
export const CollaborateSeamlessly: FC = () => {
  return (
    <Stack className="relative overflow-hidden items-center py-28 bg-black">
      <Box className="absolute w-[2500px] aspect-square -top-[100%] left-1/2 transform -translate-x-[22%] z-0">
        <Box className="relative ">
          <Box className="w-[2300px] aspect-[1.12] absolute left-[400px] -top-[750px] opacity-20 mix-blend-screen rounded-full blur-[5px] bg-[linear-gradient(0deg,_#9747FF_9.78%,_#03A587_47.65%)] z-20" />
          <Box className="w-[2300px] aspect-[1.12] absolute left-40 -top-[360px] opacity-20 mix-blend-screen rounded-full blur-[5px] bg-[linear-gradient(0deg,_#9747FF_33.92%,_#03A587_99.65%)] z-10" />
          <Box className="w-[2300px] aspect-[1.12] absolute left-0 top-0 opacity-20 mix-blend-screen rounded-full blur-[5px] bg-[linear-gradient(0deg,_#9747FF_21.26%,_#03A587_57.53%)] z-0" />
        </Box>
      </Box>
      <Stack className="relative w-full max-w-[1250px] gap-8 p-8 pb-0 bg-[#1e2228]/50 rounded-[42px] border border-[#3c3c3c] backdrop-blur-[71px]">
        <Stack className="gap-6">
          <TypoH3>Collaborate Seamlessly with Your Team</TypoH3>
          <TypoP1 className={`text-text-secondary`}>
            Planton Cloud&apos;s ChatOps fosters a collaborative environment where all team actions
            are visible and accessible. Share updates, seek approvals, and manage tasks
            collectively, ensuring everyone stays aligned and informed.
          </TypoP1>
        </Stack>
        <Stack className="relative w-full">
          <img src="/images/solutions/by-size/chat-ops/resource-details.svg" className="self-end -ml-4" />
          <CubeImg className="z-0 blur-[665px]" />
          <CubeImg className="z-10" />
        </Stack>
      </Stack>
    </Stack>
  );
};
