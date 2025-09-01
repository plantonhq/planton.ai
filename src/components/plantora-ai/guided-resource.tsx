import { FC } from 'react';
import { Box, Stack } from '@mui/material';
import { FlipBox, TypoH3, TypoP1 } from '../common';

export const GuidedResource: FC = () => {
  return (
    <Stack className="pt-28 bg-[#161A1F] items-center ">
      <Stack className="gap-44 ">
        <FlipBox
          title="Guided Resource Creation Made Easy"
          subTitle="Deploying resources like AWS RDS clusters has never been simpler. Just tell Plantora
              what you need, and it will guide you through the configuration, validating inputs and
              ensuring optimal setups—all through natural language conversation."
          bgImgSrc="/images/features/planton-copilot/gradient-card-1.svg"
          topImgSrc="/images/features/planton-copilot/chatbox-2.svg"
        />
        <FlipBox
          title="Real-Time Deployment Progress in Chat"
          subTitle="Stay informed with real-time updates on your infrastructure deployments right within the chat. Plantora leverages Pulumi-powered Infrastructure as Code workflows to provide live progress, so you're always in the loop without switching contexts."
          bgImgSrc="/images/features/planton-copilot/gradient-card-2.svg"
          topImgSrc="/images/features/planton-copilot/chatbox-2.svg"
          reverse
        />
        <Stack className={`flex-row max-w-[1200px] items-center relative`}>
          <img src="/images/features/planton-copilot/gradient-card-3.svg" />
          <img
            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
            src="/images/features/planton-copilot/chatbox-1.svg"
          />
        </Stack>
        <FlipBox
          title="Simplified Permission and Access Management"
          subTitle="Manage team access effortlessly. Invite new members, assign permissions, and grant resource access—all through simple chat commands. Plantora ensures secure and efficient collaboration within your team."
          bgImgSrc="/images/features/planton-copilot/gradient-card-1.svg"
          topImgSrc="/images/features/planton-copilot/chatbox-2.svg"
        />
      </Stack>
      <Stack className={`max-w-[1200px] pt-44 text-center gap-6`}>
        <TypoH3>Seamless Credential and Connection Sharing</TypoH3>
        <TypoP1 component={'span'}>
          Need to share a Kubernetes cluster credential with your environment? Just ask Plantora.
          <TypoP1 component={'span'} className="text-text-secondary">
            {' '}
            It handles the complexities of credential management, so you don&apos;t have to navigate
            confusing interfaces or risk misconfigurations.
          </TypoP1>
        </TypoP1>
      </Stack>
      <Stack className="relative items-center overflow-hidden w-full pt-8 pb-16">
        <img src="/images/features/planton-copilot/gradient-card-3.svg" className="max-w-[1200px] z-10" />
        <Stack className="items-center absolute w-full h-[420px] bottom-16 left-1/2 transform -translate-x-1/2 z-20 overflow-hidden">
          <img
            className="w-[550px] h-full object-cover object-top"
            src="/images/features/planton-copilot/chatbox-1.svg"
          />
        </Stack>
        <Box
          className="absolute bottom-0 left-1/2 top-1/2 transform -translate-x-1/2
          w-[3872px] h-[1300px]  bg-[radial-gradient(50%_50%_at_50%_50%,_#055DFF_0%,_rgba(0,_0,_0,_0)_100%)]"
        />
      </Stack>
    </Stack>
  );
};
