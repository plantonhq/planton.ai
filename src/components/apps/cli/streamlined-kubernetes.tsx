import { FC } from 'react';
import { Box, Stack } from '@mui/material';
import { TypoH2, TypoP1 } from '@/components/common';
import { InnovationBox } from '../../solutions';

export const StreamlinedKubernetes: FC = () => {
  return (
    <Stack className="relative items-center pb-36 bg-black">
      <Stack className="max-w-[1350px] items-center gap-10 z-20">
        <Box className="w-full grid grid-cols-3 gap-6 ">
          <InnovationBox
            title="Comprehensive Commands"
            desc="Access all features directly from the CLI."
            className="bg-[url('/')] bg-[#2B2B2B3D]"
            borderBg="linear-gradient(180deg, #8A3391 0%, #03A587 100%)"
            borderSize="3px"
          />
          <InnovationBox
            title="Familiar Syntax"
            desc="Utilize kubectl-inspired commands for easy adoption."
            className="bg-[url('/')] bg-[#2B2B2B3D]"
            borderBg="linear-gradient(180deg, #8A3391 0%, #03A587 100%)"
            borderSize="3px"
          />
          <InnovationBox
            title="Flexible Interaction"
            desc="Choose between command inputs or conversational requests."
            className="bg-[url('/')] bg-[#2B2B2B3D]"
            borderBg="linear-gradient(180deg, #8A3391 0%, #03A587 100%)"
            borderSize="3px"
          />
        </Box>
        <Box className="h-[500px] overflow-hidden">
          <img src="/images/apps-cli/bg-5.svg" />
        </Box>
        <TypoH2 className="text-center">Streamlined Kubernetes Ops Without the Hassle</TypoH2>
        <TypoP1 className="text-center text-text-secondary">
          Perform Kubernetes operations effortlessly using planton kubectl. Retrieve pod logs,
          execute commands inside pods, or manage resources—all without setting
          up kubeconfig. planton ensures secure, authorized access, simplifying Kubernetes
          management.
        </TypoP1>
        <img src="/images/apps-cli/bg-5.svg" />
        <Box className="w-full grid grid-cols-3 gap-4">
          <InnovationBox
            title="No Setup Required"
            desc="Eliminate kubeconfig configuration."
            className="bg-[url('/')] bg-[#2B2B2B3D]"
            borderBg="linear-gradient(180deg, #8A3391 0%, #03A587 100%)"
            borderSize="3px"
          />
          <InnovationBox
            title="Secure Access"
            desc="Permissions enforced via Planton Cloud's IAM."
            className="bg-[url('/')] bg-[#2B2B2B3D]"
            borderBg="linear-gradient(180deg, #8A3391 0%, #03A587 100%)"
            borderSize="3px"
          />
          <InnovationBox
            title="Dual Interaction Modes"
            desc="Use commands or ask Planton directly."
            className="bg-[url('/')] bg-[#2B2B2B3D]"
            borderBg="linear-gradient(180deg, #8A3391 0%, #03A587 100%)"
            borderSize="3px"
          />
        </Box>
      </Stack>
      <video
        src="/videos/gradial-round.mp4"
        className="absolute -bottom-60 z-0 min-w-[2400px] blur-sm opacity-50"
        autoPlay
        muted
        loop
      />
    </Stack>
  );
};
