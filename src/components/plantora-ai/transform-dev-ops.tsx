import { FC } from 'react';
import { Box, Button, Stack, Typography } from '@mui/material';
import { FlipEffect, TypoH2, TypoP1 } from '../common';
import { StyledAiBtn } from './styled';

export const TransformDevOps: FC = () => {
  return (
    <Stack className="items-center">
      <Stack className="items-center text-center gap-12 max-w-[950px]">
        <StyledAiBtn>
          <Typography className="text-base font-medium bg-[linear-gradient(278.2deg,_#A6DDFF_2.25%,_#33C2FF_48.08%,_#0077FF_100%)] bg-clip-text text-transparent">
            Planton Copilot
          </Typography>
        </StyledAiBtn>
        <TypoH2>Simple AI Guidance for Everyday DevOps</TypoH2>
        <Box className="max-w-[860px]">
          <TypoP1 className="text-text-secondary">
            Ask for a new database, provision a server, or update permissions. Plantora’s
            conversational approach saves you time and keeps you focused on shipping.
          </TypoP1>
        </Box>
        <Button className="bg-[#0095FF] px-5 py-3 rounded-[10px] w-fit h-10">
          Experience Plantora Now
        </Button>
      </Stack>
      <Stack className="flex-row items-center justify-center h-[600px] w-full max-w-[1800px] bg-[radial-gradient(50%_50%_at_50%_50%,_#0554FF_0%,_rgba(0,_0,_0,_0)_100%)]">
        <FlipEffect
          initialRotation={20}
          src="https://www.youtube.com/embed/dqfFWqtJEOs"
          useIframe={true}
          width={1300}
          height={500}
          extraHeight={50}
          rotationOrigin="bottom center"
        />
      </Stack>
    </Stack>
  );
};
