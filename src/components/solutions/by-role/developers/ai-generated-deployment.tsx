import { FC } from 'react';
import { Stack } from '@mui/material';
import { TypoH2, TypoP1 } from '@/components';

interface IAIGeneratedDeployment {
  title: string;
  titleMaxWidth?: string;
  subTitle: string;
}

export const AIGeneratedDeployment: FC<IAIGeneratedDeployment> = ({
  title,
  titleMaxWidth = '1000px',
  subTitle,
}) => {
  return (
    <Stack className="items-center pt-28 relative bg-black">
      <img src="/images/solutions/developers/bg-8.svg" className="absolute bottom-0" />
      <Stack className="w-full max-w-[1530px] items-center text-center gap-12 z-10">
        <TypoH2 className={`max-w-[${titleMaxWidth}]`}>{title}</TypoH2>
        <TypoP1 className="text-text-secondary max-w-[1430px]">{subTitle}</TypoP1>
        <Stack className="relative overflow-hidden w-full max-w-[1550px] h-[810px] mt-6 px-16 pt-16 items-center rounded-t-[60px] border border-b-0 border-[#3c3c3c] backdrop-blur-[64px] ">
          <img src="/images/solutions/developers/ssl-certificate-2.svg" className="w-full" />
        </Stack>
      </Stack>
    </Stack>
  );
};
