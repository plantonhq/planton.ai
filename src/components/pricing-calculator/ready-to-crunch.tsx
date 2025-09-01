'use client';

import { FC } from 'react';
import { Stack } from '@mui/material';
import { TypoH2, TypoP1 } from '@/components/common';
import './styles.css';

export const ReadyToCrunch: FC = () => {
  return (
    <Stack className="relative overflow-hidden items-center justify-center py-24 bg-black">
      <Stack className="relative w-full max-w-[900px] items-center text-center gap-9">
        <TypoH2> Ready to Crunch the Numbers?</TypoH2>
        <TypoP1 className="text-text-secondary">
          Curious about what your final bill might look like? Pop over to our pricing calculator,
          plug in a few details, and see exactly how everything adds up—no guesswork required.
        </TypoP1>
        <img
          src="/images/pricing/calc-1.svg"
          className="w-[130px] absolute left-0 top-0 transform -translate-x-[70%] translate-y-[80%]"
        />
        <img
          src="/images/pricing/calc-2.svg"
          className="w-[300px] absolute left-0 bottom-0 transform -translate-x-[160%] translate-y-[40%]"
        />
        <img
          src="/images/pricing/calc-3.svg"
          className="w-[400px] absolute right-0 bottom-0 transform translate-x-[100%] translate-y-[40%]"
        />
        <img
          src="/images/pricing/calc-4.svg"
          className="w-[130px] absolute right-0 top-0 transform translate-x-[240%]"
        />
      </Stack>
    </Stack>
  );
};
