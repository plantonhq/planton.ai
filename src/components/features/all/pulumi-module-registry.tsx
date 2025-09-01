import { FC, ImgHTMLAttributes } from 'react';
import { Box, Stack } from '@mui/material';
import { TypoH2, TypoH3, TypoP1 } from '@/components/common';

const BurgerImg: FC<ImgHTMLAttributes<HTMLImageElement>> = ({ className, ...props }) => (
  <img
    src="/images/features/burger.svg"
    className={`absolute w-[1000px] top-0 left-1/2 transform -translate-x-[110%] -translate-y-[36%] ${className}`}
    {...props}
  />
);

export const PulumiModuleRegistry: FC = () => {
  return (
    <Box>
      <Box className="relative w-full z-10">
        <BurgerImg className="z-0" />
      </Box>
      <Stack className="relative overflow-hidden items-center py-52 bg-black ">
        <Box className="relative w-full">
          <Box className="w-[1700px] aspect-[0.97] absolute top-0 right-1/2 transform translate-x-[90%] -translate-y-[5%] -z-0 rounded-full opacity-50 blur-[3px] bg-[linear-gradient(-45deg,_#8A3391_41.28%,_#060512_106.4%)]" />
        </Box>
        <Stack className="w-full px-28 py-12 max-w-[1530px] gap-16 rounded-[42px]  backdrop-blur-3xl bg-[linear-gradient(38deg,_#241741_-6%,_#8A3391_125.86%)] z-10">
          <TypoH2 className="text-center z-10">Pulumi Module Registry</TypoH2>
          <Stack className="flex-row gap-14">
            <Stack className="gap-5 max-w-[530px]">
              <TypoH3>Centralized Pulumi Module Management</TypoH3>
              <TypoP1 className="text-text-secondary">
                The Pulumi Module Registry provides a unified platform for storing and accessing
                Pulumi modules, enabling seamless integration during deployments. This
                centralization simplifies the discovery of modules, reduces duplication, and
                accelerates deployment processes by having all infrastructure code in one accessible
                location.
              </TypoP1>
              <TypoP1 className="text-[#0099FF]">Learn More</TypoP1>
            </Stack>
            <Stack className="gap-5">
              <TypoH3>Reusable Infrastructure Code for Consistency and Efficiency</TypoH3>
              <TypoP1 className="text-text-secondary">
                The Pulumi Module Registry provides a unified platform for storing and accessing
                Pulumi modules, enabling seamless integration during deployments. This
                centralization simplifies the discovery of modules, reduces duplication, and
                accelerates deployment processes by having all infrastructure code in one accessible
                location.
              </TypoP1>
              <TypoP1 className="text-[#0099FF]">Learn More</TypoP1>
            </Stack>
          </Stack>
        </Stack>
        <BurgerImg className="blur-[200px] w-[600px] !top-auto !bottom-0 !translate-y-[60%] !-translate-x-[180%] z-10" />
      </Stack>
    </Box>
  );
};
