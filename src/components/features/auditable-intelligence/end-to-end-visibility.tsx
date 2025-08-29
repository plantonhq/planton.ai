import { FC, ImgHTMLAttributes } from 'react';
import { Box, Stack } from '@mui/material';
import { TypoH2, TypoP1 } from '@/components/common';
import { InnovationBox } from '@/components/solutions';

const TorusImg: FC<ImgHTMLAttributes<HTMLImageElement>> = ({ className, ...props }) => (
  <img
    src="/images/features/auditable-intelligence/torus-2.svg"
    className={`absolute top-0 left-0 transform -translate-x-[60%] -translate-y-[50%] ${className}`}
    {...props}
  />
);

const SquiglyImg: FC<ImgHTMLAttributes<HTMLImageElement>> = ({ className, ...props }) => (
  <img
    src="/images/features/auditable-intelligence/squigly.svg"
    className={`hidden md:block absolute bottom-1/3 right-1/2 transform translate-x-[260%] translate-y-[30%] ${className}`}
    {...props}
  />
);

const SquiglyImgSmall: FC<ImgHTMLAttributes<HTMLImageElement>> = ({ className, ...props }) => (
  <img
    src="/images/features/auditable-intelligence/squigly-small.svg"
    className={`md:hidden absolute bottom-0 right-0 transform -translate-y-[30%] ${className}`}
    {...props}
  />
);

export const EndToEndVisibility: FC = () => {
  return (
    <Stack className="w-full relative overflow-hidden items-center p-5 md:py-16 bg-black">
      <TorusImg className="md:hidden w-[500px] aspect-square blur-[200px] z-0" />
      <TorusImg className="md:hidden w-[500px] aspect-square blur-[200px] bottom-0 transform !translate-y-[90%] z-0" />
      <SquiglyImg />
      <SquiglyImgSmall />
      <Stack className="max-w-[500px] md:max-w-[1300px] items-center gap-5 md:gap-8 z-10">
        <TypoH2 className="text-center max-w-[400px] md:max-w-[1050px]">
          End-to-End Visibility Into Deployment
        </TypoH2>
        <TypoP1
          component="span"
          className="-mt-2 md:mt-0 max-w-[300px] md:max-w-none text-center text-text-secondary"
        >
          Each commit is directly linked to an Infrastructure as Code (IaC) workflow. Once a change
          is made:
        </TypoP1>
        <Box className="hidden md:block relative mt-6">
          <img src="/images/features/auditable-intelligence/bg-7.svg" />
          <img
            src="/images/features/auditable-intelligence/bg-8.svg"
            className="absolute top-[70PX] left-[252px]"
          />
        </Box>
        <img
          src="/images/features/auditable-intelligence/bg-7-small.svg"
          className="w-full md:hidden"
        />
        <Box className="w-full grid grid-cols-12 gap-3 md:gap-11 md:mt-6">
          <InnovationBox
            title="Trigger"
            desc="An automated job runs to apply the new state to your cloud environment."
            descClassName="text-text-secondary"
            className="col-span-6 md:col-span-4 !bg-[url('/')] bg-[#1E2228BD]"
          />
          <InnovationBox
            title="Status Check"
            desc="The commit in Version History shows if the IaC job succeeded or failed"
            descClassName="text-text-secondary"
            className="col-span-6 md:col-span-4 !bg-[url('/')] bg-[#1E2228BD]"
          />
          <InnovationBox
            title="Drill-Down"
            desc="Click the status icon for deeper logs and details on the deployment process."
            descClassName="text-text-secondary"
            className="col-span-12 md:col-span-4 !bg-[url('/')] bg-[#1E2228BD]"
          />
        </Box>
      </Stack>
    </Stack>
  );
};
