import { FC } from 'react';
import { Box, Stack } from '@mui/material';
import { TypoH2, TypoH3, TypoP1 } from '@/components/common';

interface IGridBox {
  imgSrc: string;
  title: string;
  className?: string;
}

const GridBox: FC<IGridBox> = ({ imgSrc, title, className }) => {
  return (
    <Stack
      className={`p-5 md:p-12 gap-3 md:gap-8 items-center text-center rounded-xl bg-[radial-gradient(127.81%_217.32%_at_81.47%_193.44%,_#737373_0%,_rgba(51,_51,_51,_0.915868)_12.02%,_rgba(20,_20,_20,_0.3)_91.56%)] ${className}`}
    >
      <img src={imgSrc} className="w-[94px] md:w-[210px] aspect-square" />
      <TypoP1 className="hidden md:block">{title}</TypoP1>
      <TypoH3 className="md:hidden">{title}</TypoH3>
    </Stack>
  );
};

export const StackJobList: FC = () => {
  return (
    <Stack className="items-center overflow-hidden p-5 md:pt-72 md:pb-36 bg-black">
      <Stack className="md:max-w-[1700px] items-center text-center gap-3 md:gap-8">
        <TypoH2>Viewing the Stack Job List</TypoH2>
        <TypoP1 className="text-text-secondary max-w-[1250px]">
          Once you submit your change, you’ll find the corresponding IAC workflow under “Stack Jobs”
          (or “IAC Workflows”) on the resource’s details page. Each workflow is tagged with:
        </TypoP1>
        <Stack className="relative md:rounded-xl mt-2 md:mt-0 gap-5 md:gap-12 md:p-14 md:border border-[#373737] md:bg-[radial-gradient(44.67%_83.64%_at_51.24%_135.45%,_rgba(115,_115,_115,_0.27)_0%,_rgba(13,_13,_13,_0.3)_100%)]">
          <img src="/images/features/iac-workflows/bg-1.svg" className="relative z-10" />
          <Box className="relative grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-5 md:gap-9">
            <GridBox
              imgSrc="/images/features/iac-workflows/grid-icon-1.svg"
              title="Commit Message"
            />
            <GridBox imgSrc="/images/features/iac-workflows/grid-icon-2.svg" title="Version ID" />
            <GridBox
              imgSrc="/images/features/iac-workflows/grid-icon-3.svg"
              title="User Who Triggered It"
            />
            <GridBox
              imgSrc="/images/features/iac-workflows/grid-icon-4.svg"
              title="Timestamp & Execution Status"
            />
          </Box>
        </Stack>
      </Stack>
    </Stack>
  );
};
