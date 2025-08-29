import { FC, ImgHTMLAttributes } from 'react';
import { Box, Stack } from '@mui/material';
import { TypoH2, TypoP1 } from '@/components/common';

const PlanetImg: FC<ImgHTMLAttributes<HTMLImageElement>> = ({ className, ...props }) => {
  return (
    <img
      src={'/images/solutions/by-size/growing-teams/saturn-planet-3.svg'}
      className={`absolute left-0 transform -translate-x-[20%] translate-y-[50%] bottom-0 w-[800px] aspect-square ${className}`}
      {...props}
    />
  );
};

export const YourAIDevOpsCopilot: FC = () => {
  return (
    <Stack className="pt-36 bg-black items-center ">
      <Stack className="w-full max-w-[1600px] flex-row justify-center gap-12">
        <Stack className="gap-4 max-w-[750px] pt-36">
          <TypoH2 className="max-w-[650px]">Meet Plantora: Your AI Planton Copilot</TypoH2>
          <TypoP1 className="text-text-secondary">
            Leverage your existing knowledge with Planton Cloud&apos;s Kubernetes-inspired APIs and
            YAML configurations. Our platform&apos;s resource models feel instantly familiar,
            allowing you to integrate seamlessly with your current workflows and tools without a
            steep learning curve.
          </TypoP1>
        </Stack>
        <Box className="relative w-full">
          <img src="/images/solutions/developers/chatbox-1.svg" />
          <PlanetImg className="blur-[300px]" />
        </Box>
      </Stack>
    </Stack>
  );
};
