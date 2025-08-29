import { FC, ReactNode } from 'react';
import { Box, Stack } from '@mui/material';
import { TypoH2, TypoH3, TypoP1 } from '@/components';
import {
  StyledBorderBox,
  StyledGradientBorderBox,
} from '@/components/solutions/by-size/growing-teams/styled';

export interface IInnovationBox {
  iconSrc?: string;
  title: string;
  titleClassName?: string;
  desc?: string;
  descNode?: ReactNode;
  descClassName?: string;
  className?: string;
  iconClassName?: string;
  iconBorderBg?: string;
  borderBg?: string;
  borderSize?: string;
}

export const InnovationBox: FC<IInnovationBox> = ({
  title,
  titleClassName,
  desc,
  descNode = '',
  descClassName,
  iconSrc,
  className,
  iconClassName,
  iconBorderBg,
  borderBg,
  borderSize = '4px',
}) => {
  return (
    <StyledBorderBox
      className={`flex flex-col p-5 md:p-[50px] bg-gradient-to-tr from-[#241741] to-[#8a3391] rounded-3xl md:rounded-[42px] backdrop-blur-[2px] md:backdrop-blur-[9px] gap-2 md:gap-4 grow ${className}`}
      $borderBg={borderBg}
      $borderSize={borderSize}
    >
      {iconSrc && (
        <StyledGradientBorderBox
          $borderBg={iconBorderBg}
          className={`w-[35px] md:w-[70px] aspect-square flex flex-col items-center p-[10px] md:p-[20px] rounded-full ${iconClassName}`}
        >
          <img src={iconSrc} />
        </StyledGradientBorderBox>
      )}
      {title && <TypoH3 className={titleClassName}>{title}</TypoH3>}
      {desc && <TypoP1 className={descClassName}>{desc}</TypoP1>}
      {descNode}
    </StyledBorderBox>
  );
};

export const FutureProof: FC = () => {
  return (
    <Stack className="items-center relative bg-black pt-24">
      <Stack className="w-full items-center gap-11 ">
        <Stack className="gap-8 items-center text-center">
          <TypoH2 className="max-w-[1150px]">
            Future-Proof Your Operations with Continuous Innovation
          </TypoH2>
          <TypoP1 className="text-text-secondary max-w-[1350px]">
            Stay ahead of the curve with Planton Cloud&apos;s commitment to continuous improvement.
            As your team and needs grow, we introduce new integrations and features to support your
            journey. Focused on scalability, security, and innovation, Planton Cloud ensures your
            operations are ready for the future.
          </TypoP1>
        </Stack>
        <Box className="w-full max-w-[1150px] grid grid-cols-3 gap-6 ">
          <InnovationBox
            title="Scalability"
            iconSrc="/images/solutions/by-size/growing-teams/scalability.svg"
          />
          <InnovationBox
            title="Security"
            iconSrc="/images/solutions/by-size/growing-teams/security.svg"
          />
          <InnovationBox
            title="Innovation"
            iconSrc="/images/solutions/by-size/growing-teams/innovation.svg"
          />
        </Box>
        <Stack className="w-full max-w-[1500px] px-16 pt-16 relative items-center rounded-t-[54px] border border-[#515151] backdrop-blur-[12px] bg-[#1e2228]/25 ">
          <img
            src="/images/solutions/by-size/growing-teams/stack-job-detail.svg"
            className="w-full ml-6"
          />
          <img
            src="/images/solutions/by-size/growing-teams/lamp.svg"
            className="absolute w-[250px] transform left-0 -translate-x-[calc(40%)] top-0 -translate-y-[calc(40%)] "
          />
          <img
            src="/images/solutions/by-size/growing-teams/folder.svg"
            className="absolute w-[250px] transform right-0 translate-x-[calc(40%)] top-1/2 -translate-y-1/2 "
          />
        </Stack>
      </Stack>
    </Stack>
  );
};
