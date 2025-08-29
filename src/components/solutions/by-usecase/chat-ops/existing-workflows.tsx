import { FC, ImgHTMLAttributes } from 'react';
import { Box, Stack } from '@mui/material';
import { TypoH2, TypoH3, TypoP1 } from '@/components/common';

const BurgerImg: FC<ImgHTMLAttributes<HTMLImageElement>> = ({ className, ...props }) => (
  <img
    src="/images/solutions/by-size/chat-ops/burger.svg"
    className={`absolute top-0 left-0 transform -translate-x-[50%] -translate-y-[10%] z-20 ${className}`}
    {...props}
  />
);

// common section used in chat ops, internal developer platform pages
interface IExistingWorkflows {
  showBurgerShadow?: boolean;
}

export const ExistingWorkflows: FC<IExistingWorkflows> = ({ showBurgerShadow = true }) => {
  return (
    <Stack className="items-center pt-16 bg-black">
      <Stack className="w-full max-w-[1500px] gap-16">
        <TypoH2 className="text-center z-10">Integrate with Your Existing Workflows</TypoH2>
        <Box className="relative rounded-t-[42px] border border-b-0 border-[#3c3c3c]">
          <Stack className="relative items-center rounded-t-[42px] border-b border-[#3c3c3c] px-[65px] pt-[98px] bg-[#1e2228]/50 backdrop-blur-[29px]">
            <Box className="relative">
              <img src="/images/solutions/by-size/chat-ops/chatbox-3.svg" className="relative z-10" />
              <img
                src="/images/solutions/by-size/chat-ops/provider-1.svg"
                className="absolute top-0 right-0 transform translate-x-[30%] -translate-y-[65%] z-20"
              />
              <img
                src="/images/solutions/by-size/chat-ops/provider-2.svg"
                className="absolute top-1/2 right-0 transform translate-x-[80%] -translate-y-[60%] z-20"
              />
              <img
                src="/images/solutions/by-size/chat-ops/provider-3.svg"
                className="absolute bottom-0 left-0 transform -translate-x-[60%] -translate-y-[10%] z-20"
              />
              <img
                src="/images/solutions/by-size/chat-ops/provider-4.svg"
                className="absolute top-0 left-0 transform -translate-x-[80%] -translate-y-[40%] z-20"
              />
            </Box>
            <Box className="w-[900px] aspect-[1.47] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full blur-[200px] bg-[linear-gradient(337.46deg,_#FE9AC7_-25.13%,_#060512_56.9%)] -z-0" />
            <Box className="w-[1012px] aspect-square absolute top-0 left-1/2 transform -translate-x-1/2 translate-y-[10%] rounded-full blur-[400px] bg-[linear-gradient(216.93deg,_#46AAA5_-1.74%,_#6B56A2_53.46%,_#230DA6_117.61%)]" />
          </Stack>
          <Stack className="gap-6 px-8 pt-10 pb-20">
            <TypoH3>Reduce Configuration Duplication with Centralized ConfigMaps</TypoH3>
            <TypoP1 className="text-text-secondary mt-12">
              Planton Cloud introduces ConfigMaps—a centralized resource for managing shared
              environment variables across multiple services. ConfigMaps store non-sensitive
              configuration data as key-value pairs, allowing services to reference them without
              embedding the actual values in their codebases. During deployment, Planton Cloud
              replaces these.
            </TypoP1>
            <TypoP1 className="text-[#0099FF]">Learn More</TypoP1>
          </Stack>
          {showBurgerShadow && <BurgerImg className="z-0 blur-[300px]" />}
          <BurgerImg className="z-10" />
        </Box>
      </Stack>
    </Stack>
  );
};
