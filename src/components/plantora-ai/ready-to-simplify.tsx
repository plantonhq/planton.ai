'use client';

import { FC } from 'react';
import { Stack } from '@mui/material';
import { BookDemoBtn, GetStartedBtn, TypoH2, TypoP1 } from '@/components/common';

export const ReadyToSimplify: FC = () => {
  return (
    <Stack className="p-0 md:py-14 bg-black items-center">
      <Stack className="w-full md:max-w-[1200px] p-8 gap-6 md:rounded-3xl items-center justify-center text-center bg-[url(/images/features/planton-copilot/frame-1.svg)] bg-cover bg-center">
        <TypoH2 className="md:max-w-[950px]">Ready to simplify your DevOps journey?</TypoH2>
        <TypoP1 className="leading-[1.8] md:max-w-[1150px] text-text-secondary">
          Experience the power of Copilot firsthand—no more juggling multiple tools or dealing with
          complex scripts. Focus on building great products while Copilot handles the heavy lifting
          behind the scenes.
        </TypoP1>
        <Stack className="flex-row gap-3 items-center">
          <GetStartedBtn>Get Started Now</GetStartedBtn>
          <BookDemoBtn>Book Demo</BookDemoBtn>
        </Stack>
      </Stack>
    </Stack>
  );
};
