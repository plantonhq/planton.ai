import { FC } from 'react';
import { Box, Button, Stack, Typography } from '@mui/material';
import { StyledTeamBtn } from '../../by-size/growing-teams/styled';
import { TypoH2, TypoP1 } from '@/components/common';

export const BuildFasterDeploySmarter: FC = () => {
  return (
    <Stack className="relative w-full items-center bg-[linear-gradient(104deg,_#090507_48.56%,_#8444CE_145.82%)]">
      <Box className="relative w-full max-w-[1920px]">
        <img src="/images/solutions/developers/bg-1.svg" className="relative z-10" />
        <img src="/images/solutions/developers/bg-2.svg" className="absolute h-full top-0 right-0 z-0" />
        <Stack className="w-full max-w-[800px] absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-[80%] gap-5 z-10">
          <StyledTeamBtn>
            <Typography className="text-base font-medium bg-[linear-gradient(91.09deg,_#B72EDEED_0.42%,_#00AAE5ED_98.32%)] bg-clip-text text-transparent">
              Developer
            </Typography>
          </StyledTeamBtn>
          <TypoH2 className="max-w-[1200px]">Build Faster, Deploy Smarter</TypoH2>
          <TypoH2 className="max-w-[1200px]">
            with <img src="/images/solutions/developers/planton-cloud.svg" className="inline-flex" />
          </TypoH2>
          <TypoP1 className="max-w-[730px] text-text-secondary">
            AI-enabled platform that lets developers focus on innovation, not operations.
          </TypoP1>
          <Stack className="flex-row items-center gap-2">
            <Button className="bg-[#0095FF] px-5 py-3 rounded-[10px] w-fit h-[40px]">
              Start Building Today
            </Button>
            <Button className="bg-transparent px-5 py-3 rounded-[10px] w-fit">
              Request a Demo
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  );
};
