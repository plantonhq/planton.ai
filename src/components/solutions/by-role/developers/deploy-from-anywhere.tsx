import { FC } from 'react';
import { Stack } from '@mui/material';
import { TypoH2, TypoP1 } from '@/components/common';

export const DeployFromAnywhere: FC = () => {
  return (
    <Stack className="pt-40 relative overflow-hidden items-center bg-black ">
      <img
        src="/images/solutions/developers/bg-5.svg"
        className="absolute right-1/2 bottom-0 transform translate-x-[50%]"
      />
      <Stack className="w-full max-w-[1920px] z-10">
        <Stack className="self-end justify-center flex-row gap-28">
          <Stack className="gap-4 max-w-[750px] pt-36">
            <TypoH2 className="max-w-[650px]">Deploy from Anywhere with CLI and Chat</TypoH2>
            <TypoP1 className="text-text-secondary">
              Choose the workflow that suits you. Planton Cloud&apos;s CLI lets you deploy directly
              from your terminal, while our AI chat interface offers deployment through
              conversational commands. All changes are instantly visible to your team, ensuring
              collaboration and transparency.
            </TypoP1>
          </Stack>
          <img src="/images/solutions/developers/chatbox-2.svg" />
        </Stack>
      </Stack>
    </Stack>
  );
};
