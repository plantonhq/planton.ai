import { FC } from 'react';
import { Box, Stack } from '@mui/material';
import { TypoH2, TypoP1 } from '@/components/common';
import { InnovationBox } from '../../solutions';

export const DevOpsCoPilot: FC = () => {
  return (
    <Stack className="relative items-center pt-36 bg-black">
      <Stack className="max-w-[1330px] items-center gap-8 z-20">
        <TypoH2 className="text-center">The DevOps Co-Pilot comes to Terminal Too</TypoH2>
        <TypoP1 className="text-center text-text-secondary">
          Plantora is your intelligent AI assistant built into the CLI, transforming the way you
          interact with your development environment. Simply type planton chat to start a
          conversation. Whether you need to deploy resources, manage configurations, or get
          insights, Plantora understands your natural language requests and executes them
          efficiently.
        </TypoP1>
        <img src="/images/apps-cli/bg-5.svg" />
        <Box className="w-full grid grid-cols-3 gap-6 ">
          <InnovationBox
            title="NLP Simplified"
            desc="Communicate using everyday language."
            className="bg-[url('/')] bg-[#2B2B2B3D]"
            borderBg="linear-gradient(180deg, #8A3391 0%, #03A587 100%)"
            borderSize="3px"
          />
          <InnovationBox
            title="Contextual Understanding"
            desc="Planton grasps the context of your projects and tasks."
            className="bg-[url('/')] bg-[#2B2B2B3D]"
            borderBg="linear-gradient(180deg, #8A3391 0%, #03A587 100%)"
            borderSize="3px"
          />
          <InnovationBox
            title="Actionable Responses"
            desc="Receive immediate execution of commands and informative feedback."
            className="bg-[url('/')] bg-[#2B2B2B3D]"
            borderBg="linear-gradient(180deg, #8A3391 0%, #03A587 100%)"
            borderSize="3px"
          />
        </Box>
      </Stack>
      <img
        src="/images/apps-cli/bg-6.svg"
        className="absolute top-[58%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 blur-lg"
      />
    </Stack>
  );
};
