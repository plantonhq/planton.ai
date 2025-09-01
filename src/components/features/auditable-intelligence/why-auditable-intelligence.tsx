import { FC, ImgHTMLAttributes } from 'react';
import { Box, Stack } from '@mui/material';
import { TypoH2, TypoP1 } from '@/components/common';
import { InnovationBox } from '@/components/solutions';

const TorusImg: FC<ImgHTMLAttributes<HTMLImageElement>> = ({ className, ...props }) => (
  <img
    src="/images/features/auditable-intelligence/torus.svg"
    className={`absolute top-1/2 right-1/2 transform -translate-x-1/2 -translate-y-[70%] ${className}`}
    {...props}
  />
);

const TorusImgSmall: FC<ImgHTMLAttributes<HTMLImageElement>> = ({ className, ...props }) => (
  <img
    src="/images/features/auditable-intelligence/torus-small.svg"
    className={`absolute top-0 left-0 transform translate-y-[35%] ${className}`}
    {...props}
  />
);

export const WhyAuditableIntelligence: FC = () => {
  return (
    <Stack className="relative items-center">
      <TorusImgSmall className="md:hidden blur-[150px] !translate-y-[80%] z-10" />
      <TorusImgSmall className="md:hidden z-0" />
      <TorusImg className="hidden md:block blur-[200px] z-0" />
      <TorusImg className="hidden md:block z-10" />
      <Stack className="w-full items-center p-5 md:py-24 bg-[linear-gradient(180deg,_#1CAB98_-82.69%,_#000000_15.48%)]">
        <Stack className="max-w-[500px] md:max-w-[1300px] items-center gap-3 md:gap-8 z-20">
          <TypoH2 className="text-center">Why Auditable Intelligence Matters</TypoH2>
          <TypoP1 className="text-center text-text-secondary">
            Introducing Planton Cloud&apos;s Auditable Intelligence—a feature that provides full
            visibility and traceability of your deployment configurations and infrastructure
            changes.
          </TypoP1>
          <Box className="w-full grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-x-14 md:gap-y-11 mt-2 md:mt-12">
            <InnovationBox
              title="Streamlined Collaboration"
              desc="Multiple developers can create, update, or delete cloud resources with full transparency."
              descClassName="text-text-secondary"
              className="!bg-[url('/')] bg-[#1E2228BD]"
            />
            <InnovationBox
              title="Clear Accountability"
              desc="Every action is tied to a specific user and a commit message, ensuring complete clarity on why changes were made."
              descClassName="text-text-secondary"
              className="!bg-[url('/')] bg-[#1E2228BD]"
            />
            <InnovationBox
              title="Seamless IaC Integration"
              desc="Each resource modification syncs with your IaC workflows, confirming all changes reached the cloud platform."
              descClassName="text-text-secondary"
              className="!bg-[url('/')] bg-[#1E2228BD]"
            />
            <InnovationBox
              title="Version History & Diff Views"
              desc="Instantly track every iteration to see exactly what changed—no more guesswork."
              descClassName="text-text-secondary"
              className="!bg-[url('/')] bg-[#1E2228BD]"
            />
          </Box>
        </Stack>
      </Stack>
      <Stack className="w-full items-center p-5 md:pt-24 bg-black">
        <Stack className="max-w-[500px] md:max-w-[1300px] items-center gap-3 md:gap-8 z-20">
          <TypoH2 className="text-center max-w-[300px] md:max-w-[900px]">
            See Every Change in One Place
          </TypoH2>
          <TypoP1 className="text-center text-text-secondary max-w-[350px] md:max-w-none">
            Access all modifications on any resource through our Version History panel. Each version
            is tagged with:
          </TypoP1>
          <Box className="w-full grid grid-cols-12 gap-3 md:gap-x-14 md:gap-y-11 mt-2 md:mt-12">
            <InnovationBox
              title="Commit Message"
              desc="Developers must provide context for each change—no more hunting for reasons."
              descClassName="text-text-secondary"
              className="col-span-6 !bg-[url('/')] bg-[#1E2228BD]"
            />
            <InnovationBox
              title="User Info"
              desc="Know exactly who made the update (profile picture and name)"
              descClassName="text-text-secondary"
              className="col-span-6 !bg-[url('/')] bg-[#1E2228BD]"
            />
            <InnovationBox
              title="Timestamp"
              desc="See when the change was made, at a glance."
              descClassName="text-text-secondary"
              className="col-span-12 md:col-span-6 !bg-[url('/')] bg-[#1E2228BD]"
            />
            <InnovationBox
              title="Unique Version ID"
              desc="Jump into a fully detailed YAML view of the resource state as of that specific change"
              descClassName="text-text-secondary"
              className="col-span-12 md:col-span-6 !bg-[url('/')] bg-[#1E2228BD]"
            />
          </Box>
          <img src="/images/features/auditable-intelligence/bg-2.svg" className="mt-2 md:mt-12" />
        </Stack>
      </Stack>
    </Stack>
  );
};
