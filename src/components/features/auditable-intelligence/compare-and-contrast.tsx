'use client';
import { FC, ImgHTMLAttributes } from 'react';
import { Box, Stack } from '@mui/material';
import { IInnovationBox, InnovationBox } from '@/components/solutions';
import { Slider, TypoH2, TypoP1 } from '@/components/common';

const TorusImg: FC<ImgHTMLAttributes<HTMLImageElement>> = ({ className, ...props }) => (
  <img
    src="/images/features/auditable-intelligence/torus-2.svg"
    className={`absolute bottom-1/3 right-1/2 transform translate-x-[185%] translate-y-[60%] ${className}`}
    {...props}
  />
);

const TriangeImg: FC<ImgHTMLAttributes<HTMLImageElement>> = ({ className, ...props }) => (
  <img
    src="/images/features/auditable-intelligence/triagle.png"
    className={`absolute top-0 right-0 transform translate-x-[25%] translate-y-[120%] ${className}`}
    {...props}
  />
);

const configurationChanges: IInnovationBox[] = [
  {
    title: 'Color-Coded Highlights',
    titleClassName: 'md:!text-5xl md:!font-medium md:!leading-[68px]',
    desc: 'Easily spot modifications (e.g., memory changed from 50Mi to 100Mi).',
    descClassName:
      'md:!text-2xl md:!font-normal md:!leading-[38px] text-text-secondary md:text-white',
    iconSrc: '/images/features/auditable-intelligence/grid-icon-1.svg',
    className:
      '!bg-[linear-gradient(38deg,_rgba(36,_23,_65,_0.6)_-6%,_rgba(138,_51,_145,_0.6)_125.86%)]',
  },
  {
    title: 'Previous vs. Current State',
    titleClassName: 'md:!text-5xl md:!font-medium md:!leading-[68px]',
    desc: 'Review the configuration before and after the change',
    descClassName:
      'md:!text-2xl md:!font-normal md:!leading-[38px] text-text-secondary md:text-white',
    iconSrc: '/images/features/auditable-intelligence/difference.png',
    iconBorderBg: 'linear-gradient(226.92deg, #4442D9 -10.13%, #03A587 111.37%)',
    className:
      '!bg-[linear-gradient(38deg,_rgba(36,_23,_65,_0.6)_-6%,_rgba(138,_51,_145,_0.6)_125.86%)]',
  },
  {
    title: 'Saves Time & Reduces Errors',
    titleClassName: 'md:!text-5xl md:!font-medium md:!leading-[68px]',
    desc: 'Quickly validate that every adjustment is correct.',
    descClassName:
      'md:!text-2xl md:!font-normal md:!leading-[38px] text-text-secondary md:text-white',
    iconSrc: '/images/features/auditable-intelligence/grid-icon-3.svg',
    className:
      'col-span-2 !bg-[linear-gradient(38deg,_rgba(36,_23,_65,_0.6)_-6%,_rgba(138,_51,_145,_0.6)_125.86%)]',
  },
];

export const CompareAndContrast: FC = () => {
  return (
    <Stack className="w-full relative overflow-hidden items-center p-5 md:pt-36 md:pb-72 bg-black">
      <TorusImg className="hidden md:block blur-[200px] z-0" />
      <TorusImg className="hidden md:block z-10" />
      <TorusImg className="md:hidden w-[500px] aspect-square !-translate-x-[15%] !bottom-0 !translate-y-[40%] blur-[200px] z-0" />
      <TriangeImg className="md:hidden blur-[200px] z-0" />

      <Stack className="max-w-[500px] md:max-w-[1300px] items-center gap-5 md:gap-8">
        <TypoH2 className="text-center md:max-w-[1050px]">
          Compare & Contrast Configuration Changes
        </TypoH2>
        <TypoP1
          component="span"
          className="-mt-2 md:mt-0 max-w-[320px] md:max-w-[1050px] text-center text-text-secondary"
        >
          Customize your deployment workflows to match your organization&apos;s needs. With
          advanced 
          <TypoP1 color="text.primary" component="span">
            Flow Controls
          </TypoP1>
        </TypoP1>
        <Box className="md:hidden max-w-full">
          <Slider
            items={configurationChanges.map((item, index) => (
              <InnovationBox key={index} {...item} />
            ))}
          />
        </Box>
        <Box className="hidden md:grid w-full grid-cols-2 gap-6 -mt-5">
          {configurationChanges.map((item, index) => (
            <InnovationBox key={index} {...item} />
          ))}
        </Box>
        <img
          src="/images/features/auditable-intelligence/bg-3-small.svg"
          className="w-full md:hidden"
        />
        <img
          src="/images/features/auditable-intelligence/bg-3.svg"
          className="hidden md:block mt-8"
        />
        <Box className="hidden md:block relative -mt-4">
          <img src="/images/features/auditable-intelligence/bg-4.svg" />
          <img
            src="/images/features/auditable-intelligence/bg-5.svg"
            className="absolute top-52 right-1/2 transform translate-x-[325px]"
          />
          <img
            src="/images/features/auditable-intelligence/bg-10.svg"
            className="absolute top-[190px] right-1/2 transform translate-x-[344px]"
          />
        </Box>
        <img
          src="/images/features/auditable-intelligence/bg-6.svg"
          className="hidden md:block mt-36"
        />
      </Stack>
    </Stack>
  );
};
