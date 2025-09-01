import { FC } from 'react';
import { Stack } from '@mui/material';
import { TypoH2, TypoP1 } from '@/components/common';

export const VersionControl2: FC = () => {
  return (
    <Stack className="pt-60 relative overflow-hidden items-center bg-black ">
      <img
        src="/images/solutions/developers/bg-6.svg"
        className="absolute left-1/2 top-0 transform -translate-x-[62%]"
      />
      <Stack className="w-full max-w-[1920px] z-10">
        <Stack className="self-end justify-center flex-row gap-4">
          <Stack className="gap-4 max-w-[750px] pt-36">
            <TypoH2 className="max-w-[650px]">Version Control with Git Diffs</TypoH2>
            <TypoP1 className="text-text-secondary">
              Maintain full transparency with configuration changes presented as git diffs. Every
              modification is tracked and auditable, whether made via CLI, web interface, or chat.
              Collaborate effortlessly with your team by reviewing changes in a format you already
              know and trust.
            </TypoP1>
          </Stack>
          <img src="/images/solutions/developers/edit-2.svg" />
        </Stack>
      </Stack>
    </Stack>
  );
};
