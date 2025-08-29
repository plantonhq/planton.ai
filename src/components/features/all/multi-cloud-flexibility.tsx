import { FC, ImgHTMLAttributes } from 'react';
import Link from 'next/link';
import { Box, Stack } from '@mui/material';
import { TypoH3, TypoP1 } from '@/components/common';

const DonutImg: FC<ImgHTMLAttributes<HTMLImageElement>> = ({ className, ...props }) => (
  <img
    src="/images/features/donut.svg"
    className={`w-[680px] absolute right-1/2 bottom-0 transform translate-x-[130%] ${className}`}
    {...props}
  />
);

export const MultiCloudFlexibility: FC = () => {
  return (
    <Stack className="relative overflow-hidden items-center py-28 bg-[#020202]">
      <Stack className="relative w-[1800px]">
        <Stack className="flex-row max-w-[1600px] items-center gap-12 self-end z-10">
          <Stack className="gap-4">
            <TypoH3>Multi-Cloud Flexibility with Customizable Provisioning</TypoH3>
            <TypoP1 className="text-text-secondary">
              Adopting a multi-cloud strategy is often hindered by the lack of in-house expertise
              across different cloud providers. Planton Cloud empowers organizations by leveraging
              default Pulumi modules that abstract the complexities of various cloud services.
              Additionally, a Pulumi registry allows DevOps engineers to customize provisioning
              logic, tailoring deployments to complex environments and specific organizational
              needs.
            </TypoP1>
            <Link href="" className="text-xl font-medium text-[#0099FF]">
              Learn More
            </Link>
          </Stack>
          <img src="/images/features/dashboard.svg" className="mt-24 self-end z-10" />
        </Stack>
      </Stack>
      <DonutImg className="translate-x-[110%] blur-[200px] z-0" />
      <DonutImg className="z-10" />
      <Box className="w-[1700px] aspect-[0.97] absolute top-1/2 left-1/2 transform -translate-x-[90%] -translate-y-[80%] -z-0 rounded-full opacity-50 blur-[3px] bg-[linear-gradient(90deg,_#FE7AB5_-32.21%,_#000000_101.8%)]" />
    </Stack>
  );
};
