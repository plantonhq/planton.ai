import { FC } from 'react';
import { Box, Stack } from '@mui/material';
import { TypoH3, TypoP1 } from '../../../common';

interface IConversationalInterfaces {
  showTlTorus?: boolean;
}

// common section used in chat ops, internal developer platform pages
export const ConversationalInterfaces: FC<IConversationalInterfaces> = ({
  showTlTorus = false,
}) => {
  return (
    <Stack className="relative overflow-hidden items-center py-56 bg-[#020202]">
      <Box className="w-[1700px] aspect-[0.96875] absolute right-1/2 top-1/2 transform -translate-y-[50%] translate-x-[80%] rounded-full blur-[52px] -z-0 bg-[linear-gradient(283.4deg,_#fe7ab5_-117.76%,_#000000_81.94%)]" />
      {showTlTorus && (
        <img
          src="/images/solutions/by-size/chat-ops/torus-2.svg"
          className="absolute right-1/2 top-0 transform -translate-x-[150%] -translate-y-[20%] z-10"
        />
      )}
      <Stack className="w-[1035px] aspect-[0.58] absolute left-1/2 top-1/2 transform -translate-x-[100%] -translate-y-[60%] opacity-60 bg-black blur-[50px] justify-center items-start inline-flex overflow-hidden">
        <Box className="w-[520px] aspect-square origin-bottom-left rotate-[30deg] rounded-[43px] shadow-[inset_6px_39px_65.69999694824219px_-26px_rgba(255,255,255,1.00)] bg-[linear-gradient(232.35deg,_#262344_26.7%,_#1B154E_79.61%)]" />
        <Box className="w-[520px] aspect-square origin-bottom-left rotate-[30deg] rounded-[43px] shadow-[inset_-22px_-37px_69.69999694824219px_-49px_rgba(255,255,255,1.00)] bg-[linear-gradient(110.97deg,_#9747FF_-16.73%,_#03A587_73.7%)]" />
      </Stack>
      <Stack className="w-full max-w-[1800px] items-center flex-row gap-16 z-0">
        <Box className="relative">
          <img src="/images/solutions/by-size/chat-ops/dashboard.svg" className="w-[950px]" />
          <img
            src="/images/solutions/by-size/chat-ops/chatbox-1.svg"
            className="absolute w-[450px] -right-20 -bottom-32"
          />
        </Box>
        <Stack className="gap-4 max-w-[550px]">
          <TypoH3>Simplify Deployments with Conversational Interfaces</TypoH3>
          <TypoP1 className={`text-text-secondary`}>
            Deploying resources no longer requires navigating intricate interfaces or writing
            complex scripts. With Plantora&apos;s guided workflows, you can initiate and manage
            deployments using simple chat commands. Let Plantora handle the complexity while you
            focus on innovation.
          </TypoP1>
        </Stack>
      </Stack>
    </Stack>
  );
};
