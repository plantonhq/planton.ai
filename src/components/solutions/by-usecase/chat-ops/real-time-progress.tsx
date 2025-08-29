import { FC } from 'react';
import { Box, Stack } from '@mui/material';
import { TypoH2, TypoP1 } from '../../../common';

interface IRealTimeProgress {
  showTlTorus?: boolean;
}

// common section used in chat ops, internal developer platform pages
export const RealTimeProgress: FC<IRealTimeProgress> = ({ showTlTorus = true }) => {
  return (
    <Stack className="relative items-center py-28 bg-black">
      {showTlTorus && (
        <img
          src="/images/solutions/by-size/chat-ops/torus-2.svg"
          className="absolute right-1/2 top-0 transform -translate-x-[150%] -translate-y-[40%]"
        />
      )}
      <Box className="w-[1920px] h-[264px] absolute bottom-0 bg-[linear-gradient(0deg,_#000000_0%,_#000000_0_100%)]" />
      <Box className="w-[2100px] aspect-square absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#623a9e]/40 rounded-full blur-[1204px]" />
      <img
        src="/images/solutions/by-size/chat-ops/triangle.svg"
        className="w-[500px] absolute right-1/2 top-0 transform -translate-x-[110%]"
      />
      <Stack className="relative w-full max-w-[1150px] items-center gap-8 px-8 pt-24 bg-[#1e2228]/50 rounded-[42px] border border-[#3c3c3c] backdrop-blur-[71px]">
        <img
          src="/images/solutions/by-size/chat-ops/toy-2.svg"
          className="absolute right-0 top-0 transform translate-x-1/2 -translate-y-1/2"
        />
        <img
          src="/images/solutions/by-size/chat-ops/toy.svg"
          className="absolute -right-48 top-[30%] transform -translate-y-1/2"
        />
        <Stack className="gap-7 text-center max-w-[1000px]">
          <TypoH2>Real-Time Progress and Feedback</TypoH2>
          <TypoP1 className={`text-text-secondary`}>
            Automate and Scale with Built-In Infrastructure-as-Code
          </TypoP1>
        </Stack>
        <Box className="relative">
          <img src="/images/solutions/by-size/chat-ops/dashboard.svg" />
          <img
            src="/images/solutions/by-size/chat-ops/graph-1.svg"
            className="absolute w-[500px] right-0 bottom-0 transform translate-x-1/2  translate-y-[25%]"
          />
          <img
            src="/images/solutions/by-size/chat-ops/graph-2.svg"
            className="absolute w-[300px] left-0 bottom-0 transform -translate-x-[80%]  translate-y-[25%] z-10"
          />
          <img
            src="/images/solutions/by-size/chat-ops/half-donut.svg"
            className="absolute left-0 bottom-0 transform -translate-x-[80%] -z-0"
          />
        </Box>
      </Stack>
    </Stack>
  );
};
