import { FC } from 'react';
import { Box, Stack } from '@mui/material';
import { FrameImage, TypoH2, TypoH3, TypoP1 } from '@/components/common';
import { InnovationBox } from '@/components/solutions';

export const ComprehensiveResource: FC = () => {
  return (
    <Stack className="items-center bg-black relative overflow-hidden p-5 md:pt-28 md:pb-24">
      <img
        src="/images/features/planton-copilot/torus.png"
        className="md:hidden w-[400px] absolute left-0 top-0 blur-[300px] transform -translate-y-[50%] -translate-x-[50%] -z-0"
      />
      <Box className="absolute w-[350px] md:w-[1750px] aspect-[0.98] top-72 md:top-40 right-1/2 transform translate-x-[110%] md:translate-x-[90%]">
        <Box className="w-full h-full bg-black bg-opacity-90 absolute" />
        <video className="w-full h-full" src="/videos/disc-video.mp4" autoPlay loop muted />
      </Box>
      <img
        src="/images/features/planton-copilot/torus.png"
        className="hidden md:block w-[2700px] absolute left-1/2 top-[15%] opacity-20 blur-[350px] transform -translate-x-[80%] -z-0"
      />
      <Box
        sx={{ borderRadius: '50%' }}
        className="hidden md:block w-[1750px] aspect-square absolute right-1/2 bottom-36 transform translate-x-[80%] bg-[linear-gradient(350.91deg,_rgba(138,_51,_145,_0.23)_10.55%,_rgba(6,_5,_18,_0.23)_74.21%)]"
      />
      <Stack className="items-center gap-10 md:gap-8 z-20">
        <Stack className="items-center gap-3 md:gap-8 md:max-w-[1350px]">
          <TypoH2 className="text-center md:max-w-[1200px] md:mt-2">
            Comprehensive Resource Management Made Simple
          </TypoH2>
          <TypoP1 className="text-center text-text-secondary leading-[1.8] md:max-w-[1200px]">
            Copilot isn’t just about creating or updating resources. It also helps you easily list,
            view details, delete, and restore resources—directly from the chat.
          </TypoP1>
          <TypoH3 className="text-center md:mt-16">List All Resources by Kind</TypoH3>
          <Box className="w-full grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-x-4 md:gap-y-8">
            <InnovationBox
              title="User Prompt"
              desc="List all AWS DynamoDB instances."
              descClassName="text-text-secondary"
              className="!bg-[linear-gradient(38deg,_rgba(36,_23,_65,_0.24)_-6%,_rgba(138,_51,_145,_0.24)_125.86%)]"
            />
            <InnovationBox
              title="Copilot Reply"
              desc="Returns a clear table of all DynamoDB tables in your environment."
              descClassName="text-text-secondary"
              className="!bg-[linear-gradient(38deg,_rgba(36,_23,_65,_0.24)_-6%,_rgba(138,_51,_145,_0.24)_125.86%)]"
            />
          </Box>
          <img src="/images/features/planton-copilot/bg-3.svg" className="mt-2 md:mt-8" />
        </Stack>

        <Stack className="md:max-w-[1350px] items-center gap-2 md:gap-8 md:mt-16">
          <TypoH3 className="text-center">Get Details by Resource ID</TypoH3>
          <Box className="w-full grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-x-4 md:gap-y-8">
            <InnovationBox
              title="User Prompt"
              desc="Get details of AWS DynamoDB table with ID"
              descClassName="text-text-secondary"
              className="!bg-[linear-gradient(38deg,_rgba(36,_23,_65,_0.24)_-6%,_rgba(138,_51,_145,_0.24)_125.86%)]"
            />
            <InnovationBox
              title="Copilot Reply"
              desc="Shows a full YAML/JSON state, including environment, versioning, and attributes."
              descClassName="text-text-secondary"
              className="!bg-[linear-gradient(38deg,_rgba(36,_23,_65,_0.24)_-6%,_rgba(138,_51,_145,_0.24)_125.86%)]"
            />
          </Box>
          <img
            src="/images/features/planton-copilot/bg-4-small.svg"
            className="w-full md:hidden mt-3"
          />
          <img src="/images/features/planton-copilot/bg-4.svg" className="hidden md:block mt-8" />
        </Stack>

        <Stack className="md:max-w-[1350px] items-center gap-2 md:gap-8 md:mt-36">
          <TypoH3 className="text-center">Delete Resource by ID</TypoH3>
          <Box className="w-full grid grid-cols-12 gap-3 md:gap-x-4 md:gap-y-6">
            <InnovationBox
              title="User Prompt"
              desc="Delete AWS DynamoDB table with ID"
              descClassName="text-text-secondary"
              className="col-span-12 md:col-span-6 !bg-[linear-gradient(38deg,_rgba(36,_23,_65,_0.24)_-6%,_rgba(138,_51,_145,_0.24)_125.86%)]"
            />
            <InnovationBox
              title="Copilot Confirmation"
              desc="Warns about irreversible operation, asks “Proceed?”"
              descClassName="text-text-secondary"
              className="col-span-12 md:col-span-6 !bg-[linear-gradient(38deg,_rgba(36,_23,_65,_0.24)_-6%,_rgba(138,_51,_145,_0.24)_125.86%)]"
            />
            <InnovationBox
              title="Copilot Reply"
              desc="“Resource deleted successfully,” plus real-time IaC workflow logs."
              descClassName="text-text-secondary"
              className="col-span-12 !bg-[linear-gradient(38deg,_rgba(36,_23,_65,_0.24)_-6%,_rgba(138,_51,_145,_0.24)_125.86%)]"
            />
          </Box>
          <FrameImage src="/images/features/planton-copilot/bg-5.gif" className="md:mt-8 z-10" />
        </Stack>

        <Stack className="md:max-w-[1350px] items-center gap-2 md:gap-8 md:mt-20 relative">
          <img
            src="/images/features/planton-copilot/bg-8.svg"
            className="hidden md:block w-[1050px] aspect-[0.58] absolute left-1/2 top-0 transform -translate-x-[35%] -translate-y-[30%] z-0"
          />
          <TypoH3 className="text-center z-10">Restore Resource by ID</TypoH3>
          <Box className="w-full grid grid-cols-12 gap-3 md:gap-x-4 md:gap-y-6 z-10">
            <InnovationBox
              title="User Prompt"
              desc="“Restore AWS DynamoDB table with ID.”"
              descClassName="text-text-secondary"
              className="col-span-12 md:col-span-6 !bg-[linear-gradient(38deg,_rgba(36,_23,_65,_0.24)_-6%,_rgba(138,_51,_145,_0.24)_125.86%)]"
            />
            <InnovationBox
              title="Copilot Confirmation"
              desc="Asks for final approval."
              descClassName="text-text-secondary"
              className="col-span-12 md:col-span-6 !bg-[linear-gradient(38deg,_rgba(36,_23,_65,_0.24)_-6%,_rgba(138,_51,_145,_0.24)_125.86%)]"
            />
            <InnovationBox
              title="Copilot Reply"
              desc="“Resource restored,” again with workflow logs."
              descClassName="text-text-secondary"
              className="col-span-12 !bg-[linear-gradient(38deg,_rgba(36,_23,_65,_0.24)_-6%,_rgba(138,_51,_145,_0.24)_125.86%)]"
            />
          </Box>
          <FrameImage src="/images/features/planton-copilot/bg-6.gif" className="md:mt-8 z-10" />
        </Stack>

        <Stack className="relative items-center gap-3 md:gap-8 md:mt-28">
          <img
            src="/images/features/planton-copilot/torus.png"
            className="md:hidden w-[380px] absolute left-0 top-0 blur-[300px] transform -translate-x-[50%] -translate-y-[50%] -z-0"
          />
          <img
            src="/images/features/planton-copilot/torus.png"
            className="md:hidden w-[380px] absolute left-0 bottom-0 blur-[200px] transform -translate-x-[50%] translate-y-[50%] -z-0"
          />
          <TypoH2 className="text-center md:max-w-[700px]">Effortless Team Collaboration</TypoH2>
          <TypoH3 className="text-center md:mt-2">Invite Users to Your Organization</TypoH3>
          <Box className="w-full md:max-w-[1350px] grid grid-cols-12 gap-3 md:gap-x-4 md:gap-y-6">
            <InnovationBox
              title="User Prompt"
              descNode={
                <TypoP1 component="span" className="text-text-secondary">
                  Invite “
                  <TypoP1 component="span" color="#0099FF">
                    ivan@acmecorp.live
                  </TypoP1>
                  ”
                </TypoP1>
              }
              descClassName="text-text-secondary"
              className="col-span-12 md:col-span-6 !bg-[linear-gradient(38deg,_rgba(36,_23,_65,_0.24)_-6%,_rgba(138,_51,_145,_0.24)_125.86%)]"
            />
            <InnovationBox
              title="Copilot Reply"
              desc="Confirms the email address, prompts for final approval."
              descClassName="text-text-secondary"
              className="col-span-12 md:col-span-6 !bg-[linear-gradient(38deg,_rgba(36,_23,_65,_0.24)_-6%,_rgba(138,_51,_145,_0.24)_125.86%)]"
            />
            <InnovationBox
              title="Outcome"
              desc="Sends an email invitation. The invitee can join with one click."
              descClassName="text-text-secondary"
              className="col-span-12 !bg-[linear-gradient(38deg,_rgba(36,_23,_65,_0.24)_-6%,_rgba(138,_51,_145,_0.24)_125.86%)]"
            />
          </Box>
          <img src="/images/features/planton-copilot/bg-7.svg" className="mt-2 md:mt-8" />
        </Stack>
      </Stack>
    </Stack>
  );
};
