import { FC } from 'react';
import { Box, Stack } from '@mui/material';
import { TypoH3, TypoP1 } from '../../../common';

// common section used in chat ops, internal developer platform pages
export const ManageConfigurations: FC = () => {
  return (
    <Stack className="relative items-center overflow-hidden pt-24 bg-black">
      <Box className="w-[1700px] aspect-[0.97] absolute top-0 right-1/2 transform translate-x-[75%] -translate-y-[20%] rounded-full opacity-40 blur-[3.42px] bg-[linear-gradient(339.87deg,_#7E4FBD_33.39%,_#060512_75.36%)]" />
      <Stack className="w-[2200px]">
        <Box className="relative self-start">
          <img src="/images/solutions/by-size/chat-ops/stack-job-details.svg" className="" />
          <Stack className="absolute z-10 right-0 top-1/2 transform -translate-y-[25%] translate-x-[25%] max-w-[850px] gap-5 p-8 rounded-xl border-2 border-[#454545] bg-[linear-gradient(283.58deg,_#8A3391_-80.47%,_#000000_65.5%)] shadow-[0px_33px_17.100000381469727px_0px_rgba(0,0,0,0.43)]">
            <TypoH3>Manage Configurations Effortlessly</TypoH3>
            <TypoP1 className={`text-text-secondary`}>
              Modify and manage configurations without the hassle of navigating complex systems.
              Plantora understands your intent and helps you adjust settings using natural language,
              reducing the risk of errors and saving valuable time.
            </TypoP1>
          </Stack>
        </Box>
      </Stack>
    </Stack>
  );
};
