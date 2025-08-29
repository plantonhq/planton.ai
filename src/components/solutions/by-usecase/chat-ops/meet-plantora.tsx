import { FC, ImgHTMLAttributes } from 'react';
import { Box, Stack } from '@mui/material';
import { TypoH2, TypoP1 } from '../../../common';

const RobotImg: FC<ImgHTMLAttributes<HTMLImageElement>> = ({ className, ...props }) => (
  <img
    src="/images/solutions/by-size/chat-ops/robot-2.svg"
    className={`absolute bottom-0 left-0 transform -translate-x-1/2 ${className}`}
    {...props}
  />
);

const TorusImg: FC<ImgHTMLAttributes<HTMLImageElement>> = ({ className, ...props }) => (
  <img
    src="/images/solutions/by-size/chat-ops/torus-1.svg"
    className={`absolute w-[800px] right-0 bottom-0 translate-x-[55%] translate-y-[20%] ${className}`}
    {...props}
  />
);

// common section used in chat ops, internal developer platform pages 
export const MeetPlantora: FC = () => {
  return (
    <Stack className="items-center py-16 bg-[linear-gradient(246.68deg,_#000000_48.74%,_#8A3391_202.28%)]">
      <Stack className="w-full items-center  max-w-[1200px] gap-12">
        <img src="/images/solutions/by-size/chat-ops/chat-bot.gif" className="w-[200px]" />
        <Stack className="gap-4 text-center">
          <TypoH2>Meet Plantora: Your AI-Powered DevOps Assistant</TypoH2>
          <TypoP1 className={`text-text-secondary`}>
            Plantora is more than a chatbot; it&apos;s an intelligent assistant that understands
            your commands and guides you through complex DevOps workflows. Harnessing advanced AI,
            Plantora simplifies tasks such as deployments, configuration management, and resource
            provisioning through natural language conversations.
          </TypoP1>
        </Stack>
        <Box className="relative">
          <img src="/images/solutions/by-size/chat-ops/dashboard.svg" className="" />
          <img
            src="/images/solutions/by-size/chat-ops/chatbox-1.svg"
            className="absolute w-[400px] -right-20 -bottom-24"
          />
          <RobotImg className="z-0 blur-3xl" />
          <RobotImg className="z-10" />
          <TorusImg className="z-0 blur-[965px] !translate-y-[10%]" />
          <TorusImg className="z-10" />
        </Box>
      </Stack>
    </Stack>
  );
};
