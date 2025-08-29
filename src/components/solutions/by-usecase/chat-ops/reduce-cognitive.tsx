import { FC, ImgHTMLAttributes } from 'react';
import { Box, Stack } from '@mui/material';
import { SquareBoxes, TypoH2, TypoP1 } from '@/components/common';

const RobotImg: FC<ImgHTMLAttributes<HTMLImageElement>> = ({ className, ...props }) => (
  <img
    src="/images/solutions/by-size/chat-ops/robot-2.svg"
    className={`absolute top-0 left-0 transform -translate-x-[30%] -translate-y-[60%] ${className}`}
    {...props}
  />
);

export const ReduceCognitive: FC = () => {
  return (
    <Stack className="items-center relative gap-12 pt-20 bg-black">
      <Box className="absolute w-full max-w-[1800px] left-1/2 top-0 transform -translate-x-1/2 z-0">
        <SquareBoxes columns={9} rows={8} />
      </Box>
      <Stack className="gap-8 text-center max-w-[1250px] z-10">
        <TypoH2>Reduce Cognitive Load for Developers</TypoH2>
        <TypoP1 className={`text-text-secondary`}>
          By abstracting complex processes into simple conversations, Plantora reduces the cognitive
          burden on your developers. Free your team from operational overhead, allowing them to
          concentrate on creativity and building exceptional software.
        </TypoP1>
      </Stack>
      <Box className="relative mt-28">
        <img src="/images/solutions/by-size/chat-ops/resource-explorer.svg" className="relative z-10" />
        <img
          src="/images/solutions/by-size/chat-ops/chatbox-4.svg"
          className="absolute w-[500px] right-0 bottom-0 z-10"
        />
        <Box className="w-[1100px] aspect-square absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[65%] rounded-full blur-[484px] bg-[linear-gradient(216.93deg,_#46AAA5_-1.74%,_#6B56A2_53.46%,_#230DA6_117.61%)] z-0" />
        <RobotImg className="z-0 blur-3xl" />
        <RobotImg className="z-10" />
      </Box>
    </Stack>
  );
};
