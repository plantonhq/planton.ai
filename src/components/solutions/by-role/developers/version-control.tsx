import { FC } from 'react';
import { Stack } from '@mui/material';
import { TypoH2, TypoP1 } from '@/components/common';

export const VersionControl: FC = () => {
  return (
    <Stack className="pt-60 relative overflow-hidden items-center bg-black ">
      <img
        src="/images/solutions/developers/bg-5.svg"
        className="absolute right-1/2 transform translate-x-[40%]"
      />
      <Stack className="w-full max-w-[1920px] z-10">
        <Stack className="self-start justify-center flex-row gap-4">
          <img src="/images/solutions/developers/edit.svg" />
          <Stack className="gap-4 max-w-[750px] pt-36">
            <TypoH2 className="max-w-[650px]">Version Control with Git Diffs</TypoH2>
            <TypoP1 className="text-text-secondary">
              Maintain full transparency with configuration changes presented as git diffs. Every
              modification is tracked and auditable, whether made via CLI, web interface, or chat.
              Collaborate effortlessly with your team by reviewing changes in a format you already
              know and trust.
            </TypoP1>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};
