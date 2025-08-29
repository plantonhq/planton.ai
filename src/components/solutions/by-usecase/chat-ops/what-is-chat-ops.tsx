import { FC } from 'react';
import { Box, Stack, TypographyProps } from '@mui/material';
import { TypoH3, TypoP1 } from '../../../common';

const CommunicationTypo: FC<TypographyProps> = ({ className, ...props }) => (
  <TypoP1
    className={`absolute -left-60 top-1/2 transform translate-y-[100%] ${className}`}
    {...props}
  >
    Communication
  </TypoP1>
);

const CollaborationTypo: FC<TypographyProps> = ({ className, ...props }) => (
  <TypoP1
    className={`absolute left-0 top-1/2 transform translate-y-[580%] -translate-x-[70%] ${className}`}
    {...props}
  >
    Collaboration
  </TypoP1>
);

const AutomationTypo: FC<TypographyProps> = ({ className, ...props }) => (
  <TypoP1
    className={`absolute top-0 -right-48 transform ${className}`}
    {...props}
  >
    Automation
  </TypoP1>
);

// common section used in chat ops, internal developer platform pages 
export const WhatIsChatOps: FC = () => {
  return (
    <Stack className="relative overflow-hidden items-center py-24 bg-[linear-gradient(107.04deg,_#000000_41.08%,_#8A3491_388.48%)]">
      <img
        src="/images/solutions/by-size/chat-ops/global-chatting.svg"
        className="w-[170px] absolute right-1/2 top-0 transform -translate-y-[20%] translate-x-[500%]"
      />
      <Stack className="relative w-full max-w-[1800px] mt-12">
        <Box className="relative w-fit self-start">
          <img src="/images/solutions/by-size/chat-ops/pulumi-module-registry.svg" />
          <img
            src="/images/solutions/by-size/chat-ops/speaker-1.svg"
            className="absolute left-0 top-0 transform -translate-x-[10%] -translate-y-1/2"
          />
          <Box className="absolute left-[27%] transform top-0 -translate-y-[40%]">
            <Box className="relative">
              <img src="/images/solutions/by-size/chat-ops/global-chatting.svg" className="w-[260px] " />
              <img
                src="/images/solutions/by-size/chat-ops/joiner-1.svg"
                className="absolute bottom-0 transform translate-y-[100%]"
              />
              <CollaborationTypo className="z-0" />
              <CollaborationTypo className="z-10 blur-md" />
            </Box>
          </Box>
          <Box className="absolute left-11 transform bottom-0 translate-y-[25%]">
            <Box className="relative">
              <img src="/images/solutions/by-size/chat-ops/speaker-2.svg" className="w-[320px]" />
              <img
                src="/images/solutions/by-size/chat-ops/joiner-2.svg"
                className="absolute top-0 -right-10 transform translate-y-[40%]"
              />
              <AutomationTypo className="z-0" />
              <AutomationTypo className="z-10 blur-md" />
            </Box>
          </Box>
          <img
            src="/images/solutions/by-size/chat-ops/speaker-3.svg"
            className="absolute right-0 top-0 transform translate-x-[130%]"
          />
          <img
            src="/images/solutions/by-size/chat-ops/speaker-5.svg"
            className="absolute right-0 bottom-0 transform translate-x-1/2"
          />
        </Box>

        <Stack className="absolute transform translate-x-[calc(48%)] top-40 flex-row">
          <img src="/images/solutions/by-size/chat-ops/chatbox-2.svg" />
          <Stack className="max-w-[800px] h-fit top-36 relative gap-4 p-8 -ml-16 bg-gradient-to-l from-[#8a3391] to-black rounded-xl">
            <TypoH3>What is ChatOps?</TypoH3>
            <TypoP1 className={`text-text-secondary`}>
              ChatOps is a collaborative model that integrates people, tools, processes, and
              automation into a transparent workflow. Planton Cloud elevates this concept by
              enabling your team to perform DevOps tasks directly through chat, enhancing efficiency
              and fostering a culture of collaboration.
            </TypoP1>
            <img
              src="/images/solutions/by-size/chat-ops/speaker-4.svg"
              className="absolute w-[155px] right-0 top-0 transform translate-x-1/2 -translate-y-1/2"
            />
          </Stack>
        </Stack>
      </Stack>
      <Stack className="flex-row absolute right-1/2 bottom-0 transform translate-x-[200%]">
        <Box className="relative">
          <img src="/images/solutions/by-size/chat-ops/speaker-6.svg" />
          <CommunicationTypo className="z-0" />
          <CommunicationTypo className="blur-md z-10" />
          <img
            src="/images/solutions/by-size/chat-ops/joiner-3.svg"
            className="absolute -left-12 top-1/2 transform translate-y-1/2"
          />
        </Box>
      </Stack>
    </Stack>
  );
};
