import { FC } from 'react';
import { Box, Stack } from '@mui/material';
import { TypoH3, TypoP1 } from '@/components/common';

// common section used in chat ops, internal developer platform pages
interface IAuditableIntelligence {
  showPurpleShadow?: boolean;
}

export const AuditableIntelligence: FC<IAuditableIntelligence> = ({ showPurpleShadow = false }) => {
  return (
    <Stack className="items-center pt-8 bg-[linear-gradient(121.04deg,_#000000_54.74%,_#8A3391_244.29%)]">
      <Stack className="w-[2200px] items-start relative">
        <Box className="w-full relative max-w-[1450px]">
          <img src="/images/features/kubernetes-dashboard/pulumi-module-registry.svg" className="w-full" />
          <Stack className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-[35%] p-8 max-w-[800px] rounded-xl items-center gap-4 bg-[linear-gradient(283.58deg,_#8A3391_-80.47%,_#000000_65.5%)]">
            <TypoH3>Enhanced Security with Auditable Intelligence</TypoH3>
            <TypoP1 className="text-text-secondary">
              Security and compliance are paramount. Planton Cloud ensures that every action taken
              through Plantora is logged and auditable. Maintain stringent security standards with
              complete visibility into all operations, meeting enterprise-level compliance
              requirements.
            </TypoP1>
          </Stack>
          <img
            src="/images/features/kubernetes-dashboard/shield.svg"
            className="absolute top-0 right-0 transform translate-x-1/2"
          />
          <img
            src="/images/features/kubernetes-dashboard/shield-2.svg"
            className="absolute bottom-0 right-0 transform translate-x-[60%] blur-[3px]"
          />
          <img
            src="/images/features/kubernetes-dashboard/shield.svg"
            className="absolute w-[222px] bottom-0 left-0 transform -translate-y-1/2 blur-[10px]"
          />
          {showPurpleShadow ? (
            <img
              src="/images/solutions/by-size/chat-ops/burger.svg"
              className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-[10%] blur-[300px] z-0"
            />
          ) : (
            <Box className="w-[800px] aspect-[0.96] absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-[50%] bg-[#666666] rounded-full blur-[101px] opacity-30 z-0" />
          )}
        </Box>
      </Stack>
    </Stack>
  );
};
