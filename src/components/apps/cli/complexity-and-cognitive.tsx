import { FC, ImgHTMLAttributes } from 'react';
import { Box, Stack } from '@mui/material';
import { TypoH2, TypoP1 } from '@/components/common';
import { InnovationBox } from '../../solutions';

const BgImg: FC<ImgHTMLAttributes<HTMLImageElement>> = ({ className, ...props }) => (
  <img
    src="/images/apps-cli/bg-4.svg"
    className={`absolute bottom-0 left-1/2 transform -translate-x-1/2  ${className}`}
    {...props}
  />
);

export const ComplexityAndCognitive: FC = () => {
  return (
    <Stack className="relative items-center pt-36 pb-32 bg-black">
      <Stack className="max-w-[1330px] items-center gap-8 z-10">
        <TypoH2 className="text-center">
          The Challenge: Complexity and Cognitive Overload in DevOps
        </TypoH2>
        <TypoP1 className="text-center text-text-secondary">
          Developers face the dual challenge of mastering intricate command-line tools and
          navigating complex web interfaces. Switching contexts, memorizing commands, and sifting
          through documentation consumes valuable time and mental energy. The lack of intuitive,
          conversational interfaces in traditional tools leads to frustration and hampers
          productivity.
        </TypoP1>
        <Box className="w-full grid grid-cols-12 gap-6 ">
          <InnovationBox
            title="Steep Learning Curve"
            desc="Difficulty in mastering complex commands and syntax."
            iconSrc="/images/apps-cli/grid-icon-1.svg"
            className="col-span-6 !bg-[linear-gradient(38deg,_rgba(36,_23,_65,_0.24)_-6%,_rgba(138,_51,_145,_0.24)_125.86%)]"
          />
          <InnovationBox
            title="Inefficient Workflows"
            desc="Time wasted on context switching and manual operations."
            iconSrc="/images/apps-cli/grid-icon-2.svg"
            className="col-span-6 !bg-[linear-gradient(38deg,_rgba(36,_23,_65,_0.24)_-6%,_rgba(138,_51,_145,_0.24)_125.86%)]"
            iconBorderBg="linear-gradient(227deg, #4442D9 -10.13%, #03A587 111.37%)"
          />
          <InnovationBox
            title="Information Overload"
            desc="Overwhelming documentation and disparate tools."
            iconSrc="/images/apps-cli/grid-icon-3.svg"
            className="col-span-12 !bg-[linear-gradient(38deg,_rgba(36,_23,_65,_0.24)_-6%,_rgba(138,_51,_145,_0.24)_125.86%)]"
            iconBorderBg="linear-gradient(226.92deg, #70CA89 -10.13%, #F61EE1 111.37%)"
          />
        </Box>
      </Stack>
      <BgImg />
    </Stack>
  );
};
