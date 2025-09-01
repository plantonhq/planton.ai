import { FC, ImgHTMLAttributes } from 'react';
import { Box, Stack } from '@mui/material';
import { TypoH2, TypoP1 } from '@/components/common';

const PlanetImg: FC<ImgHTMLAttributes<HTMLImageElement>> = ({ className, ...props }) => {
  return (
    <img
      src={'/images/solutions/by-size/growing-teams/saturn-planet-3.svg'}
      className={`absolute left-0 transform -translate-x-[calc(40%)] bottom-[calc(0%-30px)] w-[315px] aspect-square ${className}`}
      {...props}
    />
  );
};

export const BoostProductivity: FC = () => {
  return (
    <Stack className="pt-36 bg-black items-center ">
      <Stack className="w-full max-w-[1600px] flex-row justify-center gap-12">
        <Box className="relative w-full">
          <img src="/images/solutions/by-size/growing-teams/chatbox.svg" />
          <PlanetImg />
          <PlanetImg className="blur-3xl" />
        </Box>
        <Stack className="gap-4 max-w-[850px] pt-36">
          <TypoH2>Boost Productivity with Plantora, Your AI DevOps Assistant</TypoH2>
          <TypoP1 className="text-text-secondary">
            Introducing Plantora, your AI-powered Planton Copilot. Interact through chat to manage
            deployments, configure environments, and more. Plantora streamlines operations, allowing
            your team to accomplish tasks quickly and intuitively, boosting overall productivity.
          </TypoP1>
        </Stack>
      </Stack>
    </Stack>
  );
};
