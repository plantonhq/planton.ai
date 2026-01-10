'use client';

import { FC } from 'react';
import { Box, Button, Link, Stack, Typography } from '@mui/material';
import { TypoH2, TypoH3, TypoP1 } from '../common';
import { TrackBox } from '../solutions';

export const ExploreAndManage: FC = () => {
  return (
    <Stack className="py-16 bg-[#161A1F] items-center gap-28">
      <Stack className={`max-w-[1200px] gap-10`}>
        <TypoH3 className="max-w-[725px]">
          Explore and Manage Infrastructure Conversationally
        </TypoH3>
        <Stack className="flex-row gap-10 max-h-[380px]">
          <Typography
            component={'span'}
            className="text-[24px] font-medium leading-[38px] max-w-[465px] p-9 rounded-[32px] bg-[linear-gradient(217.34deg,_#032038_-17.71%,_#0F0EA6_76.83%,_#1A00FF_118.14%)]"
          >
            Deploying resources{' '}
            <Typography
              component={'span'}
              className="text-[24px] font-medium leading-[38px] text-gray-500"
            >
              {' '}
              like AWS RDS clusters has never been simpler. Just tell Plantora what you need, and it
              will guide you through the configuration, validating inputs and ensuring optimal
              setups—all through natural language conversation.
            </Typography>
          </Typography>
          <Box className="relative overflow-hidden">
            <img src={'/images/features/planton-copilot/gradient-card-1.svg'} />
            <img
              src={'/images/features/planton-copilot/chatbox-2.svg'}
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[500px]"
            />
          </Box>
        </Stack>
      </Stack>
      <Stack className={`w-full max-w-[1200px] gap-10`}>
        <TypoH3 className="max-w-[725px]">Auditable Intelligence and Team Transparency</TypoH3>
        <Box className="grid grid-cols-16 gap-x-10 gap-y-6">
          <Stack className="bg-black rounded-xl aspect-square col-span-6 justify-center">
            <Stack className="gap-4 max-w-[170px] ml-16">
              <img
                src="/images/features/planton-copilot/track.svg"
                className="w-[88px] aspect-square"
              />
              <TypoP1>Track Configuration</TypoP1>
            </Stack>
          </Stack>
          <Stack className="col-span-4 justify-between gap-6">
            <TrackBox title="Track Changes" iconSrc="/images/features/planton-copilot/cloud.svg" />
            <TrackBox
              title="Access History"
              iconSrc="/images/features/planton-copilot/history.svg"
            />
          </Stack>
          <TypoP1
            component={'span'}
            className="col-span-6 rounded-[32px] p-6 bg-[linear-gradient(207.34deg,_#0E1018_-42.57%,_#29018E_5.28%,_#3E0EA6_56.96%,_#39008A_151.11%)]"
          >
            Every action{' '}
            <TypoP1 component={'span'} className="text-gray-400">
              {' '}
              taken via Plantora is logged and auditable, ensuring transparency and compliance
              across your team. Track changes, configurations, and access history effortlessly.
            </TypoP1>
          </TypoP1>
        </Box>
      </Stack>
      <Stack
        className={`w-full max-w-[1200px] h-[380px] rounded-3xl items-center justify-center text-center bg-[url(/images/features/planton-copilot/frame-1.svg)] bg-cover bg-center`}
      >
        <Stack className="gap-6 items-center">
          <TypoH2 className="max-w-[930px]">Experience the Future of DevOps</TypoH2>
          <Stack className="flex-row gap-3 items-center">
            <Button
              className="px-5 py-3 bg-white text-black font-medium h-[40px] rounded-[10px]"
              LinkComponent={Link}
              href="https://docs.google.com/forms/d/e/1FAIpQLSd8aETwOMXD0Q3WFNV7XsOG68jr2-FyAg_mVRJdWEMUmEF22w/viewform"
              target="_self"
            >
              Book Demo
            </Button>
            <Button variant="text" className="px-5 py-3 font-medium">
              Sign Up
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};
