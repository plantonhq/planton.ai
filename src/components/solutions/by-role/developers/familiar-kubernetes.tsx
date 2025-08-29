import { FC } from 'react';
import { Stack } from '@mui/material';
import { TypoH2, TypoP1 } from '@/components';

export const FamiliarKubernetes: FC = () => {
  return (
    <Stack className="items-center relative bg-black">
      <img src="/images/solutions/developers/bg-4.svg" />
      <Stack className="w-full max-w-[1550px] -mt-40 px-12 pt-16 relative items-center rounded-t-[60px] border border-b-0 border-[#3c3c3c] backdrop-blur-[12px] bg-[#151617] z-10">
        <img src="/images/solutions/developers/ssl-certificate.svg" className="w-full" />
      </Stack>
      <Stack className="w-full max-w-[1530px] absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-[90%] items-center text-center gap-12 ">
        <TypoH2 className="max-w-[950px]">Familiar Kubernetes-Like APIs and YAMLs</TypoH2>
        <TypoP1 className="text-text-secondary max-w-[1430px]">
          Leverage your existing knowledge with Planton Cloud&apos;s Kubernetes-inspired APIs and
          YAML configurations. Our platform&apos;s resource models feel instantly familiar, allowing
          you to integrate seamlessly with your current workflows and tools without a steep learning
          curve.
        </TypoP1>
      </Stack>
    </Stack>
  );
};
