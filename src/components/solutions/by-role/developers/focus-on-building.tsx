import { FC } from 'react';
import { Box, Stack } from '@mui/material';
import { TypoH2, TypoP1 } from '@/components';
import { StyledGradientBorderBox } from './styled';

export const FocusOnBuilding: FC = () => {
  return (
    <Stack className="items-center relative bg-black pt-56">
      <Stack className="w-full relative max-w-[1530px] items-center gap-11 ">
        <Box className="grid grid-cols-2 gap-5 z-20">
          <Stack className="gap-4">
            <StyledGradientBorderBox className="w-[70px] aspect-square flex flex-col items-center p-[20px] rounded-full">
              <img src="/images/solutions/developers/tool-1.svg" />
            </StyledGradientBorderBox>
            <TypoH2 className="">Focus on Building, Not Operations</TypoH2>
          </Stack>
          <TypoP1 className="text-text-secondary self-end">
            Focus on coding, not infrastructure. Planton Cloud automates CI/CD pipelines and
            streamlines troubleshooting, handling DevOps so you can build amazing features
            effortlessly.
          </TypoP1>
        </Box>
        <Stack className="w-full max-w-[1500px] px-12 pt-16 relative items-center rounded-t-[54px] border border-[#515151] backdrop-blur-[12px] bg-[#1e2228]/25 z-10">
          <img src="/images/solutions/developers/stack-job-details.svg" className="w-full ml-6" />
        </Stack>
        <img src="/images/solutions/developers/bg-3.svg" className="absolute bottom-20 z-0" />
      </Stack>
    </Stack>
  );
};
